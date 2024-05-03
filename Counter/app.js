const increasebtn = document.getElementById("increase");
const decrasebtn = document.getElementById("decrase");
const resetbtn = document.getElementById("reset");
const number = document.getElementById("numberText");

let temp = 0;

increasebtn.onclick = function(){
    temp++;
    number.innerHTML = temp;
}

decrasebtn.onclick = function(){
    temp--;
    number.innerHTML = temp;
}

resetbtn.onclick = function(){
    temp=0;
    number.innerHTML = temp;
}
