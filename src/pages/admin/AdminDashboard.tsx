import { useEffect, useMemo, useRef, useState } from "react";
import { Pencil, Plus, Search, Trash2, X } from "lucide-react";
import { Link } from "react-router-dom";
import routes from "../../routes";

const API = "/api/v1";

interface Vehicle {
  id: string;
  class: string;
  name: string;
  seats: number;
  amenities: string[];
  basePriceNgn: number;
}

interface BookingAddOnLineItem {
  addOnId: string;
  name: string;
  priceNgn: number;
}

interface BookingPricing {
  basePriceNgn: number;
  discountAmountNgn: number;
  addOnsTotalNgn: number;
  totalPriceNgn: number;
  couponCode?: string;
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
  pricing: BookingPricing;
  addOns: BookingAddOnLineItem[];
  createdAt: string;
  updatedAt: string;
}

interface AddOn {
  id: string;
  name: string;
  priceNgn: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

interface Coupon {
  id: string;
  code: string;
  discountPercentage: number;
  expiresAt: string;
  maxUses?: number;
  currentUses: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

const STATUS_CLASS: Record<string, string> = {
  REQUESTED: "bg-amber-100 text-amber-900",
  CONFIRMED: "bg-blue-100 text-blue-900",
  IN_PROGRESS: "bg-indigo-100 text-indigo-900",
  COMPLETED: "bg-emerald-100 text-emerald-900",
  CANCELLED: "bg-red-100 text-red-900",
};

const BLANK_VEHICLE: Omit<Vehicle, "id"> = {
  class: "PREMIUM",
  name: "",
  seats: 5,
  amenities: [],
  basePriceNgn: 150000,
};

function fmt(iso: string) {
  return new Date(iso).toLocaleString("en-NG", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function currency(naira: number) {
  return `N ${new Intl.NumberFormat("en-NG").format(Math.max(0, naira))}`;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium uppercase tracking-wide text-concierge-slate">{label}</span>
      {children}
    </label>
  );
}

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
    initial
      ? {
          class: initial.class,
          name: initial.name,
          seats: initial.seats,
          amenities: initial.amenities,
          basePriceNgn: initial.basePriceNgn,
        }
      : BLANK_VEHICLE,
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
      setForm((prev) => ({ ...prev, amenities: [...prev.amenities, trimmed] }));
    }
    setAmenityInput("");
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-md rounded-2xl border border-concierge-gold/30 bg-[#10131a] p-6 shadow-luxe">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-concierge-ivory">{initial ? "Edit vehicle" : "Add vehicle"}</h3>
          <button onClick={onClose} className="text-concierge-slate hover:text-concierge-ivory">
            <X size={18} />
          </button>
        </div>
        <form onSubmit={submit} className="flex flex-col gap-4">
          <Field label="Name">
            <input
              required
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              className="input-base"
            />
          </Field>
          <Field label="Class">
            <select
              value={form.class}
              onChange={(e) => setForm((prev) => ({ ...prev, class: e.target.value }))}
              className="input-base"
            >
              {["PREMIUM", "EXECUTIVE", "ULTRA_LUXE", "MARINE", "AVIATION", "HELICOPTER"].map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Seats">
            <input
              type="number"
              min={1}
              max={50}
              value={form.seats}
              onChange={(e) => setForm((prev) => ({ ...prev, seats: Number(e.target.value) || 1 }))}
              className="input-base"
            />
          </Field>
          <Field label="Base Price (NGN)">
            <input
              type="number"
              min={0}
              value={form.basePriceNgn}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, basePriceNgn: Number(e.target.value) || 0 }))
              }
              className="input-base"
            />
          </Field>
          <Field label="Amenities">
            <div className="flex gap-2">
              <input
                value={amenityInput}
                onChange={(e) => setAmenityInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addAmenity();
                  }
                }}
                className="input-base flex-1"
              />
              <button
                type="button"
                onClick={addAmenity}
                className="rounded-md bg-concierge-gold px-3 text-sm font-semibold text-concierge-black"
              >
                Add
              </button>
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {form.amenities.map((amenity) => (
                <span
                  key={amenity}
                  className="flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-concierge-ivory"
                >
                  {amenity}
                  <button
                    type="button"
                    onClick={() =>
                      setForm((prev) => ({
                        ...prev,
                        amenities: prev.amenities.filter((value) => value !== amenity),
                      }))
                    }
                  >
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
            {saving ? "Saving..." : initial ? "Save changes" : "Add vehicle"}
          </button>
        </form>
      </div>
    </div>
  );
}

const AdminDashboard = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [addOns, setAddOns] = useState<AddOn[]>([]);
  const [coupons, setCoupons] = useState<Coupon[]>([]);

  const [bookingSearch, setBookingSearch] = useState("");
  const [vehicleSearch, setVehicleSearch] = useState("");

  const [loadingBookings, setLoadingBookings] = useState(true);
  const [loadingVehicles, setLoadingVehicles] = useState(true);
  const [loadingCatalog, setLoadingCatalog] = useState(true);

  const [fleetModal, setFleetModal] = useState<{ open: boolean; vehicle: Vehicle | null }>({
    open: false,
    vehicle: null,
  });

  const [tab, setTab] = useState<"bookings" | "fleet" | "catalog">("bookings");
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [newAddOnName, setNewAddOnName] = useState("");
  const [newAddOnPrice, setNewAddOnPrice] = useState(0);
  const [newCouponCode, setNewCouponCode] = useState("");
  const [newCouponDiscount, setNewCouponDiscount] = useState(10);
  const [newCouponExpiry, setNewCouponExpiry] = useState("");
  const [newCouponMaxUses, setNewCouponMaxUses] = useState<number | "">("");

  async function fetchBookings() {
    try {
      const res = await fetch(`${API}/bookings`);
      if (!res.ok) return;
      setBookings(await res.json());
    } finally {
      setLoadingBookings(false);
    }
  }

  async function fetchVehicles() {
    try {
      const res = await fetch(`${API}/vehicles`);
      if (!res.ok) return;
      setVehicles(await res.json());
    } finally {
      setLoadingVehicles(false);
    }
  }

  async function fetchCatalog() {
    try {
      const [addOnRes, couponRes] = await Promise.all([
        fetch(`${API}/admin/add-ons`),
        fetch(`${API}/admin/coupons`),
      ]);

      if (addOnRes.ok) setAddOns(await addOnRes.json());
      if (couponRes.ok) setCoupons(await couponRes.json());
    } finally {
      setLoadingCatalog(false);
    }
  }

  useEffect(() => {
    fetchBookings();
    fetchVehicles();
    fetchCatalog();
    pollRef.current = setInterval(fetchBookings, 15_000);
    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
    };
  }, []);

  async function deleteVehicle(id: string) {
    if (!confirm("Remove this vehicle from the fleet?")) return;
    const res = await fetch(`${API}/vehicles/${id}`, { method: "DELETE" });
    if (res.ok) setVehicles((prev) => prev.filter((item) => item.id !== id));
  }

  function onVehicleSaved(vehicle: Vehicle) {
    setVehicles((prev) => {
      const index = prev.findIndex((item) => item.id === vehicle.id);
      if (index >= 0) return prev.map((item) => (item.id === vehicle.id ? vehicle : item));
      return [...prev, vehicle];
    });
    setFleetModal({ open: false, vehicle: null });
  }

  async function createAddOn(e: React.FormEvent) {
    e.preventDefault();
    if (!newAddOnName.trim()) return;
    const res = await fetch(`${API}/admin/add-ons`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newAddOnName.trim(), priceNgn: Math.max(0, newAddOnPrice) }),
    });
    if (!res.ok) return;
    const created: AddOn = await res.json();
    setAddOns((prev) => [created, ...prev]);
    setNewAddOnName("");
    setNewAddOnPrice(0);
  }

  async function toggleAddOn(addOn: AddOn) {
    const res = await fetch(`${API}/admin/add-ons/${addOn.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isActive: !addOn.isActive }),
    });
    if (!res.ok) return;
    const updated: AddOn = await res.json();
    setAddOns((prev) => prev.map((item) => (item.id === updated.id ? updated : item)));
  }

  async function removeAddOn(id: string) {
    const res = await fetch(`${API}/admin/add-ons/${id}`, { method: "DELETE" });
    if (res.ok) setAddOns((prev) => prev.filter((item) => item.id !== id));
  }

  async function createCoupon(e: React.FormEvent) {
    e.preventDefault();
    if (!newCouponCode.trim() || !newCouponExpiry) return;
    const res = await fetch(`${API}/admin/coupons`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code: newCouponCode.trim().toUpperCase(),
        discountPercentage: newCouponDiscount,
        expiresAt: new Date(newCouponExpiry).toISOString(),
        maxUses: newCouponMaxUses === "" ? null : Number(newCouponMaxUses),
      }),
    });
    if (!res.ok) return;
    const created: Coupon = await res.json();
    setCoupons((prev) => [created, ...prev]);
    setNewCouponCode("");
    setNewCouponDiscount(10);
    setNewCouponExpiry("");
    setNewCouponMaxUses("");
  }

  async function toggleCoupon(coupon: Coupon) {
    const res = await fetch(`${API}/admin/coupons/${coupon.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isActive: !coupon.isActive }),
    });
    if (!res.ok) return;
    const updated: Coupon = await res.json();
    setCoupons((prev) => prev.map((item) => (item.id === updated.id ? updated : item)));
  }

  async function removeCoupon(id: string) {
    const res = await fetch(`${API}/admin/coupons/${id}`, { method: "DELETE" });
    if (res.ok) setCoupons((prev) => prev.filter((item) => item.id !== id));
  }

  const filteredBookings = useMemo(() => {
    const query = bookingSearch.toLowerCase();
    return bookings.filter((booking) => {
      if (!query) return true;
      return (
        booking.id.toLowerCase().includes(query) ||
        booking.userId.toLowerCase().includes(query) ||
        booking.pickup.toLowerCase().includes(query) ||
        booking.dropoff.toLowerCase().includes(query) ||
        booking.status.toLowerCase().includes(query)
      );
    });
  }, [bookings, bookingSearch]);

  const filteredVehicles = useMemo(() => {
    const query = vehicleSearch.toLowerCase();
    return vehicles.filter((vehicle) => {
      if (!query) return true;
      return vehicle.name.toLowerCase().includes(query) || vehicle.class.toLowerCase().includes(query);
    });
  }, [vehicles, vehicleSearch]);

  const pending = bookings.filter((booking) => booking.status === "REQUESTED").length;
  const active = bookings.filter((booking) => booking.status === "IN_PROGRESS").length;
  const today = bookings.filter(
    (booking) => new Date(booking.createdAt).toDateString() === new Date().toDateString(),
  ).length;

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
        <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-1 font-semibold text-concierge-gold">Thrip Concierge Command</p>
            <h1 className="text-3xl font-bold text-concierge-ivory md:text-4xl">
              Booking, transfer verification, and chauffeur dispatch
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Link to={routes.landing} className="rounded-md border border-concierge-gold/30 px-4 py-2 text-sm text-concierge-slate hover:bg-white/5">
              Landing
            </Link>
            <Link to={routes.home} className="rounded-md bg-concierge-gold px-4 py-2 text-sm font-semibold text-concierge-black hover:bg-[#c19347]">
              Open Website
            </Link>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          <StatCard label="Today Bookings" value={String(today)} helper="Live from database" />
          <StatCard label="Pending Payment Proof" value={String(pending)} helper="Awaiting transfer validation" />
          <StatCard label="Active Chauffeur Engagements" value={String(active)} helper="Live premium trips" />
        </section>

        <div className="flex gap-1 rounded-xl border border-white/10 bg-white/5 p-1 w-fit">
          {([
            ["bookings", "Bookings"],
            ["fleet", "Fleet"],
            ["catalog", "Coupons & Add-ons"],
          ] as const).map(([value, label]) => (
            <button
              key={value}
              onClick={() => setTab(value)}
              className={`rounded-lg px-5 py-1.5 text-sm font-semibold transition-colors ${
                tab === value
                  ? "bg-concierge-gold text-concierge-black"
                  : "text-concierge-slate hover:text-concierge-ivory"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

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
              <p className="py-8 text-center text-sm text-concierge-slate">Loading...</p>
            ) : filteredBookings.length === 0 ? (
              <p className="py-8 text-center text-sm text-concierge-slate">
                {bookingSearch ? "No matching bookings." : "No bookings yet."}
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-concierge-slate">
                      <th className="px-2 py-3 font-medium">ID</th>
                      <th className="px-2 py-3 font-medium">User</th>
                      <th className="px-2 py-3 font-medium">Route</th>
                      <th className="px-2 py-3 font-medium">Start</th>
                      <th className="px-2 py-3 font-medium">Total</th>
                      <th className="px-2 py-3 font-medium">Coupon</th>
                      <th className="px-2 py-3 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBookings.map((booking) => (
                      <tr key={booking.id} className="border-b border-white/5">
                        <td className="px-2 py-3 font-mono text-xs text-concierge-slate">{booking.id.slice(0, 8)}...</td>
                        <td className="px-2 py-3 text-[#D8DDE7]">{booking.userId}</td>
                        <td className="px-2 py-3 text-[#D8DDE7]">
                          <p>{booking.pickup}</p>
                          <p className="text-xs text-concierge-slate">to {booking.dropoff}</p>
                          <p className="text-xs text-concierge-slate">{booking.addOns.length} add-ons</p>
                        </td>
                        <td className="px-2 py-3 text-[#D8DDE7] whitespace-nowrap">{fmt(booking.startAt)}</td>
                        <td className="px-2 py-3 text-concierge-gold font-semibold">
                          {currency(booking.pricing.totalPriceNgn)}
                        </td>
                        <td className="px-2 py-3 text-[#D8DDE7]">{booking.pricing.couponCode ?? "-"}</td>
                        <td className="px-2 py-3">
                          <span
                            className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                              STATUS_CLASS[booking.status] ?? "bg-white/10 text-white"
                            }`}
                          >
                            {booking.status}
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
              <p className="py-8 text-center text-sm text-concierge-slate">Loading...</p>
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
                      <th className="px-2 py-3 font-medium">Base Price</th>
                      <th className="px-2 py-3 font-medium">Amenities</th>
                      <th className="px-2 py-3 font-medium"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredVehicles.map((vehicle) => (
                      <tr key={vehicle.id} className="border-b border-white/5">
                        <td className="px-2 py-3 font-semibold text-concierge-ivory">{vehicle.name}</td>
                        <td className="px-2 py-3">
                          <span className="rounded-full bg-concierge-gold/15 px-2.5 py-0.5 text-xs font-semibold text-concierge-gold">
                            {vehicle.class}
                          </span>
                        </td>
                        <td className="px-2 py-3 text-[#D8DDE7]">{vehicle.seats}</td>
                        <td className="px-2 py-3 text-concierge-gold font-semibold">{currency(vehicle.basePriceNgn)}</td>
                        <td className="px-2 py-3 text-[#D8DDE7]">{vehicle.amenities.join(", ")}</td>
                        <td className="px-2 py-3">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setFleetModal({ open: true, vehicle })}
                              className="rounded p-1 text-concierge-slate hover:text-concierge-gold"
                            >
                              <Pencil size={14} />
                            </button>
                            <button
                              onClick={() => deleteVehicle(vehicle.id)}
                              className="rounded p-1 text-concierge-slate hover:text-red-400"
                            >
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

        {tab === "catalog" && (
          <section className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-concierge-gold/25 bg-[rgba(16,19,26,0.92)] p-5 shadow-luxe md:p-7">
              <h2 className="mb-4 text-xl font-semibold text-concierge-ivory">Add-ons</h2>
              <form onSubmit={createAddOn} className="mb-6 grid gap-3 md:grid-cols-[1fr_140px_auto]">
                <input
                  value={newAddOnName}
                  onChange={(e) => setNewAddOnName(e.target.value)}
                  className="input-base"
                  placeholder="Name"
                />
                <input
                  type="number"
                  min={0}
                  value={newAddOnPrice}
                  onChange={(e) => setNewAddOnPrice(Number(e.target.value) || 0)}
                  className="input-base"
                  placeholder="Price (NGN)"
                />
                <button type="submit" className="rounded-md bg-concierge-gold px-4 py-2 text-sm font-semibold text-concierge-black">
                  Create
                </button>
              </form>
              {loadingCatalog ? (
                <p className="text-sm text-concierge-slate">Loading...</p>
              ) : (
                <div className="space-y-2">
                  {addOns.map((addOn) => (
                    <div key={addOn.id} className="flex items-center justify-between rounded-lg border border-white/10 p-3">
                      <div>
                        <p className="font-semibold text-concierge-ivory">{addOn.name}</p>
                        <p className="text-xs text-concierge-slate">{currency(addOn.priceNgn)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => toggleAddOn(addOn)}
                          className={`rounded-md px-2.5 py-1 text-xs font-semibold ${
                            addOn.isActive
                              ? "bg-emerald-100 text-emerald-900"
                              : "bg-neutral-200 text-neutral-800"
                          }`}
                        >
                          {addOn.isActive ? "Active" : "Inactive"}
                        </button>
                        <button onClick={() => removeAddOn(addOn.id)} className="rounded p-1 text-concierge-slate hover:text-red-400">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </article>

            <article className="rounded-2xl border border-concierge-gold/25 bg-[rgba(16,19,26,0.92)] p-5 shadow-luxe md:p-7">
              <h2 className="mb-4 text-xl font-semibold text-concierge-ivory">Coupons</h2>
              <form onSubmit={createCoupon} className="mb-6 grid gap-3 md:grid-cols-2">
                <input
                  value={newCouponCode}
                  onChange={(e) => setNewCouponCode(e.target.value.toUpperCase())}
                  className="input-base"
                  placeholder="Code"
                />
                <input
                  type="number"
                  min={1}
                  max={100}
                  value={newCouponDiscount}
                  onChange={(e) => setNewCouponDiscount(Number(e.target.value) || 1)}
                  className="input-base"
                  placeholder="Discount %"
                />
                <input
                  type="datetime-local"
                  value={newCouponExpiry}
                  onChange={(e) => setNewCouponExpiry(e.target.value)}
                  className="input-base"
                />
                <input
                  type="number"
                  min={1}
                  value={newCouponMaxUses}
                  onChange={(e) => setNewCouponMaxUses(e.target.value ? Number(e.target.value) : "")}
                  className="input-base"
                  placeholder="Max uses (optional)"
                />
                <button
                  type="submit"
                  className="rounded-md bg-concierge-gold px-4 py-2 text-sm font-semibold text-concierge-black md:col-span-2"
                >
                  Create Coupon
                </button>
              </form>

              {loadingCatalog ? (
                <p className="text-sm text-concierge-slate">Loading...</p>
              ) : (
                <div className="space-y-2">
                  {coupons.map((coupon) => (
                    <div key={coupon.id} className="flex items-center justify-between rounded-lg border border-white/10 p-3">
                      <div>
                        <p className="font-semibold text-concierge-ivory">{coupon.code}</p>
                        <p className="text-xs text-concierge-slate">
                          {coupon.discountPercentage}% off, expires {fmt(coupon.expiresAt)}
                        </p>
                        <p className="text-xs text-concierge-slate">
                          Used {coupon.currentUses}
                          {coupon.maxUses ? ` / ${coupon.maxUses}` : ""}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => toggleCoupon(coupon)}
                          className={`rounded-md px-2.5 py-1 text-xs font-semibold ${
                            coupon.isActive
                              ? "bg-emerald-100 text-emerald-900"
                              : "bg-neutral-200 text-neutral-800"
                          }`}
                        >
                          {coupon.isActive ? "Active" : "Inactive"}
                        </button>
                        <button onClick={() => removeCoupon(coupon.id)} className="rounded p-1 text-concierge-slate hover:text-red-400">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </article>
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
