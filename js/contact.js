var contactForm = $("#contactForm"),
        input=contactForm.find("input,textarea"),
        li=contactForm.find("li");
        li.hover(function(){
            $(this).addClass("on")
        },function(){
            var _this=$(this),
            isFocus=_this.attr("isFocus");
            if(!+isFocus){
                _this.removeClass("on")
            }
            
        })
        input.on("focus",function(){
            var parent=$(this).parent("li")
            parent.addClass("on").attr("isFocus",1)
        }).on("blur",function(){
            var parent=$(this).parent("li")
            parent.removeClass("on").attr("isFocus",0)
        });
       
        var slipper=$(".slipper");
        slider=$("#carousel-generic"),
        $w=$("html,body"),
        docHeight=$("html")[0].clientHeight,
        vtop=docHeight/2-40;
        if (slider.size()>0) {
            vtop=slider.offset().top+slider.height();
        }
        
        slipper.css("top",vtop)
        $(window).on("scroll",function(e){

            if($(this).scrollTop()>vtop/2){
                slipper.addClass("pin")
                slipper.css("top","50%")
            }else{
                slipper.removeClass("pin")
                //slipper.css("top",vtop)
                slipper.removeAttr("style");
            }
        })

        slipper.find(".slipper-backtop").on("click",function(){
            $w.animate({scrollTop: '0px'}, 800);
        })