import { Link } from "react-router-dom";
import routes from "@thrip/routes";

const DeleteAccount = () => {
  return (
    <div className="min-h-screen bg-concierge-black px-4 py-12 md:px-12">
      <div className="mx-auto max-w-4xl rounded-2xl border border-red-900/40 bg-[rgba(16,19,26,0.92)] p-6 md:p-10">
        <h1 className="mb-4 text-3xl font-bold text-concierge-ivory md:text-5xl">Delete Your Account</h1>
        <p className="mb-2 text-sm uppercase tracking-[0.12em] text-red-400/80">Permanent — this cannot be undone</p>
        <p className="mb-8 text-concierge-slate">
          We're sorry to see you go. Account deletion permanently removes your profile and local data from the Thrip app.
          Backend records — including booking history — are purged within 30 days in accordance with our{" "}
          <Link to={routes.privacyPolicy} className="text-concierge-gold underline-offset-4 hover:underline">
            Privacy Policy
          </Link>
          .
        </p>

        <div className="space-y-8 text-concierge-slate">
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-concierge-ivory">What Gets Deleted</h2>
            <ul className="ml-4 list-disc space-y-1">
              <li>Your name, phone number, and verification details stored on your device.</li>
              <li>Your user ID and session data within the app.</li>
              <li>Your booking history and associated records on our servers (within 30 days).</li>
              <li>Any support correspondence linked to your account.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-concierge-ivory">How to Delete Your Account In-App</h2>
            <ol className="ml-4 list-decimal space-y-2">
              <li>Open the Thrip app and tap the menu icon on the home screen.</li>
              <li>Go to <span className="font-medium text-concierge-ivory">Settings</span>.</li>
              <li>Scroll to the bottom and tap <span className="font-medium text-red-400">Delete Account</span>.</li>
              <li>Confirm through the two-step prompt. Your local data will be deleted immediately.</li>
            </ol>
            <p className="text-sm">
              After deleting locally, a backend data purge request is submitted automatically. Backend data (bookings,
              history) is fully removed within 30 days.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-concierge-ivory">Request Deletion by Email</h2>
            <p>
              If you no longer have access to the app or prefer to request deletion directly, email us at{" "}
              <a href="mailto:concierge@thrip.app" className="text-concierge-gold underline-offset-4 hover:underline">
                concierge@thrip.app
              </a>{" "}
              with the subject line <span className="font-medium text-concierge-ivory">"Account Deletion Request"</span> and
              include the phone number or name associated with your account. We will confirm receipt and complete the deletion
              within 30 days.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-concierge-ivory">Data Retention After Deletion</h2>
            <p>
              Certain records may be retained for a limited period as required by law (for example, financial transaction
              records for tax compliance). These records are kept only as long as legally required and are not used for any
              other purpose. See our{" "}
              <Link to={routes.privacyPolicy} className="text-concierge-gold underline-offset-4 hover:underline">
                Privacy Policy
              </Link>{" "}
              for full details.
            </p>
          </section>

          <section className="rounded-xl border border-concierge-gold/20 bg-white/5 p-4">
            <p className="text-sm">
              Need help or have questions before deleting?{" "}
              <Link to={routes.support} className="font-medium text-concierge-gold underline-offset-4 hover:underline">
                Visit our Support page
              </Link>{" "}
              or email{" "}
              <a href="mailto:concierge@thrip.app" className="text-concierge-gold underline-offset-4 hover:underline">
                concierge@thrip.app
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
