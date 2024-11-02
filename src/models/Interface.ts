

// Interface pour les props du composant TODOHero
export interface TODOHeroProps {
  totalTasks: number;
  completedTasks: number;
}

// Vous pouvez ajouter d'autres interfaces ici au fur et à mesure


// modèle/Interface.ts
export interface TodoItem {
  id: number; // Changez le type de string à number
  title: string;
  is_completed: boolean;
}

