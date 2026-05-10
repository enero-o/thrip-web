const CopyrightInfo = () => {
  return (
    <div className="min-h-screen bg-concierge-black px-4 py-12 md:px-12">
      <div className="mx-auto max-w-4xl rounded-2xl border border-concierge-gold/25 bg-[rgba(16,19,26,0.92)] p-6 md:p-10">
        <h1 className="mb-4 text-3xl font-bold text-concierge-ivory md:text-5xl">Copyright Information</h1>
        <p className="mb-6 text-concierge-slate">All branding, visuals, copy, and platform assets on Thrip Concierge Co. are protected by copyright and intellectual property laws.</p>
        <div className="space-y-4 text-concierge-slate">
          <p><span className="font-semibold text-concierge-ivory">Ownership:</span> Content is owned by Thrip Concierge Co. unless otherwise stated.</p>
          <p><span className="font-semibold text-concierge-ivory">Permitted use:</span> Personal and internal business viewing only. Reproduction or redistribution requires written approval.</p>
          <p><span className="font-semibold text-concierge-ivory">Infringement notices:</span> Send claims with details to concierge@thrip.app for review and response.</p>
        </div>
      </div>
    </div>
  );
};

export default CopyrightInfo;
