//codes: -A = 65, Z = 90, a = 97, z = 122)
//Task1
var c = prompt("Enter a character or a number : ", "Example A or g or 3");
var vowel = 0;
document.write("<h2>Task 1</h2>");
if (c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57) {
    document.write("The character you entered is a Digit " + c);
} else if (c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90) {
    document.write("The character you entered is a Captital Letter " + c);
    if (c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U') {
        vowel = 1;
    }
} else if (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122) {
    document.write("The character you entered is a Small Letter " + c);
    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
        vowel = 1;
    }
} else {
    document.write("The Character you entered " + c + " must be a special character or symbol");
}
document.write("<h2>Task 4</h2>");
if (vowel == 1) {
    document.write("The Character " + c + " is a Vowel");
} else {
    document.write("The Character " + c + " is not a Vowel");
}
//Task 2
document.write("<h2>Task 2</h2>")
document.write('<input value=0 type="number" id="num1"><input value=0 type="number" id="num2">');
document.write('<br><input type="button" value="Compare" onclick="compare_A_B()">');
document.write('<br><div id="cpr"></div>');
//task5
document.write("<h2>Task 5</h2>");
document.write('<input type="text" id="pass" placeholder="Passsword"><input type="text" id="vpass" placeholder="Retype Password">');
document.write('<input type="button" value="Change Password" onclick="changepw()">');
//task 6
document.write("<h2>Task 6</h2>")
document.write('var greeting;<br>var hour = 13;<br>if (hour < 18) {<br>    greeting = "Good day";<br>} else {<br>    greeting = "Good evening";<br>}');

//Task 3
function compare_A_B() {
    var a = parseInt(document.getElementById("num1").value);
    var b = parseInt(document.getElementById("num2").value);
    var msg = ""
    if (a > b) {
        msg = "A is Greater than B";
    } else if (a < b) {
        msg = "B is Greater than A";
    } else {
        msg = "A and B are equals";
    }
    msg += "<h2>Task 3</h2>"
    if (a > 0) msg += "<h5>A is Positive Number</h5>";
    if (b > 0) msg += "<h5>B is Positive Number</h5>";
    if (a < 0) msg += "<h5>A is Negative Number</h5>";
    if (b < 0) msg += "<h5>B is Negative Number</h5>";
    if (a == 0) msg += "<h5>A is Zero</h5>";
    if (b == 0) msg += "<h5>B is Zero</h5>";
    document.getElementById("cpr").innerHTML = msg;
}
//Task 5
function changepw() {
    var pass = document.getElementById("pass").value;
    var vpass = document.getElementById("vpass").value;
    if (pass === "" || vpass === "") {
        alert("Please Enter password!!!");
    } else if (pass === vpass) {
        alert("Password Changed Successfully!!!");
    } else {
        alert("You Entered Wrong Password!!!");
    }
}