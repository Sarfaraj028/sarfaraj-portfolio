import React from 'react'
import './about.css'

function About() {
  return (
    <section id='about' style={{background: "rgb(0, 40, 20)"}} className='about w-full h-auto flex flex-col items-center text-white py-10'>
      <h2 className='text-center underline text-4xl font-bold mb-6'>About <span className='text-4xl text-green-400 underline px-2'> Me!</span> </h2>
      <div>
        Hello! I'm a passionate Full Stack Web Developer and Graphic Designer with a strong foundation in both the creative and technical aspects of web development. I recently graduated in 2024 from IES University Bhopal with a Bachelor's degree in Computer Science and Engineering, where I earned a CGPA of 7.70.
        <br/> <br/> As a Full Stack Web Developer, I specialize in designing and building responsive, user-friendly websites and applications. I have hands-on experience with both front-end technologies like HTML, CSS, JavaScript, and frameworks like React, as well as back-end technologies such as Node.js, Express, and databases like MongoDB. I believe in creating efficient, scalable solutions while keeping the user experience at the forefront of my development process.
        <br/> <br/> On the creative side, I am a skilled Graphic Designer with a keen eye for design. I specialize in creating Instagram post designs, social media graphics, and website visuals that are both visually appealing and effective in conveying a message. Using Canva, I design graphics that are professional, engaging, and tailored to your brand’s needs. Whether it's designing promotional posts for social media or crafting custom visuals for websites, I ensure that every design complements your brand identity and stands out.
      </div>
    </section>
  )
}

export default About