'use client';

import { Prayer } from '@/types/prayer';

interface PrayerCardProps {
  prayer: Prayer;
  onClick: () => void;
}

/**
 * PrayerCard - Kachel-Komponente für Gebetsanliegen
 * 
 * Zeigt Titel und Textauszug einer Gebetsanliege.
 * Farben:
 * - Türkis/Rosa für offene Gebete
 * - Pastellgrün für beantwortete Gebete
 */
export default function PrayerCard({ prayer, onClick }: PrayerCardProps) {
  // Textauszug (erste 100 Zeichen)
  const excerpt = prayer.description.length > 100
    ? prayer.description.substring(0, 100) + '...'
    : prayer.description;

  // Farben basierend auf Status
  const cardColors = prayer.isAnswered
    ? 'bg-green-200 border-green-300 hover:bg-green-300' // Pastellgrün für beantwortete Gebete
    : 'bg-gradient-to-br from-teal-100 to-pink-100 border-teal-200 hover:from-teal-200 hover:to-pink-200'; // Türkis/Rosa für offene Gebete

  return (
    <button
      onClick={onClick}
      className={`
        ${cardColors}
        w-full p-6 rounded-xl border-2
        text-left transition-all duration-200
        shadow-sm hover:shadow-md
        transform hover:scale-[1.02]
        focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2
      `}
    >
      {/* Status-Badge */}
      {prayer.isAnswered && (
        <div className="mb-3 inline-flex items-center px-3 py-1 rounded-full bg-green-400 text-white text-xs font-semibold">
          ✓ Beantwortet
        </div>
      )}

      {/* Titel */}
      <h3 className="text-xl font-bold text-gray-800 mb-2">
        {prayer.title}
      </h3>

      {/* Textauszug */}
      <p className="text-gray-700 text-sm leading-relaxed">
        {excerpt}
      </p>

      {/* Fortschritt (wenn vorhanden) */}
      {prayer.progress && (
        <div className="mt-4 pt-4 border-t border-gray-300/50">
          <p className="text-xs text-gray-600 italic">
            {prayer.progress}
          </p>
        </div>
      )}
    </button>
  );
}

