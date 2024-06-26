const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {  // Set interval- allows us to set an interval after which the function will get automatically called
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

