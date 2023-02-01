nameofstudentarray=[];
function Submit() {
    var name1 = document.getElementById("student1").value;
    var name2 = document.getElementById("student2").value;
    var name3 = document.getElementById("student3").value;
    var name4 = document.getElementById("student4").value;

    nameofstudentarray.push(name1);
    nameofstudentarray.push(name2);
    nameofstudentarray.push(name3);
    nameofstudentarray.push(name4);
    
    console.log(nameofstudentarray);
    document.getElementById("display").innerHTML = nameofstudentarray;
    document.getElementById("btnSubmit").style.display = "none";
    document.getElementById("btnSort").style.display = "inline-block";
} 
function Sort() {
    nameofstudentarray.sort();
    console.log(nameofstudentarray);
    document.getElementById("display").innerHTML = nameofstudentarray;
}