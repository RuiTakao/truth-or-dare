class LoadingMesssage {

    text(time) {
        setTimeout(() => { this.fadeIn("プレイヤーをシャッフルしています") }, time);
        setTimeout(() => { this.fadeOut() }, time * 2);
        setTimeout(() => { this.fadeIn("しばらくお待ちください") }, time * 3);
        setTimeout(() => { this.fadeOut() }, time * 4);
    }

    fadeIn(text) {
        document.getElementById('loading_text').classList.remove('fadeOut');
        document.getElementById('loading_text').classList.add('fadeIn');
        document.getElementById('loading_text').innerHTML = text;
    }

    fadeOut() {
        document.getElementById('loading_text').classList.remove('fadeIn');
        document.getElementById('loading_text').classList.add('fadeOut');
    }

    loop(time) {
        setInterval(() => { 
            this.text(time);
        }, time);
    }
}