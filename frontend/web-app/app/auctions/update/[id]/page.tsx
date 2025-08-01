import { getDetailedViewData } from '@/app/actions/auctionAction';
import Heading from '@/app/components/Heading';
import React from 'react'
import AuctionForm from '../../AuctionForm';

export default async function Update({params}: {params: Promise<{id: string}>}) {
  const {id} = await params;
  const data = await getDetailedViewData(id);
  
  return (
    <div className='mx-auto max-w-[75%] shadow-lg p-10 bg-white rounded-lg'>
      <Heading title="Update your Auction"  subtitle='Please update the details of your car (only these properties can be updated)'/>
      <AuctionForm auction={data} />
    </div>

  )
}
