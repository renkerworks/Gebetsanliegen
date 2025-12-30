/**
 * TypeScript-Typen für Gebetsanliegen
 */

export interface Prayer {
  id: string;
  title: string;
  description: string;
  progress: string;
  isAnswered: boolean;
  createdAt: Date;
}

