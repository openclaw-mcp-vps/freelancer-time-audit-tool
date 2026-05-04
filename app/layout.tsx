import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Freelancer Time Audit Tool – Billing Accuracy for Agencies",
  description: "Audit freelancer timesheets for billing inconsistencies, break patterns, and productivity metrics. Generate client-facing reports instantly."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="24ff0159-f9e3-419b-8c5a-f2bfd1a368d1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
