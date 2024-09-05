const app = document.getElementById("app");
let prince = document.getElementById("prince/princess");
let princess = document.getElementById("prince/princess");
let villain = document.getElementById("villain/villainess");
let villainess = document.getElementById("villain/villainess");
let hero = document.getElementById("hero/heroine");
let heroine = document.getElementById("hero/heroine");




// updateView()
// function updateView() {
//     app.innerHTML = /*HTML*/ `
//         <div id="container">
//         <div>once upon a time there was a</div>
//         <div id="prince/princess">......</div>
//         <div>, they lived peacefully, until</div>
//         <div id="villain/villainess">......</div>
//         <div>attacked.</div>
//         <div>then a</div>
//         <div id="hero/heroine">......</div>
//         <div>saved them all, the end</div>
//         <button onclick="princeBtn()">Prince</button>
//         <button onclick="princessBtn()">Princess</button>
//         <button onclick="villainBtn()">Villain</button>
//         <button onclick="villainessBtn()">Villainess</button>
//         <button onclick="heroBtn()">Hero</button>
//         <button onclick="heroineBtn()">Heroine</button>
//         </div>
// `;
// }

function princeBtn() {
    prince.innerHTML = 'prince';
    // updateView()
}
function princessBtn() {
    princess.innerHTML = 'princess';
    // updateView()
}
function villainBtn() {
    villain.innerHTML = 'villain';
    // updateView()
}
function villainessBtn() {
    villainess.innerHTML = 'villainess';
    // updateView()
}
function heroBtn() {
    hero.innerHTML = 'hero';
    // updateView()
}
function heroineBtn() {
    heroine.innerHTML = 'heroine';
    // updateView()
}