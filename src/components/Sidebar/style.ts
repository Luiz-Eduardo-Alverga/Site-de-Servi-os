import styled from 'styled-components'

export const Sidebar = styled.div`
  height: 100%;
  width: 10rem;
  position: fixed;
  background: ${(props) => props.theme['blue-300']};
`
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  padding-bottom: 1rem;

  border-bottom: 0.5px solid ${(props) => props.theme['gray-100']};
  color: white;
  font-size: 1.5rem;
`
export const ListBar = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 5rem;
  height: 100%;
  margin-top: 5rem;

  list-style: none;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  li a {
    text-decoration: none;
    color: white;
  }
`
