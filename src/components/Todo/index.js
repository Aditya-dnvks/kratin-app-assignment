import { Component } from "react";
import { v4 } from "uuid";

import TodoItem from "../TodoItem";
import Header from "../Header";
import Footer from "../Footer";

import "./index.css";

class Todo extends Component {
  state = {
    todoList: [],
    userInput: "",
    emptyTask: false,
  };

  deleteTodo = (id) => {
    const { todoList } = this.state;
    const filteredList = todoList.filter((eachItem) => eachItem.id !== id);
    this.setState({ todoList: filteredList });
  };

  changeTodoStatus = (id) => {
    const { todoList } = this.state;
    const filteredList = todoList.map((eachItem) => {
      if (eachItem.id === id) {
        if (eachItem.isChecked === false) {
          eachItem.isChecked = true;
          return eachItem;
        } else {
          eachItem.isChecked = false;
          return eachItem;
        }
      }
      return eachItem;
    });
    this.setState({ todoList: filteredList });
  };

  onChangeUserInput = (event) => {
    this.setState({ userInput: event.target.value });
  };

  addTodoButton = () => {
    const { userInput } = this.state;
    const newTask = {
      id: v4(),
      task: userInput,
      isChecked: false,
    };
    this.setState((previousState) => ({
      todoList: [...previousState.todoList, newTask],
    }));
    if (userInput === "") {
      this.setState({ emptyTask: true });
    } else {
      this.setState({ emptyTask: false });
    }
  };

  saveTodoButton = () => {
    const { todoList } = this.state;
    localStorage.setItem("todoList", JSON.stringify(todoList));
    alert("Your Todo tasks are Saved in Local Storage");
  };

  componentDidMount = () => {
    let stringifiedTodoList = localStorage.getItem("todoList");
    let parsedTodoList = JSON.parse(stringifiedTodoList);
    if (parsedTodoList === null) {
      this.setState({ todoList: [] });
    } else {
      this.setState({ todoList: parsedTodoList });
    }
  };

  render() {
    const { todoList, emptyTask } = this.state;

    return (
      <>
        <Header />
        <div className="todo-bg-container">
          <h1 className="todo-heading"> Your Todo Tasks</h1>
          <div className="inner-container">
            <h1 className="create-task-heading">
              Create <span className="create-task-heading-subpart">Tasks</span>
            </h1>
            <input
              type="text"
              className="todo-user-input"
              placeholder="What needs to be done?"
              onChange={this.onChangeUserInput}
            />
            {emptyTask && (
              <p className="error-message">
                {" "}
                *You have created an Empty Task!. Please recheck{" "}
              </p>
            )}
            <div>
              <button className="button" onClick={this.addTodoButton}>
                Add
              </button>
            </div>
            <h1 className="todo-items-heading">
              My <span className="todo-items-heading-subpart">Tasks</span>
            </h1>
            <ul className="todo-items-container">
              {todoList !== [] &&
                todoList.map((eachItem) => (
                  <TodoItem
                    key={eachItem.id}
                    details={eachItem}
                    deleteTodo={this.deleteTodo}
                    changeTodoStatus={this.changeTodoStatus}
                  />
                ))}
            </ul>
            <button className="button" onClick={this.saveTodoButton}>
              Save
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Todo;
