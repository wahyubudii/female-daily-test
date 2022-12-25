import React from 'react'
import { GrMenu } from 'react-icons/gr'
import { RiAccountCircleLine, RiSearchLine } from 'react-icons/ri' 
import Link from 'next/link'
import { officialWeb, userAccounts } from '../../utils/resources'

export default function Header() {
    return (
        <div className='container mx-auto'>
            <div className='mx-16'>
                <div className='flex items-center justify-between'>
                    <div className="flex items-center">
                        <GrMenu />
                        <Link className='ml-3' href={officialWeb} target={'_blank'}><img src="/images/logo/female-network.svg" alt="" /></Link>
                    </div>
                    <div className='w-full px-6'>
                        <div className='border border-gray-300 p-2 flex items-center justify-center'>
                            <div className='mr-2 text-gray-600'><RiSearchLine/></div>
                            <input type="text" placeholder='Search products, articles, topics, brands, etc' className='w-full text-sm max-h-full outline-none' />
                        </div>
                    </div>
                    <Link href={userAccounts}>
                        <div className='flex items-center justify-center bg-red-600 text-gray-200 px-6 py-4 min-w-max'>
                            <span className="text-gray-100"><RiAccountCircleLine size={22} /></span>
                            <p className='ml-3 uppercase text-sm'>Login / Signup</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
