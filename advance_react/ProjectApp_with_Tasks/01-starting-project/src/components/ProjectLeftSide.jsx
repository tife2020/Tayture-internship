import React from 'react'

function ProjectLeftSide({title, id, setSelectedProjectId, setRightSideItem, ...props}) {

  function selectedProject() {
    setSelectedProjectId(id)
    setRightSideItem('projectTask')
  }
  return (
    <p {...props} onClick={selectedProject} >{title}</p>
  )
}

export default ProjectLeftSide