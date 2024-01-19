import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo, toggleTodo, deleteTodo } from '../Feature/todoSlice';
import '../App.css';

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [text, setText] = useState('');
  const [editTodoId, setEditTodoId] = useState(null);

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      if (editTodoId !== null) {
        dispatch(updateTodo({ id: editTodoId, text }));
        setEditTodoId(null);
      } else {
        dispatch(addTodo(text));
      }

      setText('');
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleStartEditTodo = (id, text) => {
    setEditTodoId(id);
    setText(text);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };


  return (
    <>
    
      <div className='fullpage '>
        <div className='fullpagein'>
          <div className='input'>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Add or edit todo..."
            />
            <button onClick={handleAddTodo}>{editTodoId !== null ? 'Update Todo' : 'Add Todo'}</button>
          </div>

          <ul className='ul'>
            {todos.slice().reverse().map((todo) => (
              <li className='li' key={todo.id} onClick={() => handleToggleTodo(todo.id)}>
                <div className='text'>
                  {todo.text}
                </div>
                <div className='btns'>
                  <span onClick={() => handleDeleteTodo(todo.id)}>❌</span>
                  <span onClick={() => handleStartEditTodo(todo.id, todo.text)}>🖉</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default TodoList;
