class InputForm {
    slideLeft(time) {
        document.getElementById('set_player1-name_form').style = "pointer-events: none;";
        document.getElementById('set_player2-name_form').style = "display: block";
        setTimeout(() => {
            document.getElementById('set_player1-name_form').classList.add('slideLeft');
            document.getElementById('set_player2-name_form').classList.add('slideRight');
        }, time);
        setTimeout(() => {
            document.getElementById('set_player1-name_form').style = "display: none";
            document.getElementById('set_player2-name_form').classList.add('state');
            document.getElementById('set_player2-name_form').classList.remove('slideRight');
        }, time + 2000);
    }

    slideOut() {
        document.getElementById('set_player2-name_form').style = "pointer-events: none;";
        document.getElementById('set_player2-name_form').classList.add('slideLeft');
    }
}