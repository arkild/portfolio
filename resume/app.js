// function changeLayout() {
//     console.log("changing the layout")
// }
// changeLayout();
// window.addEventListener('resize', changeLayout)
// Layout change rough draft. Will deal with later.


// Initially went for booleans until I learned JavaScript has toggles which makes things happen waaaay easier
const exJob1 = document.querySelector(".expandjob1")
const exJob2 = document.querySelector(".expandjob2")


exJob1.addEventListener("click", () => {
    const hidJob1 = document.querySelectorAll(".hiddenjob1")
    //this for loop below initially worked after 2 clicks when "none" and "list-item" were swapped. This lets it work in one click and I have ABSOLUTELY NO IDEA why. Meh. If it works, it works.
    //Upon further inspection, for some reason the display style is being read as an empty string at first despite it being set to "none" in style.css. Since an empty string is not equal to 'list-item', the if statement works.
    for (jobDesc of hidJob1) {
        if (jobDesc.style.display === 'list-item') {
            jobDesc.style.display = "none";
        } else {
            jobDesc.style.display = "list-item";
        }
    }
    //Switch between classes that define the hand character on this line
    const handTog = document.getElementById("job1hand");
    handTog.classList.toggle("lnr-pointer-right");
    handTog.classList.toggle("lnr-pointer-down");

})

exJob2.addEventListener("click", () => {
    const hidJob2 = document.querySelectorAll(".hiddenjob2")
    for (jobDesc of hidJob2) {
        if (jobDesc.style.display === 'list-item') {
            jobDesc.style.display = "none";
        } else {
            jobDesc.style.display = "list-item";
        }
    }
    const handTog = document.getElementById("job2hand");
        handTog.classList.toggle("lnr-pointer-right");
        handTog.classList.toggle("lnr-pointer-down");
})