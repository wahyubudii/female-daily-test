import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import BillBoard from '@/components/Ads/BillBoard'

describe('BillBoard', () => {
    it('BillBoard class have a accurate size', () => {
        render(<BillBoard />)

        const bannerSize = screen.getByTestId('size')

        expect(bannerSize).toHaveClass("h-[250px] w-[970px]")
    })
})
