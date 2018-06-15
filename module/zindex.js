var zindex = function(item, that){
    // console.log(that.zindex);
    that.imgIndex = function(Item,gezi){ // case 0:
        //     itemImg.zindexY = "20";
        //     itemImg.zindexX = "5";
        //     itemImg.zindex = parseInt(itemImg.zindexY + itemImg.zindexX);
        //     break;
        // console.log(Item.img.x, Item.img.y)
        // var arr2x2 = [];
        // if(Item.size == "2x2")
        // {

        // }
        
                
    }
    if(item.ids){
        // console.log(item.ids.slice(0, 7));
        if(item.ids.slice(0, 7) == "guding1")
        {
            if(that.Zindex1.getChildAt(item) == undefined)
            {
                item.img.gezi = parseInt(item.ids.slice(8));
                that.imgIndex(item, item.img.gezi);
                that.Zindex1.addChild(item.img);
            }
        }else if(item.ids.slice(0, 7) == "guding2"){
            if(that.Zindex2.getChildAt(item) == undefined)
            {
                item.img.gezi = parseInt(item.ids.slice(8));
                that.imgIndex(item.img, item.img.gezi);
                that.Zindex1.addChild(item.img);
            }
        }else if(item.ids.slice(0, 7) == "guding3"){
            if(that.Zindex3.getChildAt(item) == undefined)
            {
                item.img.gezi = parseInt(item.ids.slice(8));
                that.imgIndex(item.img, item.img.gezi);
                that.Zindex1.addChild(item.img);
            }
        }else if(item.ids.slice(0, 7) == "guding4"){
            if(that.Zindex4.getChildAt(item) == undefined)
            {
                item.img.gezi = parseInt(item.ids.slice(8));
                that.imgIndex(item.img, item.img.gezi);
                that.Zindex1.addChild(item.img);
            }
        }else if(item.ids.slice(0, 7) == "guding5"){
            if(that.Zindex5.getChildAt(item) == undefined)
            {
                item.img.gezi = parseInt(item.ids.slice(8));
                that.imgIndex(item.img, item.img.gezi);
                that.Zindex1.addChild(item.img);
            }
        }else if(item.ids.slice(0, 7) == "guding6"){
            if(that.Zindex6.getChildAt(item) == undefined)
            {
                item.img.gezi = parseInt(item.ids.slice(8));
                that.imgIndex(item.img, item.img.gezi);
                that.Zindex1.addChild(item.img);
                
            }
        }
    }

    
}