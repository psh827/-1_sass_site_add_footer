'use strict'
$(function(){
    //내방식
    // let windowhref = $(location).attr("href").split("/")
    // let winhrefLent = windowhref.length;
    // let myhref = $("#lnb ul li a");
    // myhref.each(function(){
    //     let myplace = $(this).attr("href").split("/");
    //     let myplaceLeng = myplace.length;
    //     if(windowhref[winhrefLent-1] == myplace[myplaceLeng - 1]){
    //         $(this).addClass("on");
    //     }
    // })

    
    let currentHref = splitHref($(location))
    $("#lnb a").each(function(){
        let matchHref = splitHref($(this))
        if(currentHref == matchHref){
            $(this).addClass("on");
        }
    });

    function splitHref(el){
        let href = el.attr("href").split("/");
        href = href[href.length - 1].split(".")[0];
        return href;
    }


    $(".accordion dd:not(:first)").css({
        "display": "none",
        "height": 0
    });
    $(".accordion dd:not(:first)").css("height", "0");
    
    $(".accordion dl dt").click(function(){
        let thisElem = $("+dd", this);
        if(thisElem.css("display") == "none"){
            let isAni = $("dl dt").is(":animated");
            // $("dd").slideUp('slow');
            // thisElem.slideDown("slow");
            $("dd").each(function(){
                if(!isAni){
                    if(parseInt($(this).css("height")) != 0){
                        $(this).animate({height: 0}, "slow", function(){
                            $(this).css("display", "none")
                        });
                    }
                }
            })
            thisElem.css("display", "block").animate({height: 300}, "slow", function(){});
        }
    })

    
    
});