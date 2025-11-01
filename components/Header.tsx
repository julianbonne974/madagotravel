"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import LemurLogo from "@/components/LemurLogo";

const navigation = [
  { name: "Accueil", href: "#accueil" },
  { name: "Circuits", href: "#circuits" },
  { name: "Destinations", href: "#destinations" },
  { name: "Témoignages", href: "#temoignages" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <nav className="container mx-auto px-6 lg:px-12 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#accueil" className="flex items-center space-x-3">
            <LemurLogo />
            <span className="text-xl font-bold text-gray-900">Madagotravel</span>
          </a>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Button
              size="lg"
              className="bg-secondary text-gray-900 hover:bg-secondary/90 rounded-full px-8"
            >
              Contactez-nous
            </Button>
          </div>

          {/* Menu burger mobile */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Menu mobile */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-base font-medium text-gray-700 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button className="w-full mt-4 bg-secondary text-gray-900 hover:bg-secondary/90 rounded-full">
              Contactez-nous
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
