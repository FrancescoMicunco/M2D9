const delBtn1 = document.getElementById("delBtn1");
const delBtn2 = document.getElementById("delBtn2");
const delBtn3 = document.getElementById("delBtn3");
const delBtn4 = document.getElementById("delBtn4");
const delBtn5 = document.getElementById("delBtn5");
const ulTrackList1 = document.querySelectorAll("div#trackList>ul#ultrack1")
console.log(delBtn1)

/* const ulTrackList2 = document.querySelector("div#trackList>ul#ultrack2")
const ulTrackList3 = document.querySelector("div#trackList>ul#ultrack3")
const ulTrackList4 = document.querySelector("div#trackList>ul#ultrack4")
const ulTrackList5 = document.querySelector("div#trackList>ul#ultrack5")
 */
const delTrack = function(ulId) {
    ulId.innerText = "";
}
delBtn1.addEventListener("click", function(e) {
    let button = e.target;
    button.parentNode.parentNode.removeChild(parentNode);
})