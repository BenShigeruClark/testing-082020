// var a = new XMLHttpRequest();

// a.addEventListener('readystatechange', function(r) {
//   if(r.target.status === 200) {
//     console.log(r.target.response);
//   }
// })

// a.open('GET', 'https://api.github.com/users/BenShigeruClark', true);

// a.send();

fetch('https://api.github.com/users/BenShigeruClark')
.then(function(r) {
  console.log(r.status);
  return r.json();
})
.then(function(j) {
  console.log(j);
  document.getElementById('username').innerText = j.login;
})