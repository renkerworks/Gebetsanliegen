/**
 * Mock-Daten für Gebetsanliegen (MVP)
 * Später durch API/Datenbank ersetzen
 */

import { Prayer } from '@/types/prayer';

export const mockPrayers: Prayer[] = [
  {
    id: '1',
    title: 'Heilung für meine Großmutter',
    description: 'Meine Großmutter ist krank und braucht Gebet für ihre Genesung. Sie hat starke Schmerzen und wir hoffen auf Gottes Heilung.',
    progress: 'Sie fühlt sich etwas besser, aber braucht weiterhin Gebet.',
    isAnswered: false,
    createdAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    title: 'Neue Arbeitsstelle',
    description: 'Ich suche nach einer neuen Arbeitsstelle, die zu meinen Fähigkeiten und meiner Berufung passt. Bitte betet für die richtige Gelegenheit.',
    progress: 'Bewerbungen sind raus, warte auf Antworten.',
    isAnswered: false,
    createdAt: new Date('2024-01-20'),
  },
  {
    id: '3',
    title: 'Versöhnung in der Familie',
    description: 'Es gibt Spannungen in meiner Familie. Ich bete für Versöhnung und Frieden zwischen uns allen.',
    progress: 'Wir haben uns ausgesprochen und arbeiten daran.',
    isAnswered: true,
    createdAt: new Date('2024-01-10'),
  },
  {
    id: '4',
    title: 'Finanzielle Unterstützung',
    description: 'Ich brauche Gebet für finanzielle Weisheit und Gottes Versorgung in einer schwierigen Zeit.',
    progress: 'Gott hat auf wunderbare Weise geholfen!',
    isAnswered: true,
    createdAt: new Date('2024-01-05'),
  },
  {
    id: '5',
    title: 'Leitung für wichtige Entscheidung',
    description: 'Ich stehe vor einer wichtigen Lebensentscheidung und brauche Gottes Leitung und Klarheit.',
    progress: 'Warte noch auf Klarheit.',
    isAnswered: false,
    createdAt: new Date('2024-01-25'),
  },
];

