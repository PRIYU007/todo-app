import { useState } from 'react';
import GlobalStyle from './GlobalStyle';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
import Nav from './components/Nav';
import styled from 'styled-components';
function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <StyledApp>
      <Nav />
      <GlobalStyle />

      <CreateTodo
        input={input}
        setInput={setInput}
        setTodos={setTodos}
        todos={todos}
      />
      <TodoList
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
      />
    </StyledApp>
  );
}
const StyledApp = styled.div`
  display: flex;
  position: relative;

  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default App;
