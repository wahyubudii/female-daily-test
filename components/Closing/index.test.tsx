import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Closing from '@/components/Closing'

describe('Closing Components', () => {
    it('should contain this text', () => {
        render(<Closing />)

        const closingHeading = screen.getByText('Female Daily - Find everything you want to know about beauty on Female Daily')
        const closingParagraph1 = screen.getByText('Product Reviews, Tips & Tricks, Expert and Consumer Opinions, Beauty Tutorials, Discussions, Beauty Workshops, anything!')
        const closingParagraph2 = screen.getByText('We are here to be your friendly solution to all things beauty, inside and out!')

        expect(closingHeading).toBeInTheDocument()
        expect(closingParagraph1).toBeInTheDocument()
        expect(closingParagraph2).toBeInTheDocument()
    })
})
