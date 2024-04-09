$(".footer-links-wrapper h3").click(function(){
    $(this).next().toggle()
    $(this).toggleClass("expanded");
    })
    $(document).ready(function () {
        toggleAble();
    });
    function toggleAble() {
        if ($(window).width() <= 768) {
        $(".footer-links-wrapper").addClass("toggleClass");
        } else {
        $(".footer-links-wrapper").removeClass("toggleClass");
        }
        $(window).on("resize", function () {
        if ($(window).width() <= 768) {
            $(".footer-links-wrapper").addClass("toggleClass");
            $(".footer-links-wrapper ul").hide();
        } else {
            $(".footer-links-wrapper").removeClass("toggleClass");
            $(".footer-links-wrapper ul").show();
            $(".footer-links-wrapper h4").removeClass("expanded");
            // $("h4").css("border", "");
        }
        });
        //footer collapse functionality
        $(document).on("click", ".toggleClass h4", function () {
        // $(this).css("border", "1px solid green");
        $(this).next("ul").slideToggle();
        $(this).toggleClass("expanded");
        //console.log("toggleClass");
      });
      
    }


    // slide show

    let slideIndex= 1;
showSlides(slideIndex);

function plusSlide(n){
    showSlides(slideIndex += n);
}
function currentSlide(n){
    showSlides(slideIndex = n);
}
function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText=  document.getElementsByClassName("caption");
    if(n > slides.length){
        slideIndex = 1}
        if(n < 1){
            slideIndex = slideIndex.length
        }
        for (i = 0; i< slides.length; i++){
            slides[i].style.display = "none";
        }
        for (i = 0; i< dots.length; i++){
            dots[i].className.replace("active", "");
        }
        slides[slideIndex-1].style.display= "block";
        dots[slideIndex-1].className += "active";
        captionText.innerHTML=dots[slideIndex].lastChild;
}

