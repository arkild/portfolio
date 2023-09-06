// Turning the expand/contract options into booleans that toggle the display of its children text elements
let job1 = false;
let job2 = false;
const exjob1 = document.querySelector(".expandjob1")
const hidjob1 = document.querySelector(".hiddenjob1")


exjob1.addEventListener("click", () => {
    //this initially worked after 2 clicks when "none" and "list-item" were swapped. This lets it work in one click and I have ABSOLUTELY NO IDEA why. If it works, it works.
    if (hidjob1.style.display === 'list-item') {
        hidjob1.style.display = "none";
        console.log("debug")
    } else {
        hidjob1.style.display = "list-item";
        console.log("debug")
    }
    //Switch between classes that define the hand character on this line
    const handTog1 = document.getElementById("job1hand");
        handTog1.classList.toggle("lnr-pointer-right");
        handTog1.classList.toggle("lnr-pointer-down");

})