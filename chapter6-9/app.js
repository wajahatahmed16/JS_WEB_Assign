     //Task 3
     var user = prompt("Enter Your Name : ", "Your Name?");
     document.write("<h3><center> Welcome " + user + " to JavaScript</center></h3>");
     //Task1
     var a = 10;
     document.write("<h2>Task 1</h2><br>The value of a is : " + a + "<br>........................<br>");
     document.write("<br>The value of ++a is : " + (++a) + "<br>");
     document.write("Now the value of a is: " + a + "<br>");
     document.write("<br>The value of a++ is : " + (a++) + "<br>");
     document.write("Now the value of a is: " + a + "<br>");
     document.write("<br>The value of --a is : " + (--a) + "<br>");
     document.write("Now the value of a is: " + a + "<br>");
     document.write("<br>The value of a-- is : " + (a--) + "<br>");
     document.write("Now the value of a is: " + a + "<br>");
     //Task2
     var a = 2,
         b = 1;

     document.write("<h2>Task 2</h2><br>--a/++a or --b/++b : first decrement/increment then store value");
     document.write("<br>Initial Values A : " + a + ", B : " + b)
     var result = --a - --b + ++b + b--;
     document.write("<br>a--/a++ or b--/b++ : first store value then increment or decrement");
     document.write("<br>--a - --b + ++b + b--");
     document.write("<br>  1 -   0 +   1 + 1<br>Answer : " + result);
     //Task 4 Unavilable in questions
     //Task 5 Function
     function display_table() {
         var number = document.getElementById("num1").value;
         var tbl_body = document.getElementById("mtable");
         tbl_body.innerHTML = "<h3>Table of " + number + "</h3>";
         for (i = 1; i <= 10; i++) {
             tbl_body.innerHTML = tbl_body.innerHTML + number + " x " + i + " = " + number * i + "<br>";
         }
     }

     //Task 6
     function calresult() {
         var snum1 = document.getElementById("sn1").value;
         var snum2 = document.getElementById("sn2").value;
         var snum3 = document.getElementById("sn3").value;
         var result = document.getElementById("results");

         var total = parseFloat(snum1) + parseFloat(snum2) + parseFloat(snum3);
         result.innerHTML = "<h4>Total Marks : " + total + " out of 300</h4>";
         result.innerHTML = result.innerHTML + "<h4>Percentile : " + (total / 300) * 100 + " %</h4>";

     }