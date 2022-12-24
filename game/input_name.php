<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/input_name/front_page.css">
    <?php require_once("./title.php") ?>
</head>
<body>
    <div class="bg">
        <div class="container">

                <section id="set_player-name_section" class="input_section">
                    <div id="message_box" class="message_bubble">
                        <div class="bubble">
                            <p id="message_text" class="message_bubble_text"></p>
                        </div>
                        <div class="bubble_arrow"></div>
                        <div class="bubble_arrow_shadow"></div>
                    </div>
                    <div class="set_name_area">
                        <div id="set_player1-name_form">
                            <div class="input_name_area">
                                <input type="text" id="input_player1-name" class="input_name" maxlength="5">
                            </div>
                            <div class="click_btn_area">
                                <div id="set_player1-name" class="click_btn">クリック</div>
                            </div>
                        </div>
                        <div id="set_player2-name_form" style="display: none;">
                            <div class="input_name_area">
                                <input type="text" id="input_player2-name" class="input_name" maxlength="5">
                            </div>
                            <div class="click_btn_area">
                                <div id="set_player2-name" class="click_btn">クリック</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="next-page_loading" style="display: none;">
                    <div class="loading_text_content">
                        <p id="loading_text"></p>
                    </div>
                    <div class="loading_icon_content">
                        <i class="loading-icon"></i>
                    </div>
                </section>

        </div>
    </div>

    <script src="../js/cookie.js"></script>
    <script src="../js/redirect.js"></script>
    <script src="../js/arrayShuffle.js"></script>
    <script src="../js/input_name/inputForm.js"></script>
    <script src="../js/input_name/bubble.js"></script>
    <script src="../js/input_name/click.js"></script>
    <script src="../js/input_name/loadingMessage.js"></script>
    <script src="../js/input_name/loading.js"></script>
    <script src="../js/input_name/main.js"></script>
</body>
</html>