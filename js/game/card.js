class Card {

    create() {
        const turn = document.getElementById('turn');
        const ul = document.createElement('ul');
        ul.setAttribute('id', 'card-list');
        turn.appendChild(ul);
        for (let i = 1; i <= 13; i ++) {
            let li = document.createElement('li');
            li.setAttribute('id', `card${i}`);
            li.classList.add('card');
            li.classList.add('lock');
            ul.appendChild(li);
        }
    }

    click(bubble) {
        document.querySelectorAll('.card').forEach(value => {
            value.addEventListener('click', () => {
                this.marking(value);
                bubble.card_click();
            });
        });
    }

    unLock() {
        document.querySelectorAll('.card').forEach(value => {
            value.classList.remove('lock');
        });
    }

    marking(value) {
        this.removeMark();
        value.classList.add('marking');
    }

    removeMark() {
        document.querySelectorAll('.card').forEach(value => {
            value.classList.remove('marking');
        });
    }

    moving() {
        document.querySelectorAll('.card').forEach(value => {
            value.classList.add('moving');
            setTimeout(() => {
                value.classList.remove('moving');
            }, 2800);
        });
    }

    selected(player, select_card) {
        const li = document.getElementById(select_card);
        li.classList.add('selected');
        addName();
        addCheck();

        function addName() {
            const p = document.createElement('p');
            p.classList.add('name');
            p.textContent = player;
            li.appendChild(p);
        }
    
        function addCheck() {
            const div = document.createElement('div');
            div.classList.add('check');
            li.appendChild(div);
        }
    }

    createNumber() {
        let array = new Array(document.querySelectorAll('.card').length);
        for (let i = 0; i < array.length; i++) {
            array[i] = i + 1;
        }

        for (let i = (array.length - 1); 0 < i; i--) {
            let r = Math.floor(Math.random() * (i + 1));

            let tmp = array[i];
            array[i] = array[r];
            array[r] = tmp;
        }

        return array;
    }

    setNumber(array) {
        document.querySelectorAll('.card').forEach(value => {
            let p = document.createElement('p');
            p.classList.add('num');
            value.appendChild(p);
        });
        setTimeout(() => {
            document.querySelectorAll('.num').forEach((value, index) => {
                value.innerHTML = array[index];
            });
        }, 500);
    }

    result(turn1_select_card, turn2_select_card) {
        document.getElementById(turn1_select_card).classList.add('result');
        setTimeout(() => {
            document.getElementById(turn2_select_card).classList.add('result');
        }, 800);
    }
}