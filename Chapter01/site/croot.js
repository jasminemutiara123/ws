var myHeaders = new Headers();
myHeaders.append("Cookie", "connect.sid=s%3AlBNwXY88LIYEMEsKSNzwj1VPFexb2ic9.6FOlpySOUqc2drOJeX0PYUkFS9COOD1GZC8ce2MN0FY");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://cat-fact.herokuapp.com/facts", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));