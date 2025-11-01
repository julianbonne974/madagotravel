import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonne 1 : À propos */}
          <div>
            <h3 className="text-xl font-bold mb-4">🌴 Madagotravel</h3>
            <p className="text-gray-300 mb-4">
              Tour-opérateur local basé à Madagascar, le berceau des animaux.
              Plus de 30 circuits et tours à travers Madagascar.
            </p>
            <p className="text-sm text-gray-400">
              Organisé par Alex et Patty
            </p>
          </div>

          {/* Colonne 2 : Nos circuits */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Circuits</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Tours du Sud (10-20 jours)</li>
              <li>Tours du Nord (5-30 jours)</li>
              <li>Excursions marines</li>
              <li>Circuits personnalisés</li>
            </ul>
          </div>

          {/* Colonne 3 : Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span className="text-sm">
                  {/* TODO: Remplacer par le vrai numéro */}
                  +261 34 XX XXX XX
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span className="text-sm">
                  {/* TODO: Remplacer par le vrai email */}
                  contact@madagotravel.mg
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span className="text-sm">Antananarivo, Madagascar</span>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} Madagotravel. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
