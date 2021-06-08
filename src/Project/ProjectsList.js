import { Project } from '../Project/Project'

const ProjectsList = ({ projectsById }) => {
    const projects = Object.values(projectsById)
    return (
        <div>
            {
                projects.map(project => <Project id={project.id} name={project.name} key={project.id} />)
            }
        </div>
    )
}

export default ProjectsList;