var bootState = function(game){
    this.init = function(){
        // game.scale.pageAlignHorizontally = true;//水平居中
        game.scale.pageAlignVertically = true;//垂直居中
        if(!game.device.desktop){
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        }
        
    }
    this.preload = function(){
        game.load.image("loading","assets/load.jpg");
    };
    this.create = function(){
        game.state.start("loader");
    }
}