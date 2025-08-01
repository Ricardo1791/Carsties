'use client';
import { useParamsStore } from '@/hooks/useParamsStore';
import React from 'react'
import Heading from './Heading';
import { Button } from 'flowbite-react';
import { signIn } from 'next-auth/react';

type Props = {
    title?: string;
    subtitle?: string;
    showReset?: boolean,
    showLogin?: boolean,
    callbackurl?: string
}

export default function EmptyFilter({
    title = 'No Matches for this filter', 
    subtitle= 'Try changing the filter or search terms',
    showReset,
    showLogin,
    callbackurl
}: Props) {
    const reset = useParamsStore(state => state.reset);

  return (
    <div className='flex flex-col gap-2 items-center justify-center h-[40vh] shadow-lg'>
        <Heading title={title} subtitle={subtitle} center />
        <div className='mt-4'>
            {showReset && (
                <Button outline onClick={reset}>
                    Remove Filters
                </Button>
            )}
            {showLogin && (
                <Button outline onClick={() => signIn('id-server', {redirectTo: callbackurl})}>
                    Login
                </Button>
            )}
        </div>
    </div>
  )
}
