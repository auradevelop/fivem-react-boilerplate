export default {
  post(event, data = {}) {
    /// #if DEBUG
    //return new Promise(resolve => setTimeout(resolve, 100));
    /// #endif

    /* eslint-disable no-unreachable */
    return fetch(`http://resource/${event}`, {
      method: 'post',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(responseData => {
        return responseData;
      })
      .catch(error => console.warn(error));
    /* eslint-enable no-unreachable  */
  },
  sendMessage(type, data = null) {
    window.dispatchEvent(
      new MessageEvent('message', {
        data: {
          type,
          data,
        },
      }),
    );
  },
};
