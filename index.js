const delBtn = document.querySelectorAll("delBtn");
const addBtn = document.getElementById("addBtn");
const modalDiv = document.getElementById("modalDiv");

const ulTrackList1 = document.querySelectorAll("div#trackList>ul#ultrack1")
console.log(delBtn1)

// ex 6
function SomeDeleteRowFunction() {

    let td = event.target.parentNode;
    let tr = td.parentNode;
    tr.parentNode.removeChild(tr);
}

// ex 7