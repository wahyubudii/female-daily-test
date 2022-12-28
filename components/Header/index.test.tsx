import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '@/components/Header'

describe('Header Component', () => {
    it('should display text login/sign-up properly', () => {
        const header = render(<Header />)

        expect(header).not.toBeNull()
    });

    it('should display text login/sign-up properly', () => {
        render(<Header />)

        const headerText = screen.getByText('Login / Signup')
        expect(headerText).toBeInTheDocument()
    });

    it('should navigate to official page after logo clicked', () => {
        render(<Header />)
        
        const officialWeb = "https://femaledaily.com/"

        const link = screen.getByTestId('logo');
        expect(link).toHaveAttribute('href', officialWeb);
    })

    it('should navigate to account page after login/sign-up clicked', () => {
        render(<Header />)
        
        const userAccounts = "https://account.femaledaily.com"

        const link = screen.getByTestId('account');
        expect(link).toHaveAttribute('href', userAccounts);
    })

    it('input value work to be filled', () => {
        render(<Header />)

        const dummyText = "Skincare cowok"

        const input = screen.getByTestId('search')
        fireEvent.change(input, {target: {value: "Skincare cowok"}})

        expect(input).toHaveValue(dummyText)
    })
})
