class Modal {
    create(turn1_select_card, turn2_select_card) {
        const div = document.createElement('div');
        div.setAttribute('id', 'result_modal');
        const p = document.createElement('p');
        p.setAttribute('id', 'win_player_name');
        if (Number(document.getElementById(turn1_select_card).querySelector('.num').textContent) > Number(document.getElementById(turn2_select_card).querySelector('.num').textContent)) {
            p.innerHTML = document.getElementById(turn1_select_card).querySelector('.name').textContent;
        } else {
            p.innerHTML = document.getElementById(turn2_select_card).querySelector('.name').textContent;
        }
        div.appendChild(p);
        document.getElementById('turn').appendChild(div);
    }

    show() {
        document.getElementById('result_modal').classList.add('show');
    }
}