import { cutReview } from '@utils/cutReview'
import React from 'react'

function ReviewsCard({review}: {review: {author:string, review: string, job:string, img:string}}) {
  return (
    <div className='border border-black dark:border-white p-4 text-xs flex flex-col justify-between dark:text-white'>
      <p>{cutReview(review.review, 600)}</p>
        <div className='flex items-center gap-4 mt-6'>
            <img src={review.img} className='w-10 h-10 rounded-full'/>
            <div>
                <p className='font-bold'>{review.author}</p>
                <p>{review.job}</p>
            </div>
        </div>
    </div>
  )
}

export default ReviewsCard