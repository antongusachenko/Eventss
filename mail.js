let todoArr = [];

function addItem() {
    let input = document.getElementById("input");
    if (input.value.length === 0) {
        return alert("Напиши щось!");
    }
    todoArr.unshift(input.value);
    input.value = "";
    console.log("arr", todoArr);
    showElements(todoArr);
    
}

function showElements(arr) {
    let html = "";
    arr.forEach((item, index) => {
        html +=
            '<li id="item">'+
            item   + `<button onclick=removeItem(${index}) id="remove">x</button></li>`;
            	

    });
    document.getElementById("list").innerHTML = html;
}

function removeItem(index) {
    todoArr.splice(index, 1);
    showElements(todoArr);
}