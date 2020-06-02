//delete token
export function deleteToken() {
  const webStorage = window.localStorage;
  webStorage.removeItem('token');
}

//save Token
export function saveToken(token) {
  //here save the token to webstorage
  const webStorage = window.localStorage;

  //if there is anything in the ls then remove
  if (webStorage.getItem('token')) {
    webStorage.removeItem('token');
  }

  //save
  webStorage.setItem('token', token);
}
