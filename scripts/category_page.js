function show_statistics(show) {
    var value = "0";
    if(show == true) {
        value = "unset";
    }

    document.documentElement.style.setProperty("--btboj_statistics_font_size", value);
}

const table = document.getElementsByClassName("table table-striped table-bordered clickable-table")[0];
const table_parent = table.parentElement;
console.log(table);
console.log(table_parent);

var show_button = document.createElement("button");
show_button.textContent = "Show Statistics";
show_button.addEventListener("click", () => {show_statistics(true)});
table_parent.appendChild(show_button);