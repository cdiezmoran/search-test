const callApi = (url, cb, errorCb = null) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', () => {
    if (xhr.status === 404) return errorCb(true);
    cb(JSON.parse(xhr.responseText));
  });
  if (errorCb) xhr.addEventListener('error', () => errorCb(true));
  xhr.send();
};

export default callApi;
