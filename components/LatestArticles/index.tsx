import Link from 'next/link'
import { useEffect } from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getData, selectData } from '../../redux/reducer/dataSlice';

export default function LatestArticles() {
    const dispatch = useAppDispatch();
    const { data, pending, error } = useAppSelector(selectData);

    useEffect(() => {
        dispatch(getData())
    }, [dispatch])

    return (
        <div className="pb-10 container mx-auto">
            <div className="sm:mx-12 lg:mx-28">
                <h3 className='font-bold sm:text-sm lg:text-xl'>Latest Articles</h3>
                <div className='flex items-center justify-between'>
                    <p className='text-gray-400 sm:text-xs lg:text-base'>So you can make better decision</p>
                    <Link href="https://www.youtube.com/user/FemaleDailyNetwork" target={"_blank"} className='flex items-center justify-center text-red-500'>
                        <p className='font-medium sm:text-xs lg:text-base pr-2'>See more</p>
                        <MdOutlineKeyboardArrowRight size={20} />
                    </Link>
                </div>
                <div className="mt-6">
                    <div className='py-2 grid grid-cols-3 sm:gap-5 lg:gap-10'>
                        {/* MAIN ARTICLES */}
                        {pending ? <p>Loading...</p> : data["latest articles"].slice(0,4).map((val:any, index:number) => {
                            return (
                                <div key={index} className="hover:scale-105 transition hover:opacity-75">
                                    <div className='bg-center bg-cover bg-red-200 sm:h-32 xl:h-40 rounded-md' style={{backgroundImage: `url(${val.image})`}}></div>
                                    <p className='font-semibold sm:text-xs lg:text-base xl:text-lg lg:leading-5 xl:leading-6 sm:pt-3 lg:pt-4 sm:line-clamp-2 2xl:line-clamp-3'>{val.title}</p>
                                    <div className='sm:pt-2 lg:pt-4 sm:divide-x-[1px] lg:divide-x-[2px] divide-slate-300 sm:text-[8px] lg:text-xs text-gray-400 flex'>
                                        <p className='font-medium mr-1 capitalize'>{val.author}</p>
                                        <p className='font-normal pl-1'>{val.published_at}</p>
                                    </div>
                                </div>
                            )
                        })}
                        {/* SPONSORED */}
                        {pending ? <p>Loading...</p> : data["latest articles"].slice(0,2).map((val:any, index:number) => {
                            return (
                                <div className='relative hover:scale-105 transition hover:opacity-75' key={index}>
                                    <div className='bg-center bg-cover bg-red-200 sm:h-32 xl:h-40 rounded-md' style={{backgroundImage: `url(${val.image})`}}></div>
                                    <p className='font-semibold sm:text-xs lg:text-base xl:text-lg lg:leading-5 xl:leading-6 sm:pt-3 lg:pt-4 sm:line-clamp-2 2xl:line-clamp-3'>{val.title}</p>
                                    <div className='sm:pt-2 lg:pt-4 sm:divide-x-[1px] lg:divide-x-[2px] divide-slate-300 sm:text-[8px] lg:text-xs text-gray-400 flex'>
                                        <p className='font-medium mr-1 capitalize'>{val.author}</p>
                                        <p className='font-normal pl-1'>{val.published_at}</p>
                                    </div>
                                    <p className="absolute top-0 left-0 sm:text-[7px] lg:text-[9px] px-2 border-0 font-bold bg-white text-red-500 uppercase">
                                        sponsored
                                    </p>
                                </div>
                            )
                        })}
                        {/* {error && <p>Oops, something went wrong</p>} */}
                    </div>
                </div>
            </div>
        </div>
  )
}
