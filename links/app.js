const fakeLink = document.querySelector('#fakelink');
fakeLink.addEventListener('click', (event) => {
    event.preventDefault();
    fakeLink.innerHTML = "<s>Instagram</s> (I don't actually have it)";
    fakeLink.classList.add("nav-link")
    // I really don't know how this worked but it does.
})