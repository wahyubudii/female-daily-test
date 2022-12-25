import Link from "next/link";
import React, { useState } from "react";
import ReactStars from "react-stars";

export default function MatchSkin({ props }: any) {
  const [editorChoice, setSeditorChoise] = useState(props["editor's choice"]);

  return (
    <div className="container mx-auto px-28 bg-red-100">
      <div className="bg-red-100 flex items-center justify-between py-5">
        <div className="mr-10 w-1/2">
          <h1 className="font-bold text-2xl">
            Looking for products that are just simply perfect for you?
          </h1>
          <p className="mt-6 lg:text-sm xl:text-lg lg:leading-5 xl:leading-6 font-medium">
            Here are some products that we believe match your skin, hair, and
            body! Habe we mentioned that they solve your concerns too?
          </p>
          <div className="pt-10 flex justify-end">
            <Link className="py-3 px-6 bg-red-600 rounded text-white lg:text-xs xl:text-sm self-end" href="#">
              See My Matches
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {editorChoice.slice(0, 3).map((val: any, index: number) => {
            return (
              <div key={index} className="bg-white rounded-lg hover:scale-105 transition">
                <div className='px-4 py-2 w-auto'>
                    <div className='lg:h-24 xl:h-36 mt-3 bg-cover bg-center' style={{backgroundImage: `url(${val.product.image})`}}></div>
                    <p className="mt-6 text-red-600 font-semibold lg:text-xs xl:text-normal">Match Skin Type</p>
                    <div className='mt-1 flex items-center space-x-2'>
                        <p className='font-semibold lg:text-xs xl:text-sm'>{val.product.rating}</p>
                        <div className="text-xs"><ReactStars size={18} count={5} color2={'#E0144C'} value={val.product.rating} /></div>
                        <p className="lg:text-xs xl:text-sm">(7)</p>
                    </div>
                    <div className="my-2 space-y-1">
                      <p className='font-bold line-clamp-1 lg:text-[12px] xl:text-[14px]'>{val.product.name}</p>
                      <p className='text-[14px] font-medium lg:text-[11px] xl:text-[14px] line-clamp-2'>{val.product.description}</p>
                      <p className='text-gray-400 lg:text-[11px] xl:text-[14px] mt-2'>Rosy Beige</p>
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
