fetch("https://in3.dev/inv/")
.then(response => response.json())
.then(data => console.log(data.id))
.catch(errpr => console.error(error));