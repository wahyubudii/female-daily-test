import React, { useState } from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import ReactStars from 'react-stars'
import MR2 from '../Ads/MR2'
import Link from 'next/link'

export default function LatestReviews({props}:any) {
    const [latestReviews, setLatestReviews] = useState(props["latest review"])
    const editorPhoto = "https://image.femaledaily.com/dyn/80/images/user-pics/8cfa98979828b03949df998669bcca01.jpg"
    
    return (
        <div className="pb-24 container mx-auto">
            <div className="lg:mx-28 grid grid-cols-3 gap-10">
                <div className="col-span-2">
                    <h3 className='font-bold text-xl'>Latest Reviews</h3>
                    <div className='flex items-center justify-between'>
                        <p className='pt-1 text-gray-400'>So you can make better purchase decision</p>
                        <Link href="https://reviews.femaledaily.com/" target={"_blank"} className='flex items-center justify-center text-red-500'>
                            <p className='font-medium pr-2'>See more</p>
                            <MdOutlineKeyboardArrowRight size={20} />
                        </Link>
                    </div>
                    <div className="mt-5 grid grid-cols-2 lg:gap-4 xl:gap-10">
                        {latestReviews.slice(0,2).map((val:any, index:number) => {
                            return (
                                <div key={index} className='relative border border-slate-200 p-4 rounded-lg'>
                                    <div className='flex items-center justify-evenly'>
                                        <div className='h-12 w-10 bg-cover bg-center' style={{backgroundImage: `url(${val.product.image})`}}></div>
                                        <div className='flex flex-col'>
                                            <p className='font-semibold uppercase'>{val.product.name}</p>
                                            <p className='pt-1 capitalize font-medium text-sm'>{val.product.desc}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between border-t border-slate-200 mt-4'>
                                        <ReactStars count={5} size={24} color2={'#E0144C'} value={val.star} />
                                        <p className='text-gray-300 text-xs'>2 hours ago</p>
                                    </div>
                                    <div className='line-clamp-4 xl:text-sm lg:text-xs text-slate-600 mb-4'>{val.comment}</div>
                                    <div className="flex flex-col items-center w-full justify-center absolute -bottom-24 2xl:-bottom-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <div className="h-9 w-9 2xl:h-12 2xl:w-12 rounded-full bg-cover bg-center" style={{backgroundImage: `url(${editorPhoto})`}}></div>
                                        <p className='pt-[8px] capitalize text-gray-500 text-sm'>{val.user}</p>
                                        <p className='text-gray-400 text-[10px]'>{"Combination Skin, " + val.profile.slice(-1)}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <MR2 />
            </div>
        </div>
  )
}
