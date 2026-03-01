"use client";

import { motion } from "framer-motion";

export default function DeveloperIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 600 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-xl"
      >
        {/* ===== Background Glow ===== */}
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e1b4b" />
            <stop offset="100%" stopColor="#312e81" />
          </linearGradient>
          <linearGradient id="deskGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4338ca" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        <circle cx="300" cy="250" r="220" fill="url(#glow)" />

        {/* ===== Desk ===== */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Desk surface */}
          <rect
            x="100"
            y="340"
            width="400"
            height="12"
            rx="6"
            fill="url(#deskGrad)"
            className="dark:opacity-100 opacity-60"
          />
          <rect
            x="100"
            y="340"
            width="400"
            height="12"
            rx="6"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary-500/20"
            fill="none"
          />
          {/* Desk legs */}
          <rect
            x="140"
            y="352"
            width="8"
            height="60"
            rx="4"
            className="fill-primary-800/20 dark:fill-primary-300/20"
          />
          <rect
            x="452"
            y="352"
            width="8"
            height="60"
            rx="4"
            className="fill-primary-800/20 dark:fill-primary-300/20"
          />
        </motion.g>

        {/* ===== Monitor ===== */}
        <motion.g
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {/* Monitor stand */}
          <rect
            x="270"
            y="310"
            width="60"
            height="30"
            rx="4"
            className="fill-gray-400 dark:fill-gray-600"
          />
          <rect
            x="250"
            y="335"
            width="100"
            height="8"
            rx="4"
            className="fill-gray-400 dark:fill-gray-600"
          />

          {/* Monitor body */}
          <rect
            x="175"
            y="160"
            width="250"
            height="155"
            rx="12"
            className="fill-gray-800 dark:fill-gray-900"
          />
          {/* Screen */}
          <rect
            x="185"
            y="170"
            width="230"
            height="130"
            rx="6"
            fill="url(#screenGrad)"
          />
          {/* Monitor bezel bottom */}
          <circle
            cx="300"
            cy="322"
            r="4"
            className="fill-gray-500 dark:fill-gray-500"
          />

          {/* ===== Code lines on screen ===== */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            {/* Line 1 */}
            <motion.rect
              x="200"
              y="185"
              width="60"
              height="4"
              rx="2"
              fill="#818cf8"
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ delay: 1.2, duration: 0.4 }}
            />
            <motion.rect
              x="265"
              y="185"
              width="40"
              height="4"
              rx="2"
              fill="#a5b4fc"
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ delay: 1.4, duration: 0.3 }}
            />

            {/* Line 2 */}
            <motion.rect
              x="210"
              y="197"
              width="80"
              height="4"
              rx="2"
              fill="#c4b5fd"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 1.5, duration: 0.4 }}
            />
            <motion.rect
              x="295"
              y="197"
              width="30"
              height="4"
              rx="2"
              fill="#6366f1"
              initial={{ width: 0 }}
              animate={{ width: 30 }}
              transition={{ delay: 1.7, duration: 0.3 }}
            />

            {/* Line 3 */}
            <motion.rect
              x="210"
              y="209"
              width="50"
              height="4"
              rx="2"
              fill="#818cf8"
              initial={{ width: 0 }}
              animate={{ width: 50 }}
              transition={{ delay: 1.8, duration: 0.3 }}
            />
            <motion.rect
              x="265"
              y="209"
              width="70"
              height="4"
              rx="2"
              fill="#a5b4fc"
              initial={{ width: 0 }}
              animate={{ width: 70 }}
              transition={{ delay: 2.0, duration: 0.4 }}
            />

            {/* Line 4 */}
            <motion.rect
              x="220"
              y="221"
              width="90"
              height="4"
              rx="2"
              fill="#c4b5fd"
              initial={{ width: 0 }}
              animate={{ width: 90 }}
              transition={{ delay: 2.1, duration: 0.4 }}
            />

            {/* Line 5 */}
            <motion.rect
              x="220"
              y="233"
              width="45"
              height="4"
              rx="2"
              fill="#6366f1"
              initial={{ width: 0 }}
              animate={{ width: 45 }}
              transition={{ delay: 2.3, duration: 0.3 }}
            />
            <motion.rect
              x="270"
              y="233"
              width="55"
              height="4"
              rx="2"
              fill="#818cf8"
              initial={{ width: 0 }}
              animate={{ width: 55 }}
              transition={{ delay: 2.5, duration: 0.3 }}
            />

            {/* Line 6 */}
            <motion.rect
              x="210"
              y="245"
              width="70"
              height="4"
              rx="2"
              fill="#a5b4fc"
              initial={{ width: 0 }}
              animate={{ width: 70 }}
              transition={{ delay: 2.6, duration: 0.3 }}
            />

            {/* Line 7 */}
            <motion.rect
              x="200"
              y="257"
              width="55"
              height="4"
              rx="2"
              fill="#818cf8"
              initial={{ width: 0 }}
              animate={{ width: 55 }}
              transition={{ delay: 2.8, duration: 0.3 }}
            />

            {/* Blinking cursor */}
            <motion.rect
              x="260"
              y="257"
              width="2"
              height="8"
              rx="1"
              fill="#22d3ee"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.g>

          {/* Screen reflection */}
          <rect
            x="185"
            y="170"
            width="230"
            height="130"
            rx="6"
            fill="white"
            opacity="0.03"
          />
        </motion.g>

        {/* ===== Coffee Mug ===== */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
        >
          <rect
            x="440"
            y="310"
            width="28"
            height="32"
            rx="5"
            className="fill-gray-300 dark:fill-gray-500"
          />
          <path
            d="M468 318 Q480 318 480 328 Q480 338 468 338"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            className="text-gray-300 dark:text-gray-500"
          />
          {/* Steam */}
          <motion.path
            d="M450 305 Q453 295 450 285"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            className="text-gray-400/50 dark:text-gray-500/50"
            animate={{ y: [0, -5, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M458 307 Q461 297 458 287"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            className="text-gray-400/50 dark:text-gray-500/50"
            animate={{ y: [0, -6, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </motion.g>

        {/* ===== Plant ===== */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5, type: "spring" }}
        >
          {/* Pot */}
          <path d="M115 340 L120 310 L148 310 L153 340" fill="#e879a0" />
          <rect x="115" y="306" width="38" height="8" rx="3" fill="#ec4899" />
          {/* Leaves */}
          <motion.g
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "134px 306px" }}
          >
            <ellipse
              cx="125"
              cy="280"
              rx="10"
              ry="18"
              fill="#22c55e"
              transform="rotate(-20 125 280)"
            />
            <ellipse
              cx="143"
              cy="275"
              rx="10"
              ry="20"
              fill="#16a34a"
              transform="rotate(15 143 275)"
            />
            <ellipse
              cx="134"
              cy="270"
              rx="8"
              ry="22"
              fill="#4ade80"
              transform="rotate(0 134 270)"
            />
          </motion.g>
        </motion.g>

        {/* ===== Developer Person ===== */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.g
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Chair */}
            <ellipse
              cx="300"
              cy="420"
              rx="50"
              ry="8"
              className="fill-primary-800/15 dark:fill-primary-300/15"
            />
            <rect
              x="265"
              y="375"
              width="70"
              height="50"
              rx="10"
              className="fill-primary-700/30 dark:fill-primary-400/25"
            />
            <rect
              x="272"
              y="365"
              width="56"
              height="15"
              rx="6"
              className="fill-primary-700/25 dark:fill-primary-400/20"
            />
            {/* Chair back */}
            <rect
              x="325"
              y="320"
              width="12"
              height="60"
              rx="6"
              className="fill-primary-700/25 dark:fill-primary-400/20"
            />
            <rect
              x="320"
              y="310"
              width="22"
              height="15"
              rx="6"
              className="fill-primary-700/30 dark:fill-primary-400/25"
            />

            {/* Body / Torso */}
            <path d="M280 310 Q300 380 320 310" fill="#f0e6ff" />
            <rect
              x="272"
              y="260"
              width="56"
              height="70"
              rx="14"
              fill="#7c3aed"
            />

            {/* T-shirt visible at collar */}
            <path d="M285 262 Q300 275 315 262" fill="#f0e6ff" />

            {/* Head */}
            <circle cx="300" cy="230" r="30" fill="#fcd34d" />

            {/* Hair */}
            <path
              d="M270 225 Q270 195 300 190 Q330 195 330 225"
              fill="#7c3aed"
            />
            <path
              d="M268 228 Q268 200 300 193 Q332 200 332 228 L332 220 Q332 198 300 192 Q268 198 268 220 Z"
              fill="#6d28d9"
            />

            {/* Face */}
            <circle cx="290" cy="232" r="2.5" fill="#1e1b4b" />
            <circle cx="310" cy="232" r="2.5" fill="#1e1b4b" />
            <path
              d="M294 244 Q300 250 306 244"
              stroke="#1e1b4b"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
            />
            {/* Glasses */}
            <circle
              cx="290"
              cy="232"
              r="8"
              stroke="#374151"
              strokeWidth="1.5"
              fill="none"
              opacity="0.6"
            />
            <circle
              cx="310"
              cy="232"
              r="8"
              stroke="#374151"
              strokeWidth="1.5"
              fill="none"
              opacity="0.6"
            />
            <line
              x1="298"
              y1="232"
              x2="302"
              y2="232"
              stroke="#374151"
              strokeWidth="1.5"
              opacity="0.6"
            />

            {/* Arms on keyboard */}
            <path
              d="M272 285 L235 310 L260 335"
              stroke="#fcd34d"
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M328 285 L365 310 L340 335"
              stroke="#fcd34d"
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
            />
          </motion.g>
        </motion.g>

        {/* ===== Keyboard ===== */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <rect
            x="245"
            y="330"
            width="110"
            height="14"
            rx="4"
            className="fill-gray-300 dark:fill-gray-600"
          />
          {/* Key dots */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <rect
              key={i}
              x={253 + i * 13}
              y={334}
              width="8"
              height="5"
              rx="1"
              className="fill-gray-400 dark:fill-gray-500"
            />
          ))}
        </motion.g>

        {/* ===== Floating Tech Icons ===== */}

        {/* React icon */}
        <motion.g
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle
            cx="510"
            cy="180"
            r="22"
            fill="#1e293b"
            className="dark:fill-gray-800"
            opacity="0.9"
          />
          <circle cx="510" cy="180" r="4" fill="#61DAFB" />
          <ellipse
            cx="510"
            cy="180"
            rx="14"
            ry="5"
            stroke="#61DAFB"
            strokeWidth="1.5"
            fill="none"
          />
          <ellipse
            cx="510"
            cy="180"
            rx="14"
            ry="5"
            stroke="#61DAFB"
            strokeWidth="1.5"
            fill="none"
            transform="rotate(60 510 180)"
          />
          <ellipse
            cx="510"
            cy="180"
            rx="14"
            ry="5"
            stroke="#61DAFB"
            strokeWidth="1.5"
            fill="none"
            transform="rotate(-60 510 180)"
          />
        </motion.g>

        {/* Git icon */}
        <motion.g
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <circle
            cx="85"
            cy="170"
            r="20"
            fill="#1e293b"
            className="dark:fill-gray-800"
            opacity="0.9"
          />
          <path
            d="M85 155 L85 185 M78 163 L92 177 M92 163 L78 177"
            stroke="#f97316"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </motion.g>

        {/* Terminal / Code icon */}
        <motion.g
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <circle
            cx="530"
            cy="300"
            r="18"
            fill="#1e293b"
            className="dark:fill-gray-800"
            opacity="0.9"
          />
          <path
            d="M520 293 L528 300 L520 307"
            stroke="#22d3ee"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="531"
            y1="307"
            x2="540"
            y2="307"
            stroke="#22d3ee"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </motion.g>

        {/* ===== Floating Dots / Particles ===== */}
        <motion.circle
          cx="480"
          cy="140"
          r="3"
          fill="#818cf8"
          animate={{ y: [0, -10, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.circle
          cx="120"
          cy="220"
          r="2.5"
          fill="#f472b6"
          animate={{ y: [0, -8, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 0.7 }}
        />
        <motion.circle
          cx="550"
          cy="240"
          r="2"
          fill="#22d3ee"
          animate={{ y: [0, -12, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.8, repeat: Infinity, delay: 1.2 }}
        />
        <motion.circle
          cx="70"
          cy="300"
          r="3"
          fill="#fbbf24"
          animate={{ y: [0, -6, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.3 }}
        />
        <motion.circle
          cx="540"
          cy="370"
          r="2.5"
          fill="#a78bfa"
          animate={{ y: [0, -9, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3.2, repeat: Infinity, delay: 1.8 }}
        />

        {/* ===== Connecting dots (network feel) ===== */}
        <motion.line
          x1="480"
          y1="140"
          x2="510"
          y2="160"
          stroke="#818cf8"
          strokeWidth="0.5"
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.line
          x1="530"
          y1="282"
          x2="550"
          y2="240"
          stroke="#22d3ee"
          strokeWidth="0.5"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
      </svg>
    </div>
  );
}
