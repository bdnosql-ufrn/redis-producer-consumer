const redis = require('redis')
const url = 'redis://localhost:6379';

const cache = redis.createClient({url})
cache.connect();

const queue = 'q_fatorial_1';

cache.on('connect', async () => {
  console.log('Redis is ready');
  await producerLoop();
});
 
cache.on('error', (e) => {
  console.log('Redis error', e);
});

const producerLoop = async () => {
    while (true){
        await producer();
        await delay(300);
    }
}

const producer = async () => {
    const number = Math.floor(Math.random() * 50);
    await cache.rPush(queue, `${number}`);
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
} 