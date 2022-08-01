import React from 'react'

const Home = () => {

  const Circles = () => (
    <div className="bg">
        <div className="blobs">
            <div className="blob" />
        </div>
    </div>
  );

  return (
    <>
      <div className="flex flex-col items-center justify-center px-4 sm:px024">
        <Circles />
        <div className="flex items-center h-screen justify-center text-center align-cen">
          Hello, my name is Jason.
        </div>
      </div>
    </>
  )
}

export default Home;