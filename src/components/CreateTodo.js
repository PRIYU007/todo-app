import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { v4 as uuidv4 } from 'uuid';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
const CreateTodo = ({ input, setInput, setTodos, todos }) => {
  const userInputHandler = e => {
    setInput(e.target.value);
  };
  const submitHandler = e => {
    e.preventDefault();
    if (!input || /^\s*$/.test(input)) return;
    setTodos([...todos, { message: input, id: uuidv4() }]);
    setInput('');
  };
  return (
    <StyledForm onSubmit={submitHandler}>
      <input
        value={input}
        onChange={userInputHandler}
        type="text"
        name="text"
        placeholder="Add a todo"
      />
      <button>
        <FontAwesomeIcon icon={faPlus} size="2x" />
      </button>
    </StyledForm>
  );
};
const StyledForm = styled.form`
  display: flex;
  right: 0;
  justify-content: flex-end;
  width: 50%;
  margin-bottom: 2rem;

  input {
    width: 100%;
    padding: 1rem;
    font-size: 1.5rem;

    text-align: center;
  }
  button {
    background: #00ff00;
    padding: 1rem;
    border: #333 solid 2px;
    width: 10%;
    cursor: pointer;
    transition: all 0.7s ease;

    &:hover {
      background: #333;
      color: #fff;
      border: solid 2px #00ff00;
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 479px) {
    input {
      padding: 1rem;
      font-size: 1.2rem;
    }
    button {
      padding: 1rem;
      width: 30%;
    }
  }
`;

export default CreateTodo;
