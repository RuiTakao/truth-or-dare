const cookie = new Cookie();
const card = new Card();
const label = new Label();
const bubble = new Bubble();
const player_turn1 = cookie.get()["player1"];
const player_turn2 = cookie.get()["player2"];

card.create();

setTimeout(() => {
    card.moving();
}, 400);

setTimeout(() => {
    label.create(player_turn1);
    bubble.create(player_turn1);
}, 2400);

setTimeout(() => {
    label.show();
}, 2500);

setTimeout(() => {
    card.unLock();
    label.remove();
    bubble.fadeIn();
    card.click(bubble);
    bubble.btn_click(player_turn1, card, data, redirect);
}, 5800);


function data() {
    cookie.set("turn1_player", player_turn1);
    cookie.set("turn2_player", player_turn2);
    cookie.set("turn1_select_card", document.querySelector('.marking').getAttribute("id"));
    cookie.set("turn2_select_card", "");
}

function redirect() {
    window.location.href = "./turn2";
}