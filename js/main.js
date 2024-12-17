
(function ($) {
    "use strict";

    /*[ Load page ]
    ===========================================================*/
    try {
        $(".animsition").animsition({
            inClass: 'fade-in',
            outClass: 'fade-out',
            inDuration: 1500,
            outDuration: 800,
            linkElement: '.animsition-link',
            loading: true,
            loadingParentElement: 'html',
            loadingClass: 'animsition-loading-1',
            loadingInner: '<div class="loader05"></div>',
            timeout: false,
            timeoutCountdown: 5000,
            onLoadEvent: true,
            browser: [ 'animation-duration', '-webkit-animation-duration'],
            overlay : false,
            overlayClass : 'animsition-overlay-slide',
            overlayParentElement : 'html',
            transition: function(url){ window.location.href = url; }
        });
    } catch(er) {console.log(er);}

    
    /*[ Back to top ]
    ===========================================================*/
    try {
        var windowH = $(window).height()/2;

        $(window).on('scroll',function(){
            if ($(this).scrollTop() > windowH) {
                $("#myBtn").css('display','flex');
            } else {
                $("#myBtn").css('display','none');
            }
        });

        $('#myBtn').on("click", function(){
            $('html, body').animate({scrollTop: 0}, 300);
        });
    } catch(er) {console.log(er);}


    /*==================================================================
    [ Isotope ]*/
    try {
        var $topeContainer = $('.isotope-grid');
        var $filter = $('.filter-tope-group');

        // filter items on button click
        $filter.each(function () {
            $filter.on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $topeContainer.isotope({filter: filterValue});
            });
            
        });

        // init Isotope
        $(window).on('load', function () {
            var $grid = $topeContainer.each(function () {
                $(this).isotope({
                    itemSelector: '.isotope-item',
                    layoutMode: 'masonry',
                    percentPosition: true,
                    animationEngine : 'best-available',
                    masonry: {
                        columnWidth: '.isotope-item'
                    }
                });
            });
        });

        var isotopeButton = $('.filter-tope-group button');

        $(isotopeButton).each(function(){
            $(this).on('click', function(){
                for(var i=0; i<isotopeButton.length; i++) {
                    $(isotopeButton[i]).removeClass('how-active1');
                }

                $(this).addClass('how-active1');


                if($(this).data('filter') === "*") {
                    $('.isotope-grid-gallery .isotope-item .js-gallery').addClass('js-show-gallery');
                    
                    $('.gallery-lb.isotope-grid-gallery').each(function() {
                        $(this).find('.js-show-gallery').magnificPopup({
                            type: 'image',
                            gallery: {
                                enabled:true
                            },
                            mainClass: 'mfp-fade'
                        });
                    });
                }
                else {
                    $('.isotope-grid-gallery .isotope-item .js-gallery').removeClass('js-show-gallery');
                    $('.isotope-grid-gallery ' + $(this).data('filter') + ' .js-gallery').addClass('js-show-gallery');

                    $('.gallery-lb.isotope-grid-gallery').each(function() {
                        $(this).find('.js-show-gallery').magnificPopup({
                            type: 'image',
                            gallery: {
                                enabled:true
                            },
                            mainClass: 'mfp-fade'
                        });
                    });
                }
            });
        });
    } catch(er) {console.log(er);}
        


    /*==================================================================
    [ Fixed Header ]*/
    try {
        var headerDesktop = $('.container-menu-desktop');
        var wrapMenu = $('.wrap-menu-desktop');

        if($('.top-bar').length > 0) {
            var posWrapHeader = $('.top-bar').height();
        }
        else {
            var posWrapHeader = 0;
        }
        

        if($(window).scrollTop() > posWrapHeader) {
            $(headerDesktop).addClass('fix-menu-desktop');
            $(wrapMenu).css('top',0); 
        }  
        else {
            $(headerDesktop).removeClass('fix-menu-desktop');
            $(wrapMenu).css('top',posWrapHeader - $(this).scrollTop()); 
        }

        $(window).on('scroll',function(){
            if($(this).scrollTop() > posWrapHeader) {
                $(headerDesktop).addClass('fix-menu-desktop');
                $(wrapMenu).css('top',0); 
            }  
            else {
                $(headerDesktop).removeClass('fix-menu-desktop');
                $(wrapMenu).css('top',posWrapHeader - $(this).scrollTop()); 
            } 
        });
    } catch(er) {console.log(er);}
        


    /*==================================================================
    [ Menu mobile ]*/
    try {
        $('.btn-show-menu-mobile').on('click', function(){
            $(this).toggleClass('is-active');
            $('.menu-mobile').slideToggle();
        });

        var arrowMainMenu = $('.arrow-main-menu-m');

        for(var i=0; i<arrowMainMenu.length; i++){
            $(arrowMainMenu[i]).on('click', function(){
                $(this).parent().find('.sub-menu-m').slideToggle();
                $(this).toggleClass('turn-arrow-main-menu-m');
            })
        }

        $(window).on('resize',function(){
            if($(window).width() >= 992){
                if($('.menu-mobile').css('display') === 'block') {
                    $('.menu-mobile').css('display','none');
                    $('.btn-show-menu-mobile').toggleClass('is-active');
                }

                $('.sub-menu-m').each(function(){
                    if($(this).css('display') === 'block') { 
                        $(this).css('display','none');
                        $(arrowMainMenu).removeClass('turn-arrow-main-menu-m');
                    }
                });
                    
            }
        });
    } catch(er) {console.log(er);}
        


    /*==================================================================
    [ Show / hide modal search ]*/
    try {
        $('.js-show-modal-search').on('click', function(){
            $('.modal-search-header').addClass('show-modal-search');
            $(this).css('opacity','0');
        });

        $('.js-hide-modal-search').on('click', function(){
            $('.modal-search-header').removeClass('show-modal-search');
            $('.js-show-modal-search').css('opacity','1');
        });

        $('.container-search-header').on('click', function(e){
            e.stopPropagation();
        });
    } catch(er) {console.log(er);}
        


    /*==================================================================
    [ Cart header ]*/
    try {
        $('.wrap-menu-click').each(function(){
            var wrapMenuClick = $(this);

            $(wrapMenuClick).find('.menu-click').on('click', function(e){
                e.stopPropagation();

                if($(this).hasClass('showed')) {
                    $(wrapMenuClick).find('.menu-click').removeClass('show-menu-click showed');
                }
                else {
                    $(wrapMenuClick).find('.menu-click').removeClass('show-menu-click showed');
                    $(this).addClass('show-menu-click showed');
                }
            });

            $(wrapMenuClick).find('.menu-click-child').on('click', function(e){
                e.stopPropagation();
            }); 
        });

        $(window).on('click', function(){
            $('.wrap-menu-click').find('.menu-click').removeClass('show-menu-click showed');
        })
    } catch(er) {console.log(er);}
    

    /*==================================================================
    [ Sweetalert ]*/
    try {
        $('.js-addwish-b1, .js-addwish1').on('click', function(e){
            e.preventDefault();
        });

        $('.js-addwish-b1').each(function(){
            var nameProduct = $(this).parent().parent().find('.js-name-b1').html();
            $(this).on('click', function(){
                swal(nameProduct, "is added to wishlist !", "success");

                $(this).addClass('js-addedwish-b1');
                $(this).removeClass('js-addwish-b1');
                $(this).off('click');
            });
        });

        $('.js-addcart-b1').each(function(){
            var nameProduct = $(this).parent().parent().find('.js-name-b1').html();
            $(this).on('click', function(e){
                e.preventDefault();
                swal(nameProduct, "Đã thêm vào giỏ !", "success");
            });
        });


        /*---------------------------------------------*/
        $('.js-addwish1').each(function(){
            var nameProduct = $(this).parent().find('.js-name1').html();
            $(this).on('click', function(){
                swal(nameProduct, "is added to wishlist !", "success");

                $(this).addClass('js-addedwish1');
                $(this).off('click');
            });
        });

        $('.js-addcart1').each(function(){
            var nameProduct = $(this).parent().parent().find('.js-name1').html();
            $(this).on('click', function(e){
                e.preventDefault();
                swal(nameProduct, "Đã thêm vào giỏ !", "success");
            });
        });


    } catch(er) {console.log(er);}
    
    /*==================================================================
    [ Parallax100 ]*/
    try {
        $('.parallax100').parallax100();
    } catch(er) {console.log(er);}


    /*==================================================================
    [ Perfect scrollbar ]*/
    try {
        $('.js-pscroll').each(function(){
            $(this).css('position','relative');
            $(this).css('overflow','hidden');
            var ps = new PerfectScrollbar(this, {
                wheelSpeed: 1,
                scrollingThreshold: 1000,
                wheelPropagation: false,
            });

            $(window).on('resize', function(){
                ps.update();
            })
        });
    } catch(er) {console.log(er);}


    /*==================================================================
    [ Counter up ]*/
    try {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    } catch(er) {console.log(er);}


    /*==================================================================
    [ Countdown ]*/
    try {
        $('.coutdown100').each(function(){
            if($(this).data('year') != null){
                var year = Number($(this).data('year'));
            }
            else {var year = 0;}

            if($(this).data('month') != null){
                var month = Number($(this).data('month'));
            }
            else {var month = 0;}

            if($(this).data('date') != null){
                var date = Number($(this).data('date'));
            }
            else {var date = 0;}

            if($(this).data('hours') != null){
                var hours = Number($(this).data('hours'));
            }
            else {var hours = 0}

            if($(this).data('minutes') != null){
                var minutes = Number($(this).data('minutes'));
            }
            else {var minutes = 0;}

            if($(this).data('seconds') != null){
                var seconds = Number($(this).data('seconds'));
            }
            else {var seconds = 0;}

            if($(this).data('timezone') != null && $(this).data('timezone') != "auto"){
                var timeZ = $(this).data('timezone');
            }
            else {var timeZ = "";}


            $(this).countdown100({
                /*Set Endtime here*/
                /*Endtime must be > current time*/
                endtimeYear: year,
                endtimeMonth: month,
                endtimeDate: date,
                endtimeHours: hours,
                endtimeMinutes: minutes,
                endtimeSeconds: seconds,
                timeZone: timeZ
                // ex:  timeZone: "America/New_York"
                //go to " http://momentjs.com/timezone/ " to get timezone
            });
        });
            
    } catch(er) {console.log(er);}


    /*==================================================================
    [ Video ]*/
    try {
        $('.btn-play').on('click', function(ev) {
            $('.wrap-iframe-video').children('iframe')[0].src += "rel=0&autoplay=1";

            $('.wrap-iframe-video').addClass('show-video');
            
            $(this).fadeOut();
            ev.preventDefault();
        });
    } catch(er) {console.log(er);}


    /*==================================================================
    [ Progress bar ]*/
    try {
        var progressItem = $('.progress-item');
        var progressDone = false;

        $(window).on('scroll',function(){
            progressItem.each(function(){
                var per = Number($(this).data('percent'));
                var inner = $(this).children('.progress-inner');

                if($(window).scrollTop() + $(window).height() > $(this).offset().top && per > 0) { 
                    $(this).data('percent','0');  
                    inner.html(per + "%"); 
                    inner.animate({width: per + "%"},1500);
                }
            });
        });
    } catch(er) {console.log(er);}

        
    /*==================================================================
    [ JS height ]*/
    try {
        $(window).on('resize', function(){
            $('.js-height').each(function(){
                $(this).css('height',$(this).find('.js-height-child').height());
            });
        });

        $(window).on('load', function(){
            $('.js-height').each(function(){
                $(this).css('height',$(this).find('.js-height-child').height());
            });
        });
    } catch(er) {console.log(er);}
    

    /*==================================================================
    [ Magnific-Popup ]*/
    try {
        $('.gallery-lb').each(function() {
            $(this).find('.js-show-gallery').magnificPopup({
                type: 'image',
                gallery: {
                    enabled:true
                },
                mainClass: 'mfp-fade'
            });
        });
    } catch(er) {console.log(er);}

    /*==================================================================
    [ Noui ]*/
    try {
        var filterBar = document.getElementById('filter-bar');
        var fromValue = Number($('#value-lower').html());
        var toValue = Number($('#value-upper').html());

        noUiSlider.create(filterBar, {
            start: [ fromValue, toValue ],
            connect: true,
            range: {
                'min': fromValue,
                'max': toValue
            }
        });

        var skipValues = [
        document.getElementById('value-lower'),
        document.getElementById('value-upper')
        ];

        filterBar.noUiSlider.on('update', function( values, handle ) {
            skipValues[handle].innerHTML = Math.round(values[handle]) ;
        });
    } catch(er) {console.log(er);}


    /*==================================================================
    [ Select2 ]*/
    try {
        $(".js-select2").each(function(){
            $(this).select2({
                minimumResultsForSearch: 20,
                dropdownParent: $(this).next('.dropDownSelect2')
            });
        });
    } catch(er) {console.log(er);}


    /*==================================================================
    [ Show grid / list ]*/
    try {
        $('.js-show-grid').on('click', function(){
            $(this).addClass('menu-active');
            $('.js-show-list').removeClass('menu-active');

            $('.shop-grid').fadeIn();
            $('.shop-list').hide();
        });

        $('.js-show-list').on('click', function(){
            $(this).addClass('menu-active');
            $('.js-show-grid').removeClass('menu-active');

            $('.shop-list').fadeIn();
            $('.shop-grid').hide();
        });
    } catch(er) {console.log(er);}

    /*==================================================================
    [ +/- num product ]*/
    try {
        $('.btn-num-product-down').on('click', function(){
            var numProduct = Number($(this).next().val());
            if(numProduct > 0) $(this).next().val(numProduct - 1);
        });

        $('.btn-num-product-up').on('click', function(){
            var numProduct = Number($(this).prev().val());
            $(this).prev().val(numProduct + 1);
        });
    } catch(er) {console.log(er);}
        
    /*==================================================================
    [ Rating ]*/
    try {
       $('.wrap-rating').each(function(){
            var item = $(this).find('.item-rating');
            var rated = -1;
            var input = $(this).find('input');
            $(input).val(0);

            $(item).on('mouseenter', function(){
                var index = item.index(this);
                var i = 0;
                for(i=0; i<=index; i++) {
                    $(item[i]).removeClass('fa-star-o');
                    $(item[i]).addClass('fa-star');
                }

                for(var j=i; j<item.length; j++) {
                    $(item[j]).addClass('fa-star-o');
                    $(item[j]).removeClass('fa-star');
                }
            });

            $(item).on('click', function(){
                var index = item.index(this);
                rated = index;
                $(input).val(index+1);
            });

            $(this).on('mouseleave', function(){
                var i = 0;
                for(i=0; i<=rated; i++) {
                    $(item[i]).removeClass('fa-star-o');
                    $(item[i]).addClass('fa-star');
                }

                for(var j=i; j<item.length; j++) {
                    $(item[j]).addClass('fa-star-o');
                    $(item[j]).removeClass('fa-star');
                }
            });
        });
    } catch(er) {console.log(er);}
        
    /*==================================================================
    [ Show/hide panel1 ]*/
    try {
        $('.js-toggle-panel1').on('click', function(){
            $(this).parent().parent().find('.js-panel1').slideToggle();
        });
    } catch(er) {console.log(er);}


    /*==================================================================
    [ Chose pay ]*/
    try {
        $("#radio1").on('change', function(){
            if ($(this).is(":checked")) {
                $('.content-payment').slideDown(300);
                $('.content-paypal').slideUp(300);
            }
        });

        $("#radio2").on('change', function(){
            if ($(this).is(":checked")) {
                $('.content-payment').slideUp(300);
                $('.content-paypal').slideDown(300);
            }
        });
    } catch(er) {console.log(er);}
        
    /*==================================================================
    [ Show/hide Reply cmt ]*/
    try {
        $('.js-show-reply-cmt').on('click', function(e){
            e.preventDefault();
            $(this).parent().parent().parent().find('.js-reply-cmt').show();
            $(this).addClass('how-active2');
        });

        $('.js-hide-reply-cmt').on('click', function(e){
            e.preventDefault();
            $(this).parent().parent().hide();
            $(this).parent().parent().parent().find('.js-show-reply-cmt').removeClass('how-active2');
        });
    } catch(er) {console.log(er);}
    

// JavaScript code to manage cart functionality for the fruit sho

})(jQuery);
(function ($) {
    "use strict";

    // Initialize cart array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to render cart items in the header
    function renderCart() {
        let cartHeader = $('.cart-header .js-pscroll');
        cartHeader.empty();
        let total = 0;
    
        // Lặp qua từng item trong giỏ hàng và gán chỉ số index
        cart.forEach((item, index) => {
            total += item.price * item.quantity;
            cartHeader.append(`
                <div class="flex-w flex-str m-b-25">
                    <div class="size-w-15 flex-w flex-t">
                        <a href="product-single.html" class="wrap-pic-w bo-all-1 bocl12 size-w-16 hov3 trans-04 m-r-14">
                            <img src="${item.image}" alt="${item.name}">
                        </a>
                        <div class="size-w-17 flex-col-l">
                            <a href="product-single.html" class="txt-s-108 cl3 hov-cl10 trans-04">
                                ${item.name}
                            </a>
                            <span class="txt-s-101 cl9">${item.price}$</span>
                            <span class="txt-s-109 cl12">x${item.quantity}</span>
                        </div>
                    </div>
                    <div class="size-w-14 flex-b">
                        <button class="lh-10 remove-item" data-index="${index}">
                            <img src="images/icons/icon-close.png" alt="REMOVE">
                        </button>
                    </div>
                </div>
            `);
        });
    
        // Cập nhật tổng số sản phẩm
        $('.icon-header-noti').attr('data-notify', cart.length);
        $('.txt-m-111.cl6').text(`${total}$`);
        $('.txt-m-111.cl10').text(`${total}$`);
        localStorage.setItem('cart', JSON.stringify(cart)); // Lưu lại vào localStorage
    }
    
    

    // Function to add item to the cart
    $(document).on('click', '.js-addcart-b1', function () {
        const productCard = $(this).closest('.block1');
        const name = productCard.find('.js-name-b1').text();
        const price = parseFloat(productCard.find('.block1-content-more').text().replace('$', ''));
        const image = productCard.find('img').attr('src');

        // check product
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ name, price, image, quantity: 1 });
        }

        // Thông báo và render lại giỏ hàng
        swal(name, "đã được thêm vào giỏ hàng!", "success");
        renderCart();
    });

    // $(document).on('click', '.remove-item', function () {
    //     console.log("Xóa sản phẩm được click!"); // Kiểm tra xem sự kiện có được kích hoạt không
    //     const index = $(this).data('index');
    //     console.log("Chỉ mục của sản phẩm: ", index); // Log ra chỉ mục sản phẩm
    //     if (index !== undefined) {
    //         cart.splice(index, 1); // Xóa sản phẩm khỏi mảng cart
    //         renderCart(); // Cập nhật lại giỏ hàng
    //     } else {
    //         console.error("Lỗi: Không thể lấy được index.");
    //     }
    // });
    

    // Xóa localStorage nếu phát hiện dữ liệu không hợp lệ
    $(document).ready(function () {
        if (cart.some(item => item.name === "" || item.name === "")) {
            localStorage.removeItem('cart'); // Xóa giỏ hàng
            cart = []; // Reset mảng giỏ hàng
        }
        renderCart(); // Render giỏ hàng khi tải trang
    });

})(jQuery);


(function ($) {
    "use strict";

    // Giỏ hàng từ localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Hàm render giỏ hàng trong header
    function renderCartHeader() {
        let cartHeader = $('.cart-header .js-pscroll');
        cartHeader.empty();
        let totalHeader = 0;

        cart.forEach((item, index) => {
            totalHeader += item.price * item.quantity;
            cartHeader.append(`
                <div class="flex-w flex-str m-b-25">
                    <div class="size-w-15 flex-w flex-t">
                        <a href="#" class="wrap-pic-w bo-all-1 bocl12 size-w-16 hov3 trans-04 m-r-14">
                            <img src="${item.image}" alt="${item.name}">
                        </a>
                        <div class="size-w-17 flex-col-l">
                            <a href="#" class="txt-s-108 cl3 hov-cl10 trans-04">${item.name}</a>
                            <span class="txt-s-101 cl9">${item.price}$</span>
                            <span class="txt-s-109 cl12">x${item.quantity}</span>
                        </div>
                    </div>
                </div>
            `);
        });
        $('.icon-header-noti').attr('data-notify', cart.length);
    }

    // Hàm render giỏ hàng trong phần "Đơn hàng của bạn"
    function renderOrderSummary() {
        let orderContainer = $('#order-summary');
        orderContainer.empty();
        let subtotal = 0;

        cart.forEach(item => {
            let totalPrice = item.price * item.quantity;
            subtotal += totalPrice;

            // Thêm sản phẩm vào phần "Đơn hàng của bạn"
            orderContainer.append(`
                <div class="flex-w flex-sb-m txt-s-101 cl6 bo-b-1 bocl15 p-b-21 p-t-18">
                    <span>${item.name} <img class="m-rl-3" src="images/icons/icon-multiply.png" alt="icon"> ${item.quantity}</span>
                    <span>${totalPrice}$</span>
                </div>
            `);
        });

        // Cập nhật tổng cộng
        $('#subtotal').text(`${subtotal}$`);
        $('#total').text(`${subtotal}$`);
    }

    $('#checkout-btn').on('click', function () {
        if (cart.length === 0) {
            alert("Giỏ hàng của bạn trống!");
            return;
        }

        // Hiển thị QR Code thanh toán
        swal({
            title: "Mã QR Thanh Toán",
            text: "Quét mã QR bằng ví Momo để thanh toán.",
            icon: "images/icons/qrcode-momo.jpg",
            button: "Hoàn tất"
        });
    });

    
  
    // Gọi các hàm render khi tải trang
    $(document).ready(function () {
        renderCartHeader();
        renderOrderSummary();
    });

})(jQuery);





