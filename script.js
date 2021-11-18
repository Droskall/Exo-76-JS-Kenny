let deathCount = 0;

function up(){
    let t = parseInt(document.getElementById('kenny').style.top);
    if (t -10 > 0){
        t = t -10;
        document.getElementById('kenny').style.top = t + 'px';
    }
}

function left(){
    let t = parseInt(document.getElementById('kenny').style.left);
    if (t - 10 > 0){
        t = t - 10;
        document.getElementById('kenny').style.left = t + 'px';
    }

    if (t < 40){
        document.getElementById('kenny').style.left = 200 + 'px';
        document.getElementById('kenny').style.top = 200 + 'px';
        alert('OH MON DIEU TU AS TUE KENNY ESPECE D *******');
        deathCount++;
        count.innerHTML = 'nbr de mort ' + deathCount;
    }
}

function right(){
    let t = parseInt(document.getElementById('kenny').style.left);
    if (t - 10 > 0){
        t = t + 10;
        document.getElementById('kenny').style.left = t + 'px';
    }
}

function down(){
    let t = parseInt(document.getElementById('kenny').style.top);
    if (t - 10 < 460){
        t = t + 10;
        document.getElementById('kenny').style.top = t + 'px';
    }
}

document.getElementById('up').addEventListener('click', up);
document.getElementById('right').addEventListener('click', right);
document.getElementById('down').addEventListener('click', down);
document.getElementById('left').addEventListener('click', left);

document.body.addEventListener('keydown' , function (event){
        if (event.key === "ArrowUp"){
            up();
        }
        else if (event.key === "ArrowLeft"){
            left();
        }
        else if (event.key === "ArrowRight"){
            right();
        }
        else if (event.key === "ArrowDown"){
            down();
        }
    });

let dethZone = document.createElement("div");
dethZone.style.width = "50px";
dethZone.style.height= "500px";
dethZone.style.backgroundColor = 'red';

document.getElementById("viewport").append(dethZone);

let count = document.createElement('p');
count.innerHTML = "nbr de mort " + deathCount;
document.getElementById("buttons").append(count);






