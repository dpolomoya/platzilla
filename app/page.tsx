"use client";
import { FaTwitter, FaTelegramPlane, FaDiscord } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-black via-red-900 to-black text-white">
      <h1 className="text-6xl font-extrabold text-red-500 mb-6 drop-shadow-lg">
        🔥 3310 🔥
      </h1>
      <p className="text-lg text-gray-300 mb-10 text-center max-w-xl">
        The next generation memecoin — nostalgic vibes, unstoppable power.
        Built for the community. Made for the culture.
      </p>
      <div className="flex space-x-8 text-3xl">
        <a
          href="https://twitter.com"
          target="_blank"
          className="hover:text-red-400 transition"
        >
          <FaTwitter />
        </a>
        <a
          href="https://t.me"
          target="_blank"
          className="hover:text-red-400 transition"
        >
          <FaTelegramPlane />
        </a>
        <a
          href="https://discord.com"
          target="_blank"
          className="hover:text-red-400 transition"
        >
          <FaDiscord />
        </a>
      </div>
    </main>
  );
}
