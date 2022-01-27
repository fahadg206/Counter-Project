const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const counter = document.getElementById('count');

let liveCount = 0;

increase.addEventListener('click', function(){
    liveCount += 1;
    counter.innerHTML = liveCount;
});

decrease.addEventListener('click', function() {
    liveCount -= 1;
    counter.innerHTML = liveCount;
})

