const delBtn = document.querySelectorAll("delBtn");
const addBtn = document.getElementById("addBtn");
const modalDiv = document.getElementById("modalDiv");

const ulTrackList1 = document.querySelectorAll("div#trackList>ul#ultrack1")
console.log(delBtn1)

// ex 6
delBtn.addEventListener("click", function(e) {
    let button = e.target;
    button.parentNode.parentNode.removeChild(parentNode);
})

// ex 7