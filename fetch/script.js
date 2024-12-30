

fetch("https://jsonplaceholder.typicode.com/users/")

  .then(data => {
    return data.json();
  }).then(myData => {
    console.log(myData);
  }).catch(err => {
    console.log(err);
  })