const sumButton = document.querySelector('#sumButton');
const bgButton = document.querySelector('#bgButton');
const worker = new Worker('worker.js');

sumButton.addEventListener('click', ()=>{
    worker.postMessage('Hello worker');
    // let sum =0;
    // for(let i=0; i<10000000000; i++){
    //     sum = sum+i;
    // };
    // console.log(sum)
})

bgButton.addEventListener('click', ()=>{
    if(document.body.style.background != 'green'){
        document.body.style.background = 'green'
    }else{
        document.body.style.background = 'blue'
    }
})