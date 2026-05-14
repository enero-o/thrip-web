import { Link } from "react-router-dom";
import routes from "@thrip/routes";

const Support = () => {
  return (
    <div className="min-h-screen bg-concierge-black px-4 py-12 md:px-12">
      <div className="mx-auto max-w-4xl rounded-2xl border border-concierge-gold/25 bg-[rgba(16,19,26,0.92)] p-6 md:p-10">
        <h1 className="mb-4 text-3xl font-bold text-concierge-ivory md:text-5xl">Support</h1>
        <p className="mb-2 text-sm uppercase tracking-[0.12em] text-concierge-gold/80">Thrip Concierge Co.</p>
        <p className="mb-8 text-concierge-slate">
          Our concierge team is here to help. Find answers below or reach out directly — we respond to every message.
        </p>

        <div className="space-y-8 text-concierge-slate">
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-concierge-ivory">General Help</h2>
            <p>
              For questions about your booking, vehicle availability, pricing, or any aspect of the Thrip Concierge service,
              email us at{" "}
              <a href="mailto:concierge@thrip.app" className="text-concierge-gold underline-offset-4 hover:underline">
                concierge@thrip.app
              </a>{" "}
              or use the in-app Contact Concierge option in the Settings screen.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-concierge-ivory">Booking Questions</h2>
            <ul className="ml-4 list-disc space-y-1">
              <li>Booking requests are typically confirmed within minutes during operational hours.</li>
              <li>If you need to modify or cancel a booking, contact us at least 2 hours before your scheduled pickup.</li>
              <li>Payment issues or disputes should be sent to{" "}
                <a href="mailto:concierge@thrip.app" className="text-concierge-gold underline-offset-4 hover:underline">
                  concierge@thrip.app
                </a>{" "}
                with your booking reference.
              </li>
              <li>We are available daily from 6:00 AM to 11:00 PM (local time).</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-concierge-ivory">Technical Issues</h2>
            <p>
              If you experience a crash, login problem, or any other technical issue with the app, please include your device
              model, iOS version, and a brief description of what happened when you contact us. This helps us resolve your
              issue faster.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-concierge-ivory">Account &amp; Data</h2>
            <p>
              To review our data practices, see the{" "}
              <Link to={routes.privacyPolicy} className="text-concierge-gold underline-offset-4 hover:underline">
                Privacy Policy
              </Link>
              . To request deletion of your account and associated data, visit our{" "}
              <Link to={routes.deleteAccount} className="text-concierge-gold underline-offset-4 hover:underline">
                Account Deletion page
              </Link>
              .
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-concierge-ivory">Contact Us</h2>
            <ul className="space-y-1">
              <li>
                <span className="font-medium text-concierge-ivory">Email: </span>
                <a href="mailto:concierge@thrip.app" className="text-concierge-gold underline-offset-4 hover:underline">
                  concierge@thrip.app
                </a>
              </li>
              <li>
                <span className="font-medium text-concierge-ivory">Phone: </span>
                +234 800 THRIP VIP
              </li>
              <li>
                <span className="font-medium text-concierge-ivory">Instagram: </span>
                <a
                  href="https://www.instagram.com/thrip.app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-concierge-gold underline-offset-4 hover:underline"
                >
                  @thrip.app
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Support;
