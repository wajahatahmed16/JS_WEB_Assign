//Task1
var arr1 = [
    [],
    []
];
document.write("<h2>Task 1</h2>");
document.write("var arr1 = [[],[]];<br>")
document.write("var arr1 = new Array(Array(),Array(),Array())");

//task2
var arr2 = [4][4] = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
document.write("<h2>Task 2</h2>");
document.write(arr2[0].join("   ") + "<br>");
document.write(arr2[1].join(" ") + "<br>");
document.write(arr2[2].join(" "));

//task3
document.write("<h2>Task 3</h2>");
for (i = 1; i <= 10; i++)
    document.write(i + " ");

//task4
document.write("<h2>Task 4</h2>");
document.write('<h4>Enter/Select Number:</h4><input onchange="generate_table()" value="2" type="number" id="mul_num">');
document.write('<h4>Enter/Select Range:</h4><input onchange="generate_table()" value="1" type="number" id="mul_num_r1"><input onchange="generate_table()" value="10" type="number" id="mul_num_r2"><br><br>');
document.write('<input type="button" value="Generate Table" onclick="generate_table()">');
document.write('<div id="showtable"><div>');

//task 5
fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.write("<h2>Task 5</h2>");
for (i in fruits) {
    document.write("Element at Index " + i + " is " + fruits[i] + ".<br>");
}

//task 6
document.write("<h2>Task 6</h2>");
document.write("<h4>Counting :</h4>");
for (i = 1; i <= 15; i++) document.write(i + (i != 15 ? ", " : "."));
document.write("<h4>Reversed Counting :</h4>");
for (i = 15; i >= 1; i--) document.write(i + (i != 1 ? ", " : "."));
document.write("<h4>Even :</h4>");
for (i = 0; i <= 20; i += 2) document.write(i + (i != 20 ? ", " : "."));
document.write("<h4>Odd :</h4>");
for (i = 1; i <= 20; i += 2) document.write(i + (i != 19 ? ", " : "."));
document.write("<h4>Series :</h4>");
for (i = 0; i <= 20; i += 2) i > 0 ? document.write(i + "k" + (i != 20 ? ", " : ".")) : null;

//task 7
document.write("<h2>Task 7</h2>");
var arr3 = ["Banana", "Cake", "Apple", "Banana", "Pie", "Orange", "Pineapple", "Cake", "Orange", "Cherry", "Blueberry"];
document.write("<h4>Search From Given Array : </h4>" + arr3.join(", "));
document.write('<br><input placeholder="Type to find!!!" onkeyup="search_array()" type="text" id="search_box">');
document.write("<div id='search_results'></div>")

//Task 8 and Task 9
var numbers = [24, 53, 78, 91, 12]
document.write("<h2>Task 8 and Task9</h2>");
var max = numbers[0],
    min = numbers[0]
for (j in numbers) {
    numbers[j] > max ? max = numbers[j] : null;
    numbers[j] < min ? min = numbers[j] : null;
}
document.write("<b>Array : </b>" + numbers.join(" ,"));
document.write("<br><b>Largest Value : </b>" + max);
document.write("<br><b>Smallest Value : </b>" + min);

//task 10
document.write("<h2>Task 10</h2>");
for (x = 5; x <= 100; x += 5)
    if (x > 0) document.write(x + (x < 100 ? ", " : "."));






    //functions
    //task 4 generate table
function generate_table() {
    var num = parseInt(document.getElementById("mul_num").value);
    var r1 = parseInt(document.getElementById("mul_num_r1").value);
    var r2 = parseInt(document.getElementById("mul_num_r2").value);
    var show_table = document.getElementById("showtable");
    var generated_table = "<h4>Table of " + num + "</h4>";
    if (r2 < r1) {
        generated_table += "Set Range Properly";
    }

    for (l = r1; l <= r2; l++) {
        generated_table += num + " x " + l + " = " + num * l + "<br>";
    }

    show_table.innerHTML = generated_table;
}
//task 7 function
function search_array() {
    var val = document.getElementById("search_box").value;
    var searched = document.getElementById("search_results");
    var statement = "";
    var count = 0;
    for (i in arr3) {
        if (val.toLowerCase() === arr3[i].toLowerCase()) {
            count += 1;
            statement += arr3[i] + " is available at index " + i + " in our Store<br>";
        }
    }
    if (count > 0) {
        statement = "<h4>Search Results</h4>" + "<b>Total Number of <b>" + val + "</b> Found :" + count + "</b><br>" + statement;
    } else {
        statement = "<h4>Search Results</h4>" + "Item <b>" + val + "</b> is not available at store";
    }
    searched.innerHTML = statement;

}