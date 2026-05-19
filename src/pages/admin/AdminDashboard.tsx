import { useEffect, useRef, useState } from "react";
import { Pencil, Plus, Search, Trash2, X } from "lucide-react";
import { Link } from "react-router-dom";
import routes from "../../routes";

const API = "/api/v1";

// ── Types ────────────────────────────────────────────────────────────────────

interface Vehicle {
  id: string;
  class: string;
  name: string;
  seats: number;
  amenities: string[];
}

interface Booking {
  id: string;
  userId: string;
  vehicleId: string;
  pickup: string;
  dropoff: string;
  notes?: string;
  startAt: string;
  endAt: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function fmt(iso: string) {
  return new Date(iso).toLocaleString("en-NG", {
    day: "2-digit", month: "short", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
}

const STATUS_CLASS: Record<string, string> = {
  REQUESTED: "bg-amber-100 text-amber-900",
  CONFIRMED: "bg-blue-100 text-blue-900",
  IN_PROGRESS: "bg-indigo-100 text-indigo-900",
  COMPLETED: "bg-emerald-100 text-emerald-900",
  CANCELLED: "bg-red-100 text-red-900",
};

// ── Fleet form modal ─────────────────────────────────────────────────────────

const BLANK: Omit<Vehicle, "id"> = { class: "PREMIUM", name: "", seats: 5, amenities: [] };

function FleetModal({
  initial,
  onSave,
  onClose,
}: {
  initial: Vehicle | null;
  onSave: (v: Vehicle) => void;
  onClose: () => void;
}) {
  const [form, setForm] = useState<Omit<Vehicle, "id">>(
    initial ? { class: initial.class, name: initial.name, seats: initial.seats, amenities: initial.amenities } : BLANK,
  );
  const [amenityInput, setAmenityInput] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const url = initial ? `${API}/vehicles/${initial.id}` : `${API}/vehicles`;
      const res = await fetch(url, {
        method: initial ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(await res.text());
      onSave(await res.json());
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Request failed");
    } finally {
      setSaving(false);
    }
  }

  function addAmenity() {
    const trimmed = amenityInput.trim();
    if (trimmed && !form.amenities.includes(trimmed)) {
      setForm((f) => ({ ...f, amenities: [...f.amenities, trimmed] }));
    }
    setAmenityInput("");
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-md rounded-2xl border border-concierge-gold/30 bg-[#10131a] p-6 shadow-luxe">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-concierge-ivory">
            {initial ? "Edit vehicle" : "Add vehicle"}
          </h3>
          <button onClick={onClose} className="text-concierge-slate hover:text-concierge-ivory"><X size={18} /></button>
        </div>
        <form onSubmit={submit} className="flex flex-col gap-4">
          <Field label="Name">
            <input
              required
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="input-base"
              placeholder="e.g. Toyota Prado TX"
            />
          </Field>
          <Field label="Class">
            <select
              value={form.class}
              onChange={(e) => setForm((f) => ({ ...f, class: e.target.value }))}
              className="input-base"
            >
              {["PREMIUM", "EXECUTIVE", "ULTRA_LUXE", "MARINE", "AVIATION", "HELICOPTER"].map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </Field>
          <Field label="Seats">
            <input
              type="number" min={1} max={50}
              value={form.seats}
              onChange={(e) => setForm((f) => ({ ...f, seats: Number(e.target.value) }))}
              className="input-base"
            />
          </Field>
          <Field label="Amenities">
            <div className="flex gap-2">
              <input
                value={amenityInput}
                onChange={(e) => setAmenityInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addAmenity(); } }}
                className="input-base flex-1"
                placeholder="e.g. WiFi"
              />
              <button type="button" onClick={addAmenity} className="rounded-md bg-concierge-gold px-3 text-sm font-semibold text-concierge-black">Add</button>
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {form.amenities.map((a) => (
                <span key={a} className="flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-concierge-ivory">
                  {a}
                  <button type="button" onClick={() => setForm((f) => ({ ...f, amenities: f.amenities.filter((x) => x !== a) }))}>
                    <X size={11} />
                  </button>
                </span>
              ))}
            </div>
          </Field>
          {error && <p className="text-sm text-red-400">{error}</p>}
          <button
            type="submit"
            disabled={saving}
            className="mt-1 rounded-md bg-concierge-gold py-2 text-sm font-semibold text-concierge-black hover:bg-[#c19347] disabled:opacity-60"
          >
            {saving ? "Saving…" : initial ? "Save changes" : "Add vehicle"}
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium uppercase tracking-wide text-concierge-slate">{label}</span>
      {children}
    </label>
  );
}

// ── Main Dashboard ────────────────────────────────────────────────────────────

const AdminDashboard = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [bookingSearch, setBookingSearch] = useState("");
  const [vehicleSearch, setVehicleSearch] = useState("");
  const [loadingBookings, setLoadingBookings] = useState(true);
  const [loadingVehicles, setLoadingVehicles] = useState(true);
  const [fleetModal, setFleetModal] = useState<{ open: boolean; vehicle: Vehicle | null }>({ open: false, vehicle: null });
  const [tab, setTab] = useState<"bookings" | "fleet">("bookings");
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  async function fetchBookings() {
    try {
      const res = await fetch(`${API}/bookings`);
      if (!res.ok) return;
      const data: Booking[] = await res.json();
      setBookings(data);
    } finally {
      setLoadingBookings(false);
    }
  }

  async function fetchVehicles() {
    try {
      const res = await fetch(`${API}/vehicles`);
      if (!res.ok) return;
      const data: Vehicle[] = await res.json();
      setVehicles(data);
    } finally {
      setLoadingVehicles(false);
    }
  }

  useEffect(() => {
    fetchBookings();
    fetchVehicles();
    pollRef.current = setInterval(fetchBookings, 15_000);
    return () => { if (pollRef.current) clearInterval(pollRef.current); };
  }, []);

  async function deleteVehicle(id: string) {
    if (!confirm("Remove this vehicle from the fleet?")) return;
    const res = await fetch(`${API}/vehicles/${id}`, { method: "DELETE" });
    if (res.ok) setVehicles((v) => v.filter((x) => x.id !== id));
  }

  function onVehicleSaved(v: Vehicle) {
    setVehicles((prev) => {
      const idx = prev.findIndex((x) => x.id === v.id);
      return idx >= 0 ? prev.map((x) => (x.id === v.id ? v : x)) : [...prev, v];
    });
    setFleetModal({ open: false, vehicle: null });
  }

  const filteredBookings = bookings.filter((b) => {
    const q = bookingSearch.toLowerCase();
    return !q || b.id.includes(q) || b.userId.toLowerCase().includes(q) || b.pickup.toLowerCase().includes(q) || b.dropoff.toLowerCase().includes(q) || b.status.toLowerCase().includes(q);
  });

  const filteredVehicles = vehicles.filter((v) => {
    const q = vehicleSearch.toLowerCase();
    return !q || v.name.toLowerCase().includes(q) || v.class.toLowerCase().includes(q);
  });

  const pending = bookings.filter((b) => b.status === "REQUESTED").length;
  const active = bookings.filter((b) => b.status === "IN_PROGRESS").length;
  const today = bookings.filter((b) => new Date(b.createdAt).toDateString() === new Date().toDateString()).length;

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_10%_10%,rgba(219,170,90,0.16),transparent_32%),#0C0E12] py-8 md:py-10">
      {fleetModal.open && (
        <FleetModal
          initial={fleetModal.vehicle}
          onSave={onVehicleSaved}
          onClose={() => setFleetModal({ open: false, vehicle: null })}
        />
      )}
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 xl:px-12">
        {/* Header */}
        <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-1 font-semibold text-concierge-gold">Thrip Concierge Command</p>
            <h1 className="text-3xl font-bold text-concierge-ivory md:text-4xl">Booking, transfer verification, and chauffeur dispatch</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link to={routes.landing} className="rounded-md border border-concierge-gold/30 px-4 py-2 text-sm text-concierge-slate hover:bg-white/5">Landing</Link>
            <Link to={routes.home} className="rounded-md bg-concierge-gold px-4 py-2 text-sm font-semibold text-concierge-black hover:bg-[#c19347]">Open Website</Link>
          </div>
        </section>

        {/* Stats */}
        <section className="grid gap-5 md:grid-cols-3">
          <StatCard label="Today Bookings" value={String(today)} helper="Live from database" />
          <StatCard label="Pending Payment Proof" value={String(pending)} helper="Awaiting transfer validation" />
          <StatCard label="Active Chauffeur Engagements" value={String(active)} helper="Live premium trips" />
        </section>

        {/* Tabs */}
        <div className="flex gap-1 rounded-xl border border-white/10 bg-white/5 p-1 w-fit">
          {(["bookings", "fleet"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-lg px-5 py-1.5 text-sm font-semibold capitalize transition-colors ${tab === t ? "bg-concierge-gold text-concierge-black" : "text-concierge-slate hover:text-concierge-ivory"}`}
            >
              {t === "bookings" ? "Bookings" : "Fleet"}
            </button>
          ))}
        </div>

        {/* Bookings panel */}
        {tab === "bookings" && (
          <section className="rounded-2xl border border-concierge-gold/25 bg-[rgba(16,19,26,0.92)] p-5 shadow-luxe md:p-7">
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <h2 className="text-xl font-semibold text-concierge-ivory">All bookings</h2>
              <div className="flex w-full max-w-xs items-center gap-2 rounded-md border border-white/20 bg-concierge-charcoal px-3 py-2">
                <Search size={16} className="text-concierge-slate" />
                <input
                  value={bookingSearch}
                  onChange={(e) => setBookingSearch(e.target.value)}
                  placeholder="Search booking, rider, route"
                  className="w-full bg-transparent text-sm text-concierge-ivory outline-none placeholder:text-concierge-slate"
                />
              </div>
            </div>
            {loadingBookings ? (
              <p className="py-8 text-center text-sm text-concierge-slate">Loading…</p>
            ) : filteredBookings.length === 0 ? (
              <p className="py-8 text-center text-sm text-concierge-slate">{bookingSearch ? "No matching bookings." : "No bookings yet."}</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-concierge-slate">
                      <th className="px-2 py-3 font-medium">ID</th>
                      <th className="px-2 py-3 font-medium">User</th>
                      <th className="px-2 py-3 font-medium">Pickup</th>
                      <th className="px-2 py-3 font-medium">Dropoff</th>
                      <th className="px-2 py-3 font-medium">Start</th>
                      <th className="px-2 py-3 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBookings.map((b) => (
                      <tr key={b.id} className="border-b border-white/5">
                        <td className="px-2 py-3 font-mono text-xs text-concierge-slate">{b.id.slice(0, 8)}…</td>
                        <td className="px-2 py-3 text-[#D8DDE7]">{b.userId}</td>
                        <td className="px-2 py-3 text-[#D8DDE7]">{b.pickup}</td>
                        <td className="px-2 py-3 text-[#D8DDE7]">{b.dropoff}</td>
                        <td className="px-2 py-3 text-[#D8DDE7] whitespace-nowrap">{fmt(b.startAt)}</td>
                        <td className="px-2 py-3">
                          <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${STATUS_CLASS[b.status] ?? "bg-white/10 text-white"}`}>
                            {b.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}

        {/* Fleet panel */}
        {tab === "fleet" && (
          <section className="rounded-2xl border border-concierge-gold/25 bg-[rgba(16,19,26,0.92)] p-5 shadow-luxe md:p-7">
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <h2 className="text-xl font-semibold text-concierge-ivory">Fleet management</h2>
              <div className="flex items-center gap-3">
                <div className="flex w-full max-w-xs items-center gap-2 rounded-md border border-white/20 bg-concierge-charcoal px-3 py-2">
                  <Search size={16} className="text-concierge-slate" />
                  <input
                    value={vehicleSearch}
                    onChange={(e) => setVehicleSearch(e.target.value)}
                    placeholder="Search vehicles"
                    className="w-full bg-transparent text-sm text-concierge-ivory outline-none placeholder:text-concierge-slate"
                  />
                </div>
                <button
                  onClick={() => setFleetModal({ open: true, vehicle: null })}
                  className="flex items-center gap-1.5 rounded-md bg-concierge-gold px-4 py-2 text-sm font-semibold text-concierge-black hover:bg-[#c19347] whitespace-nowrap"
                >
                  <Plus size={15} /> Add vehicle
                </button>
              </div>
            </div>
            {loadingVehicles ? (
              <p className="py-8 text-center text-sm text-concierge-slate">Loading…</p>
            ) : filteredVehicles.length === 0 ? (
              <p className="py-8 text-center text-sm text-concierge-slate">No vehicles found.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-concierge-slate">
                      <th className="px-2 py-3 font-medium">Name</th>
                      <th className="px-2 py-3 font-medium">Class</th>
                      <th className="px-2 py-3 font-medium">Seats</th>
                      <th className="px-2 py-3 font-medium">Amenities</th>
                      <th className="px-2 py-3 font-medium"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredVehicles.map((v) => (
                      <tr key={v.id} className="border-b border-white/5">
                        <td className="px-2 py-3 font-semibold text-concierge-ivory">{v.name}</td>
                        <td className="px-2 py-3">
                          <span className="rounded-full bg-concierge-gold/15 px-2.5 py-0.5 text-xs font-semibold text-concierge-gold">{v.class}</span>
                        </td>
                        <td className="px-2 py-3 text-[#D8DDE7]">{v.seats}</td>
                        <td className="px-2 py-3 text-[#D8DDE7]">{v.amenities.join(", ")}</td>
                        <td className="px-2 py-3">
                          <div className="flex items-center gap-2">
                            <button onClick={() => setFleetModal({ open: true, vehicle: v })} className="rounded p-1 text-concierge-slate hover:text-concierge-gold">
                              <Pencil size={14} />
                            </button>
                            <button onClick={() => deleteVehicle(v.id)} className="rounded p-1 text-concierge-slate hover:text-red-400">
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
};

const StatCard = ({ label, value, helper }: { label: string; value: string; helper: string }) => (
  <article className="rounded-2xl border border-concierge-gold/25 bg-[rgba(16,19,26,0.92)] p-5">
    <p className="text-sm text-concierge-slate">{label}</p>
    <p className="mt-2 text-3xl font-bold text-concierge-ivory">{value}</p>
    <p className="mt-1 text-sm text-concierge-slate">{helper}</p>
  </article>
);

export default AdminDashboard;


type BookingStatus = "Pending Proof" | "Payment Received" | "Driver Engaged";

interface BookingRow {
  id: string;
  rider: string;
  route: string;
  amount: string;
  status: BookingStatus;
  eta: string;
}

export const rows: BookingRow[] = [
  {
    id: "BK-1032",
    rider: "Ada Obi",
    route: "Eko Hotel -> MMIA",
    amount: "N 120,000",
    status: "Pending Proof",
    eta: "--",
  },
  {
    id: "BK-1033",
    rider: "Tobi Akin",
    route: "Ikoyi -> VIP Terminal",
    amount: "N 150,000",
    status: "Payment Received",
    eta: "25 min",
  },
  {
    id: "BK-1034",
    rider: "Kemi Yusuf",
    route: "Lekki -> Ikoyi",
    amount: "N 135,000",
    status: "Driver Engaged",
    eta: "12 min",
  },
];

