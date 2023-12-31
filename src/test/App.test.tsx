import { fireEvent, render, screen } from '@testing-library/react'
import App from '../App'

describe('example Test', () => {
  it('should render App component', () => {
    render(<App />)

    const element = screen.getByText('count is 0')
    expect(element.childNodes[2].nodeValue).toBe('0')
  })

  it('should increment count in 1', () => {
    render(<App />)

    const buttonElement = screen.getByText('count is 0')
    fireEvent.click(buttonElement)

    const element = screen.getByText('count is 1')
    expect(element.childNodes[2].nodeValue).toBe('1')
  })
})
