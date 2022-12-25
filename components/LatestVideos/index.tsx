import Link from 'next/link'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { youtubeVideo } from '../../utils/resources'

export default function LatestVideos() {
    const mainVideo = "104iWodbFsE"

    return (
        <div className="py-8 container mx-auto">
            <div className="lg:mx-28">
                <h3 className='font-bold text-xl'>Latest Videos</h3>
                <div className='flex items-center justify-between'>
                    <p className='pt-1 text-gray-400'>Watch and learn, ladies</p>
                    <Link href="https://www.youtube.com/user/FemaleDailyNetwork" target={"_blank"} className='flex items-center justify-center text-red-500'>
                        <p className='font-medium pr-2'>See more</p>
                        <MdOutlineKeyboardArrowRight size={20} />
                    </Link>
                </div>
                <div className="mt-6">
                    <div className="flex justify-end grid grid-cols-3 gap-6">
                        <div className='col-span-2 bg-zinc-200'>
                            <iframe src={`https://www.youtube.com/embed/${mainVideo}`} height={420} className="w-full" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="flex flex-col justify-between">
                            {youtubeVideo.map((val:any, index:number) => {
                                return (
                                    <iframe key={index} src={`https://www.youtube.com/embed/${val}`} height={200} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
