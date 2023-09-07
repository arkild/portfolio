const selfie = document.getElementById('selfie');
// This variable dictates how much to spin the picture
let spinCheck = 0;

selfie.addEventListener('click', () => {
    spinCheck += 90;
    //I don't know if the system uses more resources or whatever for the spin degress but I doubt someone is going to spin it too much
    selfie.style.transform = `rotate(${spinCheck}deg)`;
    if (spinCheck > 900) {
        document.querySelector('footer').innerText = `fun fact: I'm officially dizzy now`
        document.querySelector('p').innerText = ``
        document.querySelector('h1').innerText = `Hey pal, please stop spinning me and just enter the site already`
        document.querySelector('a').innerText = `Gimme a break`
    }
})