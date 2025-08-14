import { TodoType } from '@/types/todoType';
import { deleteAction, editAction, todoAction, toggleAction } from './types';

export const addTodo = (todo: TodoType): todoAction => ({
  type: 'ADD',
  payload: todo,
});

export const toggleTodo = (id: string): toggleAction => ({
  type: 'TOGGLE',
  payload: { id },
});

export const deleteTodo = (id: string): deleteAction => ({
  type: 'DELETE',
  payload: { id },
});

export const editTodo = (id: string, title: string): editAction => ({
  type: 'EDIT',
  payload: { id, title },
});
