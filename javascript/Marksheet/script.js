function add(){
    num1 = document.getElementById("a1").value;
    num2 = document.getElementById("a2").value;
    z = Number(num1)+Number(num2)
    document.getElementById("a3").value = z;

}
function add1(){
    a = document.getElementById("a4").value;
    b = document.getElementById("a5").value;
    c = Number(a)+Number(b)
    document.getElementById("a6").value = c

}

function add2(){
    d = document.getElementById("a7").value;
    e = document.getElementById("a8").value;
    f = Number(d)+Number(e)
    document.getElementById("a9").value = z

} 

function total(){
    a = document.getElementById("a1").value;
    b = document.getElementById("a2").value;
    c = document.getElementById("a4").value;
    d = document.getElementById("a5").value;
    e = document.getElementById("a7").value;
    f = document.getElementById("a8").value;
    g = ((Number(a)+Number(b)+Number(c)+Number(d)+Number(e)+Number(f))/600)*100;
    document.getElementById("g").value = g;
}

