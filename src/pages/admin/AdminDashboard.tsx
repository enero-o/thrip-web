import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import routes from "../../routes";

type BookingStatus = "Pending Proof" | "Payment Received" | "Driver Engaged";

interface BookingRow {
  id: string;
  rider: string;
  route: string;
  amount: string;
  status: BookingStatus;
  eta: string;
}

const rows: BookingRow[] = [
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

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_10%_10%,rgba(219,170,90,0.16),transparent_32%),#0C0E12] py-8 md:py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 xl:px-12">
        <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-1 font-semibold text-concierge-gold">Thrip Concierge Command</p>
            <h1 className="text-3xl font-bold text-concierge-ivory md:text-4xl">Booking, transfer verification, and chauffeur dispatch</h1>
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
          <StatCard label="Today Bookings" value="24" helper="+18% vs yesterday" />
          <StatCard label="Pending Payment Proof" value="7" helper="Awaiting transfer validation" />
          <StatCard label="Active Chauffeur Engagements" value="13" helper="Live premium trips" />
        </section>

        <section className="rounded-2xl border border-concierge-gold/25 bg-[rgba(16,19,26,0.92)] p-5 shadow-luxe md:p-7">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h2 className="text-xl font-semibold text-concierge-ivory">Recent concierge bookings</h2>
            <div className="flex w-full max-w-xs items-center gap-2 rounded-md border border-white/20 bg-concierge-charcoal px-3 py-2">
              <Search size={16} className="text-concierge-slate" />
              <input
                placeholder="Search booking, rider, route"
                className="w-full bg-transparent text-sm text-concierge-ivory outline-none placeholder:text-concierge-slate"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-concierge-slate">
                  <th className="px-2 py-3 font-medium">Booking</th>
                  <th className="px-2 py-3 font-medium">Rider</th>
                  <th className="px-2 py-3 font-medium">Route</th>
                  <th className="px-2 py-3 font-medium">Amount</th>
                  <th className="px-2 py-3 font-medium">Status</th>
                  <th className="px-2 py-3 font-medium">ETA</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id} className="border-b border-white/5">
                    <td className="px-2 py-3 font-semibold text-concierge-ivory">{row.id}</td>
                    <td className="px-2 py-3 text-[#D8DDE7]">{row.rider}</td>
                    <td className="px-2 py-3 text-[#D8DDE7]">{row.route}</td>
                    <td className="px-2 py-3 font-medium text-concierge-gold">{row.amount}</td>
                    <td className="px-2 py-3">
                      <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusClass(row.status)}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-2 py-3 text-[#D8DDE7]">{row.eta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

const StatCard = ({ label, value, helper }: { label: string; value: string; helper: string }) => {
  return (
    <article className="rounded-2xl border border-concierge-gold/25 bg-[rgba(16,19,26,0.92)] p-5">
      <p className="text-sm text-concierge-slate">{label}</p>
      <p className="mt-2 text-3xl font-bold text-concierge-ivory">{value}</p>
      <p className="mt-1 text-sm text-concierge-slate">{helper}</p>
    </article>
  );
};

const statusClass = (status: BookingStatus) => {
  if (status === "Pending Proof") {
    return "bg-amber-100 text-amber-900";
  }
  if (status === "Payment Received") {
    return "bg-blue-100 text-blue-900";
  }
  return "bg-emerald-100 text-emerald-900";
};

export default AdminDashboard;
