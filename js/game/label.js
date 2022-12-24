class Label {

    create(player) {
        const label = document.createElement('div');
        label.setAttribute('id', 'label');
        const first_label = document.createElement('p');
        first_label.classList.add('first_label');
        first_label.innerHTML = `${player}さんのターンです。`;
        const second_label = document.createElement('p');
        second_label.classList.add('second_label');
        second_label.innerHTML = "カードを選んでください。";
        label.appendChild(first_label);
        label.appendChild(second_label);
        document.getElementById('turn').appendChild(label);
    }

    show() {
        document.getElementById('label').classList.add('fadeIn');
        setTimeout(() => {
            document.querySelector('.first_label').classList.add('slideLeftShow');
        }, 300);
        setTimeout(() => {
            document.querySelector('.first_label').classList.add('slideLeftHide');
            document.querySelector('.second_label').classList.add('slideLeftShow');
        }, 1200);
        setTimeout(() => {
            document.querySelector('.second_label').classList.add('slideLeftHide');
        }, 2100);
        setTimeout(() => {
            document.getElementById('label').classList.add('fadeOut');
        }, 2700);
    }
    
    remove() {
        const label = document.getElementById('label');
        document.getElementById('turn').removeChild(label);
    }

    create_result() {
        const label = document.createElement('div');
        label.setAttribute('id', 'label');
        const first_label = document.createElement('p');
        first_label.classList.add('first_label');
        first_label.innerHTML = "結果発表";
        label.appendChild(first_label);
        document.getElementById('turn').appendChild(label);
    }

    show_result() {
        document.getElementById('label').classList.add('fadeIn');
        setTimeout(() => {
            document.querySelector('.first_label').classList.add('slideLeftShow');
        }, 300);
        setTimeout(() => {
            document.querySelector('.first_label').classList.add('slideLeftHide');
        }, 1200);
        setTimeout(() => {
            document.getElementById('label').classList.add('fadeOut');
        }, 2000);
    }
}