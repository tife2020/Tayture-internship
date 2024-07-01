import React from 'react'

function ProjectLeftSide({title, id, setSelectedProject, setRightSideItem, ...props}) {

  function selectedProject() {
    setSelectedProject(id)
    setRightSideItem('projectTask')
  }
  return (
    <p {...props} onClick={selectedProject} className="text-xl text-neutral-300 font-normal mb-5 p-2 hover:bg-neutral-700 hover:text-white rounded">{title}</p>
  )
}

export default ProjectLeftSide