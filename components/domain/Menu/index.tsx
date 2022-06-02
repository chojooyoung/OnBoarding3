import styled from "@emotion/styled";
import Link from "next/link";
function Menu() {
  return (
    <Nav>
      <MenuWrapper>
        <MenuList>
          <Link href="/">Home</Link>
        </MenuList>
        <MenuList>
          <Link href="/Post">Posts</Link>
        </MenuList>
        <MenuList>
          <Link href="/Write">Write</Link>
        </MenuList>
      </MenuWrapper>
    </Nav>
  );
}
const Nav = styled.nav`
  width: 100%;
  height: 100%;
  padding: 0;
  background-color: #486ba2;
`;
const MenuWrapper = styled.ul`
  margin-top: 0;
  margin-bottom: 20px;
  text-decoration: none;
  display: flex;
`;
const MenuList = styled.li`
  color: white;
  font-size: 30px;
  list-style: none;
  padding: 10px;

  :hover {
    background-color: #d9daee;
    opacity: 0.3;
  }
`;

export default Menu;
