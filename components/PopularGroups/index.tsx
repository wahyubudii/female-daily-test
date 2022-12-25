import React, {useState} from 'react'
import Link from 'next/link'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { BsFillPersonFill, BsChatLeftText } from 'react-icons/bs'
import { TfiMenuAlt } from 'react-icons/tfi'

export default function PopularGroups({props}:any) {
    const photoProfile = "https://image.femaledaily.com/dyn/80/images/user-pics/8cfa98979828b03949df998669bcca01.jpg"
    const [popularGroups, setPopularGroups] = useState(props["editor's choice"])

    return (
        <div className="py-8 container mx-auto">
            <div className="lg:mx-28">
                <h3 className='font-bold text-xl'>Popular Groups</h3>
                <div className='flex items-center justify-between'>
                    <p className='pt-1 text-gray-400'>Where the beauty TALK are</p>
                    <Link href="https://www.youtube.com/user/FemaleDailyNetwork" target={"_blank"} className='flex items-center justify-center text-red-500'>
                        <p className='font-medium pr-2'>See more</p>
                        <MdOutlineKeyboardArrowRight size={20} />
                    </Link>
                </div>
                <div className="mt-6 grid grid-cols-4 gap-5">
                    {popularGroups.slice(0,4).map((val:any, index:number) => {
                        return (
                            <div key={index} className='border border-slate-200 flex flex-col pt-4 px-4 rounded-lg shadow-lg shadow-slate-200 hover:scale-105 transition hover:opacity-75'>
                                <div className='self-center rounded-full h-28 w-28 2xl:h-32 2xl:w-32 bg-cover bg-center' style={{backgroundImage: `url(${photoProfile})`}}></div>
                                <p className='font-semibold text-center pt-4 pb-6'>Embrace the Curl</p>
                                <div className='flex items-center justify-evenly mb-3 2xl:text-xl'>
                                    <Link href="#" target={"_blank"}><BsFillPersonFill /></Link>
                                    <Link href="#" target={"_blank"}><TfiMenuAlt /></Link>
                                    <Link href="#" target={"_blank"}><BsChatLeftText /></Link>
                                </div>
                                <p className='text-xs text-center font-medium mb-8 2xl:text-sm'>May our curls pop and never stop!</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
