export const storeToken = token => sessionStorage.setItem('token', token)
export const getToken = () => sessionStorage.getItem('token')
export const clearToken = () => sessionStorage.removeItem('token')

export const post = async ({ url, body, success, failure, dispatch }) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    const data = await res.json()
    dispatch({ type: success, data })
  } catch (e) {
    dispatch({ type: failure })
  }
}
