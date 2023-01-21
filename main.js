let count = 0;
let saved = document.getElementById("saved-progress");

function increment() {
    count += 1;
    document.getElementById("counter").innerText = count;
    console.log(count);
}

function decrement() {
    if (count > 0) {
        count -= 1;
    } else if (count == 0) {
        count = 0;
        alert("Can't have negative value!")
    }
    document.getElementById("counter").innerText = count;
    console.log(count);
}

function resetCount() {
    if (count > 0) {
        count = 0;
        document.getElementById("counter").innerText = count;
    }
    else {
        alert("Can't reset counter, it is already at 0!")
    }
}

function saveCount() {
    if (count < 1) {
        alert("Nothing to save!");
    } else {
        let save = count + " - ";
        saved.innerHTML += `<li> ${count}</li>` + `<li>--</li>`;
        resetCount()
    }

}

function clearSaved() {
    saved.innerHTML = "";
}

