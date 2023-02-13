var myHeaders = new Headers();
myHeaders.append("Cookie", "connect.sid=s%3A-WXUjfeLN2VJiuIQZhWu4WWIxiCABFtK.bedE0yIdUjcW%2BueIVf1ZRySEqQJcZa4aSPSrCwluOMs");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://cat-fact.herokuapp.com/facts", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));