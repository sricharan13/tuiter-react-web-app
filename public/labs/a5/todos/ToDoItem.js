const ToDoItem = (todo) => {
    return(`
    <li>
      <input type="checkbox"
        ${todo.done ? 'checked' : ''}/>
      ${todo.title}
      (${todo.status})
    </li>`
    );
}
export default ToDoItem;