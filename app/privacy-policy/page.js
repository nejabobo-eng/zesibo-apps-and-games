import { Page } from "../components/SiteShell";

export const metadata = {
  title: "Privacy Policy | Zesibo Apps & Games",
  description: "Privacy Policy for Zesibo apps and games, including Chicken Rush, SafeDiary, and QuickInvoice.",
};

export default function PrivacyPolicyPage() {
  return <Page eyebrow="PRIVACY POLICY" title={<>Your privacy<br /><em>matters.</em></>}>
    <section className="section policy-section">
      <article className="policy-card">
        <p><strong>Effective date:</strong> 5 October 2026</p>
        <p>Zesibo, operated by Mlu Solutions ("we", "us", or "our"), creates and publishes mobile apps and games. This Privacy Policy explains how we handle information in our apps and games, including Chicken Rush, SafeDiary, and QuickInvoice. It should be read with any app-specific information provided in the relevant Google Play listing.</p>
        <h2>Information our apps may store</h2>
        <p>Our apps may store settings, progress, scores, or content locally on your device so that the app works as expected. For example, Chicken Rush stores your personal best score and game settings locally on your device.</p>
        <p>Unless an app clearly says otherwise, we do not require you to create an account or provide your name, phone number, email address, or precise location to use it.</p>
        <h2>Advertising</h2>
        <p>Some Zesibo apps display advertisements supplied by Google AdMob. Google Mobile Ads may collect and process device and advertising information, IP address, app interaction information, diagnostic information, and device or account identifiers to provide, measure, personalise where permitted, and protect advertising from fraud.</p>
        <p>Google's handling of this information is governed by the <a href="https://policies.google.com/privacy">Google Privacy Policy</a>. Advertising choices and consent requests are provided where required by applicable law.</p>
        <h2>Sharing</h2>
        <p>We do not sell personal information directly. Where an app uses Google AdMob, information may be shared with Google and its advertising partners as necessary to provide and measure advertising. If a future Zesibo app uses another third-party service, we will update this policy or provide app-specific information before release.</p>
        <h2>Chicken Rush</h2>
        <p>Chicken Rush stores your personal best score and game settings locally. It displays Google AdMob banner and interstitial ads. If its optional world-score feature is enabled in a future release, it will send only the score number to that service, not your name, email address, or gameplay profile.</p>
        <h2 id="safe-diary">SafeDiary</h2>
        <p>SafeDiary is a personal diary app. In the current version, diary notes, note titles, timestamps, starred or deleted status, and the diary PIN are stored locally on your device. SafeDiary does not create a Zesibo account or send diary-note content to a Zesibo server.</p>
        <p>SafeDiary may show your device's biometric prompt, such as fingerprint or face authentication, when you use the PIN recovery feature. Your device's operating system handles this biometric check; SafeDiary does not receive or store biometric templates.</p>
        <p>SafeDiary displays Google AdMob banner advertisements. Google Mobile Ads may collect and process advertising and device information as described in the Advertising section. SafeDiary does not use diary-note text, titles, or PINs for advertising.</p>
        <p>Depending on your Android device and backup settings, locally stored app data may be included in device backups. Protecting access to your device remains important. We will update this notice before adding cloud backup, sharing, analytics, accounts, or another service that changes how SafeDiary handles data.</p>
        <h2 id="quick-invoice">QuickInvoice</h2>
        <p>QuickInvoice is an invoice and quotation utility app. In the current version, business-profile details, including business name, contact details, address, VAT number, banking details, payment terms, and an optional logo, are stored locally on your device. It also stores locally the invoices and quotations you create, which can include customer names and addresses, item or service descriptions, prices, dates, notes, and payment amounts.</p>
        <p>QuickInvoice does not require an account and does not send your invoice or business information to a Zesibo server. You can choose to export an invoice as a PDF, share that PDF with another app or person, or create a backup file using a location or service you select, such as Google Drive. Once you choose to share or back up data, the privacy practices of the chosen recipient, app, device, or cloud service apply.</p>
        <p>QuickInvoice displays Google AdMob banner and interstitial advertisements. Google Mobile Ads may collect and process advertising and device information as described in the Advertising section. QuickInvoice does not use your invoice, customer, business, banking, or payment information for advertising.</p>
        <p>Depending on your Android device and backup settings, locally stored app data may be included in device backups. We will update this notice before adding account sign-in, Zesibo cloud storage, analytics, or another service that changes how QuickInvoice handles data.</p>
        <h2>Other Zesibo apps and games</h2>
        <p>Our current portfolio also includes Block Forge, Knight Relay Chess, FreeSpace, PaperKit, QuickCalc, Siyafunda Tutor, and TaxiLink. These products are in development unless their store listing says otherwise. Before each release, we will review its actual data practices and update this policy and its Google Play Data safety declaration to match the released version.</p>
        <h2>Children</h2>
        <p>Our apps are not intended to collect personal information directly from children. Where an app is made available to children or mixed audiences, we use age-appropriate settings and follow applicable Google Play requirements.</p>
        <h2>Security</h2>
        <p>We take reasonable steps to protect information handled by our apps. Network connections used by an app are intended to use encrypted HTTPS connections. Local storage is not a substitute for keeping your device protected with a screen lock and up-to-date software.</p>
        <h2>Changes to this policy</h2>
        <p>We may update this policy when an app, our services, or legal requirements change. The latest version will always be published at this page.</p>
        <h2>Contact</h2>
        <p>Zesibo / Mlu Solutions<br /><a href="mailto:support@zesibo.co.za">support@zesibo.co.za</a></p>
      </article>
    </section>
  </Page>;
}
