function show_statistics(show) {
    var value = "0";
    if(show == true) {
        value = "unset";
    }

    document.documentElement.style.setProperty("--btboj_statistics_font_size", value);
}

function show_problem_tag(show) {
    var value = "0";
    if(show == true) {
        value = "unset";
    }
    document.documentElement.style.setProperty("--btboj_problem_tag_font_size", value);
}

const problem_info_parent = document.getElementById("problem-info").parentElement;

var show_button = document.createElement("button");
show_button.textContent = "Show Statistics";
show_button.addEventListener("click", () => {show_statistics(true)});
problem_info_parent.appendChild(show_button);

const problem_tag = document.getElementById("problem_tags");

if(problem_tag) {
    var show_button = document.createElement("button");
    show_button.textContent = "Show Tag";
    show_button.addEventListener("click", () => {show_problem_tag(true)});
    problem_tag.appendChild(show_button);
}