let increase = document.getElementById('increase');
let decrease = document.getElementById('decrease');
let counter = document.getElementById('count');

let liveCount = 0;

increase.addEventListener('click', function(){
    liveCount += 1;
    counter.innerHTML = liveCount;
});