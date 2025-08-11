// 1.  type으로 하겠다
export type TodoType = { id: string; title: string; completed: boolean };
// 2. interface으로 하겠다
export interface ITodoType {
  id: string;
  title: string;
  completed: boolean;
}
