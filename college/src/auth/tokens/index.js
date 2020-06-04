//delete token
export function deleteToken() {
  /*
  const webStorage = window.localStorage;
  webStorage.removeItem('token');
    */
  //cookie deletion
  var date = new Date();
  date.setDate(date.getDate() - 1);

  var cookie = 'token=;';
  cookie += 'Expires=' + date.toUTCString();

  window.document.cookie = cookie;
}

//save Token
export function saveToken(token) {
  /*
  //here save the token to webstorage
  const webStorage = window.localStorage;

  //save
  webStorage.setItem('token', token);
    */
  //same with cookies
  window.document.cookie = 'token=' + token;
}

export function getToken(cname) {
  //name of the cookie
  var name = cname + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    if (c.slice(1, 7) == name) {
      return c.slice(7);
    }
  }
  return 'error';
}
