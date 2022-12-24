class Bubble {

    fadeIn(text) {
        this.text(text);
        document.getElementById('message_box').classList.remove('fadeOut');
        document.getElementById('message_box').classList.add('fadeIn');
    }

    fadeOut() {
        document.getElementById('message_box').classList.add('fadeOut');
    }

    text(text) {
        document.getElementById('message_text').innerHTML = text;
        document.getElementById('message_text').style = this.textPosition(text);
    }

    textPosition(text) {
        switch (text.split('<br>').length) {
            case 2: return "padding-top: 32px";
            case 3: return "padding-top: 16px";
            default: return "padding-top: 0";
        }
    }

    hide() {
        document.getElementById('set_player-name_section').style = "display: none";
    }
}