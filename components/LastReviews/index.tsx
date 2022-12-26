import React, { useState } from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import ReactStars from 'react-stars'
import MR2 from '../Ads/MR2'
import Link from 'next/link'

export default function LatestReviews({props}:any) {
    const [latestReviews, setLatestReviews] = useState(props["latest review"])
    const editorPhoto = "https://image.femaledaily.com/dyn/80/images/user-pics/8cfa98979828b03949df998669bcca01.jpg"
    
    return (
        <div className="pb-14 container mx-auto">
            <div className="sm:mx-12 lg:mx-28 lg:pb-10 sm:flex sm:flex-col lg:grid lg:grid-cols-3 lg:gap-10">
                <div className="lg:col-span-2">
                    <h3 className='font-bold sm:text-sm lg:text-xl'>Latest Reviews</h3>
                    <div className='flex items-center justify-between'>
                        <p className='text-gray-400 sm:text-xs lg:text-base'>So you can make better purchase decision</p>
                        <Link href="https://reviews.femaledaily.com/" target={"_blank"} className='flex items-center justify-center text-red-500'>
                            <p className='font-medium sm:text-xs lg:text-base pr-2'>See more</p>
                            <MdOutlineKeyboardArrowRight size={20} />
                        </Link>
                    </div>
                    <div className="mt-5 grid grid-cols-2 lg:gap-4 sm:gap-5 xl:gap-10">
                        {latestReviews.slice(0,2).map((val:any, index:number) => {
                            return (
                                <div key={index} className='relative border border-slate-200 p-4 rounded-lg'>
                                    <div className='flex items-start justify-evenly'>
                                        <div className='h-12 w-12 bg-cover bg-center' style={{backgroundImage: `url(${val.product.image})`}}></div>
                                        <div className='flex flex-col'>
                                            <p className='font-semibold sm:text-xs lg:text-base xl:text-lg uppercase'>{val.product.name}</p>
                                            <p className='lg:pt-1 xl:pt-0 capitalize font-medium sm:text-xs xl:text-sm'>{val.product.desc}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between border-t border-slate-200 mt-4'>
                                        <ReactStars count={5} size={20} color2={'#E0144C'} value={val.star} />
                                        <p className='text-gray-300 sm:text-[10px] xl:text-xs'>2 hours ago</p>
                                    </div>
                                    <div className='line-clamp-4 sm:text-xs xl:text-base text-slate-600 mb-4'>{val.comment}</div>
                                    <div className="flex flex-col items-center w-full justify-center absolute -bottom-24 2xl:-bottom-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <div className="h-9 w-9 2xl:h-12 2xl:w-12 rounded-full bg-cover bg-center" style={{backgroundImage: `url(${editorPhoto})`}}></div>
                                        <p className='pt-[8px] capitalize text-gray-600 sm:text-xs lg:text-sm xl:text-base'>{val.user}</p>
                                        <p className='text-gray-500 sm:text-[9px] lg:text-[10px] xl:text-[12px]'>{"Combination Skin, " + val.profile.slice(-1)}</p>
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
