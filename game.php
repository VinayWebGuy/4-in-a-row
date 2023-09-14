<?php require_once "header.php";
$page = "game";
?>
<main>
    <!-- Pop-up/modal for player win -->
    <audio id="move-audio" src="assets/beep.mp3"></audio>
    <audio id="win-audio" src="assets/win.mp3"></audio>

    <div class="current-token one"></div>

<div id="win-modal" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Player <span id="winning-player">X</span> wins!</h2>
        <p>Congratulations!</p>
    </div>
</div>

    <div id="current-player">Player 1's turn</div>
    <div class="game">
    <div class="board">

        <div class="row">
            <div class="cell empty"></div>
            <div class="cell empty"></div>
            <div class="cell empty"></div>
            <div class="cell empty"></div>
            <div class="cell empty"></div>
            <div class="cell empty"></div>
            <div class="cell empty"></div>
        </div>
        <div class="row">
            <div class="cell empty"></div>
            <div class="cell empty"></div>
            <div class="cell empty"></div>
            <div class="cell empty"></div>
            <div class="cell empty"></div>
            <div class="cell empty"></div>
            <div class="cell empty"></div>
        </div>
        <div class="row">
            <div class="cell empty"></div>
            <div class="cell empty"></div>
            <div class="cell empty"></div>
            <div class="cell empty"></div>
            <div class="cell empty"></div>
            <div class="cell empty"></div>
            <div class="cell empty"></div>
        </div>
        <div class="row">
            <div class="cell empty"></div>
            <div class="cell empty"></div>
            <div class="cell empty"></div>
            <div class="cell empty"></div>
            <div class="cell empty"></div>
            <div class="cell empty"></div>
            <div class="cell empty"></div>
        </div>
        <div class="row">
            <div class="cell empty"></div>
            <div class="cell empty"></div>
            <div class="cell empty"></div>
            <div class="cell empty"></div>
            <div class="cell empty"></div>
            <div class="cell empty"></div>
            <div class="cell empty"></div>
        </div>
        <div class="row">
            <div class="cell empty"></div>
            <div class="cell empty"></div>
            <div class="cell empty"></div>
            <div class="cell empty"></div>
            <div class="cell empty"></div>
            <div class="cell empty"></div>
            <div class="cell empty"></div>
        </div>
    </div>
    </div>
</main>
<?php require_once "footer.php"; ?>
