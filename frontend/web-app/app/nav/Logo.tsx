'use client';

import { useParamsStore } from '@/hooks/useParamsStore'
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import { AiOutlineCar } from 'react-icons/ai'

export default function Logo() {

    const reset = useParamsStore(state => state.reset);
    const router = useRouter();
    const pathname= usePathname();

    function handleReset(){
        if (pathname !== '/') router.push('/');
        reset();
    }

    return (
        <div onClick={handleReset} className='cursor-pointer flex Items-center gap-2 text-3xl font-semibold text-red-500'>
            <AiOutlineCar size={34} />
            <div>Carsties Auctions</div>
        </div>
    )
}
