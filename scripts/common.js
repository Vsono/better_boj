function show_problem_info(show) {
    var value = "0";
    if(show == true) {
        value = "unset";
    }

    document.documentElement.style.setProperty("--btboj_statistics_font_size", value);
}

export { show_problem_info };