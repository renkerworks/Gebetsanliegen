# Architektur: Gebetsanliegen-App

## Projektstruktur

```
gebetsanliegen-app/
├── app/
│   ├── layout.tsx          # Root Layout mit Meta-Informationen
│   ├── page.tsx            # Hauptseite mit Kachelübersicht
│   └── globals.css         # Globale Styles + Tailwind
├── components/
│   ├── PrayerCard.tsx      # Kachel-Komponente für Gebetsanliegen
│   ├── PrayerModal.tsx     # Modal für Detailansicht & Bearbeitung
│   └── PrayerForm.tsx      # Formular zum Hinzufügen neuer Anliegen
├── types/
│   └── prayer.ts           # TypeScript-Typen
└── data/
    └── mockPrayers.ts      # Mock-Daten für MVP

```

## Komponenten-Architektur

### 1. PrayerCard (Kachel)
- **Props:** `prayer` (Prayer-Objekt), `onClick` (Callback)
- **Funktion:** Zeigt Titel + Textauszug, farbige Kachel (türkis/rosa oder pastellgrün)
- **Styling:** Tailwind CSS, responsive, runde Ecken

### 2. PrayerModal (Detailansicht)
- **Props:** `prayer` (Prayer-Objekt), `isOpen`, `onClose`, `onUpdate`
- **Funktion:** 
  - Zeigt vollständige Details
  - Bearbeitung von Fortschritt
  - Toggle für "Gebet beantwortet"
- **Styling:** Overlay-Modal, zentriert, responsive

### 3. PrayerForm (Formular)
- **Props:** `onSubmit`, `onCancel`
- **Funktion:** Eingabe für neue Gebetsanliegen (Titel, Beschreibung, Fortschritt)
- **Styling:** Formular mit Input-Feldern, Buttons

## State Management

- **Lokaler State:** React `useState` in `app/page.tsx`
- **Mock-Daten:** Initial im State, später durch API/Datenbank ersetzbar
- **Keine externe State-Library:** Einfachheit für MVP

## Design-System

### Farben
- **Primär (Türkis):** `#14B8A6` (teal-500)
- **Primär (Rosa):** `#EC4899` (pink-500)
- **Beantwortet (Pastellgrün):** `#86EFAC` (green-300)
- **Hintergrund:** `#F9FAFB` (gray-50)
- **Text:** `#1F2937` (gray-800)

### Spacing & Typography
- **Abstände:** Tailwind's Spacing-System (4px Basis)
- **Schriftarten:** System Font Stack
- **Runde Ecken:** `rounded-xl` (12px) für Cards

## Datenmodell

```typescript
interface Prayer {
  id: string;
  title: string;
  description: string;
  progress: string;
  isAnswered: boolean;
  createdAt: Date;
}
```

## User Flow

1. **Übersicht:** Alle Gebetsanliegen als Kacheln
2. **Detail:** Klick auf Kachel → Modal öffnet
3. **Bearbeitung:** In Modal Fortschritt/Status ändern
4. **Neu hinzufügen:** Button → Formular → Neue Kachel

## Erweiterungen (Post-MVP)

- Persistenz (localStorage oder Datenbank)
- Kategorien/Tags
- Suchfunktion
- Sortierung/Filterung
- Benutzer-Authentifizierung
- Teilen-Funktion

