import React from 'react'

const projects =[{
  img: "/text-master-img.jpg",
  title: "Text Master",
  link: "https://text-master028.netlify.app/"
}]

function Projects() {
  return (
    <section id='projects' style={{background: "rgb(0, 40, 20)"}} className='projects py-10'>
      <h2 className='text-center underline text-4xl font-bold mb-10'>Latest <span className='text-4xl text-green-400 underline px-2'> Design!</span> </h2>
      <div className=' grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-5 '>
        <div>
          
        </div>
      </div>
 
    </section>
  )
}

export default Projects