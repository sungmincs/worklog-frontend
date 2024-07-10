import { TodoList as Component } from "./ui";

import { useViewModel } from "./model/viewModel";

export const TodoList = () => Component(useViewModel());
