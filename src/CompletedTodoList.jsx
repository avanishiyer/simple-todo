/* eslint-disable react/prop-types */
import { TodoItem } from "./TodoItems.jsx";

export function CompletedTodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        if (todo.completed) {
          return (
            <TodoItem
              {...todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        }
      })}
    </ul>
  );
}
