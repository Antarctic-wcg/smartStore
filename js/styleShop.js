var styleState = function(game){
    this.create = function(){
        if(localStorage.getItem("style")){
            game.state.start("home");
        }else{
            var style = false;
            var style1 = document.getElementById("style1");
            var style2 = document.getElementById("style2");
            var style3 = document.getElementById("style3");
            var styBtn = document.getElementById("styBtn");
            var fenge = document.getElementById("fenge");

            fenge.setAttribute("style","display: block;");

            style1.addEventListener("click", function(){
                this.setAttribute("style","box-shadow: 3px -3px 3px 1px #3333FF");
                style2.setAttribute("style","box-shadow: none;");
                style3.setAttribute("style","box-shadow: none;");
                style = 1;
            })
            style2.addEventListener("click", function(){
                this.setAttribute("style","box-shadow: 3px -3px 3px 1px #3333FF");
                style1.setAttribute("style","box-shadow: none;");
                style3.setAttribute("style","box-shadow: none;");
                style = 2;
            })
            style3.addEventListener("click", function(){
                this.setAttribute("style","box-shadow: 3px -3px 3px 1px #3333FF");
                style2.setAttribute("style","box-shadow: none;");
                style1.setAttribute("style","box-shadow: none;");
                style = 3;
            })

            styBtn.addEventListener("click", function(){
                console.log(style);
                if(style){
                    game.state.start("home");
                    fenge.setAttribute("style","display: none;");
                    localStorage.setItem("style", style);
                }else{
                    alert("请选择其中一种风格！");
                }
            })
        }
    }
}