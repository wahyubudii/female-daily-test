import Link from 'next/link'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { youtubeVideo } from '../../utils/resources'

export default function LatestVideos() {
    const mainVideo = "104iWodbFsE"

    return (
        <div className="pb-14 container mx-auto">
            <div className="sm:mx-12 lg:mx-28">
                <h3 className='font-bold sm:text-sm lg:text-xl'>Latest Videos</h3>
                <div className='flex items-center justify-between'>
                    <p className='text-gray-400 sm:text-xs lg:text-base'>Watch and learn, ladies</p>
                    <Link href="https://www.youtube.com/user/FemaleDailyNetwork" target={"_blank"} className='flex items-center justify-center text-red-500'>
                        <p className='font-medium sm:text-xs lg:text-base pr-2'>See more</p>
                        <MdOutlineKeyboardArrowRight size={20} />
                    </Link>
                </div>
                <div className="mt-6">
                    <div className="flex justify-end grid grid-cols-3 sm:gap-4 lg:gap-6">
                        <div className='col-span-2 bg-zinc-200'>
                            <iframe src={`https://www.youtube.com/embed/${mainVideo}`} className="w-full h-full" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="flex flex-col justify-between sm:gap-4 lg:gap-6">
                            {youtubeVideo.map((val:any, index:number) => {
                                return (
                                    <iframe key={index} src={`https://www.youtube.com/embed/${val}`} className="sm:h-32 lg:h-52" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
