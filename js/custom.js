$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
});

$(document).ready(function(){
  
    
    var ll = new LazyLoad({
        elements_selector: ".lazyload",
    });
    
    var slider_main = new Swiper(".js-slider-main", {
        pagination: {
            el: '.slider-main .swiper-pagination',
            clickable: true
        },       
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        loop: true,  
    });
    
   
    
    $('.faq-item__title').click(function(){
        $(this).toggleClass('active');
        $(this).next('.faq-item__content').toggleClass('active');
        return false;
    });
    
    $('.js-header-phone').click(function(){
        $(this).parent('.header-phone').toggleClass('active');
        return false;
    });
    
    $('.header-phone-title__toggle').click(function(){
        if($(this).parents('.header-phone').hasClass('active'))
        $(this).parents('.header-phone').removeClass('active');
    });
    
    $(document).bind("click touchstart",function(event) {
        if ($(event.target).closest(".header-phone").length) return;
        $('.header-phone').removeClass('active');
        event.stopPropagation();
        
        
        if ($(event.target).closest(".cabinet-mobile-nav").length) return;
        $('.cabinet-mobile-nav').removeClass('active');
        $('.cabinet-mobile-nav').find('.cabinet-nav').hide();
        $('body').removeClass('cabinet-mobile-open');  
        event.stopPropagation();
         
      });
    
    
    
    $('.products-tabs-nav__item').click(function(){
		var tab_id = $(this).attr('data-tab');
		$(this).parents('.products-tabs').find('.products-tabs-nav__item').removeClass('active');
		$(this).parents('.products-tabs').find('.products-tabs-content').removeClass('active');
		$(this).addClass('active');
		$(tab_id).addClass('active');
	})
    
    var brands = new Swiper(".brands-slider", {
        slidesPerView: 6,
        spaceBetween: 24,
        loop:false,
        lazy:true,
        navigation: {
            nextEl: '.brands-slider .swiper-button-next',
            prevEl: '.brands-slider .swiper-button-prev'
        },
        breakpoints:{
                 1199:{
                    slidesPerView: 4,
                 },  
                991:{
                    slidesPerView: 3,
                     spaceBetween: 16,
                 }, 
             }
      });
    
    
    var videos = new Swiper(".video-slider", {
        slidesPerView: 3,
        spaceBetween: 24,
        loop:true,
        lazy:true,
        slidesPerGroup: 3,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: '.video-slider .swiper-button-next',
            prevEl: '.video-slider .swiper-button-prev'
        },
         pagination: {
            el: '.video-slider .swiper-pagination',
            clickable: true
        }, 
        breakpoints:{
                 991:{
                    spaceBetween: 16,
                 },  
                767:{
                    spaceBetween: 16,
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                 }, 
                575:{
                    spaceBetween: 16,
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                 }, 
             }
      });
    
     $('.scroll').click(function() {          
		  var target = $(this.hash);
		  if (target.length) {           			 		 
			var tt= target.offset().top;					 		 
			$('html, body').animate({
			  scrollTop: tt
			}, 1500);			
			return false;
		  }	   
    });
    
     
    /*$(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $(".to-top").addClass("fixed");
        } else {
            $(".to-top").removeClass("fixed");
        }
    });
    
    if ($(window).scrollTop() > 50) {
        $(".to-top").addClass("fixed");
    } else {
         $(".to-top").removeClass("fixed");
    }*/
    
    $(".js-mobile-catalog").click(function(){   
        $('.nav').slideToggle();
        //$('body').toggleClass('menu-open');  
        return false;
    });  
    
    $(".main-wrapper__overflow").click(function(){   
        $('.sidebar-nav').removeClass('active');
        $('.sidebar').removeClass('active');
        $('body').removeClass('menu-open');  
        
        $('.section-aside__aside').removeClass('active');
        $('.js-filters-mobile').removeClass('active');
        $('body').removeClass('filter-open');  
        
        $('.sidebar-cart').removeClass('active');
        $('body').removeClass('menu-open-cart'); 
        
        
        $('.cabinet-mobile-nav').removeClass('active');
        $('.cabinet-mobile-nav').find('.cabinet-nav').hide();
        $('body').removeClass('cabinet-mobile-open');  
        
        return false;
    });  
    $('.sidebar-nav__close').click(function(){   
        $('.sidebar-nav').toggleClass('active');
        $('body').removeClass('menu-open');  
        return false;
    });  
    $('.sidebar__close').click(function(){   
        $('.sidebar').toggleClass('active');
        $('body').removeClass('menu-open');  
        return false;
    });  
    
    $('.js-open-cart').click(function(){   
        $('.sidebar-cart').addClass('active');
        $('body').addClass('menu-open-cart');  
        return false;
    });  
    
    $('.js-sidebar-cart-close').click(function(){   
        $('.sidebar-cart').removeClass('active');
        $('body').removeClass('menu-open-cart');  
        return false;
    });  
    

    $(".js-mobile-menu").click(function(){          
        $('.sidebar').toggleClass('active');        
        var t=$('.header-top').offset().top + $('.header-top').innerHeight() - $(window).scrollTop();
        $('.sidebar').css('top', t +'px');        
        $('body').toggleClass('menu-open');
        $(this).toggleClass('active');
        return false;
    });  

    $('[data-fancybox]').fancybox({
        touch: false,
        closeExisting: true,
        autoFocus: false,
        video: { autoStart: false },
        afterShow : function( instance, current ) {}
    });
    
    $('.filter-item__toggle').click(function(){          
        $(this).parents('.filter-item').toggleClass('active');
        $(this).parents('.filter-item').find('.filter-sublist').toggle();
        return false;
    });  
    
    $('.filter-list-more').click(function(){         
       
        if($(this).parents('.filter').hasClass('full')){
            $(this).parents('.filter').removeClass('full');
            $(this).text($(this).attr('data-show'));
        }else{
            $(this).parents('.filter').addClass('full');
            $(this).text($(this).attr('data-hide'));
        }
        return false;
    });  
    
    if($('#filter-range-1').length){
        var handlesSlider = document.getElementById("filter-range-1"),
            priceFrom = parseInt($("#price_from").val()),
            priceTo = parseInt($("#price_to").val());

        var max = typeof maxPrice != "undefined"? maxPrice : 999;

        noUiSlider.create(handlesSlider, {
            start: [ priceFrom, priceTo > 0? priceTo : max ],
            step: 1,
            connect:true,
            tooltips: [wNumb({decimals: 0}), wNumb({decimals: 0})],
            range: {
                "min": [  0 ],
                "max": [ max ]
            },
            pips: {
                mode: 'values',
                values: [0, 999],
                density: 4
            }
        });
    
        var valueInput = document.getElementById('price_from');
        var valueInput2 = document.getElementById('price_to');

        handlesSlider.noUiSlider.on('update', function( values, handle ) {
            if ( handle ) {
                 valueInput2.value = parseInt(values[handle]);         
            } else {
                valueInput.value = parseInt(values[handle]);
            }            
        });
        
        valueInput.addEventListener('change', function(){
            handlesSlider.noUiSlider.set([this.value, null]);
        });
        valueInput2.addEventListener('change', function(){
            handlesSlider.noUiSlider.set([null, this.value]);
        });
        
  
        
     }

    $('.text-more').click(function(){ 
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).prev('.text').addClass('text_overflow');
            $(this).text($(this).attr('data-show'));
        }else{
            $(this).addClass('active');
            $(this).prev('.text').removeClass('text_overflow');
            $(this).text($(this).attr('data-hide'));
        }
        return false;
    });  
    
     
    if($('.products-slider').length>0){
        var catalogSlider = null;
    var mediaQuerySize = 767;

    function catalogSliderInit () {
        if (!catalogSlider) {
            catalogSlider = new Swiper(".products-slider", {
                slidesPerView: 4,
                spaceBetween: 24,
                loop:false,
                lazy:true,
                observer:true,
                observeParents:true,
                navigation: {
                    nextEl: '.products-slider .swiper-button-next',
                    prevEl: '.products-slider .swiper-button-prev'
                },
                scrollbar: {
                  el: ".products-slider .swiper-scrollbar",
                  hide: false,
                     draggable: true,
                }, 
                breakpoints:{
                         991:{
                            slidesPerView: 3,
                             spaceBetween: 16,
                         } ,
                        767:{
                            slidesPerView: 2,
                             spaceBetween: 16,
                         } ,
                    479:{
                            slidesPerView: 1,
                             spaceBetween: 16,
                         } 
                     }
              });
        }
    }

    function catalogSliderDestroy () {
        if (catalogSlider) {
            catalogSlider.destroy();
            catalogSlider = null;
        }
    }
    
     var windowWidth = $(this).innerWidth();

        if (windowWidth > mediaQuerySize) {
            catalogSliderInit();
        } else {
            catalogSliderDestroy()
        }

    $(window).on('resize', function () {
        var windowWidth = $(this).innerWidth();

        if (windowWidth > mediaQuerySize) {
            catalogSliderInit();
        } else {
            catalogSliderDestroy()
        }
    });
    }
    

    $(".js-filters-mobile").click(function(){           
        var t=$('.js-filters-mobile').offset().top + $('.js-filters-mobile').innerHeight() - $(window).scrollTop();
        $('.section-aside__aside').css('top', t +'px');
        $('.section-aside__aside').toggleClass('active');
        $(this).toggleClass('active');
        $('body').toggleClass('filter-open');  
        return false;
    });  
    
    $('.calc__minus').on('click', function(event) {
        var val=parseInt($(this).parents('.calc').find('.calc__input').val());
        var new_val=val-1;
        if(new_val<1) {
            new_val=1;
            $(this).addClass('disabled');
        }
        $(this).parents('.calc').find('.calc__input').val(new_val);
        return false;
    });
    
    $('.calc__plus').on('click', function(event) {
        var val=parseInt($(this).parents('.calc').find('.calc__input').val());
        var new_val=val+1;
        if(new_val<1) new_val=1;
        $(this).parents('.calc').find('.calc__input').val(new_val);
         $(this).parents('.calc').find('.calc__minus').removeClass('disabled');
        return false;
    });
    
    $('.custom-select').selectric({
         disableOnMobile: false,         
         nativeOnMobile: true,
         arrowButtonMarkup: '<b class="button"><span><svg width="10" height="4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.378 0L3.746 3.388 4.583 4 9.215.612 8.378 0z"/><path d="M.839 0l4.632 3.388L4.634 4 .002.612.839 0z"/></svg></span></b>',
     });
    
    
    if($('.aside-sticky').length){       
        //$('.aside-sticky').each(function(){ 
            var stickySidebar = new StickySidebar('.aside-sticky', {                
                topSpacing: 20,
                bottomSpacing: 20,
                minWidth: 991,
            });
        //})          
     }
    
    $('.tabs-nav__item').click(function(){
		var tab_id = $(this).attr('data-tab');
		$(this).parents('.tabs').find('.tabs-nav__item').removeClass('active');
		$(this).parents('.tabs').find('.tabs-content').removeClass('active');
		$(this).addClass('active');
		$(tab_id).addClass('active');
        
        stickySidebar.destroy();
        $('.active .aside-sticky').each(function(){ 
            var stickySidebar = new StickySidebar(this, {                
                topSpacing: 20,
                bottomSpacing: 20,
                minWidth: 991,
            });
        })
	})
    
    var news = new Swiper(".news.swiper-container", {
        slidesPerView: 3,
        spaceBetween: 24,
        loop:true,
        lazy:true,
        slidesPerGroup: 3,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.news.swiper-container .swiper-pagination',
            clickable: true
        }, 
        breakpoints:{                 
            991:{
               spaceBetween: 16,
            }, 
             767:{
                slidesPerView: 2,
                spaceBetween: 16,
                 slidesPerGroup: 2,
            }, 
            575:{
                slidesPerView: 1,
                spaceBetween: 16,
                 slidesPerGroup: 1,
            }, 
        }
    });
    
    
    
    $('.form-auth').each(function() {  
        $(this).validate({  
             ignore: ':hidden:not(select)',
             errorElement:'div',
             errorPlacement: function(error, element) {
                element.parents('.form-col').append(error);                                  
            },
            rules: {
                'email': {"required":true, "email":"true"},
                'password': "required",               
            },
            messages: {
                'email': "המייל או הסיסמא לא נכונים, אנא נסה שוב.",
                'password': "המייל או הסיסמא לא נכונים, אנא נסה שוב.",
            },
            submitHandler: function(form){
              form.submit();         
            }
         });
    });
    
    $('.form-register').each(function() {  
        $(this).validate({  
             ignore: ':hidden:not(select)',
             errorElement:'div',
             errorPlacement: function(error, element) {
                element.parents('.form-col').append(error);                                  
            },
            rules: {
                'name': "required",   
                'lastname': "required",                  
                'email': {"required":true, "email":"true"},
                'password': "required",               
                'password2': {
                     equalTo: "#password"
                },               
            },
            messages: {
                'name': "שדה חובה",   
                'lastname': "שדה חובה",  
                'email': "שדה חובה",
                'password': "שדה חובה",
                'password2': "אשר סיסמה",
            },
            submitHandler: function(form){
              //form.submit();         
                
                $.fancybox.open({
                    src  : '#popup-register-finish',
                    type : 'inline',
                    touch: false,
                    closeExisting: true,
                    autoFocus: false,
                    
                });  
            }
         });
    });
    
    $('.form-password-recovery').each(function() {  
        $(this).validate({  
             ignore: ':hidden:not(select)',
             errorElement:'div',
             errorPlacement: function(error, element) {
                element.parents('.form-col').append(error);                                  
            },
            rules: {
                'email': {"required":true, "email":"true"},             
            },
            messages: {
                'email': "הכנס כתובת מייל",
            },
            submitHandler: function(form){
              form.submit();         
            }
         });
    });
    
    $('.form-new-password').each(function() {  
        $(this).validate({  
             ignore: ':hidden:not(select)',
             errorElement:'div',
             errorPlacement: function(error, element) {
                element.parents('.form-col').append(error);                                  
            },
            rules: {               
                'password': "required",               
                'password2': {
                    "required":true,
                     equalTo: "#password"
                },               
            },
            messages: {
                
                'password': "שדה חובה",
                'password2': {
                    "required":"שדה חובה",
                     equalTo: "אשר סיסמה"
                },
            },
            submitHandler: function(form){
              form.submit();         
            }
         });
    });
    
    $('.sidebar-cart__content').mCustomScrollbar({}); 
   
    if($('.form-checkout-auth').length){
        $('.form-checkout-auth').on('blur keyup change', 'input', function(event) {
          validateForm('.form-checkout-auth');
        });
        function validateForm(id) {
          var valid = $(id).validate({  
              ignore: "",
                 //ignore: ':hidden:not(select)',
                 errorElement:'div',
                 errorPlacement: function(error, element) {
                    element.parents('.form-col').append(error);                                  
                },
                rules: {
                    'email': {"required":true, "email":"true"},
                    'password': "required",               
                },
                messages: {
                    'email': "המייל או הסיסמא לא נכונים, אנא נסה שוב.",
                    'password': "המייל או הסיסמא לא נכונים, אנא נסה שוב.",
                },
                submitHandler: function(form){
                  form.submit();         
                }
             }).checkForm();
            if (valid) {
              $('.form-checkout-auth button').prop('disabled', false);
            } else {
              $('.form-checkout-auth button').prop('disabled', 'disabled');
            }
        }
        validateForm('.form-checkout-auth');
    }
    
    
    if($('.form-checkout').length){
    
        $('.form-checkout').on('blur keyup change', 'input', function(event) {
          validateFormCheckout('.form-checkout');
        });    
        function validateFormCheckout(id) {
          var valid2 = $(id).validate({  
                 //ignore: ':hidden:not(select)',
              ignore: "",
                 errorElement:'div',
                 errorPlacement: function(error, element) {
                    element.parents('.form-col').append(error);                                  
                },
                rules: {
                    'name': "required",   
                    'lastname': "required",                  
                    'email': {"required":true, "email":"true"},    
                    'phone': "required",
                    'city': "required",
                    'street': "required",
                },
                messages: {
                    'name': "שדה חובה",   
                    'lastname': "שדה חובה",  
                    'email': "שדה חובה",
                    'phone': "שדה חובה",
                    'city': "שדה חובה",
                    'street': "שדה חובה",
                },
                submitHandler: function(form){
                  form.submit();         
                }
             }).checkForm();

            if (valid2) {
                $('.form-checkout button').prop('disabled', false);
            } else {
              $('.form-checkout button').prop('disabled', 'disabled');
            }
        }
        validateFormCheckout('.form-checkout');
    }
    
    $('.form-contact').each(function() {  
        $(this).validate({  
             ignore: ':hidden:not(select)',
             errorElement:'div',
             errorPlacement: function(error, element) {
                element.parents('.form-col').append(error);                                  
            },
            rules: {
                'name': "required",                  
                'email': {"required":true, "email":"true"},
                'phone': "required",          
            },
            messages: {
                'name': "אין נתונים זמינים. הזן את המידע הנדרש",     
                'email': "אין נתונים זמינים. הזן את המידע הנדרש",
                'phone': "אין נתונים זמינים. הזן את המידע הנדרש",
            },
            submitHandler: function(form){
              form.submit();         
            }
         });
    });
    
    $('.checkout-tabs-nav__item').click(function(){
		var tab_id = $(this).attr('data-tab');
		$(this).parents('.checkout-tabs').find('.checkout-tabs-nav__item').removeClass('active');
		$(this).parents('.checkout-tabs').find('.checkout-tabs-content').removeClass('active');
		$(this).addClass('active');
		$(tab_id).addClass('active');
	})
    
    
    if($('#map').length){
        const myLatLng = { lat: 32.4482083, lng: 34.910606 };
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 17,
            center: myLatLng,
            disableDefaultUI: true,
        });
        new google.maps.Marker({
            position: myLatLng,
            map,
        });

    }
    
    $('[data-countdown]').each(function() {
        var $this = $(this), 
            finalDate = $(this).data('countdown');
            finalDate = new Date().valueOf() +  24 * 60 * 60 * 1000;  
            $this.countdown(finalDate, function(event) {
            var totalHours = event.offset.totalDays * 24 + event.offset.hours;
            
            if(totalHours<10){
                totalHours='0'+totalHours;
            }  
            totalHours=''+totalHours;
            var totalHours_str = totalHours.split('').reduce( (res, char) => `${res}<span>${char}</span>`, '');

            if(event.offset.minutes<10){
                event.offset.minutes='0'+event.offset.minutes;
            }            
            var totalMinutes=''+ event.offset.minutes;            
            var totalMinutes_str = totalMinutes.split('').reduce( (res, char) => `${res}<span>${char}</span>`, '');
          
            if(event.offset.seconds<10){
                event.offset.seconds='0'+event.offset.seconds;
            }            
            var totalSeconds=''+ event.offset.seconds;
            var totalSeconds_str = totalSeconds.split('').reduce( (res, char) => `${res}<span>${char}</span>`, '');   

            $this.html(event.strftime('<span class="countdown__item">'+totalHours_str + '</span>:<span class="countdown__item">'+totalMinutes_str+'</span>:<span class="countdown__item">'+totalSeconds_str+'</span>'));
    });
});
    
    $('.form-account').validate({  
                 //ignore: ':hidden:not(select)',
              ignore: "",
                 errorElement:'div',
                 errorPlacement: function(error, element) {
                    element.parents('.form-col').append(error);                                  
                },
                rules: {
                    'name': "required",   
                    'lastname': "required",                  
                    'email': {"required":true, "email":"true"},    
                    'phone': "required",
                    'city': "required",
                    'street': "required",
                },
                messages: {
                    'name': "שדה חובה",   
                    'lastname': "שדה חובה",  
                    'email': "שדה חובה",
                    'phone': "שדה חובה",
                    'city': "שדה חובה",
                    'street': "שדה חובה",
                },
                submitHandler: function(form){
                  form.submit();         
                }
             });
    
    
    $(".cabinet-mobile-nav-toggle").click(function(){     
        $(this).parents('.cabinet-mobile-nav').toggleClass('active');
        $(this).parents('.cabinet-mobile-nav').find('.cabinet-nav').toggle();
        $('body').toggleClass('cabinet-mobile-open');  
        return false;
    });  
    
    $('.form-password__toggle').click(function(){  
        $(this).toggleClass('active');
        var input = $($(this).prev("input"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
        return false;
    });
    
    $('.btn-password').click(function(){  
        $('#password').prop('disabled', function(i, v) { return !v; });
        return false;
    });
    
    $('.form-account-login').each(function() {  
        $(this).validate({  
             ignore: ':hidden:not(select)',
             errorElement:'div',
             errorPlacement: function(error, element) {
                element.parents('.form-col').append(error);                                  
            },
            rules: {
                'email': {"required":true, "email":"true"},
                'password': "required",               
            },
            messages: {
                'email': "המייל או הסיסמא לא נכונים, אנא נסה שוב.",
                'password': "המייל או הסיסמא לא נכונים, אנא נסה שוב.",
            },
            submitHandler: function(form){
              form.submit();         
            }
         });
    });
    
    
     if($('.section-cabinet__aside .cabinet-nav').length){       
            var stickySidebar = new StickySidebar('.section-cabinet__aside .cabinet-nav', {                
                topSpacing: 0,
                bottomSpacing: 65,
                minWidth: 991,
            });         
     }
    
    $('.form-order-cancel').each(function() {  
        $(this).validate({  
             ignore: ':hidden:not(select)',
             errorElement:'div',
             errorPlacement: function(error, element) {
                element.parents('.form-col').append(error);                                  
            },
            rules: {
                'name': "required",                  
                'phone': "required",          
                'number': "required",          
                'comment': "required",          
            },
            messages: {
                'name': "אין נתונים זמינים. הזן את המידע הנדרש",  
                'phone': "אין נתונים זמינים. הזן את המידע הנדרש",
                'number': "אין נתונים זמינים. הזן את המידע הנדרש",
                'comment': "אין נתונים זמינים. הזן את המידע הנדרש",
            },
            submitHandler: function(form){
              form.submit();         
            }
         });
    });
    
    $('.js-popup-close').click(function(){
        $.fancybox.close();
        return false;
    })
    
    
});
