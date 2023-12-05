import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 4rem;
  border-radius: 20px;

  background: ${(props) => props.theme['white-200']};
  color: ${(props) => props.theme['black-200']};
`

export const AvatarUrl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
  }
  img {
    width: 5rem;
    border-radius: 50px;
  }
`

export const AvailabilityTime = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
`

export const Payment = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
`

export const Values = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  p {
    color: ${(props) => props.theme['green-500']};
    font-size: 1.5rem;
  }
`

export const ButtonCotract = styled.button`
  width: 10rem;
  height: 4rem;
  background: ${(props) => props.theme['blue-100']};
  color: white;
  border: 1px solid white;
  border-radius: 50px;
  cursor: pointer;
`
