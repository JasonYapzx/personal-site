import React from 'react'

const Projects = () => {

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
          Hello, This is the Projects page.
        </div>
      </div>
    </>
  )
}

export default Projects;