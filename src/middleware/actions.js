const API = 'API';

const fetchUser = id => ({
  type: API,
  payload: {
    url: `/user/${id}`,
    onSuccess: data => console.log(data)
  }
})
