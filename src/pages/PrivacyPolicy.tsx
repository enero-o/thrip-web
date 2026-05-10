const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-concierge-black px-4 py-12 md:px-12">
      <div className="mx-auto max-w-4xl rounded-2xl border border-concierge-gold/25 bg-[rgba(16,19,26,0.92)] p-6 md:p-10">
        <h1 className="mb-4 text-3xl font-bold text-concierge-ivory md:text-5xl">Privacy Policy</h1>
        <p className="mb-2 text-sm uppercase tracking-[0.12em] text-concierge-gold/80">Effective Date: 10 May 2026</p>
        <p className="mb-6 text-concierge-slate">
          This Privacy Policy explains how Thrip Concierge Co. ("Thrip", "we", "us")
          collects, uses, stores, and shares personal information when you use our website,
          mobile applications, and concierge transportation services.
        </p>

        <div className="space-y-6 text-concierge-slate">
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-concierge-ivory">1. Information We Collect</h2>
            <p>
              We may collect personal information you provide directly, including name, phone
              number, email, booking details, pickup and drop-off addresses, support messages, and
              uploaded payment proof where required.
            </p>
            <p>
              We may also collect technical and usage data such as device identifiers, app events,
              IP address, approximate location, and diagnostic logs used for security,
              troubleshooting, and service quality.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-concierge-ivory">2. How We Use Information</h2>
            <p>
              We use personal information to provide and operate the Service, verify identity,
              process bookings and payments, coordinate transportation partners, communicate trip
              updates, prevent fraud, maintain safety, and comply with legal obligations.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-concierge-ivory">3. Legal Bases for Processing</h2>
            <p>
              Depending on your jurisdiction, we process information based on contractual necessity,
              legitimate interests, legal obligations, and consent where required (for example,
              optional communications or specific verification workflows).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-concierge-ivory">4. Sharing of Information</h2>
            <p>
              We may share relevant data with trusted third parties that help us deliver the
              Service, including payment processors, cloud providers, customer support tools,
              communications providers, and transportation or dispatch partners.
            </p>
            <p>
              We may also disclose information when required by law, court order, lawful request,
              or to protect rights, safety, and platform integrity.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-concierge-ivory">5. Data Retention</h2>
            <p>
              We retain personal information only for as long as necessary for operational,
              contractual, legal, tax, audit, safety, and dispute-resolution purposes. Retention
              periods vary by data type and applicable law.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-concierge-ivory">6. Security</h2>
            <p>
              We use administrative, technical, and organizational safeguards designed to protect
              personal information. No method of transmission or storage is completely secure, but
              we continuously improve controls to reduce risk.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-concierge-ivory">7. International Transfers</h2>
            <p>
              Your information may be processed in countries other than your own. Where required,
              we apply appropriate safeguards for cross-border data transfers consistent with
              applicable data protection laws.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-concierge-ivory">8. Your Rights</h2>
            <p>
              Subject to local law, you may request access, correction, deletion, portability,
              restriction, or objection regarding personal information we hold about you. You may
              also withdraw consent where processing is based on consent.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-concierge-ivory">9. Children&apos;s Privacy</h2>
            <p>
              The Service is not intended for children under 18. We do not knowingly collect
              personal information from children. If you believe a child has provided personal
              information, contact us so we can investigate and take appropriate action.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-concierge-ivory">10. Cookies and Similar Technologies</h2>
            <p>
              Our web properties may use cookies, local storage, and similar technologies for
              authentication, preferences, analytics, and performance measurement. You can manage
              cookie behavior through browser settings.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-concierge-ivory">11. Policy Updates</h2>
            <p>
              We may revise this Privacy Policy from time to time. Material updates will be posted
              on this page with a revised effective date.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-concierge-ivory">12. Contact Us</h2>
            <p>
              For privacy questions or data rights requests, email
              <span className="font-semibold text-concierge-ivory"> concierge@thrip.app</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
