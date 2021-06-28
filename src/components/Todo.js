import styled from 'styled-components';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ stateTodo, input, setInput, todos, setTodos }) => {
  const [newInput, setNewInput] = useState(input);
  const [editState, setEditState] = useState(false);

  const userInputHandler = e => {
    setNewInput(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    if (!newInput || /^\s*$/.test(newInput)) return;
    stateTodo.message = newInput;
    setNewInput('');
    setEditState(false);
  };

  const editHandler = e => {
    setEditState(!editState);

    if (editState) {
      todos.map(todo => {
        if (todo.id !== stateTodo.id) return undefined;
        return todo.message !== stateTodo.message
          ? (todo.message = setNewInput(newInput))
          : '';
      });
    }
  };
  const deleteHandler = () => {
    setTodos(todos.filter(state => state.id !== stateTodo.id));
  };
  return (
    <StyledTodo>
      <h2> {editState ? '' : stateTodo.message} </h2>
      <form className={editState ? 'visible' : 'hide'} onSubmit={submitHandler}>
        <input
          type="text"
          placeholder={stateTodo.message}
          onChange={userInputHandler}
          autoFocus
        />
        <button>
          <FontAwesomeIcon icon={faCheck} size="2x" className="tick" />
        </button>
      </form>
      <div className="icons">
        <FontAwesomeIcon
          onClick={editHandler}
          icon={faEdit}
          size="2x"
          className="edit"
        />
        <FontAwesomeIcon
          onClick={deleteHandler}
          icon={faTrashAlt}
          size="2x"
          className="delete"
        />
      </div>
    </StyledTodo>
  );
};
const StyledTodo = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #444;
  margin: 1rem 0 0 0;
  h2 {
    font-size: 1.5rem;
  }

  .icons {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .edit {
      cursor: pointer;
      margin-right: 1rem;
      color: lightgreen;
    }
    .delete {
      cursor: pointer;
      margin-right: 0.2rem;
      color: red;
    }
  }
  .hide {
    display: none;
  }
  .visible {
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      width: 50%;
      padding: 0.4rem;
      font-size: 1.2rem;
    }
    button {
      background: #333;
      padding: 0.3rem;
      cursor: pointer;
      border: #00ff00 solid 2px;
      transition: all 0.7s ease;
      color: #fff;
      width: 6%;
      height: 6%;
      &:hover {
        background: #00ff00;
        color: #000;
        border: solid 2px #333;
      }
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 479px) {
    .visible button {
      width: 12%;
      text-align: center;
    }
  }
`;
export default Todo;
