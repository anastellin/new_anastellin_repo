const normalizeState = (projects) => {
    
      const normTasks = 
        projects.map(project => project.tasks).flat().reduce((tasks, projectTask) => {
            const { id } = projectTask
            tasks[id] = {
              id: projectTask.id,
              name: projectTask.name,
              description: projectTask.description,
              completed: projectTask.completed
            }
            return tasks
          }, 
          {})
      
      const normProject = projects.map(project => ({
        id: project.id,
        name: project.name,
        tasksIds: project.tasks.map(task => task.id)})).reduce((projects, project) => {
        const { id } = project
        projects[id] = {...project}

        return projects}, 
        {})
    
      const normState = {
        projectsById: normProject,
        tasksById: normTasks,
        name: '',
        description: '',
        projectName: '',
      }
    
      return normState
    }

export default normalizeState;