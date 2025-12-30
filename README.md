# Gebetsanliegen-App

Eine moderne Web-App zum Teilen und Verwalten von Gebetsanliegen, gebaut mit Next.js, TypeScript, React und Tailwind CSS.

## 🎨 Features

- **Kachelübersicht**: Alle Gebetsanliegen als übersichtliche Cards
- **Detailansicht**: Vollständige Details mit Bearbeitungsmöglichkeit
- **Status-Tracking**: Markiere Gebete als beantwortet
- **Fortschritt**: Aktualisiere den Fortschritt deiner Gebetsanliegen
- **Responsive Design**: Mobile-first, funktioniert auf allen Geräten
- **Modernes UI**: Türkis/Rosa Farben, pastellgrün für beantwortete Gebete

## 🚀 Schnellstart

### Installation

```bash
npm install
```

### Development Server starten

```bash
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000) im Browser.

### Build für Production

```bash
npm run build
npm start
```

## 📁 Projektstruktur

```
gebetsanliegen-app/
├── app/
│   ├── layout.tsx          # Root Layout
│   ├── page.tsx            # Hauptseite
│   └── globals.css         # Globale Styles
├── components/
│   ├── PrayerCard.tsx      # Kachel-Komponente
│   ├── PrayerModal.tsx     # Detailansicht/Modal
│   └── PrayerForm.tsx      # Formular für neue Anliegen
├── types/
│   └── prayer.ts           # TypeScript-Typen
└── data/
    └── mockPrayers.ts      # Mock-Daten
```

## 🎨 Design-System

### Farben
- **Primär (Türkis)**: `#14B8A6` (teal-500)
- **Primär (Rosa)**: `#EC4899` (pink-500)
- **Beantwortet**: `#86EFAC` (green-300)
- **Hintergrund**: `#F9FAFB` (gray-50)

### Komponenten
- **PrayerCard**: Zeigt Titel + Textauszug, farbige Kachel
- **PrayerModal**: Detailansicht mit Bearbeitungsmöglichkeit
- **PrayerForm**: Formular zum Hinzufügen neuer Anliegen

## 📝 Verwendung

1. **Neues Gebetsanliegen hinzufügen**: Klicke auf "Neues Gebetsanliegen"
2. **Details ansehen**: Klicke auf eine Kachel
3. **Bearbeiten**: In der Detailansicht Fortschritt/Status ändern
4. **Als beantwortet markieren**: Toggle in der Detailansicht

## 🔧 Technologien

- **Next.js 16** (App Router)
- **TypeScript**
- **React 19**
- **Tailwind CSS 4**
- **Lucide React** (Icons)

## 📚 Weitere Informationen

Siehe [ARCHITECTURE.md](./ARCHITECTURE.md) für eine detaillierte Architektur-Erklärung.

## 🚧 Erweiterungen (Post-MVP)

- Persistenz (localStorage oder Datenbank)
- Kategorien/Tags
- Suchfunktion
- Sortierung/Filterung
- Benutzer-Authentifizierung
- Teilen-Funktion
