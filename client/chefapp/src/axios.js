import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://coockassistantapi.onrender.com/'
})

instance.interceptors.request.use( (config) => {
	config.headers.authorization = window.localStorage.getItem('token')

	return config
})

export default instance;