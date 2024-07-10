let input = document.getElementById("inp");
let text = document.querySelector(".text");
let btns = document.querySelector("button");
function Add(){
    if(input.value == ""){
        alert("Please Enter Task");
    }else{
        let newEle = document.createElement("ul")
        newEle.innerHTML=`${input.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        input.value = "";
        newEle.querySelector("i").addEventListener("click", remove);
        function remove (){
            newEle.remove()
        }
    }
}
btns.onclick = Add;

