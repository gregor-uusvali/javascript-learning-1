//Create 3 input event listeners
//Change the background color, text color and font size as u type

let backgroundColor = document.querySelector(".backgroundChange");
let textColor = document.querySelector(".textColorChange");
let fontSize = document.querySelector(".fontSizeChange");
let body = document.querySelector("body");

backgroundColor.addEventListener("keyup", function(event) {
    body.style.backgroundColor = event.target.value;
})

textColor.addEventListener("keyup", function(event) {
    body.style.color = event.target.value;
})

fontSize.addEventListener("keyup", function(event) {
    body.style.fontSize = event.target.value + "px";
})

//This is a an object of me

let gregor = {
    'name': 'gregor',
    'age': 27,
    'gender': 'male',
    'nose': 'not woking atm',
    'sound': function() {
        console.log("plays guitar dindindin");
    }
}

//This is just playing around with loops

/* var words = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque hic ab sed dolor officiis molestiae consequuntur aperiam obcaecati, nostrum explicabo expedita, minus eveniet tenetur qui. Officia unde voluptatem, cum vel sed eius quas asperiores ducimus iste saepe quidem eligendi omnis odit magnam ipsam dolores laboriosam maxime molestias. Repellendus, aliquid earum?".split(' ');

function appendEmail(elem){
    return elem.toLowerCase() + "@gmail.com";
}

for(let i = 0; i < words.length; i++){
    currentEmail = appendEmail(words[i]);

    if(i % 2 == 1){
        continue;
    }

    console.log(i, currentEmail);
}

let ul = document.querySelector(".js-list");
let sth = "";
let num = Number(prompt("Type in a number plz"));
let startNum = 1;


while(startNum <= num) {
    sth = sth + "<li>Iteration: " + startNum + "</li>";
    startNum++
}

ul.innerHTML = sth; */

let names = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, velit. Perspiciatis, porro aspernatur!';
let namesArr = names.split(" ");
let ul = document.querySelector(".js-list");
let sth = "";
namesArr.forEach(function(word, index){
    if(index >= 10){
        sth = sth + '<li>' + word.toUpperCase() + '</li>';
    }
    sth = sth + '<li>' + word + '</li>';
    console.log(index, word);
})
ul.innerHTML = sth;
 