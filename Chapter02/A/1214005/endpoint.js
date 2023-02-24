function Submit(){
  nama=document.getElementById("nama").value;
  phone=document.getElementById("phone").value;
  email=document.getElementById("email").value;
  blood=document.getElementById("blood").value;
  password=document.getElementById("password").value;
  PostSignUp(nama,phone,email,blood,password);
}

function PostSignUp(name,phone,email,blood,password){
  var myHeaders = new Headers();
  myHeaders.append("login", "1214005");
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "name": "name",
    "phone": "phone",
    "email": "email",
    "blood": "blood",
    "password": "password"
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("https://eoh66q54brqjgxa.m.pipedream.net", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }
