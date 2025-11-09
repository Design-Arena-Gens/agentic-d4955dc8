import type { Metadata } from "next";
import "./globals.css";

const businessName = "Dwarka Electrical Experts";
const businessTagline =
  "Trusted Electrical & Appliance Repair in Dwarka | द्वारका में भरोसेमंद इलेक्ट्रिकल सेवा";

export const metadata: Metadata = {
  title: businessName,
  description: businessTagline,
  openGraph: {
    title: businessName,
    description: businessTagline,
    locale: "en_IN",
    type: "website"
  },
  metadataBase: new URL("https://agentic-d4955dc8.vercel.app")
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
