import { useEffect } from 'react'
import ReactStars from 'react-stars'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getData, selectData } from '../../redux/reducer/dataSlice';
import { dummyPhoto } from '../../utils/resources';

export default function EditorChoice() {
    const dispatch = useAppDispatch();
    const { data, pending, error } = useAppSelector(selectData);

    useEffect(() => {
        dispatch(getData())
    }, [dispatch])

    return (
        <div className="py-10 container mx-auto">
            <div className="sm:mx-12 lg:mx-28">
                <h3 className='font-bold sm:text-sm lg:text-xl'>Editor&apos;s Choice</h3>
                <p className='text-gray-400 sm:text-xs lg:text-base'>Curated with love</p>
                <div className="grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:gap-5 md:gap-8 lg:gap-5">
                    {pending ? <p>Loading...</p> : data["editor's choice"].map((val:any, index:number) => {
                        return (
                            <div key={index} className='sm:mt-10 lg:mt-14 relative border border-gray-300 rounded-lg hover:scale-105 transition hover:opacity-75'>
                                <div className='px-4 pt-8 pb-2'>
                                    <div className='sm:h-32 2xl:h-40 bg-cover bg-center' style={{backgroundImage: `url(${val.product.image})`}}></div>
                                    <div className='mt-4 flex items-center space-x-2'>
                                        <p className='sm:text-xs lg:text-base font-bold'>{val.product.rating}</p>
                                        <div className="text-xs"><ReactStars size={20} count={5} color2={'#E0144C'} value={val.product.rating} /></div>
                                        <p className="sm:text-xs xl:text-sm">(7)</p>
                                    </div>
                                    <p className='pt-2 font-bold line-clamp-2 sm:text-[12px] lg:text-[14px]'>{val.product.name}</p>
                                    <p className='sm:pt-1 font-medium sm:leading-4 lg:leading-5 sm:text-[11px] lg:text-[12px]'>{val.product.description}</p>
                                    <p className='text-gray-400 sm:text-[11px] lg:text-[12px] mb-4 sm:mt-1 lg:mt-2'>Rosy Beige.</p>
                                </div>
                                <div className='absolute -top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                    <div key={index}>
                                        <div className='flex justify-center space-x-3'>
                                            <div className='sm:h-7 sm:w-7 md:h-9 md:w-9 rounded-full bg-cover bg-center' style={{backgroundImage: `url(${dummyPhoto})`}} />
                                            <div className='capitalize'>
                                                <p className='font-bold sm:text-[8px] md:text-[10px]'>{val.editor}</p>
                                                <p className='sm:text-[8px] md:text-[9px] text-gray-400 min-w-max'>{val.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                    {/* {error && <p>Oops, something went wrong</p>} */}
                </div>
            </div>
        </div>
  )
}
