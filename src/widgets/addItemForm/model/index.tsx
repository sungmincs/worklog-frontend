import { useCreateTodo } from "@/entities/todo/models/todo";
import { Typography } from "@mui/material";
import { FormEvent } from "react";
import { toast } from "react-toastify";

export type ViewModel = ReturnType<typeof useViewModelForm>;

export const useViewModelForm = () => {
  const { mutate: todoUpdate } = useCreateTodo();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const todoTitle = formData.get("todoTitle")?.toString() ?? "";

    if (!todoTitle) {
      toast.error(
        <Typography variant="body2">
          <b>할 일</b>을 입력해 주세요!
        </Typography>
      );
      return;
    }

    todoUpdate(
      { title: todoTitle, completed: false },
      {
        onSuccess: () => {
          form.reset();
        }
      }
    );
  };

  return { onSubmit };
};
