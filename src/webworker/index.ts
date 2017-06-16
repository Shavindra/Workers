console.log('this is a test message, wahoo!!');

import * as workerPath from "file-loader?name=[name].js!./web-worker";

const worker = new Worker(workerPath);

console.log(workerPath, worker);
worker.addEventListener('message', message => {
    console.log(message);
});
worker.postMessage('this is a test message to the worker');