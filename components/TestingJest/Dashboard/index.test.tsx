import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Dashboard from '@/components/TestingJest/Dashboard'

describe('Dashboard Page', () => {
    // it('Should render properly', () => {
    //     render(<Dashboard />)

    //     const header = screen.getByRole('heading')
    //     const headerText = "Hello World"

    //     expect(header).toHaveTextContent(headerText)
    // });

    it('tobe Render', () => {
        render(<Dashboard />)

        const heading = screen.getByText('Hello World')

        expect(heading).toBeInTheDocument()
    })
})
