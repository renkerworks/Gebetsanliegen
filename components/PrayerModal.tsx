'use client';

import { useState, useEffect } from 'react';
import { Prayer } from '@/types/prayer';
import { X } from 'lucide-react';

interface PrayerModalProps {
  prayer: Prayer | null;
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (updatedPrayer: Prayer) => void;
}

/**
 * PrayerModal - Detailansicht und Bearbeitung für Gebetsanliegen
 * 
 * Zeigt vollständige Details und ermöglicht:
 * - Bearbeitung des Fortschritts
 * - Toggle für "Gebet beantwortet"
 */
export default function PrayerModal({ prayer, isOpen, onUpdate, onClose }: PrayerModalProps) {
  const [progress, setProgress] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);

  // Formular-Daten aktualisieren, wenn Prayer geändert wird
  useEffect(() => {
    if (prayer) {
      setProgress(prayer.progress);
      setIsAnswered(prayer.isAnswered);
    }
  }, [prayer]);

  if (!isOpen || !prayer) return null;

  const handleSave = () => {
    if (!prayer) return;

    const updatedPrayer: Prayer = {
      ...prayer,
      progress,
      isAnswered,
    };

    onUpdate(updatedPrayer);
    onClose();
  };

  const modalColors = prayer.isAnswered
    ? 'bg-green-50 border-green-200'
    : 'bg-gradient-to-br from-teal-50 to-pink-50 border-teal-200';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`
          ${modalColors}
          w-full max-w-2xl rounded-2xl border-2 shadow-2xl
          max-h-[90vh] overflow-y-auto
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-gray-200 p-6 rounded-t-2xl">
          <div className="flex items-start justify-between">
            <h2 className="text-2xl font-bold text-gray-800 pr-4">
              {prayer.title}
            </h2>
            <button
              onClick={onClose}
              className="flex-shrink-0 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Schließen"
            >
              <X size={24} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Beschreibung */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
              Beschreibung
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {prayer.description}
            </p>
          </div>

          {/* Fortschritt bearbeiten */}
          <div>
            <label
              htmlFor="progress"
              className="block text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide"
            >
              Fortschritt / Update
            </label>
            <textarea
              id="progress"
              value={progress}
              onChange={(e) => setProgress(e.target.value)}
              placeholder="Wie hat sich das Gebetsanliegen entwickelt?"
              className="w-full p-4 rounded-lg border-2 border-gray-300 focus:border-teal-400 focus:ring-2 focus:ring-teal-200 outline-none transition-all resize-none"
              rows={4}
            />
          </div>

          {/* Status Toggle */}
          <div className="flex items-center justify-between p-4 bg-white/60 rounded-lg border-2 border-gray-200">
            <div>
              <label htmlFor="answered" className="text-sm font-semibold text-gray-700 cursor-pointer">
                Gebet beantwortet
              </label>
              <p className="text-xs text-gray-500 mt-1">
                Markiere dieses Gebet als beantwortet
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                id="answered"
                checked={isAnswered}
                onChange={(e) => setIsAnswered(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-teal-400 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-400"></div>
            </label>
          </div>
        </div>

        {/* Footer mit Buttons */}
        <div className="sticky bottom-0 bg-white/80 backdrop-blur-sm border-t border-gray-200 p-6 rounded-b-2xl">
          <div className="flex gap-3 justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-lg border-2 border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              Abbrechen
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-pink-500 text-white font-medium hover:from-teal-600 hover:to-pink-600 transition-all shadow-md hover:shadow-lg"
            >
              Speichern
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

