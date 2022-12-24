const cookie = new Cookie();
const card = new Card();
const label = new Label();
const modal = new Modal();
const turn1_player = cookie.get()["turn1_player"];
const turn2_player = cookie.get()["turn2_player"];
const turn1_select_card = cookie.get()["turn1_select_card"];
const turn2_select_card = cookie.get()["turn2_select_card"];
const cardArray = cookie.get()["card_number"].split(',');

card.create(); // カードコンポーネント作成

setTimeout(() => {
    card.selected(turn1_player, turn1_select_card); // ターン1で選んだカードを選択状態にする
    card.selected(turn2_player, turn2_select_card); // ターン2で選んだカードを選択状態にする
}, 100);

setTimeout(() => {
    label.create_result(); // 結果ページ用のラベルを作成
}, 900);

setTimeout(() => {
    label.show_result(); // 結果ページ用のラベルのアニメーション開始
}, 1000);

setTimeout(() => {
    card.setNumber(cardArray); // カードに番号振り分ける
}, 1500);

setTimeout(() => { 
    card.result(turn1_select_card, turn2_select_card);
    label.remove();
}, 4000);

setTimeout(() => {
    modal.create(turn1_select_card, turn2_select_card);
}, 6500);

setTimeout(() => {
    modal.show();
}, 7000);
