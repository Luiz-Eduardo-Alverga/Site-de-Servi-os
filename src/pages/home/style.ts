import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;

  flex-direction: column;
  margin-top: 8rem;
  gap: 2rem;

  img {
    width: 30rem;
  }

  span {
    max-width: 40rem;
    text-align: center;
    font-size: 3rem;
    color: ${(props) => props.theme['gray-600']};
  }

  p {
    font-size: 1.3rem;
    text-align: center;
    max-width: 30rem;
    color: ${(props) => props.theme['gray-400']};
  }
`
