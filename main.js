let count = 0;

function increment () {
    count += 1;
    document.getElementById("counter").innerText = count;
    console.log(count);
}

function decrement () {
    if (count > 0) {
        count -= 1;
    } else if (count == 0) {
        count = 0;
        alert("Can't have negative value!")
    }
    document.getElementById("counter").innerText = count;
    console.log(count);
}

function resetCount () {
    if (count > 0) {
        count = 0;
        document.getElementById("counter").innerText = count;
    }
    else
    {
        alert("Can't reset counter, it is already at 0!")
    }
}




