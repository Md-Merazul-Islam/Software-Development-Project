// // console.log(document.getElementsByTagName("h1"));


// // console.log(document.getElementsByClassName("title1"));


// // console.log(document.getElementById("title"));

// // document.getElementById("demo").style.color="red";
// // document.getElementById("demo").style.removeProperty("color");


// var img = document.getElementById("img");

// console.log(img.getAttribute("src"));


// var input = document.getElementById("input");
// console.log(input.value);

// var parent = document.getElementById("parent").innerHTML;
// console.log(parent);


// const testdiv= document.getElementsByClassName("test");


const newdiv = document.getElementById("newdiv");


function clickHandler(e){
    const inputvalue = document.getElementById("input").value ;
    console.log(inputvalue);
}

function createElement(e) {
    const p = document.createElement("p");
    p.innerText = "New text added";
    // Assuming you have a container element with id "container"
    const container = document.getElementById("container");
    container.appendChild(p);
}
