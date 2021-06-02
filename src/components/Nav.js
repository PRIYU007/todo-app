import styled from 'styled-components';

const Nav = () => {
  return (
    <StyledNav>
      <h1>Todo</h1>
    </StyledNav>
  );
};
const StyledNav = styled.div`
  font-family: 'Stint Ultra Condensed', cursive;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
  position: absolute;
  top: 0;
  left: 0;
  background: #333;
  width: 100%;
  color: #fff;
`;
export default Nav;
