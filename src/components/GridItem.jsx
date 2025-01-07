import React from 'react'

function GridItem({icon, title1, title2}) {
  return (
    <>
        <div className='relative border-green-600 border-2 rounded-lg p-3 mt-10 shadow-xl shadow-green-700'>
          <i className={` ${icon} absolute bg-green-600 py-3 px-5 rounded-lg text-6xl top-[-35px] left-1/2 transform -translate-x-1/2`}></i>
          <h2 className='text-center underline text-4xl font-bold mb-6 mt-12'> {title1} <span className='text-4xl text-green-400 underline px-2'> {title2}!</span> </h2>
          <p> Deserunt eiusmod officia amet aute exercitation amet eiusmod laborum magna quis eu ea. Velit consequat esse deserunt ex laborum laborum occaecat nulla eu. Eu magna eiusmod consequat mollit laboris ad ut sit id. Consequat velit officia magna duis. Nisi irure enim minim do exercitation id ullamco sit quis ad do eu aliquip. Enim ea aute consequat voluptate veniam mollit magna adipisicing enim. Adipisicing dolor veniam aute anim. </p>
        </div>
    </>
  )
}

export default GridItem