import axios from 'axios'

const axiosInstance = axios.create({
	baseURL: 'http://localhost:3000',
	timeout: 12000,
})

export const get = (url) => {
	return axiosInstance.get(`${axiosInstance.defaults.baseURL}/${url}`)
}

export const post = (url, body) => {
	return axiosInstance.post(`${axiosInstance.defaults.baseURL}/${url}`, body)
}

export const put = (url, body) => {
	return axiosInstance.put(`${axiosInstance.defaults.baseURL}/${url}`, body)
}
