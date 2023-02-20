  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {

    e.preventDefault();

    const formData = new FormData(form);
    
    var myHeaders = new Headers();
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Access-Control-Allow-Credentials", "true");
    myHeaders.append("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    myHeaders.append("Content-Type", "application/json");

    var object = {};
    formData.forEach(function(value, key){
        object;
        object[key] = value;
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(object),
      redirect: 'follow',
    };

    console.log(requestOptions);
  
    fetch("https://1214017.requestcatcher.com/test", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    document.getElementById('form').reset();
  })







