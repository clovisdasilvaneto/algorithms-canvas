const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const height = canvas.height = window.innerHeight;
const width = canvas.width = window.innerWidth;

const myQueue = new PriorityQueue();

myQueue.enqueue(["nevinha", 1]);
myQueue.enqueue(["va nevar", 4]);
myQueue.enqueue(["nevou", 2]);
console.table(myQueue.collection)
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.size());
console.log(myQueue.front());