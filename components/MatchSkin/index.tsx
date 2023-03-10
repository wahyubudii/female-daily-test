import Link from "next/link";
import { useEffect } from "react";
import ReactStars from "react-stars";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getData, selectData } from "../../redux/reducer/dataSlice";

export default function MatchSkin() {
  const dispatch = useAppDispatch();
  const { data, pending, error } = useAppSelector(selectData);

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  return (
    <div className="container mx-auto sm:px-16 lg:px-28 bg-red-100">
      <div className="bg-red-100 flex sm:flex-col lg:flex-row items-center justify-between py-5">
        <div className="lg:mr-10 lg:w-1/2">
          <h1 className="font-bold sm:text-xl lg:text-2xl">
            Looking for products that are just simply perfect for you?
          </h1>
          <p className="sm:mt-3 lg:mt-6 sm:text-xs lg:text-sm xl:text-lg lg:leading-5 xl:leading-6 font-medium">
            Here are some products that we believe match your skin, hair, and
            body! Habe we mentioned that they solve your concerns too?
          </p>
          <div className="sm:pt-6 lg:pt-10 flex justify-end">
            <Link className="sm:py-2 sm:px-4 lg:py-3 lg:px-6 bg-red-600 rounded text-white sm:text-xs xl:text-sm self-end" href="#">
              See My Matches
            </Link>
          </div>
        </div>
        <div className="sm:pt-10 lg:pt-0 grid grid-cols-3 gap-5">
          {pending ? <p>Loading...</p> : data["editor's choice"].slice(0, 3).map((val: any, index: number) => {
            return (
              <div key={index} className="bg-white rounded-lg hover:scale-105 transition">
                <div className='px-4 py-2 w-auto'>
                    <div className='sm:h-32 lg:h-24 xl:h-36 mt-3 bg-cover bg-center' style={{backgroundImage: `url(${val.product.image})`}}></div>
                    <p className="sm:mt-4 lg:mt-6 text-red-600 font-semibold sm:text-xs xl:text-normal">Match Skin Type</p>
                    <div className='mt-1 flex items-center space-x-2'>
                        <p className='font-semibold sm:text-xs xl:text-sm'>{val.product.rating}</p>
                        <div className="text-xs"><ReactStars size={18} count={5} color2={'#E0144C'} value={val.product.rating} /></div>
                        <p className="sm:text-xs xl:text-sm">(7)</p>
                    </div>
                    <div className="my-2 space-y-1">
                      <p className='font-bold line-clamp-1 sm:text-[12px] xl:text-[14px]'>{val.product.name}</p>
                      <p className='text-[14px] font-medium sm:text-[11px] xl:text-[14px] line-clamp-2'>{val.product.description}</p>
                      <p className='text-gray-400 sm:text-[11px] xl:text-[14px] mt-2'>Rosy Beige</p>
                    </div>
                </div>
              </div>
            );
          })}
          {/* {error && <p>Oops, something went wrong</p>} */}
        </div>
      </div>
    </div>
  );
}
