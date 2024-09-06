const app = document.getElementById("app");
let prince = '.....';
let princess = '';
let villain = '.....';
let villainess = '';
let hero = '.....';
let heroine = '';
// let prince = document.getElementById("prince/princess");
// let princess = document.getElementById("prince/princess");
// let villain = document.getElementById("villain/villainess");
// let villainess = document.getElementById("villain/villainess");
// let hero = document.getElementById("hero/heroine");
// let heroine = document.getElementById("hero/heroine");




updateView()
function updateView() {
    app.innerHTML = /*HTML*/ `
        <div>
        <div>once upon a time there was a</div>
        <div>${prince} ${princess}</div>
        <div>, they lived peacefully, until</div>
        <div>${villain} ${villainess}</div>
        <div>attacked.</div>
        <div>then a</div>
        <div>${hero} ${heroine}</div>
        <div>saved them all, the end</div>
        <button onclick="princeBtn()">Prince</button>
        <button onclick="princessBtn()">Princess</button>
        <button onclick="villainBtn()">Villain</button>
        <button onclick="villainessBtn()">Villainess</button>
        <button onclick="heroBtn()">Hero</button>
        <button onclick="heroineBtn()">Heroine</button>
        </div>
`;
}

function princeBtn() {
    prince = 'prince';
    princess = '';
    updateView()
}
function princessBtn() {
    princess = 'princess';
    prince = '';
    updateView()
}
function villainBtn() {
    villain = 'villain';
    villainess = '';
    updateView()
}
function villainessBtn() {
    villainess = 'villainess';
    villain = '';
    updateView()
}
function heroBtn() {
    hero = 'hero';
    heroine = '';
    updateView()
}
function heroineBtn() {
    heroine = 'heroine';
    hero = '';
    updateView()
}