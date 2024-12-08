import axios from 'axios';

// Create an instance of axios
const axiosInstance = axios.create({
    baseURL: ('https://dummyjson.com/'), // Replace with your API base URL
    timeout: 5000, // Optional: Set timeout for requests
    headers: {
        'Content-Type': 'application/json',
        // You can add other common headers here, like Authorization
    },
    timeoutErrorMessage : "The request timed out. Please try again later."
});

// Interceptors (Optional): Add request/response interceptors if needed
axiosInstance.interceptors.request.use(
    (config) => {

        // const token = 'your-auth-token'; // Replace with actual token logic
        // if (token) {
        //     config.headers['Authorization'] = `Bearer ${token}`;
        // }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle errors globally
        console.error('API call error: ', error.response);
        return Promise.reject(error);
    }
);

export default axiosInstance;
