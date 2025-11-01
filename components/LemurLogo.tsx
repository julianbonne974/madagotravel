"use client";

import { motion } from "framer-motion";

export default function LemurLogo() {
  return (
    <div className="relative w-12 h-12">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Tout le lémurien saute ensemble */}
        <motion.g
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatDelay: 1,
            ease: [0.6, 0.05, 0.01, 0.9],
          }}
        >
          {/* Queue rayée reliée au corps - Style King Julien */}
          <motion.g
            animate={{
              rotate: [0, -5, 0, 5, 0],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "38px 70px" }}
          >
            <path
              d="M 38 70 Q 25 65 18 55 Q 12 45 10 35 Q 9 25 12 18"
              stroke="#E5E7EB"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
            />
            {/* Rayures noires de la queue */}
            <rect x="32" y="68" width="6" height="6" fill="#1F2937" rx="3" />
            <rect x="22" y="62" width="6" height="6" fill="#1F2937" rx="3" />
            <rect x="16" y="52" width="6" height="6" fill="#1F2937" rx="3" />
            <rect x="11" y="42" width="6" height="6" fill="#1F2937" rx="3" />
            <rect x="9" y="32" width="6" height="6" fill="#1F2937" rx="3" />
            <rect x="10" y="22" width="5" height="5" fill="#1F2937" rx="2" />
          </motion.g>

          {/* Corps - profil - Se compresse légèrement au saut */}
          <motion.g
            animate={{
              scaleY: [1, 0.95, 1.05, 1],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "50px 60px" }}
          >
            <ellipse cx="50" cy="60" rx="16" ry="20" fill="#D1D5DB" />
            <ellipse cx="48" cy="58" rx="13" ry="17" fill="#E5E7EB" />
            <ellipse cx="48" cy="62" rx="10" ry="14" fill="#F3F4F6" />
          </motion.g>

          {/* Tête - profil gauche */}
          <ellipse cx="60" cy="35" rx="14" ry="16" fill="#D1D5DB" />
          <ellipse cx="62" cy="36" rx="11" ry="13" fill="#E5E7EB" />

          {/* Oreille gauche visible */}
          <ellipse cx="55" cy="22" rx="5" ry="10" fill="#9CA3AF" transform="rotate(-10 55 22)" />
          <ellipse cx="55" cy="24" rx="3" ry="6" fill="#D1D5DB" transform="rotate(-10 55 24)" />

          {/* Museau - profil */}
          <ellipse cx="72" cy="40" rx="8" ry="7" fill="white" />

          {/* Nez noir */}
          <ellipse cx="78" cy="38" rx="2.5" ry="3" fill="#1F2937" />

          {/* Oeil - grand et expressif jaune/orange */}
          <ellipse cx="65" cy="32" rx="7" ry="9" fill="white" />
          <ellipse cx="65" cy="32" rx="6" ry="8" fill="#FCD34D" />
          <ellipse cx="66" cy="33" rx="4" ry="5" fill="#F97316" />
          <circle cx="67" cy="34" r="2.5" fill="#1F2937" />
          <circle cx="68" cy="33" r="1.2" fill="white" />

          {/* Bouche souriante */}
          <path
            d="M 72 43 Q 74 46 76 43"
            stroke="#1F2937"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />

          {/* Bras avant - levés en sautant */}
          <motion.g
            animate={{
              rotate: [0, -15, -10, 0],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "62px 50px" }}
          >
            <ellipse cx="62" cy="50" rx="3.5" ry="12" fill="#9CA3AF" transform="rotate(20 62 50)" />
            <ellipse cx="62" cy="50" rx="2.5" ry="10" fill="#D1D5DB" transform="rotate(20 62 50)" />
          </motion.g>

          {/* Bras arrière */}
          <motion.g
            animate={{
              rotate: [0, 15, 10, 0],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "42px 52px" }}
          >
            <ellipse cx="42" cy="52" rx="3.5" ry="12" fill="#9CA3AF" transform="rotate(10 42 52)" />
            <ellipse cx="42" cy="52" rx="2.5" ry="10" fill="#D1D5DB" transform="rotate(10 42 52)" />
          </motion.g>

          {/* Pattes - Se replient au saut */}
          <motion.g
            animate={{
              rotate: [0, -25, -20, 0],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "58px 75px" }}
          >
            <ellipse cx="58" cy="75" rx="3.5" ry="11" fill="#6B7280" />
            <ellipse cx="58" cy="75" rx="2.5" ry="9" fill="#9CA3AF" />
            <ellipse cx="58" cy="84" rx="4" ry="3" fill="#6B7280" />
          </motion.g>

          <motion.g
            animate={{
              rotate: [0, -25, -20, 0],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "40px 75px" }}
          >
            <ellipse cx="40" cy="75" rx="3.5" ry="11" fill="#6B7280" />
            <ellipse cx="40" cy="75" rx="2.5" ry="9" fill="#9CA3AF" />
            <ellipse cx="40" cy="84" rx="4" ry="3" fill="#6B7280" />
          </motion.g>
        </motion.g>
      </svg>
    </div>
  );
}
