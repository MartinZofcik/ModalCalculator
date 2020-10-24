function validateInput(){
    var x = +document.getElementById("inputX").value;
    var y = +document.getElementById("inputY").value;

    if ((x > 9) || (x < 1)){
        document.getElementById("submitbtn").disabled=true;
        document.getElementById("invalidX").style.display='block';
    }
    else{
        document.getElementById("invalidX").style.display='none'; 
    }
    if ((y > 9) || (y < 1)){
        document.getElementById("submitbtn").disabled=true;
        document.getElementById("invalidY").style.display='block';
    }
    else{
        document.getElementById("invalidY").style.display='none'; 
    }
    if (((x <= 9) && (x >= 1)) && (( y<= 9) && (y >= 1))){
        document.getElementById("submitbtn").disabled=false;
        document.getElementById("invalidX").style.display='none';
        document.getElementById("invalidY").style.display='none';
    }
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function generateTable(){
    removeAllChildNodes(document.getElementById("table"));
    var table = document.createElement("table");
    document.getElementById("table").appendChild(table);

    var width = +document.getElementById("inputX").value;
    var height = +document.getElementById("inputY").value;

    for(let i = 0; i < (height + 1); i++){
        var tr = document.createElement('tr');
        table.appendChild(tr);

        for(let j = 0; j < (width + 1); j++){
            var td = document.createElement('td');
            tr.appendChild(td);

            if ((i == 0) && (j == 0)){
                td.innerText = '';
                }
                
                else if ((i == 0) || (j == 0)){
                    if (i == 0){
                        td.style.fontWeight = 700;
                        td.innerText = "X=" + j;
                    }
                    if (j == 0){
                        td.style.fontWeight = 700;
                        td.innerText = "Y=" + i;
                    }
                }

                else {
                    td.innerText = (i) * (j);
                }
        }
    }
}