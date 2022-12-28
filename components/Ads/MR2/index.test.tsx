import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import MR2 from '@/components/Ads/MR2'

describe('MR2', () => {
    it('MR2 class have a accurate size', () => {
        render(<MR2 />)

        const bannerSize = screen.getByTestId('size')

        expect(bannerSize).toHaveClass("sm:h-[250px] sm:w-full lg:h-[250px] lg:w-[250px] 2xl:h-[250px] 2xl:w-[300px]")
    })
})
