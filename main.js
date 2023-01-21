let count = 0;
let saved = document.getElementById("saved-progress");

//Function for incrementing counter by one on click
function increment() {
    count += 1;
    document.getElementById("counter").textContent = count;
    console.log(count);
}
//Function for decrementing counter by one on click
function decrement() {
    if (count > 0) {
        count -= 1;
    } else if (count == 0) {
        count = 0;
        alert("Can't have negative value!")
    }
    document.getElementById("counter").textContent = count;
    console.log(count);
}

//Function for reseting current count
function resetCount() {
    if (count > 0) {
        count = 0;
        document.getElementById("counter").textContent = count;
    }
    else {
        alert("Can't reset counter, it is already at 0!")
    }
}
//Function for saving current count on a side into <ul> as new <li> for each click on save
function saveCount() {
    if (count < 1) {
        alert("Nothing to save!");
    } else {
        let save = count + " - ";
        saved.innerHTML += `<li> ${count}</li>` + `<li>--</li>`;
        resetCount()
    }

}
//Function for clearing all saved entries, will delete all tags inside <ul>
function clearSaved() {
    saved.innerHTML = "";
}

