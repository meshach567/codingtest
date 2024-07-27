async function promiseHanding(urls) {
    const promises = urls.map(url => fetch(url).then(res => res.json()));
    return Promise.all(promises);
}

const urls = ["https://jsonplaceholder.typicode.com/todos/1", "https://jsonplaceholder.typicode.com/todos/2"];
promiseHanding(urls)
.then(responses => console.log(responses))
.catch(error => console.error(error))