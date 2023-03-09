import React from 'react';


const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-6xl font-bold">Welcome to my portfolio website</h1>
        <p className="text-xl my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit nulla vel dolor suscipit bibendum. Nullam condimentum nunc id urna congue interdum. Mauris quis convallis massa. Donec non mi non nisl pulvinar bibendum. Donec consequat varius purus, a semper quam venenatis vel. Sed rhoncus sollicitudin arcu at porttitor. Nam sed lectus a magna malesuada sollicitudin.</p>
        <button className="bg-black text-white py-4 px-8 rounded-lg hover:bg-gray-900 transition-colors duration-300 ease-in-out">View Projects</button>
    </div>
  )
}

export default Home;