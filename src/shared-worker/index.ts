import * as workerPath from "file-loader?name=[name].js!./shared-worker";

const sharedWorker = new SharedWorker(workerPath);

sharedWorker.port.addEventListener("message", (message)=>{
    console.log('Message from shared worker', message);
})

sharedWorker.port.start();

let start = 0;
setInterval(()=>{
    let counter = start++;
    sharedWorker.port.postMessage(counter)
}, 1000)


