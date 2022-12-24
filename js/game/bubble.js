class Bubble {

    fadeIn() {
        document.getElementById('bubble').classList.add('fadeIn');
    }

    vibe() {
        const bubble = document.getElementById('bubble');
        bubble.classList.add('rightRotate');
        setTimeout(() => {
            bubble.classList.add('leftRotate');
        }, 100);
        setTimeout(() => {
            bubble.classList.remove('rightRotate');
            bubble.classList.remove('leftRotate');
        }, 200);
    }

    create(player) {
        const turn = document.getElementById('turn');
        const bubble = document.createElement('div');
        bubble.setAttribute('id', 'bubble');
        turn.appendChild(bubble);
        div('bubble_bg');
        div('bubble_arrow');
        div('bubble_arrow_shadow');
        p('bubble_text');
        btn_content();

        function div(class_name) {
            const div = document.createElement('div');
            div.classList.add(class_name);
            bubble.appendChild(div);
        }

        function p(id_name) {
            const p = document.createElement('p');
            p.setAttribute('id', id_name);
            p.innerHTML = `${player}さんのターンです<br>カードを選んでください`;
            bubble.appendChild(p);
        }

        function btn_content() {
            const div = document.createElement('div');
            div.setAttribute('id', 'bubble_btn');
            btn('yes', 'はい');
            btn('no', 'いいえ');
            bubble.appendChild(div);

            function btn(id_name, text) {
                const btn = document.createElement('div');
                btn.setAttribute('id', id_name);
                btn.innerHTML = text;
                div.appendChild(btn);
            }
        }
    }

    card_click() {
        document.getElementById('bubble_text').classList.add('btn_exist');
        document.getElementById('bubble_text').innerHTML = "これにしますか？";
        document.getElementById('bubble_btn').style = "display: flex;"
        this.vibe();
    }

    btn_click(player, card, data, redirect) {
        document.getElementById('yes').addEventListener('click', () => {

            if (document.querySelectorAll('.marking').length == 1) {

                document.querySelectorAll('.card').forEach(value => {
                    value.classList.add('lock');
                });

                document.getElementById('yes').classList.add('lock');

                document.getElementById('no').classList.add('lock');

                data();

                setTimeout(() => {
                    redirect();
                }, 100);
            }
        }, {'once': true});

        document.getElementById('no').addEventListener('click', () => {
            if (document.querySelectorAll('.marking').length <= 1) {
                this.vibe();
                card.removeMark();
                document.getElementById('bubble_text').classList.remove('btn_exist');
                document.getElementById('bubble_text').innerHTML = `${player}さんのターンです<br>カードを選んでください`;
                document.getElementById('bubble_btn').style = "display: none;"
            }
        });
    }
}