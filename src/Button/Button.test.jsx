import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from "./Button"

test('Renders a button with text', () => {
    render(
        <Button>Click me</Button>
    )
    expect(screen.getByText(/click me/i)).toBeInTheDocument()
})
