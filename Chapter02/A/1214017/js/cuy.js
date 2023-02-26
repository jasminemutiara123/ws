  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {

    e.preventDefault();

    const formData = new FormData(form);
    
    var myHeaders = new Headers();
    myHeaders.append("Token", "rofiganteng");
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
      redirect: 'follow'
    };
    
    fetch("https://eo5eqycz367iyvh.m.pipedream.net", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    document.getElementById('form').reset();
  })







