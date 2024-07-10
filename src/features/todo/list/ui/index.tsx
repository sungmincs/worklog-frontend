import { Empty } from "@/shared/ui/Empty";
import { List } from "@mui/material";
import { ViewModel } from "../model/viewModel";
import { TodoListItem } from "./item";

export const TodoList = (model: ViewModel) => {
  if (!model.todo.length) {
    return <Empty>현재 등록된 할일이 없습니다</Empty>;
  }

  return (
    <List>
      {model.todo.map(({ completed, title, id }) => (
        <TodoListItem completed={completed} title={title} id={id} />
      ))}
    </List>
  );
};
