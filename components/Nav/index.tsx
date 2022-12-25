import Link from 'next/link'
import React from 'react'
import { navItems } from '../../utils/resources'

export default function Nav() {
    return (
        <div className='container mx-auto border-y-2 border-gray-200'>
            <div className='mx-16'>
                <div className='flex items-center justify-center space-x-7 py-2'>
                    { navItems.map((val:any, index:number) => {
                        return (
                            <Link key={index} href={val === "brands" ? `https://reviews.femaledaily.com/${val}` : `https://femaledaily.com/category/${val}`} target={'_blank'}>
                                <p key={index} className='font-bold font-sm text-sm uppercase'>{val}</p>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
