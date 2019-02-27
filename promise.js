function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}

timeout(100).then(value => console.log(value));

// --------------------------------------------------
let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
});

promise.then(function() {
  console.log('resolved');
});

console.log('HI');
// --------------------------------------------------

const getJSON = function(url) {
  const promise = new Promise(function(resolve, reject) {
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open('GET', url);
    client.onreadystatechange = handler;
    client.responseType = 'json';
    client.setRequestHeader('Accept', 'application/json');
    client.send();
  });

  return promise;
};

getJSON('/posts.json').then(
  function(json) {
    console.log('Contents: ' + json);
  },
  function(error) {
    console.error('出错了', error);
  }
);
// --------------------------------------------------

const p1 = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error('fail')), 3000);
});
const p2 = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(p1), 2000);
});

p2.then(result => console.log(result)).catch(error => console.log(error));

// --------------------------------------------------
new Promise((resolve, reject) => {
  resolve(1);
  console.log(2);
}).then(r => void console.log(r));
