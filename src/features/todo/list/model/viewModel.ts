import { useTodo } from "@/entities/todo/models/todo";

export type ViewModel = ReturnType<typeof useViewModel>;

export const useViewModel = () => {
  return {
    ...useTodo()
  };
};
