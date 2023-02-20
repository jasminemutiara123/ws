const form = document.getElementById('register-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const formData = new FormData(form);

  fetch('https://eootkfr0ghzl57e.m.pipedream.net', {
    method: 'POST',
    body: formData
  })
    .then(response => response.text())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
      
    });
});

