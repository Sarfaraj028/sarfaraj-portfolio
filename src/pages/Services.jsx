import React from 'react'
import './services.css'
import GridItem from '../components/GridItem'
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const gridItem = [
  { 
    icon: "bx bx-code-alt",
    title1: "Web",
    title2: "Development"
  },
  {
    icon: "bx bx-cog bx bx-code-alt",
    title1: "Web",
    title2: "Maintenance"
  },
  {
    icon: "bx bx-paint",
    title1: "Graphic",
    title2: "Design"
  },
]

function Services() {
  return (
    <section id='services' className='services'>
      <h2 className='text-center underline text-4xl font-bold mb-10'>Exclusive <span className='text-4xl text-green-400 underline px-2'> Services!</span> </h2>
      
      {/* grid start from here  */}
      <div className=' grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-5 mb-6 '>
        {gridItem.map( (item)=> (
          <GridItem key={uuidv4()} icon={item.icon} title1={item.title1} title2={item.title2}  />
      ))}
        <div className='relative border-green-600 border-2 rounded-lg p-3 mt-10 shadow-xl shadow-green-700'>
          <img src='/responsive-icon.webp' width="90px" className='text-white absolute bg-green-600 py-3 px-5 rounded-lg text-6xl top-[-35px] left-1/2 transform -translate-x-1/2'></img>
          <h2 className='text-center underline text-4xl font-bold mb-6 mt-12'>Responsive <span className='text-4xl text-green-400 underline px-2'> Design!</span> </h2>
          <p> Deserunt eiusmod officia amet aute exercitation amet eiusmod laborum magna quis eu ea. Velit consequat esse deserunt ex laborum laborum occaecat nulla eu. Eu magna eiusmod consequat mollit laboris ad ut sit id. Consequat velit officia magna duis. Nisi irure enim minim do exercitation id ullamco sit quis ad do eu aliquip. Enim ea aute consequat voluptate veniam mollit magna adipisicing enim. Adipisicing dolor veniam aute anim. </p>
        </div>
      </div>
    </section>
  )
}

export default Services