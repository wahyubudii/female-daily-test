import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import TopBanner from '@/components/Ads/TopBanner'

describe('Top Banner', () => {
    it('top banner class have a accurate size', () => {
        render(<TopBanner />)

        const bannerSize = screen.getByTestId('size')

        expect(bannerSize).toHaveClass("h-[50px] w-[970px]")
    })
})
