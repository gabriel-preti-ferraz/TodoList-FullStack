import axios from 'axios'

export async function createTask(title, description) {
    const response = await axios.post('http://localhost:8080/tasks/add', { title, description })
    return response.data
}

export async function listTask() {
    const response = await axios.get('http://localhost:8080/tasks/list')
    return response.data
}