var myHeaders = new Headers();
myHeaders.append("Cookie", "connect.sid=s%3AaeY0nIBHduFzuH1VkKYHc3I-TnPz-XbJ.rRoRcFfFgQB5MJZiky4%2BwYgWCWD2gUWtm%2FW49qE5nmI");

var raw = "";

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://cat-fact.herokuapp.com/facts", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));