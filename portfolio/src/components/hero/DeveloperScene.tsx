"use client";

import { motion } from "framer-motion";

export default function DeveloperScene() {
  return (
    <motion.svg
      viewBox="0 0 480 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <defs>
        <linearGradient id="screenGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#312e81" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
        <linearGradient id="deskGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="50%" stopColor="#334155" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
        <linearGradient id="chairGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#374151" />
          <stop offset="100%" stopColor="#1f2937" />
        </linearGradient>
        <linearGradient id="shirtGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
        <radialGradient id="laptopGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#818cf8" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ── DESK ── */}
      <rect
        x="40"
        y="270"
        width="400"
        height="12"
        rx="6"
        fill="url(#deskGrad)"
      />
      <rect
        x="40"
        y="270"
        width="400"
        height="12"
        rx="6"
        stroke="#475569"
        strokeWidth="0.5"
        strokeOpacity="0.3"
      />
      {/* Desk legs */}
      <rect x="80" y="282" width="8" height="60" rx="2" fill="#334155" />
      <rect x="392" y="282" width="8" height="60" rx="2" fill="#334155" />
      {/* Desk shelf */}
      <rect
        x="80"
        y="320"
        width="320"
        height="4"
        rx="2"
        fill="#334155"
        fillOpacity="0.4"
      />

      {/* ── CHAIR ── */}
      {/* Chair back */}
      <rect
        x="200"
        y="155"
        width="80"
        height="100"
        rx="12"
        fill="url(#chairGrad)"
      />
      <rect
        x="200"
        y="155"
        width="80"
        height="100"
        rx="12"
        stroke="#4b5563"
        strokeWidth="0.5"
        strokeOpacity="0.4"
      />
      {/* Chair seat */}
      <rect x="190" y="250" width="100" height="14" rx="7" fill="#374151" />
      {/* Chair stem */}
      <rect x="236" y="264" width="8" height="30" rx="2" fill="#4b5563" />
      {/* Chair base */}
      <ellipse cx="240" cy="296" rx="30" ry="5" fill="#4b5563" />
      {/* Chair wheels */}
      <circle
        cx="215"
        cy="298"
        r="4"
        fill="#374151"
        stroke="#4b5563"
        strokeWidth="0.5"
      />
      <circle
        cx="265"
        cy="298"
        r="4"
        fill="#374151"
        stroke="#4b5563"
        strokeWidth="0.5"
      />

      {/* ── DEVELOPER (person) ── */}
      {/* Body / Torso */}
      <motion.g
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Head */}
        <ellipse cx="240" cy="148" rx="22" ry="24" fill="#d4a574" />
        {/* Hair */}
        <path
          d="M218 140 Q220 120 240 118 Q260 120 262 140 Q260 128 240 126 Q220 128 218 140"
          fill="#1e1b4b"
        />
        {/* Hair side left */}
        <path d="M218 140 Q216 150 218 155 L220 148 Z" fill="#1e1b4b" />
        {/* Hair side right */}
        <path d="M262 140 Q264 150 262 155 L260 148 Z" fill="#1e1b4b" />

        {/* Eyes */}
        <motion.g
          animate={{ scaleY: [1, 0.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
        >
          <ellipse cx="232" cy="148" rx="2.5" ry="2.5" fill="#1e293b" />
          <ellipse cx="248" cy="148" rx="2.5" ry="2.5" fill="#1e293b" />
        </motion.g>
        {/* Eye whites / glint */}
        <circle cx="233" cy="147" r="0.8" fill="white" />
        <circle cx="249" cy="147" r="0.8" fill="white" />

        {/* Mouth (slight smile) */}
        <path
          d="M234 156 Q240 160 246 156"
          stroke="#b45309"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Glasses */}
        <rect
          x="225"
          y="143"
          width="14"
          height="10"
          rx="4"
          fill="none"
          stroke="#6366f1"
          strokeWidth="1"
        />
        <rect
          x="241"
          y="143"
          width="14"
          height="10"
          rx="4"
          fill="none"
          stroke="#6366f1"
          strokeWidth="1"
        />
        <line
          x1="239"
          y1="148"
          x2="241"
          y2="148"
          stroke="#6366f1"
          strokeWidth="1"
        />

        {/* Neck */}
        <rect x="234" y="170" width="12" height="8" rx="3" fill="#d4a574" />

        {/* Shirt / Upper body */}
        <path
          d="M210 178 Q215 174 240 174 Q265 174 270 178 L275 250 L205 250 Z"
          fill="url(#shirtGrad)"
        />
        {/* Collar */}
        <path
          d="M228 174 L240 185 L252 174"
          fill="none"
          stroke="#818cf8"
          strokeWidth="1"
          strokeOpacity="0.5"
        />

        {/* Left arm (on desk / typing) */}
        <path
          d="M210 190 Q185 210 155 248 Q152 252 158 255"
          fill="none"
          stroke="#d4a574"
          strokeWidth="10"
          strokeLinecap="round"
        />
        {/* Left hand */}
        <ellipse cx="158" cy="256" rx="8" ry="5" fill="#d4a574" />

        {/* Right arm (on desk / typing) */}
        <path
          d="M270 190 Q295 210 325 248 Q328 252 322 255"
          fill="none"
          stroke="#d4a574"
          strokeWidth="10"
          strokeLinecap="round"
        />
        {/* Right hand */}
        <ellipse cx="322" cy="256" rx="8" ry="5" fill="#d4a574" />

        {/* Typing motion on left hand fingers */}
        <motion.g
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 0.2 }}
        >
          <circle cx="152" cy="254" r="2" fill="#c4956a" />
          <circle cx="158" cy="252" r="2" fill="#c4956a" />
        </motion.g>
        <motion.g
          animate={{ y: [0, -2, 0] }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            repeatDelay: 0.4,
            delay: 0.15,
          }}
        >
          <circle cx="318" cy="254" r="2" fill="#c4956a" />
          <circle cx="324" cy="252" r="2" fill="#c4956a" />
        </motion.g>
      </motion.g>

      {/* ── LAPTOP ── */}
      {/* Laptop glow effect */}
      <motion.ellipse
        cx="240"
        cy="250"
        rx="80"
        ry="40"
        fill="url(#laptopGlow)"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Laptop base */}
      <path
        d="M140 268 L120 270 L360 270 L340 268 Z"
        fill="#1e293b"
        stroke="#475569"
        strokeWidth="0.5"
      />
      <rect
        x="140"
        y="258"
        width="200"
        height="12"
        rx="2"
        fill="#1f2937"
        stroke="#475569"
        strokeWidth="0.5"
      />

      {/* Laptop keyboard dots */}
      {Array.from({ length: 8 }).map((_, i) =>
        Array.from({ length: 3 }).map((_, j) => (
          <rect
            key={`key-${i}-${j}`}
            x={158 + i * 20}
            y={260 + j * 3}
            width="12"
            height="2"
            rx="0.5"
            fill="#374151"
            fillOpacity="0.6"
          />
        )),
      )}

      {/* Laptop screen (tilted back) */}
      <path
        d="M155 258 L165 168 Q167 162 173 162 L307 162 Q313 162 314 168 L325 258 Z"
        fill="#111827"
        stroke="#374151"
        strokeWidth="1"
      />
      {/* Screen inner */}
      <path
        d="M162 255 L171 172 Q172 168 176 168 L304 168 Q308 168 308.5 172 L318 255 Z"
        fill="url(#screenGlow)"
      />

      {/* Animated code lines on laptop screen */}
      <motion.rect
        x="180"
        y="180"
        rx="1"
        height="3"
        fill="#818cf8"
        initial={{ width: 0 }}
        animate={{ width: 40 }}
        transition={{ delay: 1.0, duration: 0.3 }}
      />
      <motion.rect
        x="225"
        y="180"
        rx="1"
        height="3"
        fill="#a5b4fc"
        initial={{ width: 0 }}
        animate={{ width: 30 }}
        transition={{ delay: 1.2, duration: 0.3 }}
      />

      <motion.rect
        x="185"
        y="188"
        rx="1"
        height="3"
        fill="#c4b5fd"
        initial={{ width: 0 }}
        animate={{ width: 50 }}
        transition={{ delay: 1.3, duration: 0.3 }}
      />

      <motion.rect
        x="185"
        y="196"
        rx="1"
        height="3"
        fill="#86efac"
        initial={{ width: 0 }}
        animate={{ width: 60 }}
        transition={{ delay: 1.5, duration: 0.3 }}
      />

      <motion.rect
        x="185"
        y="204"
        rx="1"
        height="3"
        fill="#818cf8"
        initial={{ width: 0 }}
        animate={{ width: 35 }}
        transition={{ delay: 1.7, duration: 0.3 }}
      />
      <motion.rect
        x="225"
        y="204"
        rx="1"
        height="3"
        fill="#fbbf24"
        initial={{ width: 0 }}
        animate={{ width: 45 }}
        transition={{ delay: 1.9, duration: 0.3 }}
      />

      <motion.rect
        x="185"
        y="212"
        rx="1"
        height="3"
        fill="#a5b4fc"
        initial={{ width: 0 }}
        animate={{ width: 55 }}
        transition={{ delay: 2.0, duration: 0.3 }}
      />

      <motion.rect
        x="180"
        y="220"
        rx="1"
        height="3"
        fill="#c4b5fd"
        initial={{ width: 0 }}
        animate={{ width: 25 }}
        transition={{ delay: 2.2, duration: 0.3 }}
      />

      <motion.rect
        x="185"
        y="228"
        rx="1"
        height="3"
        fill="#818cf8"
        initial={{ width: 0 }}
        animate={{ width: 65 }}
        transition={{ delay: 2.4, duration: 0.3 }}
      />

      {/* Blinking cursor on screen */}
      <motion.rect
        x="180"
        y="238"
        width="6"
        height="8"
        rx="1"
        fill="#818cf8"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />

      {/* ── COFFEE MUG ── */}
      <g>
        <rect
          x="365"
          y="245"
          width="20"
          height="24"
          rx="4"
          fill="#78350f"
          fillOpacity="0.7"
        />
        <rect
          x="385"
          y="250"
          width="7"
          height="3"
          rx="1.5"
          fill="#78350f"
          fillOpacity="0.4"
        />
        {/* Steam */}
        <motion.path
          d="M370 242 Q375 234 380 242"
          stroke="#9CA3AF"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          animate={{ opacity: [0.2, 0.6, 0.2], y: [0, -4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
        <motion.path
          d="M375 240 Q378 232 381 240"
          stroke="#9CA3AF"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          animate={{ opacity: [0.1, 0.5, 0.1], y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
      </g>

      {/* ── PLANT ── */}
      <g>
        {/* Pot */}
        <path
          d="M80 249 L76 270 L104 270 L100 249 Z"
          fill="#92400e"
          fillOpacity="0.6"
        />
        <rect
          x="76"
          y="246"
          width="28"
          height="5"
          rx="2"
          fill="#92400e"
          fillOpacity="0.7"
        />

        {/* Leaves */}
        <motion.g
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "90px 246px" }}
        >
          <ellipse
            cx="80"
            cy="236"
            rx="8"
            ry="14"
            fill="#22c55e"
            fillOpacity="0.6"
            transform="rotate(-20, 80, 236)"
          />
          <ellipse
            cx="100"
            cy="232"
            rx="7"
            ry="12"
            fill="#16a34a"
            fillOpacity="0.65"
            transform="rotate(15, 100, 232)"
          />
          <ellipse
            cx="90"
            cy="228"
            rx="6"
            ry="16"
            fill="#22c55e"
            fillOpacity="0.55"
          />
          <ellipse
            cx="85"
            cy="240"
            rx="5"
            ry="10"
            fill="#15803d"
            fillOpacity="0.5"
            transform="rotate(-35, 85, 240)"
          />
        </motion.g>
        {/* Stem */}
        <line
          x1="90"
          y1="248"
          x2="90"
          y2="230"
          stroke="#15803d"
          strokeWidth="1.5"
        />
      </g>

      {/* ── CAT sleeping under desk ── */}
      <motion.g
        animate={{ y: [0, -1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Cat body */}
        <ellipse cx="300" cy="335" rx="28" ry="12" fill="#475569" />
        {/* Cat head */}
        <circle cx="270" cy="330" r="10" fill="#475569" />
        {/* Cat ears */}
        <polygon points="262,322 266,315 270,322" fill="#475569" />
        <polygon points="270,322 274,315 278,322" fill="#475569" />
        {/* Inner ears */}
        <polygon
          points="264,322 266,317 268,322"
          fill="#f9a8d4"
          fillOpacity="0.4"
        />
        <polygon
          points="272,322 274,317 276,322"
          fill="#f9a8d4"
          fillOpacity="0.4"
        />
        {/* Closed eyes (sleeping) */}
        <path
          d="M265 331 Q267 329 269 331"
          stroke="#1e293b"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M272 331 Q274 329 276 331"
          stroke="#1e293b"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />
        {/* Tail */}
        <motion.path
          d="M328 332 Q340 325 345 335 Q348 340 342 338"
          stroke="#475569"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          animate={{
            d: [
              "M328 332 Q340 325 345 335 Q348 340 342 338",
              "M328 332 Q342 328 346 336 Q350 342 344 340",
              "M328 332 Q340 325 345 335 Q348 340 342 338",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Zzz */}
        <motion.text
          x="255"
          y="318"
          fill="#94a3b8"
          fontSize="8"
          fontWeight="bold"
          animate={{ opacity: [0, 1, 0], y: [318, 310, 318] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          z
        </motion.text>
        <motion.text
          x="250"
          y="310"
          fill="#94a3b8"
          fontSize="6"
          fontWeight="bold"
          animate={{ opacity: [0, 1, 0], y: [310, 303, 310] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.4 }}
        >
          z
        </motion.text>
      </motion.g>
    </motion.svg>
  );
}
