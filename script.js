let boostrapcolors = ["bg-primary","bg-secondary","bg-success","bg-danger","bg-warning","bg-info","bg-light","bg-dark"];
let index=0;
let btn = ["boostbtn","randbtn"];
let btnindex = 0;
let hex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
let randcolor="#";
document.getElementById("boost").addEventListener("click",function(){
    btnindex=0;
})
document.getElementById("random").addEventListener("click",function(){
    btnindex=1;
})

function display(){
        document.getElementById("main").innerHTML="";
        if(btnindex==0){
        let bgdiv = `
        <div id="main-bg" class="bg-dark text-white fs-2 p-3 rounded-pill">
            Background Color: ${boostrapcolors[index]}
        </div>
        <button id="${btn[btnindex]}" onclick="display()" class="bg-white border-white fs-5 p-2 mt-4">GET COLOR</button>
        `;

        document.getElementById("main").insertAdjacentHTML("beforeend",bgdiv);
        if(index==0){
            document.getElementById("body").classList.remove(`${boostrapcolors[7]}`);
        }
        else{
            document.getElementById("body").classList.remove(`${boostrapcolors[index-1]}`);
        }
        
        document.getElementById("body").classList.add(`${boostrapcolors[index]}`);
        index++;
        if(index==boostrapcolors.length){
           index=0;
        }
        }
        else{
            if(index==0){
                document.getElementById("body").classList.remove(`${boostrapcolors[7]}`);
            }
            else{
                document.getElementById("body").classList.remove(`${boostrapcolors[index-1]}`);
            }
           
            for(let i=0;i<6;i++){
                randcolor+=hex[(Math.random()*15).toFixed(0)];
            }
            let bgdiv = `
        <div id="main-bg" class="bg-dark text-white fs-2 p-3 rounded-pill">
            Background Color: ${randcolor}
        </div>
        <button id="${btn[btnindex]}" onclick="display()" class="bg-white border-white fs-5 p-2 mt-4">GET COLOR</button>
        `;
        console.log(randcolor);
        document.getElementById("main").insertAdjacentHTML("beforeend",bgdiv);
        document.getElementById("body").style.backgroundColor= `${randcolor}`;
        
        randcolor="#";
        }
        


}