import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Madagotravel - Le berceau des animaux | Tours & Circuits Madagascar",
  description: "Madagotravel est un tour-opérateur local basé à Madagascar. Plus de 30 circuits et tours : Tours du Sud (10-20 jours), Tours du Nord (5-30 jours), Excursions marines. Découvrez Madagascar avec Alex et Patty.",
  keywords: "Madagascar, Madagotravel, guide touristique, circuits Madagascar, tours Madagascar, voyage Madagascar, Nosy Be, Allée Baobabs, Tsingy, lémuriens, tour-opérateur Madagascar, excursions marines",
  openGraph: {
    title: "Madagotravel - Le berceau des animaux",
    description: "Plus de 30 circuits et tours à Madagascar avec Alex et Patty",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
        <Toaster position="top-center" richColors />

        {/* Formulaire caché pour Netlify Forms */}
        <form
          name="contact"
          data-netlify="true"
          hidden
        >
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <input type="text" name="country" />
          <input type="date" name="travelDate" />
          <input type="number" name="groupSize" />
          <select name="circuitType">
            <option value="">Type de circuit</option>
          </select>
          <select name="budget">
            <option value="">Budget</option>
          </select>
          <textarea name="message"></textarea>
          <input type="checkbox" name="newsletter" />
        </form>
      </body>
    </html>
  );
}
