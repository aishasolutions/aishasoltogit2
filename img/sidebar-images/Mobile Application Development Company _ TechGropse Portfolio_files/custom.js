// for animation 


$(document).ready(function(){
     $(".hometopslider .carousel") .carousel({
         interval : 2000,
     });
});



$(document).ready(function(){

  $('.pp-quote').click(function(){

    $('.pp-quote').removeClass("active");

    $(this).addClass("active");

});

});



$(document).ready(function(){

    

       // hide-top



        $('.li-quote-1').click(function(e){ 

            e.stopPropagation();

            $(".show").addClass('hide-top');

            $(".hide-top").removeClass('show');

            $('.quote-text-1').addClass('show');

            $('.quote-text-1').removeClass('hide-bottom');             

        });



        $('.li-quote-2').click(function(e){ 

            e.stopPropagation();

            $(".show").addClass('hide-top');

            $(".hide-top").removeClass('show');

            $('.quote-text-2').addClass('show');             

            $('.quote-text-2').removeClass('hide-bottom');

        });



        $('.li-quote-3').click(function(e){ 

            e.stopPropagation();

            $(".show").addClass('hide-top');

            $(".hide-top").removeClass('show');         

            $('.quote-text-3').addClass('show');             

            $('.quote-text-3').removeClass('hide-bottom');

        });

        $('.li-quote-4').click(function(e){ 

            e.stopPropagation();

            $(".show").addClass('hide-top');

            $(".hide-top").removeClass('show');      

            $('.quote-text-4').addClass('show');             

            $('.quote-text-4').removeClass('hide-bottom');

        });

        $('.li-quote-5').click(function(e){ 

            e.stopPropagation();

            $(".show").addClass('hide-top');

            $(".hide-top").removeClass('show');      

            $('.quote-text-5').addClass('show');             

            $('.quote-text-5').removeClass('hide-bottom');

        });

        $('.li-quote-6').click(function(e){ 

            e.stopPropagation();

            $(".show").addClass('hide-top');

            $(".hide-top").removeClass('show');      

            $('.quote-text-6').addClass('show');             

            $('.quote-text-6').removeClass('hide-bottom');

        });

        $('.li-quote-7').click(function(e){ 

            e.stopPropagation();

            $(".show").addClass('hide-top');

            $(".hide-top").removeClass('show');      

            $('.quote-text-7').addClass('show');             

            $('.quote-text-7').removeClass('hide-bottom');

        });

        $('.li-quote-8').click(function(e){ 

            e.stopPropagation();

            $(".show").addClass('hide-top');

            $(".hide-top").removeClass('show');      

            $('.quote-text-8').addClass('show');             

            $('.quote-text-8').removeClass('hide-bottom');

        });

           

    

});





$(document).ready(function(){

    

       // hide-top



        $('.li-quote-1').click(function(e){ 

            e.stopPropagation();

            $(".look").addClass('hide-dp-top');

            $(".hide-dp-top").removeClass('look');

            $('.dp-name-1').addClass('look');

            $('.dp-name-1').removeClass('hide-dp-bottom');             

        });



        $('.li-quote-2').click(function(e){ 

            e.stopPropagation();

            $(".look").addClass('hide-dp-top');

            $(".hide-dp-top").removeClass('look');

            $('.dp-name-2').addClass('look');

            $('.dp-name-2').removeClass('hide-dp-bottom');             

        });



        $('.li-quote-3').click(function(e){ 

            e.stopPropagation();

            $(".look").addClass('hide-dp-top');

            $(".hide-dp-top").removeClass('look');

            $('.dp-name-3').addClass('look');

            $('.dp-name-3').removeClass('hide-dp-bottom');             

        });

		$('.li-quote-4').click(function(e){ 

            e.stopPropagation();

            $(".look").addClass('hide-dp-top');

            $(".hide-dp-top").removeClass('look');

            $('.dp-name-4').addClass('look');

            $('.dp-name-4').removeClass('hide-dp-bottom');             

        });

		

        $('.li-quote-5').click(function(e){ 

            e.stopPropagation();

            $(".look").addClass('hide-dp-top');

            $(".hide-dp-top").removeClass('look');

            $('.dp-name-5').addClass('look');

            $('.dp-name-5').removeClass('hide-dp-bottom');             

        });

		

        $('.li-quote-6').click(function(e){ 

            e.stopPropagation();

            $(".look").addClass('hide-dp-top');

            $(".hide-dp-top").removeClass('look');

            $('.dp-name-6').addClass('look');

            $('.dp-name-6').removeClass('hide-dp-bottom');             

        });

        $('.li-quote-7').click(function(e){ 

            e.stopPropagation();

            $(".look").addClass('hide-dp-top');

            $(".hide-dp-top").removeClass('look');

            $('.dp-name-7').addClass('look');

            $('.dp-name-7').removeClass('hide-dp-bottom');             

        });

        $('.li-quote-8').click(function(e){ 

            e.stopPropagation();

            $(".look").addClass('hide-dp-top');

            $(".hide-dp-top").removeClass('look');

            $('.dp-name-8').addClass('look');

            $('.dp-name-8').removeClass('hide-dp-bottom');             

        });

           

    

});



/*---------------------

 TOP Menu Stick Start

--------------------- */

var windows = $(window);

var sticky = $('#sticker');



windows.on('scroll', function() {

    var scroll = windows.scrollTop();

    if (scroll < 50) {

        sticky.removeClass('stick');

    }else{

        sticky.addClass('stick');

    }

});


/*---------------------



 TOP Menu Stick End

------------------------------ */



/*---------------------

 Item Slider Start

--------------------- */



$(document).ready(function() {

        $('.carousel-correspondence .item').each(function() {

            var itemToClone = $(this);



            for (var i = 1; i < 3; i++) {

                itemToClone = itemToClone.next();

                if (!itemToClone.length) {

                    itemToClone = $(this).siblings(':first');

                }

                itemToClone.children(':first-child').clone()

                    .addClass("cloneditem-" + (i))

                    .appendTo($(this));

            }

        });

    });

/*---------------------

 Item Slider End

--------------------- */



        /*mk accordion js starts from here*/





        $(function(){

          $(".mkaccorrdiontrigger").click(function(){

            $(".mkaccordionitem").removeClass("active");

            $(this).parent(".mkaccordionitem").addClass("active");

          });

        })



      const elmnt = document.querySelectorAll('.mkaccordionitem');

        const numberOfelmnt = document.querySelectorAll('.mkaccordionitem').length;

        const activeClass = 'active';



        const repeat = (numberOfIterations, timeBetweenItereation, stuffToRepeat) => {

          let iterationCounter = 0;

          const repeater = () => {

            setTimeout( () => {

               stuffToRepeat(elmnt[iterationCounter], activeClass);

               iterationCounter++;

               if (numberOfIterations === iterationCounter) {

                  iterationCounter = 0;

               };

               if (iterationCounter >= numberOfIterations) {

                  return;

               };

               repeater(); 

            }, 5000 * timeBetweenItereation);

          };

          repeater();

        };



        const addClassToElmnt = (elmnt, className) => {

          let elmntWithClassToRemove = document.getElementsByClassName(className);



          $(".mkaccordionitem").removeClass(className);



          elmnt.classList.add(className);

        };



        repeat(numberOfelmnt, .6, addClassToElmnt);

 

    /*mk accordion js endsss from here*/





    

        /*Page Loader js start here*/



    window.addEventListener( 'load', function () {

        var shwload = document.getElementById( "page_loader" );

        shwload.style.display = "none";

    } )



        /*Page Loader js End here*/












/*Header Submenu JS Start here*/





      function showUlData(obj){

        $("#firstChildLi").addClass('open');

      }

      function hideUlData(obj){

        console.log("success");

         $("#firstChildLi").removeClass('open');

      }







/*Header Submenu JS End here*/


      $('.carousel.vertical').on('slid.bs.carousel', function(e) {
        $('.thumbimg').removeClass('activeImg');
         $('.thumbimg').each(function() {
          let attrVal = $(this).attr('data-id')
          if(attrVal === e.relatedTarget.id)
            $(this).addClass('activeImg');
         });
      });




    // meetup carousel
            window.carousel = {
                $countries: document.getElementById('countries'),
                totalWidth: 0,
                rightMargin: 0,
                speed: 50,
                init: function () {
                    this.originalLength = this.$countries.children.length;

                    for (var i = 0; i < this.originalLength; i++) {
                        this.totalWidth +=
                                this.$countries.children[i].offsetWidth + this.rightMargin;
                        this.$countries.appendChild(this.$countries.children[i].cloneNode(true));
                    }
                    this.originalWidth = this.totalWidth;

                    this.$countries.addEventListener('mouseover', this.pause.bind(this))
                    this.$countries.addEventListener('mouseleave', this.resume.bind(this))

                    this.scroll();
                },
                pause: function () {
                    TweenLite.to(this.scrollRef, 1, {timeScale: 0.2});
                },
                resume: function () {
                    TweenLite.to(this.scrollRef, 1, {timeScale: 1});
                },
                scroll: function () {
                    this.scrollRef = TweenLite.to(this.$countries, this.speed, {
                        x: this.originalWidth * -1,
                        ease: Linear.easeNone,
                        force3D: true,
                        onCompleteScope: this,
                        onComplete: function () {
                            // jump back to starting position and restart the scroll in 1 frame
                            TweenLite.to(this.$countries, 0, {
                                x: 0,
                                lazy: true,
                                onCompleteScope: this,
                                onComplete: function () {
                                    this.scroll();
                                }
                            })
                        }
                    })
                },
            }

            carousel.init();


/*Auto Active Tab Start*/
$(function(){
    $('a[title]').tooltip();
    
    // Tab Pane continue moving
    var tabCarousel = setInterval(function() {
        var tabs = $('.tabcontrol .nav-tabs > li'),
            active = tabs.filter('.active'),
            next = active.next('li'),
            toClick = next.length ? next.find('a') : tabs.eq(0).find('a');

        toClick.trigger('click');
    }, 3000);
});
/*Auto Active Tab End*/