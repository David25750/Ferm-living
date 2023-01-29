import axios from 'axios'

export const client = axios.create({
	headers: {
		ContentType: 'application/json',
	},
	auth: {
    	username: 'admin',
		password: 'admin'
	}      
      
})