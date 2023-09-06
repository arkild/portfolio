// Keep track of what image is being displayed
let currentIndex = 0;
let previousIndex = 0;

//Save all image elements to a list.
const images = document.getElementsByClassName('slide-pic')
const text = document.getElementsByClassName('slide-cap')

//Saving the 'next' button to a variable.
const next = document.getElementById('next-button')
next.addEventListener('click', () => {
    //The slide showing now will become the previous slide.
    previousIndex = currentIndex
    //The next image on the list becomes the current one.
    currentIndex++
    //Hide the image that's now "previous"
    images[previousIndex].style.display = "none"
    text[previousIndex].style.display = "none"
    //This dynamic line will always cycle the carousel back to the start once we're at the end of the array.
    if(currentIndex >= images.length) {
        currentIndex = 0;
    }
    //Show the image that's now current.
    images[currentIndex].style.display = "block"
    text[currentIndex].style.display = "block"
})

//Grab the 'previous' button.
const prev = document.getElementById('prev-button')
prev.addEventListener('click', () => {
    console.log(currentIndex)
    console.log(previousIndex)
    images[currentIndex].style.display = 'none';
    text[currentIndex].style.display = 'none';
    //The slide showing previously will become the one showing now.
    currentIndex = previousIndex
    //The previous image on the list becomes the current one.
    previousIndex--
    if (previousIndex < 0) {
        previousIndex = images.length - 1;
    }
    images[currentIndex].style.display = 'block';
    text[currentIndex].style.display = 'block';
})