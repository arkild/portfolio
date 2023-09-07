// I'm going to insert the date into my website but with an additional day added onto it as a running joke that the "under construction" part of my page will never be completed.

const dateDisplay = document.querySelector('.calendar-joke')
const today = new Date(); //Today's date
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1) //Tomorrow's date

//No matter what, this will correctly display tomorrow's date. I had to +1 the month because the month display begins at 0. If I wanted to make the month display as a word, I would need to create an array representing the months and access it that way.
dateDisplay.innerText = `${tomorrow.getMonth() + 1}/${tomorrow.getDate()}`

