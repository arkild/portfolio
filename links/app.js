const fakeLink = document.querySelector('#fakelink');
fakeLink.addEventListener('click', (event) => {
    event.preventDefault();
    // preventDefault is done to stop the link from becoming a link again as the click would normally reload the page.
    fakeLink.innerHTML = "<s>Instagram</s> (I don't actually have it)";
    fakeLink.classList.add("nav-link")
    // I really don't know how this worked but it does. I figured I still needed to disable the link but it disabled itself on its own.
})
// Variables for the modal
const modalSpawn = document.querySelector('.lead-in')
const modal = document.getElementById('warning-modal')
// Variables for the modal's buttons
const noThanks = document.querySelector('.btn-secondary');
const thatsCool = document.querySelector('.btn-primary');

modalSpawn.addEventListener('click', (event) => {
    event.preventDefault()
    modal.style.display = "block";
})

noThanks.addEventListener('click', () => {
    console.log("No Thanks")
})

thatsCool.addEventListener('click', () => {
    console.log("That's Cool")
})
