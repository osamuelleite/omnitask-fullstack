export interface Task {
  id?: number; // O '?' significa que o ID é opcional (na criação não temos ID ainda)
  title: string;
  description: string;
  completed: boolean;
}
