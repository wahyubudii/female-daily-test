import Image from 'next/image'
import Link from 'next/link'
import { officialWeb, socialMedia, stores } from '../../utils/resources'
import Bottom from '../Ads/Bottom'

export default function Footer() {
    return (
        <div className="container mx-auto">
            <div className="sm:mx-12 lg:mx-28">
                <div className="flex justify-between">
                    <div className="flex flex-col w-full">
                        <div className="flex items-start justify-center grid grid-cols-3">
                            <div className="space-y-3 sm:text-[11px] lg:text-xs xl:text-sm flex flex-col">
                                <Link href="#" className='font-semibold'>About us</Link>
                                <Link href="#" className='font-semibold'>Feedback</Link>
                                <Link href="#" className='font-semibold'>Contact</Link>
                            </div>
                            <div className="space-y-3 sm:text-[11px] lg:text-xs xl:text-sm flex flex-col">
                                <Link href="#" className='font-semibold'>Terms & Conditions</Link>
                                <Link href="#" className='font-semibold'>Privacy & Policy</Link>
                                <Link href="#" className='font-semibold'>Help</Link>
                            </div>
                            <div className="space-y-3 sm:text-[11px] lg:text-xs xl:text-sm flex flex-col">
                                <Link href="#" className='font-semibold'>Awards</Link>
                                <Link href="#" className='font-semibold'>Newsletter</Link>
                            </div>
                        </div>
                        <div className="mt-10 flex flex-col">
                            <Link href={officialWeb} target={'_blank'}><Image src="/images/logo/female-network.svg" alt="logo" width={100} height={24} /></Link> 
                            <p className='mt-3 sm:text-[9px] lg:text-xs text-gray-400 font-medium'>Copyright <span className='after:content-["©"]'></span> 2015 - 2017 Female Daily Network <span className='after:content-["•"]'></span> All rights reserved</p>
                        </div>
                    </div>
                    <div className="flex flex-col text-xs">
                        <p className='font-semibold capitalize'>Download our mobile app</p>
                        <div className='mt-3 flex items-center justify-start gap-5'>
                            {stores.map((val:any, index:number) => {
                                return (
                                    <Link data-testid="mobile-store" key={index} href={val.url} target={"_blank"}><Image src={`/images/store/${val.name}.png`} alt="stores" className='w-44 m-auto' width={100} height={24} /></Link>
                                )
                            })}
                        </div>
                        <div className="sm:mt-8 lg:mt-12 flex space-x-5">
                            {socialMedia.map((val:any, index:number) => {
                                return (
                                    <Link data-testid="social-media" key={index} href={val.url} target={"_blank"} className='h-7 w-7 rounded-full bg-slate-200 flex'><Image src={`/images/socialMedia/${val.name}.svg`} alt="social-media" width={100} height={24} /></Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="mt-14">
                    <Bottom />
                </div>
            </div>
        </div>
  )
}
