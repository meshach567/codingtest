// HTML: <button class="btn">Click Me</button>

const btn = document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        return this.textContent;
    });
});

console.log(btn)