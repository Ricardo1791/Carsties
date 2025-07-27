import EmptyFilter from '@/app/components/EmptyFilter'
import React from 'react'

export default function SignIn({searchParams}: {searchParams: {callbackurl: string}}) {
  return (
    <EmptyFilter 
        title='You need to be logged in to do that'
        subtitle='Please click below to login'
        showLogin
        callbackurl={searchParams.callbackurl}
    />
  )
}
