const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-concierge-black px-4 py-12 md:px-12">
      <div className="mx-auto max-w-4xl rounded-2xl border border-concierge-gold/25 bg-[rgba(16,19,26,0.92)] p-6 md:p-10">
        <h1 className="mb-4 text-3xl font-bold text-concierge-ivory md:text-5xl">Terms of Service</h1>
        <p className="mb-6 text-concierge-slate">By using Thrip Concierge Co., you agree to these service terms for booking, billing, rider conduct, and service eligibility.</p>
        <div className="space-y-4 text-concierge-slate">
          <p><span className="font-semibold text-concierge-ivory">Bookings:</span> Reservations are confirmed only after successful payment verification.</p>
          <p><span className="font-semibold text-concierge-ivory">Service scope:</span> Vehicle class, duration, and location affect final pricing and availability.</p>
          <p><span className="font-semibold text-concierge-ivory">Cancellations:</span> Late cancellations may attract service fees based on dispatch status.</p>
          <p><span className="font-semibold text-concierge-ivory">Liability:</span> Thrip coordinates premium transportation but is not liable for events beyond reasonable operational control.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
