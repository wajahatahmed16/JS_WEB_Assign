//Task 1
var students = ["Hamza", "Ali", "Babar", "Aktar"];
var std_names = new Array("Abid", "Latif", "Shehroz", "Kashif");
document.write("<h2>Task 1 and Task 2</h2>");
document.write("<table>");
document.write("<tr><th><h5>Literal</h5></th><th><h5>Object</h5></th></tr>");

document.write("<tr><td><ul>");
for (x in students) {
    document.write("<li>" + students[x] + "</li>");
}
document.write("</ul></td>");

document.write("<td><ol>");
for (x in std_names) {
    document.write("<li>" + std_names[x] + "</li>");
}
document.write("</ol></td></tr></table>");

//Task 3, 4, 5, 6
var string_array = ["Apple if Red", "Banana is Yellow", "Orange is Orange"];
var number_array = [11, 43, 23, 45, 76, 34, 45, 123, 453, 2344];
var bool_array = [true, false, true, true, false, true];
var mixed_array = [1, "Fruits", 22, true, students, false, number_array, "vegetables"];

//Task 7
var qualifications = new Array("SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.PHIL.", "PhD");
document.write("<h2>Task 7</h2><h4>Qualifications</h4><ol>");
for (x in qualifications) {
    document.write("<li>" + qualifications[x] + "</li>");
}
document.write("</ol>");

//task 8
var scores = [308, 374, 478, 364];
document.write("<h2>Task 8</h2>");
for (x in students) {
    document.write("Score of " + students[x] + " is " + scores[x] + ". Percentage: " + ((scores[x] / 500) * 100).toFixed(2) + " %.<br>");
}

//task 9
var colors = ["Red", "Green", "Blue", "Orange", "Pink", "Yellow"];
var user_colors = []
document.write("<h2>Task 9</h2>");
document.write("<h4>Select Colors</h4>");
for (i in colors) {
    document.write('<input type="checkbox" name="colors" value="' + colors[i] + '"> ' + colors[i] + '<br>');
}
document.write('<input type="button" value="Add Before" onclick="add_color(1)">');
document.write('<input type="button" value="Add After" onclick="add_color(0)" >');
document.write("<div id='show_colors'></div>")








//task9 functions
function show_colors() {
    var color_box = document.getElementById("show_colors");
    color_box.innerHTML = "<h3>User Colors</h3>";
    for (i in user_colors) {
        color_box.innerHTML = color_box.innerHTML + "<h5>" + user_colors[i] + '</h5>';
    }
}

function add_color(add_before) {
    var selected_colors = document.getElementsByName("colors");

    if (add_before == 1) {
        for (i in selected_colors) {
            if (selected_colors[i].checked)
                user_colors.unshift(selected_colors[i].value);
            selected_colors[i].checked = false;
        }

    } else {
        for (i in selected_colors) {
            if (selected_colors[i].checked)
                user_colors.push(selected_colors[i].value);
            selected_colors[i].checked = false;
        }
    }

    show_colors();
}