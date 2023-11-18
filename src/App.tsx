import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import logo from './logo.svg'

// React-Funktionskomponente
export default function App() {
  const [count, setCount] = useState(0)

  return (
    <AppContainer>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <h1>Vite + React</h1>
        <p>
          <StyledButton onClick={() => setCount(count => count + 1)}>
            count is
            {' '}
            {count}
          </StyledButton>
        </p>
        <p>
          Edit
          {' '}
          <code>App.tsx</code>
          {' '}
          and save to test HMR updates.
        </p>
        <p>
          <AppLink href="https://react.dev" target="_blank" rel="noopener noreferrer">
            Learn React
          </AppLink>
          {' | '}
          <AppLink href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
            Vite Docs
          </AppLink>
        </p>
      </AppHeader>
    </AppContainer>
  )
}

// Styled Components
const AppContainer = styled.div`
  text-align: center;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${rotate} infinite 20s linear;
  }
`

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const AppLink = styled.a`
  color: #61dafb;
`

const StyledButton = styled.button`
  font-size: calc(10px + 2vmin);
`
