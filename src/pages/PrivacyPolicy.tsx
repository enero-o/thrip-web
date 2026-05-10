const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-concierge-black px-4 py-12 md:px-12">
      <div className="mx-auto max-w-4xl rounded-2xl border border-concierge-gold/25 bg-[rgba(16,19,26,0.92)] p-6 md:p-10">
        <h1 className="mb-4 text-3xl font-bold text-concierge-ivory md:text-5xl">Privacy Policy</h1>
        <p className="mb-6 text-concierge-slate">We protect customer and corporate account data with secure processing and limited-access operations.</p>
        <div className="space-y-4 text-concierge-slate">
          <p><span className="font-semibold text-concierge-ivory">Data collected:</span> Contact details, trip information, payment confirmations, and support interactions.</p>
          <p><span className="font-semibold text-concierge-ivory">Data use:</span> Service delivery, verification, safety checks, and concierge support quality improvement.</p>
          <p><span className="font-semibold text-concierge-ivory">Data sharing:</span> Shared only with trusted service operators required to complete your booking.</p>
          <p><span className="font-semibold text-concierge-ivory">Your rights:</span> You may request updates or deletion of your personal data by contacting concierge@thrip.app.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
