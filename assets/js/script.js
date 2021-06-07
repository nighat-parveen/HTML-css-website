

$(document).ready(function (){
    // $('h1').click(function (){
    //     $(this).css('color','#fff000');
    // })
    // var waypoint = new Waypoint({
    //     element: document.getElementById('px-offset-waypoint'),
    //     handler: function(direction) {
    //       notify('I am 20px from the top of the window')
    //     },
    //     offset: 20 
    //   })
      
    $('.js--section-feature').waypoint(function(direction){
        if(direction == 'down'){
            $('nav').addClass('sticky')
        }else{
            $('nav').removeClass('sticky')
        }
       
    },{
        offset: '50px'
    }) ;

});