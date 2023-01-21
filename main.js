let count = 0;

function increment () {
    count += 1;
    document.getElementById("counter").innerText = count;
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




