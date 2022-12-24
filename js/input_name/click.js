class Click {

    first() {

        const bubble = new Bubble();
        const inputForm = new InputForm();

        document.getElementById('set_player1-name').addEventListener('click', () => {
            if (document.getElementById('input_player1-name').value.length > 2) {

                bubble.fadeOut();

                setTimeout(() => {

                    bubble.fadeIn("2人目のプレイヤー名を入力して<br>クリックしてね！");

                }, 1100);

                inputForm.slideLeft(100);
            }
        });
    }

    second() {

        const bubble = new Bubble();
        const inputForm = new InputForm();

        document.getElementById('set_player2-name').addEventListener('click', () => { 
            if (document.getElementById('input_player2-name').value.length > 2) {
                bubble.fadeOut();

                inputForm.slideOut();

                setTimeout(() => {

                    bubble.hide();

                    new Loading();

                }, 2100);
            }
        });

        
    }

    button_enable() {

        document.querySelectorAll('.input_name').forEach(value => {

            value.addEventListener('change', () => {

                if (value.value.length > 2) {

                    value.parentNode.nextElementSibling.querySelector('.click_btn').style = "pointer-events: visible";

                } else {

                    value.parentNode.nextElementSibling.querySelector('.click_btn').style = "pointer-events: none";
                    
                }
            });
        });
    }
}