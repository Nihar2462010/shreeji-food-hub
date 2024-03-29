var menu = ["Paneer tandoori pizza",
    "Peri peri french fries",
    "Chinese bhel",
    "Cheese grill sandwich",
    "Pav bhaji",
    "Misal pav"]
function show() {
    var htmldata=""
    for(e=0;e<menu.length;e++){
        htmldata= htmldata +menu[e] + '<br>'
    }
    document.getElementById("label_menu").innerHTML = htmldata;
}