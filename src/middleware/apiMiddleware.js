import axios from 'axios'

const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type !== 'API') {
    return;
  }

  const { url, onSuccess } = action.payload;

  axios.get(`${process.env.BASE_URL}${url}`)
    .then(({ data }) => onSuccess(data));
};
