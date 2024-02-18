import React from 'react'
import Sidebar from '../../conponents/sidebar/Sidebar'
import MessageContainer from '../../conponents/messages/MessageContainer'


const Home = () => {
  return (
     <div className='flex sm:h-[450px] md:[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
     bg-opacity-0'>
      <Sidebar/>
      <MessageContainer/>
     </div>
  )
}

export default Home