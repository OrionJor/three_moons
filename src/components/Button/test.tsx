import { render, screen } from '@testing-library/react'
import Button from '.'

describe('Button', () => {
  it('should render the heading', () => {
    const { container } = render(<Button />)

    expect(screen.getAllByText(/Button/i))

    expect(container.firstChild).toMatchSnapshot()
  })
})
