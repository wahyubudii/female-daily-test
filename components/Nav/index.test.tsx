import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Nav from '@/components/Nav'

describe('Nav Component', () => {
    it('should render properly', () => {
        const nav = render(<Nav />)

        expect(nav).not.toBeNull()
    });

    it('8 item navigate from mapping data ', () => {
        render(<Nav />)

        const link = screen.getAllByTestId('nav-link');

        expect(link).toHaveLength(8);
    })
})
