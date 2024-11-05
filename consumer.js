const redis = require('redis')
const url = 'redis://localhost:6379';

const cache = redis.createClient({url})
cache.connect();

const queue = 'q_fatorial_1';

const fatorial = (n) => {
    if(n === 0){
        return 1;
    }
    return n * fatorial(n-1);
}

cache.on('connect', async () => {
  console.log('Redis is ready');
  await consumerLoop();
});
 
cache.on('error', (e) => {
  console.log('Redis error', e);
});

const consumerLoop = async () => {
    while (true){
        await consumer();
        // await delay(300);
    }
}

const consumer = async () => {
    const data = await cache.blPop(queue, 0);
    console.log(`Read data ${data.element}`)
    if (data.element) {
      const number = parseInt(data.element);
      const result = fatorial(number);
      console.log(`Fatorial de ${number} é ${result}`);
    }
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
} 