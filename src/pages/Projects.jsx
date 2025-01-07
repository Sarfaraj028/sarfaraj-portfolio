import React from 'react'
import './projects.css'
const projects =[
    {
        img: "/text-master-img.jpg",
        title: "Text Master",
        link: "https://text-master028.netlify.app/"
    },
    {
        img: "/calculator.jpg",
        title: "Calculator Window",
        link: "https://calculator-window.netlify.app/"
    }
]

function Projects() {
  return (
    <section id='projects' style={{background: "rgb(0, 40, 20)"}} className='projects py-10'>
      <h2 className='text-center underline text-4xl font-bold mb-10'>Latest <span className='text-4xl text-green-400 underline px-2'> Design!</span> </h2>
      <div className=' grid grid-cols-1  lg:grid-cols-2 gap-5 '>
        {
            projects.map( (item) => (
                <a href={item.link} target='_blank' className='group relative parent overflow-hidden bg-transparent '>
                    <abbr title={`go to ${item.title} `} >
                    <img src={item.img} alt="img" className='rounded-lg' />
                    <div className='child  w-11/12 rounded-lg text-4xl font-bold'>Click anywhere on the image to see this project </div>
                    <h2 className='absolute top-0 right-0  bg-red-600 p-2 px-4 rounded-md'> {item.title}</h2>
                    </abbr>
                </a>
            ))
        }
      </div>
 
    </section>
  )
}

export default Projects