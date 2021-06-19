import React from 'react';
import { ThemeContext } from '../ThemeContext';
import { Link } from 'react-router-dom'

const Project = ({ id, name }) => {
  const projectPath = `/projects/${id}/`
  return (
    <div>
      <Link to={projectPath}>{name}</Link>
    </div>
  )
}
export default Project;