<footer>
        <div class="footer-actions">
            <a href="index" class="footer-home <?php if($page=="home") echo "active" ?>">
                <i class="fa fa-home"></i>
                <span>Home</span>
            </a>
            <a href="game" class="footer-game <?php if($page=="game") echo "active" ?>">
                <i class="fa fa-gamepad"></i>
                <span>Game</span>
            </a>
            <a href="" class="footer-leaderboard <?php if($page=="leaderboard") echo "active" ?>">
                <i class="fa fa-trophy"></i>
                <span>Leaderboard</span>
            </a>
            <a href="" class="footer-settings <?php if($page=="settings") echo "active" ?>">
                <i class="fa fa-cog"></i>
                <span>Settings</span>
            </a>
            <a href="" class="footer-logout">
                <i class="fa fa-sign-out-alt"></i>
                <span>Logout</span>
            </a>
        </div>
    </footer>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js" integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8=" crossorigin="anonymous"></script>
    <script src="assets/js/app.js"></script>
</body>
</html>