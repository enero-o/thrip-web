const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-concierge-black px-4 py-12 md:px-12">
      <div className="mx-auto max-w-4xl rounded-2xl border border-concierge-gold/25 bg-[rgba(16,19,26,0.92)] p-6 md:p-10">
        <h1 className="mb-4 text-3xl font-bold text-concierge-ivory md:text-5xl">Terms of Service</h1>
        <p className="mb-2 text-sm uppercase tracking-[0.12em] text-concierge-gold/80">Effective Date: 10 May 2026</p>
        <p className="mb-6 text-concierge-slate">
          These Terms of Service ("Terms") govern your use of Thrip Concierge Co. services,
          including our website, mobile applications, and concierge transportation booking
          operations (collectively, the "Service"). By creating a booking, accessing our app,
          or using any part of the Service, you agree to these Terms.
        </p>

        <div className="space-y-6 text-concierge-slate">
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-concierge-ivory">1. Eligibility and Acceptance</h2>
            <p>
              You must be at least 18 years old and legally capable of entering into contracts to
              use the Service. If you use the Service on behalf of a company, you represent that
              you are authorized to bind that company.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-concierge-ivory">2. Service Description</h2>
            <p>
              Thrip coordinates premium on-demand and scheduled transportation through partner
              operators. Vehicle category, route, timing, and availability may vary by location,
              traffic conditions, operating constraints, and partner capacity.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-concierge-ivory">3. Accounts and Verification</h2>
            <p>
              You agree to provide accurate profile and contact information. We may require phone
              verification or identity confirmation before accepting or fulfilling a booking. You
              are responsible for activities conducted through your account.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-concierge-ivory">4. Booking, Pricing, and Payment</h2>
            <p>
              Fare estimates are indicative unless expressly confirmed. Bookings are considered
              confirmed only after required payment steps are completed and verified. Additional
              charges may apply for overtime, waiting time, route changes, tolls, parking, or
              requested upgrades.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-concierge-ivory">5. Cancellations and Refunds</h2>
            <p>
              You may cancel through supported channels. Cancellation fees may apply where driver
              dispatch, allocation, or preparation has already begun. Approved refunds are issued
              to the original payment method, subject to payment processor timelines.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-concierge-ivory">6. Acceptable Use and Conduct</h2>
            <p>
              You agree not to misuse the Service, engage in unlawful activity, damage vehicles,
              threaten personnel, or interfere with platform security and operations. We may
              decline, suspend, or terminate service for safety, fraud, abuse, or policy
              violations.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-concierge-ivory">7. Safety and Operational Limits</h2>
            <p>
              Pickup and drop-off times may be affected by weather, road conditions, government
              restrictions, and other factors beyond our direct control. We aim for reliability,
              but exact arrival and travel times are not guaranteed.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-concierge-ivory">8. Third-Party Services</h2>
            <p>
              Certain features may depend on third-party providers, including payment processors,
              telecommunications channels, mapping, or transportation partners. Their independent
              terms and policies may apply to relevant parts of your use.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-concierge-ivory">9. Intellectual Property</h2>
            <p>
              The Service, including branding, software, interface elements, and content, is owned
              by Thrip or its licensors. You receive a limited, revocable, non-transferable right
              to use the Service for personal or internal business booking purposes.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-concierge-ivory">10. Disclaimer and Limitation of Liability</h2>
            <p>
              The Service is provided on an "as available" basis to the extent permitted by law.
              To the maximum extent permitted by applicable law, Thrip is not liable for indirect,
              incidental, special, consequential, or punitive damages, or for losses resulting from
              delays, outages, or third-party failures beyond our reasonable control.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-concierge-ivory">11. Indemnity</h2>
            <p>
              You agree to indemnify and hold harmless Thrip, its affiliates, officers, and
              personnel from claims, liabilities, and costs arising out of your misuse of the
              Service, breach of these Terms, or violation of applicable law.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-concierge-ivory">12. Changes to These Terms</h2>
            <p>
              We may update these Terms periodically to reflect legal, product, or operational
              changes. Updates are effective when published with a revised effective date. Continued
              use of the Service after updates constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-concierge-ivory">13. Governing Law</h2>
            <p>
              These Terms are governed by applicable laws of the Federal Republic of Nigeria,
              without prejudice to mandatory consumer protections that may apply in your
              jurisdiction.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-concierge-ivory">14. Contact</h2>
            <p>
              For legal notices, account matters, or support escalation, contact us at
              <span className="font-semibold text-concierge-ivory"> concierge@thrip.app</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
