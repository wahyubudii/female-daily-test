import React, { useState } from 'react'
import ReactStars from 'react-stars'

export default function EditorChoice({props}:any) {
    const [editorChoice, setSeditorChoise] = useState(props["editor's choice"])
    const editorPhoto = "https://image.femaledaily.com/dyn/80/images/user-pics/8cfa98979828b03949df998669bcca01.jpg"

    return (
        <div className="py-8 container mx-auto">
            <div className="lg:mx-28 pb-10">
                <h3 className='font-bold text-xl'>Editor&apos;s Choice</h3>
                <p className='text-gray-400'>Curated with love</p>
                <div className="grid lg:grid-cols-4 xl:grid-cols-5 gap-5">
                    {editorChoice.map((val:any, index:number) => {
                        return (
                            <div key={index} className='mt-14 relative border border-gray-300 rounded-lg hover:scale-105 transition hover:opacity-75'>
                                <div className='px-4 pt-8 pb-2'>
                                    <div className='lg:h-32 2xl:h-40 bg-cover bg-center' style={{backgroundImage: `url(${val.product.image})`}}></div>
                                    <div className='mt-4 flex items-center space-x-2'>
                                        <p className='font-bold'>{val.product.rating}</p>
                                        <div className="text-xs"><ReactStars size={22} count={5} color2={'#E0144C'} value={val.product.rating} /></div>
                                        <p className="lg:text-xs xl:text-sm">(7)</p>
                                    </div>
                                    <p className='pt-2 font-bold line-clamp-2 text-[14px]'>{val.product.name}</p>
                                    <p className='pt-1 font-medium leading-5 text-[12px]'>{val.product.description}</p>
                                    <p className='text-gray-400 text-[12px] mb-4 mt-2'>Rosy Beige.</p>
                                </div>
                                <div className='absolute -top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                    <div key={index}>
                                        <div className='flex justify-center space-x-3'>
                                            <div className='h-9 w-9 rounded-full bg-cover bg-center' style={{backgroundImage: `url(${editorPhoto})`}} />
                                            <div className='capitalize'>
                                                <p className='font-bold text-[10px]'>{val.editor}</p>
                                                <p className='text-[9px] text-gray-400 min-w-max'>{val.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
  )
}
