//delete token
export function deleteToken() {
  const webStorage = window.localStorage;
  webStorage.removeItem('token');
}

//save Token
export function saveToken(token) {
  //here save the token to webstorage
  const webStorage = window.localStorage;

  //save
  webStorage.setItem('token', token);
}
