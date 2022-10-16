import ToDoItem from "./ToDoItem.js";
import todos from "./todos.js";
const TodoList = () => {
    return(`
      <ul>
         ${
        todos.map(todo => {
            return(ToDoItem(todo));
        }).join('')
    }
      </ul>
   `);
}
export default TodoList;