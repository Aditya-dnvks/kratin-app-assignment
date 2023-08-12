import { FaTrash } from "react-icons/fa";
import "./index.css";

const TodoItem = (props) => {
  const { details, deleteTodo, changeTodoStatus } = props;
  const { id, task, isChecked } = details;
  const statusStyle = isChecked ? "checked" : "";

  const onDeleteTodo = () => {
    deleteTodo(id);
  };

  const onTodoStatusChange = () => {
    changeTodoStatus(id);
  };

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        id={id}
        className="checkbox-input"
        onChange={onTodoStatusChange}
        checked={isChecked}
      />
      <div className="label-container">
        <label htmlFor={id} className={`checkbox-label ${statusStyle}`}>
          {task}
        </label>
        <div>
          <FaTrash onClick={onDeleteTodo} />
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
