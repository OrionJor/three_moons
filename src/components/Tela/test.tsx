import { render, screen } from '@testing-library/react'
import Tela from '.'

describe('Tela', () => {
  it('should render the heading', () => {
    const { container } = render(<Tela />)

    expect(screen.getAllByText(/Tela/i))

    expect(container.firstChild).toMatchSnapshot()
  })
})
