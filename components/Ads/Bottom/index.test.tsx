import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Bottom from '@/components/Ads/Bottom'

describe('Bottom', () => {
    it('Bottom class have a accurate size', () => {
        render(<Bottom />)

        const bannerSize = screen.getByTestId('size')

        expect(bannerSize).toHaveClass("sm:h-[50px] sm:w-[320px] md:h-[60px] md:w-[468px] lg:h-[50px] lg:w-[970px]")
    })
})
