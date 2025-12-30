'use client';

import { useState } from 'react';
import { Prayer } from '@/types/prayer';
import { X } from 'lucide-react';

interface PrayerFormProps {
  onSubmit: (prayer: Omit<Prayer, 'id' | 'createdAt'>) => void;
  onCancel: () => void;
}

/**
 * PrayerForm - Formular zum Hinzufügen neuer Gebetsanliegen
 * 
 * Ermöglicht Eingabe von:
 * - Titel (Pflichtfeld)
 * - Beschreibung (Pflichtfeld)
 * - Fortschritt (optional)
 */
export default function PrayerForm({ onSubmit, onCancel }: PrayerFormProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [progress, setProgress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert('Bitte fülle Titel und Beschreibung aus.');
      return;
    }

    onSubmit({
      title: title.trim(),
      description: description.trim(),
      progress: progress.trim(),
      isAnswered: false,
    });

    // Formular zurücksetzen
    setTitle('');
    setDescription('');
    setProgress('');
    setIsOpen(false);
    onCancel();
  };

  const handleCancel = () => {
    setIsOpen(false);
    onCancel();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div
        className="w-full max-w-lg bg-white rounded-2xl border-2 border-gray-200 shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-teal-500 to-pink-500 text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Neues Gebetsanliegen</h2>
            <button
              onClick={handleCancel}
              className="p-2 rounded-lg hover:bg-white/20 transition-colors"
              aria-label="Schließen"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Formular */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Titel */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Titel *
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="z.B. Heilung für meine Großmutter"
              className="w-full p-4 rounded-lg border-2 border-gray-300 focus:border-teal-400 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
              required
            />
          </div>

          {/* Beschreibung */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Beschreibung *
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Beschreibe dein Gebetsanliegen..."
              className="w-full p-4 rounded-lg border-2 border-gray-300 focus:border-teal-400 focus:ring-2 focus:ring-teal-200 outline-none transition-all resize-none"
              rows={5}
              required
            />
          </div>

          {/* Fortschritt (optional) */}
          <div>
            <label
              htmlFor="progress"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Fortschritt (optional)
            </label>
            <textarea
              id="progress"
              value={progress}
              onChange={(e) => setProgress(e.target.value)}
              placeholder="Aktueller Stand oder erste Updates..."
              className="w-full p-4 rounded-lg border-2 border-gray-300 focus:border-teal-400 focus:ring-2 focus:ring-teal-200 outline-none transition-all resize-none"
              rows={3}
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              Abbrechen
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-pink-500 text-white font-medium hover:from-teal-600 hover:to-pink-600 transition-all shadow-md hover:shadow-lg"
            >
              Hinzufügen
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

