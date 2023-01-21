let count = 0;

function increment () {
    count += 1;
    document.getElementById("counter").innerText = count;
}



function countdown () {
    for (let i = 5; i > 0; i--){
        console.log(i);
    }   
}
