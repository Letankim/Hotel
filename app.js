////  channce room
$(document).ready(function() {
    $('.room-conttent').hide();
    $('.active-show').fadeIn();
    $('.items-include').click(function() {
        $('.items-include').removeClass('active');
        $(this).addClass('active');
        let getId = $(this).children('a').attr('href');
        $('.room-conttent').hide();
        let srcImg = document.querySelector(getId).querySelector(".img-room img").src;
        document.querySelector('#items-room').style.backgroundImage = `url(${srcImg})`;
        $(getId).fadeIn();
        return false;
    })
});
$(document).ready(function() {
    $('.chance').hide();
    $('.main').fadeIn();
    $('.chuyendoi').click(function() {
        $('.chuyendoi').removeClass('hover1');
        $(this).addClass('hover1');
        let getUrl = $(this).children('a').attr('href');
        $('.chance').hide();
        $(getUrl).fadeIn();
        return false;
    })
})

$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop()) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
    });
    $("#back-top").click(function() {
        $('body, html').animate({scrollTop: 0}, 1000);
    })
})


function darkMode() {
    const darkId = document.getElementById('dark-mode');
    const wrapperId = document.getElementById('wrapper');
    const lightMode = document.querySelector('.sun');
    const denMode = document.querySelector('.moon');
    darkId.onclick = function () {
        setTimeout(function () {
            wrapperId.classList.toggle('nen');
            lightMode.classList.toggle('hien');
            denMode.classList.toggle('hien');
        }, 500)
  
    }
}



window.addEventListener ("load", function () {
    let wapperSlide  = document.querySelector('.slide-main'),
        slides = document.querySelectorAll('.slide-item'),
        dots = document.querySelectorAll('.slide-dots-item'),
        nextBtn = document.querySelector('.slide-next'),
        prevBnt = document.querySelector('.slide-pre');
    let index = 0;
    setInterval(changeSlide, 5000);
    function changeSlide() {
        index++;
        if(index >= slides.length) {
            index = 0;
        } else if(index < 0) {
            index = slides.length - 1;
        }
        positionSlide  = index * 100;
        wapperSlide.style.transform = `translateX(-${positionSlide}%)`;
        dots.forEach((item) => {
            item.classList.remove('slideActive');
        });
        dots[index].classList.add('slideActive');
    }
    // control change by button next pre
    prevBnt.addEventListener('click', () => {
        index-=2;
        changeSlide();
    })
    nextBtn.addEventListener('click', () => {
        changeSlide();
    });
    //  control change by click dots
    dots.forEach((item, ind) => {
        item.onclick = () => {
            index = ind - 1;
            changeSlide();
        }
    });
});
// menu on mobile 
let btnBar = document.querySelector('.btn_bars'),
    menuMobile = document.querySelector('.menu-items'),
    overlay = document.querySelector('.overlay');

btnBar.addEventListener('click', () => {
    menuMobile.classList.add('active');
    overlay.classList.add('active');
});

overlay.addEventListener('click', ()=> {
    menuMobile.classList.remove('active');
    overlay.classList.remove('active');
})