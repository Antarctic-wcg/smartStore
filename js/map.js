var mapState = function(){
    this.create = function(){
        var that = this;
        var map = document.getElementById("map");
        map.setAttribute("style","display: block;");
        var back = document.getElementById("back");
        back.addEventListener("click", function(){
            game.state.start("home");
            // that.scene.start("home", false, false);
            map.setAttribute("style","display: none;");
        })
    }
}