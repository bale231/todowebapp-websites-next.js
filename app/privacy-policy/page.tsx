import { Shield, ChevronRight } from "lucide-react";

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: `Welcome to Tasky ("we", "our", or "us"). This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our web application and related services (collectively, the "Service"). By accessing or using Tasky, you agree to the terms of this Privacy Policy. If you do not agree, please discontinue use of the Service.`,
  },
  {
    id: "data-collected",
    title: "2. Information We Collect",
    subsections: [
      {
        title: "2.1 Information you provide directly",
        items: [
          "Account registration data: username, email address, and password (stored in hashed form).",
          "Profile information: display name, profile picture, and optional bio.",
          "Task and list data: titles, descriptions, due dates, priorities, and completion status of your tasks.",
          "Communications: messages or information you send through the contact form.",
        ],
      },
      {
        title: "2.2 Information collected automatically",
        items: [
          "Log data: IP address, browser type, pages visited, timestamps, and referring URLs.",
          "Device information: device type, operating system, and browser version.",
          "Cookies and local storage: session tokens and preference data stored locally on your device.",
          "IndexedDB data: task data cached locally in your browser for offline support.",
        ],
      },
    ],
  },
  {
    id: "use",
    title: "3. How We Use Your Information",
    items: [
      "To create and manage your account and authenticate your sessions.",
      "To provide, maintain, and improve the core features of Tasky, including task management and friend collaboration.",
      "To send transactional emails such as email verification, password reset links, and notification alerts.",
      "To respond to your inquiries and support requests.",
      "To monitor and analyze usage patterns in order to improve performance and security.",
      "To enforce our Terms of Service and protect against fraudulent or abusive activity.",
    ],
  },
  {
    id: "sharing",
    title: "4. Sharing of Information",
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following limited circumstances:`,
    items: [
      "Service Providers: Third-party vendors who assist us in operating the Service (e.g., Firebase for authentication and storage, hosting providers), bound by confidentiality agreements.",
      "Legal Obligations: When required by law, regulation, or valid legal process (e.g., subpoena or court order).",
      "Safety: To protect the rights, property, or safety of Tasky, our users, or the public.",
      "Business Transfers: In connection with a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.",
    ],
  },
  {
    id: "firebase",
    title: "5. Firebase and Third-Party Services",
    content: `Tasky uses Google Firebase for user authentication and file storage. Firebase may collect certain technical data as described in Google's Privacy Policy. We recommend reviewing Google's Privacy Policy at https://policies.google.com/privacy. We also use EmailJS to process contact form submissions. Messages sent through the contact form are handled according to EmailJS's privacy practices.`,
  },
  {
    id: "cookies",
    title: "6. Cookies and Local Storage",
    content: `We use browser cookies and local storage mechanisms solely to maintain your authenticated session and remember your preferences (e.g., dark/light theme). We do not use advertising or tracking cookies. You may disable cookies through your browser settings; however, doing so may affect the functionality of the Service.`,
  },
  {
    id: "security",
    title: "7. Data Security",
    content: `We implement reasonable technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:`,
    items: [
      "Passwords are hashed using industry-standard algorithms and are never stored in plain text.",
      "Authentication is managed via JSON Web Tokens (JWT) with short expiration windows.",
      "All data in transit is encrypted using HTTPS/TLS.",
      "Access to production systems is restricted to authorized personnel only.",
    ],
    footer: `Despite these measures, no security system is impenetrable. We cannot guarantee absolute security, and we encourage you to use a strong, unique password for your account.`,
  },
  {
    id: "retention",
    title: "8. Data Retention",
    content: `We retain your personal data for as long as your account is active or as necessary to provide the Service. If you request account deletion, we will delete or anonymize your data within 30 days, except where retention is required for legal, compliance, or fraud-prevention purposes.`,
  },
  {
    id: "rights",
    title: "9. Your Rights",
    content: `Depending on your jurisdiction, you may have the following rights regarding your personal data:`,
    items: [
      "Access: Request a copy of the personal data we hold about you.",
      "Correction: Request correction of inaccurate or incomplete data.",
      'Deletion: Request deletion of your personal data ("right to be forgotten").',
      "Portability: Request a machine-readable copy of your data.",
      "Objection: Object to certain types of processing, including profiling.",
      "Withdrawal of consent: Where processing is based on consent, you may withdraw it at any time.",
    ],
    footer: `To exercise any of these rights, please contact us through the Contact page. We will respond within 30 days.`,
  },
  {
    id: "minors",
    title: "10. Children's Privacy",
    content: `Tasky is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided personal data, we will take steps to delete such information promptly. If you believe a child under 13 has submitted data to us, please contact us immediately.`,
  },
  {
    id: "changes",
    title: "11. Changes to This Privacy Policy",
    content: `We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. Material changes will be communicated by a notice on the Service or by email. Your continued use of the Service after any changes constitutes your acceptance of the revised policy.`,
  },
  {
    id: "contact",
    title: "12. Contact Us",
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please reach out through our Contact page. You can also open an issue on our GitHub repository at https://github.com/bale231.`,
  },
];

const tableOfContents = sections.map((s) => ({ id: s.id, title: s.title }));

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gradient-animated min-h-screen relative">
      {/* Background orbs */}
      <div className="orb w-72 h-72 bg-blue-600 top-24 -right-20" />
      <div className="orb w-56 h-56 bg-purple-600 bottom-60 -left-16" />

      <div className="relative max-w-5xl mx-auto px-6 pt-36 pb-24">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 text-sm text-slate-300">
            <Shield className="w-4 h-4 text-green-400" />
            Your data, your rights
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Privacy{" "}
            <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-slate-400 text-sm">
            Last updated: <span className="text-slate-300">February 2026</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of contents — sticky sidebar */}
          <aside className="lg:col-span-1">
            <div className="glass rounded-2xl p-5 sticky top-28">
              <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-4">
                Contents
              </p>
              <nav className="flex flex-col gap-1">
                {tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-blue-300 py-1 transition-colors group"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-blue-400 flex-shrink-0 transition-colors" />
                    <span className="leading-snug">{item.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="glass rounded-2xl p-7 scroll-mt-28"
              >
                <h2 className="text-white font-bold text-xl mb-4">{section.title}</h2>

                {section.content && (
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {section.content}
                  </p>
                )}

                {"subsections" in section &&
                  section.subsections?.map((sub) => (
                    <div key={sub.title} className="mb-4">
                      <h3 className="text-slate-200 font-semibold text-sm mb-2">
                        {sub.title}
                      </h3>
                      <ul className="flex flex-col gap-2">
                        {sub.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-1.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                {"items" in section && section.items && (
                  <ul className="flex flex-col gap-2 mb-4">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {"footer" in section && section.footer && (
                  <p className="text-slate-400 text-sm leading-relaxed mt-2">
                    {section.footer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
