import React from 'react'
import './home.css'

function Home() {
  return (
    <section id="home"className= 'home w-96 lg:w-full text-white flex flex-col md:flex-row justify-between items-center gap-4 text-lg'>
      <div className='md:w-1/2 '>
        <h2 className='text-lg'>Hey!</h2>
        <h1 className='text-3xl font-semibold mb-4'>I am a Full stack web developer</h1>
        <p className='mb-4'>Sarfaraj Alam: Expert Full Stack Web Developer with Specialized Proficiency in Frontend Development (HTML, CSS, JavaScript, React, Tailwind CSS) and Robust Backend Solutions (Node.js, MySQL, Java, JDBC) – Delivering Cutting-Edge Web Applications with Seamless User Experiences. </p>
        <button className='px-4 py-1 border-green-600 border-2 rounded-md mr-2'>Download CV</button>
        <button className='px-4 py-1 bg-green-600 rounded-md'>Contact</button>
      </div>
      <div className='md:w-1/2 flex justify-end'>
        <img className='w-96 rounded-xl min-w-80' src='https://scontent.fixr3-3.fna.fbcdn.net/v/t39.30808-6/293785388_489417066322850_8475558329175485359_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=OnXhb-NBxhAQ7kNvgEqlSgQ&_nc_zt=23&_nc_ht=scontent.fixr3-3.fna&_nc_gid=ALC1zho9n_IPmn-J52IsYTP&oh=00_AYAhzs_S-FwfctF8lNVb8cW4lXfhTwHlcQuFj8cX6JFXWg&oe=678067D1' />
      </div>
    </section>
  )
}

export default Home