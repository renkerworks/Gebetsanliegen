'use client';

import { useState } from 'react';
import { Prayer } from '@/types/prayer';
import { mockPrayers } from '@/data/mockPrayers';
import PrayerCard from '@/components/PrayerCard';
import PrayerModal from '@/components/PrayerModal';
import PrayerForm from '@/components/PrayerForm';
import { Plus } from 'lucide-react';

/**
 * Hauptseite - Gebetsanliegen-Übersicht
 * 
 * Zeigt alle Gebetsanliegen als Kacheln in einem Grid.
 * Ermöglicht:
 * - Klick auf Kachel → Detailansicht/Modal
 * - Button zum Hinzufügen neuer Anliegen
 */
export default function Home() {
  const [prayers, setPrayers] = useState<Prayer[]>(mockPrayers);
  const [selectedPrayer, setSelectedPrayer] = useState<Prayer | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Gebetsanliegen aktualisieren
  const handleUpdatePrayer = (updatedPrayer: Prayer) => {
    setPrayers(prayers.map(p => p.id === updatedPrayer.id ? updatedPrayer : p));
  };

  // Gebetsanliegen löschen
  const handleDeletePrayer = (prayerId: string) => {
    setPrayers(prayers.filter(p => p.id !== prayerId));
  };

  // Neues Gebetsanliegen hinzufügen
  const handleAddPrayer = (prayerData: Omit<Prayer, 'id' | 'createdAt'>) => {
    const newPrayer: Prayer = {
      ...prayerData,
      id: Date.now().toString(),
      createdAt: new Date(),
    };
    setPrayers([newPrayer, ...prayers]);
    setIsFormOpen(false);
  };

  // Kachel anklicken → Modal öffnen
  const handleCardClick = (prayer: Prayer) => {
    setSelectedPrayer(prayer);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Gebetsanliegen
          </h1>
          <p className="text-gray-600">
            Teile deine Gebetsanliegen und erlebe Gottes Wirken
          </p>
        </div>

        {/* Button: Neues Anliegen hinzufügen */}
        <div className="mb-6 flex justify-center sm:justify-end">
          <button
            onClick={() => setIsFormOpen(true)}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-pink-500 text-white font-medium hover:from-teal-600 hover:to-pink-600 transition-all shadow-md hover:shadow-lg"
          >
            <Plus size={20} />
            Neues Gebetsanliegen
          </button>
        </div>

        {/* Kachel-Grid */}
        {prayers.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              Noch keine Gebetsanliegen. Füge das erste hinzu!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prayers.map((prayer) => (
              <PrayerCard
                key={prayer.id}
                prayer={prayer}
                onClick={() => handleCardClick(prayer)}
              />
            ))}
          </div>
        )}

        {/* Modal für Detailansicht/Bearbeitung */}
        <PrayerModal
          prayer={selectedPrayer}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedPrayer(null);
          }}
          onUpdate={handleUpdatePrayer}
          onDelete={handleDeletePrayer}
        />

        {/* Formular für neues Anliegen */}
        {isFormOpen && (
          <PrayerForm
            onSubmit={handleAddPrayer}
            onCancel={() => setIsFormOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
