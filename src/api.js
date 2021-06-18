import normalizeState from './normalizing'

const BASE_URL = 'http://valerystatinov.com/api'

const request = (url, method, body) => {
    if (method === 'GET') {
        return fetch(`${BASE_URL}${url}`, {
            method,
            headers: {
            Token: 'anastellin', //Token: 'Valera', чтобы посмотреть, что лежит там
            'Content-Type': 'application/json'
            }
        }).then(res => res.json())
    }

    else if (method === 'POST') {
        return fetch(`${BASE_URL}${url}`, {
            method,
            headers: {
            Token: 'anastellin',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(res => res.json())
    }

    else if (method === 'PUT') {
        return fetch(`${BASE_URL}${url}`, {
            method,
            headers: {
            Token: 'anastellin',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(res => res.json())
    }
}

const get = (url) => {
    return request(url, 'GET')
}

const post = (url, body) => {
    return request(url, 'POST', body)
}

const put = (url, body) => {
    return request(url, 'PUT', body)
}

const getTasks = (projectId) => {
    return get(`/projects/${projectId}/tasks/`).then((res) => {
        return res
    })
}

export const postTask = (projectId, postedTaskName, postedTaskDescription) => {
    const postedTask = {
        name: postedTaskName,
        description: postedTaskDescription,
    }
    return post(`/projects/${projectId}/tasks/`, postedTask)
}

export const putTaskStatus = (projectId, taskId, taskName, taskDescription) => {
    const taskStatus = {
        name: taskName,
        description: taskDescription,
        completed: true,
        projectId: Number(projectId)
    }
    return put(`/projects/${projectId}/tasks/${taskId}/`, taskStatus)
}

export const postProject = (postedProjectName) => {
    const postedProject = {
        name: postedProjectName
    }
    return post('/projects/', postedProject)
}

export const getState = () => {    
    return get('/projects/').then((res) => {
        const projects = []

        for (let it in res) {
            projects[it] = {
                id: res[it].id,
                name: res[it].name,
                tasks: []
            }
        }

        const projectsIds = projects.reduce((acc, project) => {
            const { id } = project
            acc = [...acc, id]
            return acc
        }, [])

        let getTaskRequests = projectsIds.map(projectId => getTasks(projectId))

        const state = Promise.all(getTaskRequests).then(ress => {
            for (res in ress){
                projects[res].tasks = ress[res]
            }
            return normalizeState(projects)
        })

        return state
    })
}