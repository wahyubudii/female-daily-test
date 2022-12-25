import Link from 'next/link'
import React, { useState } from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

export default function LatestArticles({props}:any) {
    const [latestArticles, setLatestArticles] = useState(props["latest articles"])

    return (
        <div className="pb-12 container mx-auto">
            <div className="lg:mx-28">
                <h3 className='font-bold text-xl'>Latest Articles</h3>
                <div className='flex items-center justify-between'>
                    <p className='pt-1 text-gray-400'>So you can make better decision</p>
                    <Link href="https://www.youtube.com/user/FemaleDailyNetwork" target={"_blank"} className='flex items-center justify-center text-red-500'>
                        <p className='font-medium pr-2'>See more</p>
                        <MdOutlineKeyboardArrowRight size={20} />
                    </Link>
                </div>
                <div className="mt-6">
                    <div className='py-2 grid grid-cols-3 gap-10'>
                        {/* MAIN ARTICLES */}
                        {latestArticles.slice(0,4).map((val:any, index:number) => {
                            return (
                                <div key={index} className="hover:scale-105 transition hover:opacity-75">
                                    <div className='bg-center bg-cover bg-red-200 h-32 rounded-md' style={{backgroundImage: `url(${val.image})`}}></div>
                                    <p className='font-semibold lg:text-normal xl:text-lg lg:leading-5 xl:leading-6 pt-4 sm:line-clamp-2 2xl:line-clamp-3'>{val.title}</p>
                                    <div className='pt-4 divide-x-[2px] divide-slate-300 text-xs text-gray-400 flex'>
                                        <p className='font-medium mr-1 capitalize'>{val.author}</p>
                                        <p className='font-normal pl-1'>{val.published_at}</p>
                                    </div>
                                </div>
                            )
                        })}
                        {/* SPONSORED */}
                        {latestArticles.slice(0,2).map((val:any, index:number) => {
                            return (
                                <div className='relative hover:scale-105 transition hover:opacity-75' key={index}>
                                    <div className='bg-center bg-cover bg-red-200 h-32 rounded-md' style={{backgroundImage: `url(${val.image})`}}></div>
                                    <p className='font-semibold lg:text-normal xl:text-lg lg:leading-5 pt-4 sm:line-clamp-2 xl:line-clamp-3'>{val.title}</p>
                                    <div className='pt-4 divide-x-[1.5px] divide-slate-300 text-xs text-gray-400 flex'>
                                        <p className='font-medium mr-1 capitalize'>{val.author}</p>
                                        <p className='font-normal pl-1'>{val.published_at}</p>
                                    </div>
                                    <p className="absolute top-0 left-0 text-[9px] px-2 border-0 font-bold bg-white text-red-500 uppercase">
                                        sponsored
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
  )
}
