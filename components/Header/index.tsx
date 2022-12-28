import { GrMenu } from 'react-icons/gr'
import { RiAccountCircleLine, RiSearchLine } from 'react-icons/ri' 
import Link from 'next/link'
import { officialWeb, userAccounts } from '../../utils/resources'
import Image from 'next/image'

export default function Header() {
    return (
        <div className='container mx-auto'>
            <div className='sm:mx-10 lg:mx-24 xl:mx-12'>
                <div className='flex items-center justify-between'>
                    <div className="flex items-center">
                        <GrMenu />
                        <Link data-testid="logo" className='ml-4 sm:w-24 lg:w-32' href={officialWeb} target={'_blank'}><Image className='w-44' src="/images/logo/female-network.svg" alt="logo" width={100} height={24} /></Link>
                    </div>
                    <div className='w-full px-6'>
                        <div className='border border-gray-300 p-2 flex items-center justify-center'>
                            <div className='mr-2 text-gray-600'><RiSearchLine/></div>
                            <input name='search' data-testid='search' type="text" placeholder='Search products, articles, topics, brands, etc' className='sm:text-xs xl:text-sm w-full max-h-full outline-none' />
                        </div>
                    </div>
                    <Link data-testid="account" href={userAccounts}>
                        <div className='flex items-center justify-center bg-red-600 text-gray-200 sm:px-4 sm:py-3 lg:px-6 lg:py-4 min-w-max'>
                            <span className="text-gray-100"><RiAccountCircleLine size={22} /></span>
                            <p className='ml-3 uppercase sm:text-xs lg:text-sm'>Login / Signup</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
