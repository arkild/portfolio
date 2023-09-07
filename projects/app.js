// Keep track of what slide is being displayed.
// The slides are a combination of the image elements and the text.
let currentIndex = 0;
let previousIndex = 0;

//Save all image and text elements to an array.
const images = document.getElementsByClassName('slide-pic')
const text = document.getElementsByClassName('slide-cap')

//Saving the carousel buttons to variables.
const next = document.getElementById('next-button')
const prev = document.getElementById('prev-button')

next.addEventListener('click', () => {
    //The slide showing now will become the previous slide.
    previousIndex = currentIndex
    //The next slide on the list becomes the current one.
    currentIndex++
    //Hide the slide that's now "previous"
    images[previousIndex].style.display = "none"
    text[previousIndex].style.display = "none"
    //This dynamic line will always cycle the carousel back to the start once we're at the end of the array.
    if(currentIndex >= images.length) {
        currentIndex = 0;
    }
    //Show the slide that's now current.
    images[currentIndex].style.display = "block"
    text[currentIndex].style.display = "block"
})

prev.addEventListener('click', () => {
    images[currentIndex].style.display = 'none';
    text[currentIndex].style.display = 'none';
    //The slide showing previously will become the one showing now.
    currentIndex = previousIndex
    //The previous slide on the list becomes the current one.
    previousIndex--
    //This checks and makes sure we stay in the array. If we hit -1, we need to go to the end of the array.
    if (previousIndex < 0) {
        previousIndex = images.length - 1;
    }
    images[currentIndex].style.display = 'block';
    text[currentIndex].style.display = 'block';
})