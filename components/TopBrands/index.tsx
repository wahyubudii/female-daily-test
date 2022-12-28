import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

export default function TopBrands() {
    const brands = ["nivea", "the_ordinary", "the_body_shop", "sk_II", "maybelline", "innisfree"]

    return (
        <div className="pb-14 container mx-auto">
            <div className="sm:mx-12 lg:mx-28">
                <h3 className='font-bold sm:text-sm lg:text-xl'>Top Brands</h3>
                <div className='flex flex items-center justify-between'>
                    <p className='text-gray-400 sm:text-xs lg:text-base'>We all know and love</p>
                    <Link href="https://reviews.femaledaily.com/brands" target={"_blank"} className='flex items-center justify-center text-red-500'>
                        <p className='font-medium sm:text-xs lg:text-base pr-2'>See more</p>
                        <MdOutlineKeyboardArrowRight size={20} />
                    </Link>
                </div>
                <div className="mt-8 grid grid-cols-6 sm:gap-3 lg:gap-5 flex">
                    {brands.map((val:string, index:number) => {
                        return (
                            <Image data-testid="brand-images" key={index} src={`/images/brands/${val}.png`} alt="brands" className='w-fit sm:h-10 lg:h-16 m-auto' width={100} height={24} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
