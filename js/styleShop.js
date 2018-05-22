var styleState = function(game){
    this.create = function(){
        var style1 = document.getElementById("style1");
        var style2 = document.getElementById("style2");
        var style3 = document.getElementById("style3");

        style1.addEventListener("click", function(){
            this.setAttribute("style","box-shadow: 3px -3px 3px 1px #3333FF");
            style2.setAttribute("style","box-shadow: none;");
            style3.setAttribute("style","box-shadow: none;");
        })
        style2.addEventListener("click", function(){
            this.setAttribute("style","box-shadow: 3px -3px 3px 1px #3333FF");
            style1.setAttribute("style","box-shadow: none;");
            style3.setAttribute("style","box-shadow: none;");
        })
        style3.addEventListener("click", function(){
            this.setAttribute("style","box-shadow: 3px -3px 3px 1px #3333FF");
            style2.setAttribute("style","box-shadow: none;");
            style1.setAttribute("style","box-shadow: none;");
        })
    }
}