class HttpDispatcher {
  static processRequest(url, options) {
    return fetch(url, updatedOptions).then(response => {
      return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
      });
    });
  }
}
export default HttpDispatcher;