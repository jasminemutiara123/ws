const inputs = document.getElementsByTagName('input');
// This object will keep track of the changes of inputs
const applicationState = {
  title: "",
  author: "",
  picture: ""
}

document.getElementById('submit-button').onclick = async () => {
  // We create a new form object
  const form = new FormData();
  // we append each element to the form
  form.append('name', applicationState.name);
  form.append('author', applicationState.author);
  form.append('picture', applicationState.picture);

  const res = await fetch('https://eoh66q54brqjgxa.m.pipedream.net', {
    method: 'POST',
    mode: 'no-cors',
    body: form
  });
  // ... Do something with the response
}

// The rest of this code is functional
// It is not directly related to FormData

// This for loop reflects input changes to the application's state
for (let i = 0; i < inputs.length; i++) {
  const input = inputs[i]
  const inputName = input.name

  input.onchange = (e) => {
    let value = e.target.value
    // updating the application state according to the input the user interacted with
    if (inputName === 'picture' && e.target.files[0]) {
      setPicture(e.target.files[0]);
    } else {
      applicationState[inputName] = value;
    }
  };
}
// setPicture takes a file reads it as a base64URL and assigns that value to application.picture
const setPicture = (file) => {
  const fr = new FileReader();
  // Reading the data and encoding it as base64 to send it to the server
  fr.readAsDataURL(file);
  // When the data is done loading we assign it to picture
  fr.onloadend = (fileData) => {
    applicationState.picture = fileData.target.result;
  }
}