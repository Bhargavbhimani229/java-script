let s = document.getElementById('s');
let m = document.getElementById('m');
let h = document.getElementById('h');

let sec = 0;
let min = 0;
let hr = 0;
setInterval(() => {
  sec++;
  s.innerHTML = sec <= 9 ? '0' + sec : sec;
  if(sec === 60){
    sec = 0;
    s.innerHTML = sec;
    min++;
  }
  m.innerHTML = min <= 9 ? '0' + min : min;

  if(min === 60)
  {
      min = 0;
      m.innerHTML = min;
      hr++;
  }

  h.innerHTML = hr <= 9 ? '0' + hr : hr;

  if(hr === 12)
  {
    hr = 0;
    h.innerHTML = hr;
  }

},1000)