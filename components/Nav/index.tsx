import Link from 'next/link'
import { navItems } from '../../utils/resources'

export default function Nav() {
    return (
        <div className='container mx-auto border-y border-gray-200'>
            <div className='sm:mx-10 lg:mx-24'>
                <div className='flex items-center justify-center sm:space-x-5 lg:space-x-7 py-2'>
                    { navItems.map((val:any, index:number) => {
                        return (
                            <Link key={index} href={val === "brands" ? `https://reviews.femaledaily.com/${val}` : `https://femaledaily.com/category/${val}`} target={'_blank'}>
                                <p key={index} className='font-bold sm:text-[10px] lg:text-xs xl:text-sm uppercase'>{val}</p>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
