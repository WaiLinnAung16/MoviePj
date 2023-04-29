import React from 'react'

const SlideLoading = () => {
  return (
    <div className='max-w-screen h-[500px] bg-slate-700 animate-pulse relative'>
        <div className="absolute bottom-10 left-5 md:left-12 flex flex-col gap-3 w-[90%] md:w-[80%] lg:w-[60%] xl:w-[40%] z-10">
            <div className='w-72 h-8 rounded bg-slate-300'></div>
            <div className='flex gap-1 items-center'>
                <div className='w-20 h-4 rounded bg-slate-300'></div>
                <div className='w-20 h-4 rounded bg-slate-300'></div>
                <div className='w-20 h-4 rounded bg-slate-300'></div>
            </div>
            <div className='flex flex-wrap gap-2'>
                <div className='w-40 h-2 bg-slate-300 rounded'></div>
                <div className='w-16 h-2 bg-slate-300 rounded'></div>
                <div className='w-20 h-2 bg-slate-300 rounded'></div>
                <div className='w-10 h-2 bg-slate-300 rounded'></div>
                <div className='w-44 h-2 bg-slate-300 rounded'></div>
                <div className='w-52 h-2 bg-slate-300 rounded'></div>
                <div className='w-20 h-2 bg-slate-300 rounded'></div>
                <div className='w-10 h-2 bg-slate-300 rounded'></div>
                <div className='w-64 h-2 bg-slate-300 rounded'></div>
                <div className='w-52 h-2 bg-slate-300 rounded'></div>
            </div>    
        </div>
    </div>
  )
}

export default SlideLoading