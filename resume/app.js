// Turning the expand/contract options into booleans that toggle the display of its children text elements
let job1 = false;
let job2 = false;
const exjob1 = document.querySelector(".expandjob1")
const hidjob1 = document.querySelectorAll(".hiddenjob1")


exjob1.addEventListener("click", () => {
    //this initially worked after 2 clicks when "none" and "list-item" were swapped. This lets it work in one click and I have ABSOLUTELY NO IDEA why. If it works, it works.
    for (jobDesc of hidjob1) {
        if (jobDesc.style.display === 'list-item') {
            jobDesc.style.display = "none" ;
        } else {
            jobDesc.style.display = "list-item";
        }
    }
    //Switch between classes that define the hand character on this line
    const handTog1 = document.getElementById("job1hand");
        handTog1.classList.toggle("lnr-pointer-right");
        handTog1.classList.toggle("lnr-pointer-down");

})