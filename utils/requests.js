import axios from "axios";

const API_URL = 'http://localhost:8080'

export function putRequest(endpoint, data = {}, headers = {}) {
    const config = {
        headers: {
            ...headers,
        }
    }

    return axios.put(API_URL + endpoint, data, config)
}

export function postRequest(endpoint, data = {}, headers = {}) {
    const config = {
        headers: {
            ...headers,
        }
    }

    return axios.post(API_URL + endpoint, data, config)
}

export function postWithParamsRequest(endpoint, params = {}, headers = {}) {
    const config = {
        headers: {
            ...headers
        },
        params
    }

    return axios.post(API_URL + endpoint, null, config);
}

export function deleteRequest(endpoint, data = {}, headers = {}) {
    const config = {
        headers: {
            ...headers,
        },
        data
    }

    return axios.delete(API_URL + endpoint, config)
}

export function getWithParamsRequest(endpoint, params = {}, headers = {}) {
    const config = {
        headers: {
            ...headers,
        },
        params
    }

    return axios.get(API_URL + endpoint, config)
}

export function getRequest(endpoint, data = {}, headers = {}) {
    const config = {
        headers: {
            ...headers,
        },
        data
    }

    return axios.get(API_URL + endpoint, config)
}

