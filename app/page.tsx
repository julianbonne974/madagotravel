"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight, ArrowLeft, Cloud, CloudRain, Sun } from "lucide-react";
import LemurLogo from "@/components/LemurLogo";

// Destinations avec vraies photos
const destinations = [
  {
    id: 1,
    name: "Nosy Be",
    category: "PLAGE PARADISIAQUE",
    location: "Nord-Ouest de Madagascar",
    coords: { lat: "13.3247° S", lng: "48.2663° E" },
    weather: { temp: 28, condition: "sunny", icon: Sun },
    description: "Surnommée l'île aux parfums, Nosy Be est un véritable joyau de l'océan Indien. Découvrez ses plages de sable blanc immaculées, ses eaux turquoise cristallines et ses couchers de soleil à couper le souffle. L'île abrite une biodiversité marine exceptionnelle, idéale pour la plongée sous-marine et le snorkeling. Les plantations d'ylang-ylang parfument l'air d'une douce fragrance tropicale.",
    highlights: [
      "Plongée dans des eaux cristallines",
      "Îles paradisiaques environnantes",
      "Plantations d'ylang-ylang",
      "Vie marine exceptionnelle"
    ],
    image: "/images/hero-beach.jpeg",
  },
  {
    id: 2,
    name: "Allée des Baobabs",
    category: "ICON DE MADAGASCAR",
    location: "Région de Menabe",
    coords: { lat: "20.2508° S", lng: "44.4195° E" },
    weather: { temp: 32, condition: "sunny", icon: Sun },
    description: "L'Allée des Baobabs est l'un des sites les plus emblématiques et photographiés de Madagascar. Ces arbres millénaires, pouvant atteindre 30 mètres de haut, créent une avenue majestueuse et surréaliste. Le coucher du soleil transforme ce lieu en un spectacle de couleurs inoubliable, où les silhouettes des baobabs se découpent sur un ciel flamboyant.",
    highlights: [
      "Baobabs millénaires géants",
      "Couchers de soleil spectaculaires",
      "Site le plus photographié",
      "Arbres endémiques uniques"
    ],
    image: "/images/destination-1.jpg",
  },
  {
    id: 3,
    name: "Tsingy de Bemaraha",
    category: "PATRIMOINE UNESCO",
    location: "Ouest de Madagascar",
    coords: { lat: "18.6667° S", lng: "44.7833° E" },
    weather: { temp: 30, condition: "cloudy", icon: Cloud },
    description: "Le Tsingy de Bemaraha est une formation géologique unique au monde, classée au patrimoine mondial de l'UNESCO. Ces cathédrales de calcaire acéré forment un labyrinthe spectaculaire de pics et de canyons. Les parcours en via ferrata offrent une expérience d'aventure exceptionnelle au cœur de ce paysage lunaire habité par une faune endémique rare.",
    highlights: [
      "Formation géologique unique",
      "Patrimoine mondial UNESCO",
      "Via ferrata spectaculaire",
      "Lémuriens endémiques rares"
    ],
    image: "/images/destination-2.jpg",
  },
  {
    id: 4,
    name: "Parc d'Andasibe",
    category: "ROYAUME DES LÉMURIENS",
    location: "Est d'Antananarivo",
    coords: { lat: "18.9333° S", lng: "48.4167° E" },
    weather: { temp: 22, condition: "rainy", icon: CloudRain },
    description: "Le Parc National d'Andasibe-Mantadia est le sanctuaire de l'Indri-Indri, le plus grand lémurien de Madagascar. Son chant mystique résonne à travers la forêt primaire dès l'aube. Cette réserve abrite une biodiversité exceptionnelle avec plus de 100 espèces d'orchidées, des caméléons multicolores et 14 espèces de lémuriens dans un écosystème préservé.",
    highlights: [
      "Indri-Indri, plus grand lémurien",
      "Forêt primaire luxuriante",
      "100+ espèces d'orchidées",
      "14 espèces de lémuriens"
    ],
    image: "/images/destination-3.jpg",
  },
];

export default function Home() {
  const [showAbout, setShowAbout] = useState(true);
  const [currentDestination, setCurrentDestination] = useState(0);
  const destination = destinations[currentDestination];
  const WeatherIcon = destination.weather.icon;

  const nextDestination = () => {
    setShowAbout(false);
    setCurrentDestination((prev) => (prev + 1) % destinations.length);
  };

  const prevDestination = () => {
    setCurrentDestination((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  const showCircuits = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowAbout(false);
  };

  const showAboutPage = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowAbout(true);
  };

  // Page À propos
  if (showAbout) {
    return (
      <div className="relative min-h-screen bg-black">
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Section image gauche (70%) - Image de Madagascar - EN HAUT SUR MOBILE */}
          <div className="relative w-full lg:w-[60%] min-h-screen z-0">
          <div className="relative w-full h-full">
            {/* Image de fond */}
            <img
              src="/images/about-baobabs.jpg"
              alt="Baobabs de Madagascar au coucher du soleil"
              className="w-full h-full object-cover"
            />

            {/* Overlay gradient - Plus sombre pour meilleure visibilité */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

            {/* NAVBAR en haut - VISIBLE UNIQUEMENT SUR MOBILE */}
            <div className="absolute top-0 left-0 right-0 z-30 lg:hidden">
              <div className="bg-black/40 backdrop-blur-sm border-b border-white/20 px-4 py-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm">🐒</span>
                    <span className="text-xs font-bold text-white">Madagotravel</span>
                  </div>
                  <nav className="flex items-center gap-4">
                    <a href="#apropos" className="text-xs font-medium text-white hover:text-white/80">À propos</a>
                    <a href="#circuits" onClick={showCircuits} className="text-xs font-medium text-white hover:text-white/80 cursor-pointer">Circuits</a>
                    <a href="#contact" className="text-xs font-medium text-white hover:text-white/80">Contact</a>
                  </nav>
                </div>
              </div>
            </div>

            {/* Logo en haut à gauche - DESKTOP UNIQUEMENT */}
            <div className="hidden lg:block absolute top-8 left-8 z-20">
              <div className="bg-white/15 backdrop-blur-md rounded-2xl px-5 py-4 border border-white/30 shadow-2xl">
                <div className="flex items-center gap-2">
                  <LemurLogo />
                  <span className="text-white font-bold text-xl">Madagotravel</span>
                </div>
              </div>
            </div>

            {/* Contenu - MOBILE: flex column, DESKTOP: absolute centered */}
            <div className="lg:absolute lg:inset-0 z-10 flex flex-col lg:flex-row lg:items-center px-4 lg:px-16 pt-16 lg:pt-0 pb-8 lg:pb-0 min-h-screen lg:min-h-0">
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Titre principal - Bien visible */}
                  <h1 className="text-4xl lg:text-8xl font-black text-white mb-6 lg:mb-8 leading-tight drop-shadow-2xl">
                    Découvrez<br />Madagascar
                  </h1>

                  {/* Sous-titre - Bien visible */}
                  <p className="text-lg lg:text-3xl text-white font-semibold mb-4 lg:mb-6 leading-relaxed drop-shadow-lg">
                    Vivez une aventure unique avec vos guides passionnés
                  </p>

                  {/* Description */}
                  <p className="text-sm lg:text-xl text-white/95 mb-8 lg:mb-12 leading-relaxed max-w-xl drop-shadow-md">
                    Alex et Patty, guides malgaches passionnés, vous accompagnent pour explorer les trésors cachés de l'île Rouge. Circuits authentiques, rencontres inoubliables et moments magiques vous attendent.
                  </p>

                  {/* CTA - Plus visible */}
                  <button
                    onClick={() => setShowAbout(false)}
                    className="group px-6 py-3 lg:px-12 lg:py-6 rounded-full font-black text-base lg:text-xl transition-all flex items-center gap-2 lg:gap-3 shadow-2xl hover:scale-105 relative z-50 cursor-pointer"
                    style={{
                      background: '#D4AF37',
                      backgroundColor: '#D4AF37',
                      backgroundImage: 'none',
                      color: '#ffffff',
                      textShadow: 'none',
                      filter: 'none',
                      border: 'none',
                      WebkitTextFillColor: '#ffffff',
                      WebkitBackgroundClip: 'unset'
                    } as React.CSSProperties}
                  >
                    <span style={{
                      color: '#ffffff',
                      textShadow: 'none',
                      backgroundImage: 'none',
                      WebkitTextFillColor: '#ffffff',
                      WebkitBackgroundClip: 'unset'
                    } as React.CSSProperties}>
                      Découvrir nos circuits
                    </span>
                    <ArrowRight
                      className="h-5 w-5 lg:h-6 lg:w-6 group-hover:translate-x-2 transition-transform"
                      style={{
                        color: '#ffffff',
                        filter: 'none',
                        stroke: '#ffffff'
                      }}
                    />
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

          {/* Panneau latéral droit - Alex & Patty - EN BAS SUR MOBILE */}
          <div className="relative w-full lg:w-[40%] bg-[#F5F1E8] overflow-y-auto">
          <div className="min-h-full flex flex-col">
            {/* NAVBAR en haut - VISIBLE UNIQUEMENT SUR DESKTOP */}
            <div className="hidden lg:block bg-white/40 backdrop-blur-sm border-b border-gray-300/30 px-6 lg:px-8 py-4">
              <nav className="flex items-center justify-center gap-6">
                <a href="#apropos" className="text-sm font-medium text-gray-700 hover:text-gray-900 cursor-pointer">À propos</a>
                <a href="#circuits" onClick={showCircuits} className="text-sm font-medium text-gray-700 hover:text-gray-900 cursor-pointer">Circuits</a>
                <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-gray-900">Contact</a>
              </nav>
            </div>

            <div className="flex-1 flex flex-col justify-center p-8 lg:p-12">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {/* Titre */}
                <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-12 leading-tight">
                  Alex & Patty
                </h2>

                {/* Description */}
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg font-semibold text-gray-900">
                    Vos guides malgaches passionnés
                  </p>

                  <p className="text-base">
                    <span className="font-semibold text-primary">Alex</span> et <span className="font-semibold text-accent">Patty</span> sont <span className="font-bold">malgaches</span>, nés et élevés à Madagascar. Diplômés de l'université en <span className="font-semibold">histoire naturelle de Madagascar</span>, ils sont titulaires du <span className="font-semibold">diplôme d'État de guide</span>.
                  </p>

                  <p className="text-base">
                    Leur passion pour leur île natale et leur expertise approfondie de la faune, de la flore et de la culture malgache font d'eux des guides exceptionnels. Ils parlent couramment <span className="font-semibold">français, italien, anglais et malgache</span>, garantissant une communication fluide et des échanges enrichissants tout au long de votre voyage.
                  </p>

                  <p className="text-base">
                    Avec <span className="font-bold text-gray-900">Madagotravel</span>, vous découvrirez Madagascar à travers les yeux de ceux qui la connaissent le mieux : des experts locaux qui vivent et respirent cette terre exceptionnelle chaque jour.
                  </p>

                  <div className="bg-white/50 rounded-2xl p-6 mt-8">
                    <h3 className="font-bold text-gray-900 mb-3 uppercase tracking-wider text-sm">
                      Notre engagement
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">Circuits sur mesure adaptés à vos envies</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">Tourisme responsable et écologique</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">Accompagnement multilingue 24/7</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">Expériences authentiques hors sentiers battus</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }

  // Page Circuits
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Section image gauche (70%) */}
      <div className="fixed inset-y-0 left-0 right-0 lg:right-[40%] z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={destination.id}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7 }}
            className="relative w-full h-full"
          >
            {/* Image de fond */}
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover"
            />

            {/* Overlay gradient subtil */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />

            {/* NAVBAR en haut - VISIBLE UNIQUEMENT SUR MOBILE */}
            <div className="absolute top-0 left-0 right-0 z-30 lg:hidden">
              <div className="bg-black/40 backdrop-blur-sm border-b border-white/20 px-4 py-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm">🐒</span>
                    <span className="text-xs font-bold text-white">Madagotravel</span>
                  </div>
                  <nav className="flex items-center gap-4">
                    <a href="#apropos" onClick={showAboutPage} className="text-xs font-medium text-white hover:text-white/80 cursor-pointer">À propos</a>
                    <a href="#circuits" className="text-xs font-medium text-white hover:text-white/80">Circuits</a>
                    <a href="#contact" className="text-xs font-medium text-white hover:text-white/80">Contact</a>
                  </nav>
                </div>
              </div>
            </div>

            {/* Logo en haut à gauche - DESKTOP UNIQUEMENT */}
            <div className="hidden lg:flex absolute top-8 left-8 items-center gap-3 z-20">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/20">
                <div className="flex items-center gap-2">
                  <LemurLogo />
                  <span className="text-white font-bold text-lg">Madagotravel</span>
                </div>
              </div>
            </div>

            {/* Widget météo en haut à droite */}
            <motion.div
              key={`weather-${destination.id}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute top-8 right-8 z-20"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20">
                <div className="flex items-center gap-4">
                  <WeatherIcon className="h-8 w-8 text-white" />
                  <div>
                    <p className="text-white text-3xl font-bold">{destination.weather.temp}°C</p>
                    <p className="text-white/80 text-xs uppercase tracking-wide">Aujourd'hui</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Nom de destination en ÉNORME */}
            <motion.div
              key={`title-${destination.id}`}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-32 left-8 lg:left-16 z-20"
            >
              <h1 className="text-[12vw] lg:text-[8vw] font-black text-white leading-none tracking-tight">
                {destination.name.split(' ')[0]}
                {destination.name.split(' ')[1] && (
                  <>
                    <br />
                    {destination.name.split(' ').slice(1).join(' ')}
                  </>
                )}
              </h1>
              <p className="text-white/90 text-lg lg:text-xl mt-6 max-w-md font-light">
                {destination.location}
              </p>
            </motion.div>


            {/* Navigation flèches CENTRÉES en bas avec "CIRCUITS" */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
              <div className="flex flex-col items-center gap-3">
                <span className="text-white/60 text-xs uppercase tracking-widest font-semibold">
                  Circuits
                </span>
                <div className="flex gap-3">
                  <button
                    onClick={prevDestination}
                    className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all"
                  >
                    <ArrowLeft className="h-5 w-5 text-white" />
                  </button>
                  <button
                    onClick={nextDestination}
                    className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all"
                  >
                    <ArrowRight className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Indicateur de progression mobile */}
            <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex gap-2 z-20 lg:hidden">
              {destinations.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all ${
                    index === currentDestination
                      ? "w-8 bg-white"
                      : "w-1 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Panneau latéral droit fixe (30%) - Style Pérou */}
      <div className="fixed inset-y-0 right-0 w-full lg:w-[40%] bg-[#F5F1E8] z-30 overflow-y-auto">
        <div className="min-h-full flex flex-col">
          {/* NAVBAR en haut - VISIBLE SUR MOBILE */}
          <div className="lg:hidden bg-white/40 backdrop-blur-sm border-b border-gray-300/30 px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="text-sm">🐒</span>
                <span className="text-xs font-bold text-gray-900">Madagotravel</span>
              </div>
              <nav className="flex items-center gap-4">
                <a href="#apropos" onClick={showAboutPage} className="text-xs font-medium text-gray-700 hover:text-gray-900 cursor-pointer">À propos</a>
                <a href="#circuits" className="text-xs font-medium text-gray-700 hover:text-gray-900">Circuits</a>
                <a href="#contact" className="text-xs font-medium text-gray-700 hover:text-gray-900">Contact</a>
              </nav>
            </div>
          </div>

          {/* NAVBAR en haut - VISIBLE UNIQUEMENT SUR DESKTOP */}
          <div className="hidden lg:block bg-white/40 backdrop-blur-sm border-b border-gray-300/30 px-6 lg:px-8 py-4">
            <nav className="flex items-center justify-center gap-6">
              <a href="#apropos" onClick={showAboutPage} className="text-sm font-medium text-gray-700 hover:text-gray-900 cursor-pointer">À propos</a>
              <a href="#circuits" className="text-sm font-medium text-gray-700 hover:text-gray-900">Circuits</a>
              <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-gray-900">Contact</a>
            </nav>
          </div>

          {/* Image de destination - MOBILE UNIQUEMENT */}
          <div className="lg:hidden border-b border-gray-300/30">
            <AnimatePresence mode="wait">
              <motion.div
                key={`mobile-image-${destination.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-60"
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation circuits - MOBILE UNIQUEMENT */}
          <div className="lg:hidden bg-white/50 backdrop-blur-sm border-b border-gray-300/30 px-6 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={prevDestination}
                className="w-10 h-10 rounded-full bg-gray-900/10 backdrop-blur-md border border-gray-900/20 flex items-center justify-center hover:bg-gray-900/20 transition-all active:scale-95"
              >
                <ArrowLeft className="h-5 w-5 text-gray-900" />
              </button>

              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-600 uppercase tracking-wide font-semibold mb-1">
                  Circuit suivant
                </span>
                <div className="flex gap-1.5">
                  {destinations.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 rounded-full transition-all ${
                        index === currentDestination
                          ? "w-6 bg-gray-900"
                          : "w-1 bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={nextDestination}
                className="w-10 h-10 rounded-full bg-gray-900/10 backdrop-blur-md border border-gray-900/20 flex items-center justify-center hover:bg-gray-900/20 transition-all active:scale-95"
              >
                <ArrowRight className="h-5 w-5 text-gray-900" />
              </button>
            </div>
          </div>

          {/* Header avec localisation */}
          <div className="p-6 lg:p-8 border-b border-gray-300/30">
            <AnimatePresence mode="wait">
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Localisation */}
                <div className="bg-white/50 rounded-2xl p-4 inline-block">
                  <h3 className="text-xs font-bold text-gray-900 mb-2 uppercase tracking-wider">
                    Localisation
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <span className="font-semibold">{destination.location}</span>
                    <br />
                    Madagascar
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Contenu principal */}
          <AnimatePresence mode="wait">
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="flex-1 p-6 lg:p-8"
            >
              {/* Badge catégorie */}
              <div className="inline-block mb-6">
                <span className="bg-[#D4AF37] text-gray-900 px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider">
                  {destination.category}
                </span>
              </div>

              {/* Titre */}
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-none">
                {destination.name}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-8 text-base">
                {destination.description}
              </p>

              {/* Points forts */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">
                  Points forts
                </h3>
                <div className="space-y-3">
                  {destination.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Footer avec CTA - Section jaune */}
          <div className="bg-[#D4AF37] p-6 lg:p-8">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-gray-900 font-medium mb-2">
                  Organisé par Alex & Patty
                </p>
                <p className="text-gray-800 text-sm">
                  Guides passionnés depuis 2015
                </p>
              </div>
              <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-all flex items-center gap-2 whitespace-nowrap">
                Réserver
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
