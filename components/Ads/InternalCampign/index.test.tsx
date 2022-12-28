import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import InternalCampign from '@/components/Ads/InternalCampign'

describe('InternalCampign', () => {
    it('InternalCampign class have a accurate size', () => {
        render(<InternalCampign />)

        const bannerSize = screen.getByTestId('size')

        expect(bannerSize).toHaveClass("sm:h-[250px] sm:w-[500px] lg:h-[250px] lg:w-[670px] xl:h-[250px] xl:w-[970px]")
    })
})
