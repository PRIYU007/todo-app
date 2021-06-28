import styled from 'styled-components';
import Todo from './Todo';

const TodoList = ({ input, setInput, todos, setTodos }) => {
  return (
    <StyledList>
      <h2>What's your plan for today?</h2>
      {todos.map(todo => (
        <Todo
          stateTodo={todo}
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          key={todo.id}
        />
      ))}
    </StyledList>
  );
};
const StyledList = styled.div`
  width: 50%;
  height: 60%;
  text-align: center;
  @media only screen and (min-width: 320px) and (max-width: 479px) {
    width: 90%;
  }
`;
export default TodoList;
