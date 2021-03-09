console.log("hello");
function edit(book) {
    console.log("book");
}
var button = document.getElementById("cart");
button.addEventListener("click", handleClick);
function handleClick() {
    console.log("Clicked!");
}
