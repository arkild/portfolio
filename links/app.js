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
// Variable for the link (It's either going to disappear or die)
const hiddenLink = document.querySelectorAll(".hidden-link");

modalSpawn.addEventListener('click', (event) => {
    event.preventDefault()
    // This checks to see if the link has already been exhausted
    if (modalSpawn.style.color === "red") {
        return;
    } else {
    modal.style.display = "block";
    }
})
//This function will close the modal I made.
function dropModal () {
    modal.style.display = "none";
}

noThanks.addEventListener('click', () => {
    dropModal();
    modalSpawn.innerHTML = "<s>Sorry, pal. Refresh to try again.</s>";
    modalSpawn.style.color = "red";
    //This ties into modalSpawn's event listener to disable the link
    modalSpawn.classList.add("nav-link");
})

thatsCool.addEventListener('click', () => {
    dropModal();
    modalSpawn.style.display = "none";
    //Needing to loop through an array as there's more than 1 hiddenLink
    for (link of hiddenLink) {
        link.style.display = "block";
    }
})
