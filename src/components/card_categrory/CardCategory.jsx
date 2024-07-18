import React from 'react'
import { Link } from 'react-router-dom'
import starsFunc from '../../components/stars_func/StarsFunc'

const CardCategory = ({ item }) => {
    return (
        <div  className='flex flex-col items-center gap-3 relative'>
            <div className='w-[350px] h-[380px] pt-12 px-8 pb-8 mix-blend-multiply bg-[#fff] card rounded-3xl'>
                <Link  to={`/single-page/${item.id}`}><img src={item.image} alt="" className="w-full h-full object-contain" /></Link>
            </div>
            <span className='absolute top-4 right-8 rating__stars'>{starsFunc(item.rating.rate)}</span>
            <div className="w-[253px] text-gray-700 text-lg font-normal  leading-[27px]">Shirt with insertion lace trims</div>
            <div className="text-zinc-800 text-2xl font-bold  leading-[31.20px]">${item.price}</div>
        </div>
    )
}

export default CardCategory
