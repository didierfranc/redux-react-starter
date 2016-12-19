export const storeToken = token => sessionStorage.setItem('token', token)
export const getToken = () => sessionStorage.getItem('token')
export const clearToken = () => sessionStorage.removeItem('token')
