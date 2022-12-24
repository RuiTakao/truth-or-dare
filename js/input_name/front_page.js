main();

/*
実行関数
*/
function main() {
    bubbleMessageText("対戦者名が表示されるよ<br>1人目のプレーヤー名を入力して<br>クリックしてね！");

    for (let inputName of document.querySelectorAll('.input_name')) {
        inputName.addEventListener('change', () => { clickBtnPointerEventsAble(inputName) });
    }

    document.getElementById('set_player1-name').addEventListener('click', () => {
        if (document.getElementById('input_player1-name').value.length > 2) {
            firstClickAction();
        }
    });

    document.getElementById('set_player2-name').addEventListener('click', () => { 
        if (document.getElementById('input_player2-name').value.length > 2) {
            secondClickAction();
            setTimeout(() => {
                hideSetPlayerNameSection();
                new Loading();
            }, 2100);
        }
    });
}










