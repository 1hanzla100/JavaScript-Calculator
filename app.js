function equal(){
    var x = document.getElementById("entry").value;
    if (x){
        document.getElementById("entry").value = "Ansewer is: " + eval(x);
    }
    else{
        document.getElementById("entry").value = "Enter A Number";
    }
}
function addNum(x){
    document.getElementById("entry").value += x;
}
function clean(){
    document.getElementById("entry").value = "";
}
function back(){
    var x = document.getElementById("entry").value;
    document.getElementById("entry").value = x.substring(0, x.length -1);
}