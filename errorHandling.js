async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was ok')
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error', error);
        return { fallback: true }
    }
}

fetchData("https://jsonplaceholder.typicode.com/todos")
.then(responses => console.log(responses))