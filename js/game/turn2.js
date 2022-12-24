const cookie = new Cookie();
const card = new Card();
const label = new Label();
const bubble = new Bubble();
const turn1_player = cookie.get()["turn1_player"];
const turn2_player = cookie.get()["turn2_player"];
const turn1_select_card = cookie.get()["turn1_select_card"];

card.create();

setTimeout(() => {
    card.selected(turn1_player, turn1_select_card);
}, 100);

setTimeout(() => {
    label.create(turn2_player);
    bubble.create(turn2_player);
}, 900);

setTimeout(() => {
    label.show();
}, 1000);

setTimeout(() => {
    card.unLock();
    label.remove();
    bubble.fadeIn();
    card.click(bubble);
    bubble.btn_click(turn2_player, card, data, redirect);
}, 4300);


function data() {
    cookie.set("turn1_player", turn1_player);
    cookie.set("turn2_player", turn2_player);
    cookie.set("turn1_select_card", turn1_select_card);
    cookie.set("turn2_select_card", document.querySelector('.marking').getAttribute("id"));
    cookie.set("card_number", card.createNumber());
}

function redirect() {
    window.location.href = "./result";
}
