"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MapPin,
  Calendar,
  Users,
  Check,
  Star,
  ArrowRight,
  Plane,
  Hotel,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Style Tripera */}
      <section id="accueil" className="relative pt-24 pb-12 px-4 lg:px-12">
        <div className="container mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-primary via-primary/95 to-primary/80 min-h-[600px] lg:min-h-[700px]">
            {/* Image de fond */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80"
                alt="Plage Nosy Be Madagascar"
                className="w-full h-full object-cover opacity-50"
              />
            </div>

            {/* Contenu Hero */}
            <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-20">
              <div className="max-w-2xl">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ color: '#FFFFFF' }}>
                  Explorez,
                  <br />
                  Rêvez, Voyagez
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed" style={{ color: '#FFFFFF' }}>
                  Découvrez les meilleures destinations de Madagascar et créez des expériences inoubliables
                </p>

                {/* Formulaire de recherche - Glassmorphism */}
                <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 max-w-3xl">
                  {/* Onglets */}
                  <div className="flex gap-4 mb-6">
                    <button className="flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-medium text-sm">
                      <Plane className="h-4 w-4" />
                      Circuit
                    </button>
                    <button className="flex items-center gap-2 text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-white/10">
                      <Hotel className="h-4 w-4" />
                      Hôtel
                    </button>
                  </div>

                  {/* Champs du formulaire */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-2xl p-4">
                      <label className="text-xs text-gray-500 mb-1 block">Ville de départ</label>
                      <input
                        type="text"
                        placeholder="Paris"
                        className="w-full text-gray-900 font-medium focus:outline-none"
                      />
                    </div>
                    <div className="bg-white rounded-2xl p-4">
                      <label className="text-xs text-gray-500 mb-1 block">Destination</label>
                      <input
                        type="text"
                        placeholder="Antananarivo"
                        className="w-full text-gray-900 font-medium focus:outline-none"
                      />
                    </div>
                    <div className="bg-white rounded-2xl p-4">
                      <label className="text-xs text-gray-500 mb-1 block">Départ</label>
                      <input
                        type="date"
                        className="w-full text-gray-900 font-medium focus:outline-none"
                      />
                    </div>
                    <div className="bg-white rounded-2xl p-4">
                      <label className="text-xs text-gray-500 mb-1 block">Retour</label>
                      <input
                        type="date"
                        className="w-full text-gray-900 font-medium focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section À Propos - Présentation Madagotravel */}
      <section className="py-32 px-4 lg:px-12 bg-white relative overflow-hidden">
        {/* Formes décoratives en arrière-plan */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* En-tête centré */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-6 py-3 rounded-full text-sm font-medium border border-primary/20">
                Le berceau des animaux
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Bienvenue chez{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Madagotravel
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Tour-opérateur local basé à Madagascar. Nous organisons{" "}
              <span className="font-bold text-primary">plus de 30 circuits</span> et tours diversifiés
              à travers ce magnifique pays.
            </p>
          </div>

          {/* Grille des circuits */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Carte 1 - Tours du Sud */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-[2rem] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative bg-white border-2 border-gray-100 rounded-[2rem] p-8 hover:border-orange-200 transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Tours du Sud</h3>
                <p className="text-gray-600 mb-4">
                  Découvrez les paysages emblématiques du sud malgache
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <span>De 10 à 20 jours</span>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-orange-600" />
                      Allée des Baobabs
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-orange-600" />
                      Parc de l'Isalo
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-orange-600" />
                      Plages d'Ifaty
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Carte 2 - Tours du Nord */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-600 rounded-[2rem] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative bg-white border-2 border-gray-100 rounded-[2rem] p-8 hover:border-teal-200 transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Tours du Nord</h3>
                <p className="text-gray-600 mb-4">
                  Explorez les merveilles du nord de Madagascar
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <span>De 5 à 30 jours</span>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-teal-600" />
                      Tsingy de Bemaraha
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-teal-600" />
                      Nosy Be
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-teal-600" />
                      Parc d'Ankarana
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Carte 3 - Excursions Marines */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-[2rem] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative bg-white border-2 border-gray-100 rounded-[2rem] p-8 hover:border-blue-200 transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Excursions Marines</h3>
                <p className="text-gray-600 mb-4">
                  Naviguez entre les archipels paradisiaques
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <span>De 3 à 10 jours</span>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-600" />
                      Île Sainte-Marie
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-600" />
                      Archipels de Nosy Be
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-600" />
                      Snorkeling & plongée
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Message des guides */}
          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-[2rem] p-12 text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-900 text-lg">Alex & Patty</p>
                <p className="text-sm text-gray-600">Vos guides locaux</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed italic">
              &quot;Nous vous invitons à découvrir la beauté exceptionnelle de Madagascar à travers nos
              circuits authentiques et personnalisés. Chaque voyage est une aventure unique.&quot;
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-xl transition-shadow rounded-full px-10">
                Découvrir nos circuits
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">30+</div>
              <div className="text-sm text-gray-600">Circuits disponibles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">15+</div>
              <div className="text-sm text-gray-600">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-sm text-gray-600">Voyageurs satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">100%</div>
              <div className="text-sm text-gray-600">Local & authentique</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Offres - Style Tripera */}
      <section className="py-20 px-4 lg:px-12">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Nos Circuits</h2>
              <div className="space-y-2">
                <button className="w-full text-left px-6 py-3 bg-secondary/30 text-gray-900 rounded-2xl font-medium text-sm hover:bg-secondary/40 transition">
                  Coups de cœur
                </button>
                <button className="w-full text-left px-6 py-3 text-gray-600 hover:bg-gray-50 rounded-2xl font-medium text-sm transition">
                  Tours du Sud
                </button>
                <button className="w-full text-left px-6 py-3 text-gray-600 hover:bg-gray-50 rounded-2xl font-medium text-sm transition">
                  Tours du Nord
                </button>
                <button className="w-full text-left px-6 py-3 text-gray-600 hover:bg-gray-50 rounded-2xl font-medium text-sm transition">
                  Excursions Marines
                </button>
              </div>
            </div>

            {/* Grille de destinations */}
            <div className="flex-1 grid md:grid-cols-2 gap-6">
              {/* Carte 1 - Allée des Baobabs */}
              <Card className="rounded-3xl border-0 shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-secondary/30 to-secondary/10 relative overflow-hidden rounded-3xl m-4">
                  <img
                    src="https://images.unsplash.com/photo-1589288421838-c1ef26c96d45?w=800&q=80"
                    alt="Allée des Baobabs"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">Allée des Baobabs</CardTitle>
                    <span className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      Ouest
                    </span>
                  </div>
                  <CardDescription className="text-sm">
                    Icône de Madagascar
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-secondary text-gray-900 hover:bg-secondary/90 rounded-full">
                    Réserver maintenant
                  </Button>
                </CardContent>
              </Card>

              {/* Carte 2 - Parc Andasibe */}
              <Card className="rounded-3xl border-0 shadow-lg overflow-hidden hover:shadow-xl transition-shadow bg-gradient-to-br from-teal-50 to-white">
                <div className="aspect-video bg-gradient-to-br from-teal-200/30 to-teal-100/10 relative overflow-hidden rounded-3xl m-4">
                  <img
                    src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80"
                    alt="Lémuriens Madagascar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">Parc d'Andasibe</CardTitle>
                    <span className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      Est
                    </span>
                  </div>
                  <CardDescription className="text-sm">
                    Observation des lémuriens
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-secondary text-gray-900 hover:bg-secondary/90 rounded-full">
                    Réserver maintenant
                  </Button>
                </CardContent>
              </Card>

              {/* Carte 3 - Nosy Be */}
              <Card className="rounded-3xl border-0 shadow-lg overflow-hidden hover:shadow-xl transition-shadow bg-gradient-to-br from-orange-50 to-white">
                <div className="aspect-video bg-gradient-to-br from-orange-200/30 to-orange-100/10 relative overflow-hidden rounded-3xl m-4">
                  <img
                    src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80"
                    alt="Nosy Be Plage"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">Nosy Be</CardTitle>
                    <span className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      Nord
                    </span>
                  </div>
                  <CardDescription className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-secondary text-gray-900 hover:bg-secondary/90 rounded-full">
                    Réserver maintenant
                  </Button>
                </CardContent>
              </Card>

              {/* Carte 4 - Tsingy */}
              <Card className="rounded-3xl border-0 shadow-lg overflow-hidden hover:shadow-xl transition-shadow bg-gradient-to-br from-purple-50 to-white">
                <div className="aspect-video bg-gradient-to-br from-purple-200/30 to-purple-100/10 relative overflow-hidden rounded-3xl m-4">
                  <img
                    src="https://images.unsplash.com/photo-1639309616087-cf8e1a8e8f3a?w=800&q=80"
                    alt="Tsingy de Bemaraha"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">Tsingy de Bemaraha</CardTitle>
                    <span className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      Ouest
                    </span>
                  </div>
                  <CardDescription className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-secondary text-gray-900 hover:bg-secondary/90 rounded-full">
                    Réserver maintenant
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section Circuits Populaires */}
      <section id="circuits" className="py-20 px-4 lg:px-12 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Circuits Populaires</h2>
            <p className="text-xl text-gray-600">
              Découvrez nos circuits les plus appréciés
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Circuit 1 */}
            <Card className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1589288421838-c1ef26c96d45?w=800&q=80"
                  alt="Grand Tour du Sud"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-xs font-medium">
                  Best-seller
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl mb-2">Grand Tour du Sud</CardTitle>
                <CardDescription className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    14j/13n
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    2-12 pers
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Allée des Baobabs au coucher du soleil</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Parc national de l'Isalo</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Plages d'Ifaty</span>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-xs text-gray-500">À partir de</p>
                      <p className="text-2xl font-bold text-primary">1,800€</p>
                    </div>
                  </div>
                  <Button className="w-full bg-secondary text-gray-900 hover:bg-secondary/90 rounded-full">
                    Demander un devis
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Circuit 2 */}
            <Card className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80"
                  alt="Découverte de l'Est"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl mb-2">Découverte de l'Est</CardTitle>
                <CardDescription className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    7j/6n
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    2-10 pers
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Observation des lémuriens</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Canal des Pangalanes</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Ankanin'ny Nofy</span>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-xs text-gray-500">À partir de</p>
                      <p className="text-2xl font-bold text-primary">950€</p>
                    </div>
                  </div>
                  <Button className="w-full bg-secondary text-gray-900 hover:bg-secondary/90 rounded-full">
                    Demander un devis
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Circuit 3 */}
            <Card className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80"
                  alt="Aventure du Nord"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl mb-2">Aventure du Nord</CardTitle>
                <CardDescription className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    10j/9n
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    2-8 pers
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Parc d'Ankarana et Tsingy</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Tsingy Rouges</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Nosy Be et îles</span>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-xs text-gray-500">À partir de</p>
                      <p className="text-2xl font-bold text-primary">1,400€</p>
                    </div>
                  </div>
                  <Button className="w-full bg-secondary text-gray-900 hover:bg-secondary/90 rounded-full">
                    Demander un devis
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Destinations */}
      <section id="destinations" className="py-20 px-4 lg:px-12">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Destinations</h2>
            <p className="text-xl text-gray-600">
              Les lieux incontournables de Madagascar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { name: "Isalo", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80" },
              { name: "Île Sainte-Marie", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80" },
              { name: "Antsirabe", image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&q=80" },
              { name: "Ifaty", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80" },
            ].map((dest, idx) => (
              <Card key={idx} className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105 overflow-hidden group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold">{dest.name}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section id="temoignages" className="py-20 px-4 lg:px-12 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ce que disent nos voyageurs</h2>
            <p className="text-xl text-gray-600">
              Témoignages authentiques de nos clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Sophie M.",
                country: "France",
                text: "Un voyage absolument inoubliable ! Alex et Patty ont été des guides exceptionnels.",
              },
              {
                name: "Jean-Pierre L.",
                country: "Belgique",
                text: "Le Grand Tour du Sud était parfaitement organisé. Les paysages sont à couper le souffle.",
              },
              {
                name: "Marie D.",
                country: "Suisse",
                text: "Observer les baleines à Sainte-Marie était un rêve devenu réalité. Merci à toute l'équipe !",
              },
            ].map((testimonial, idx) => (
              <Card key={idx} className="rounded-3xl border-0 shadow-lg">
                <CardHeader>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.country}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">&quot;{testimonial.text}&quot;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 lg:px-12">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-[2.5rem] p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <img
                src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1600&q=80"
                alt="Background"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Prêt pour l'aventure ?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contactez-nous dès aujourd'hui pour planifier votre voyage de rêve à Madagascar
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-12 text-lg">
                Contactez-nous
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
