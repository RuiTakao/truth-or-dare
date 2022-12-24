class Loading {

    constructor() {
        const message = new LoadingMesssage();

        const redirect = new Redirect();

        const cookie = new Cookie();

        let player = [
            document.getElementById('input_player1-name').value,
            document.getElementById('input_player2-name').value
        ];

        player = new ArrayShuffle(player);

        cookie.set("player1", player[0]);
        cookie.set("player2", player[1]);

        const delay = 3000;

        document.getElementById('next-page_loading').style = "display: block";

        message.text(delay / 4);

        message.loop(delay);

        setTimeout(() => {
            clearInterval(message.loop(delay));
            redirect.turn1();
        }, delay + 500);
    }
}