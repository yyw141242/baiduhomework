(function($){

    /*$('#div1').velocity({
      width: '300px',
      height: '150px'
    },{
       duration: 1000
    });

    $('#div2').velocity({
      width: '300px',
      height: '150px'
    },{
       duration: 1000,
       delay: 1000
    });

    $('#div3').velocity({
      width: '300px',
      height: '150px'
    },{
       duration: 1000,
       delay: 2000
    });
*/

/*$('#div1').velocity({
      width: '300px',
      height: '150px'
    },{
       duration: 1000,
       complete: function(){
         $('#div2').velocity({
           width: '300px',
           height: '150px'
          },{
            duration: 1000,
            complete: function(){
              $('#div3').velocity({
                width: '300px',
                height: '150px'
              },{
                duration: 1000
              });
            }
          });
       }
    });
*/

var seq = [
  {
    e: $('#div1'),
    p: {width: '300px',height: '150px'},
    o: {duration: 1000}
  },
  {
    e: $('#div2'),
    p: {width: '300px',height: '150px'},
    o: {duration: 1000}
  },
  {
    e: $('#div3'),
    p: {width: '300px',height: '150px'},
    o: {duration: 1000}
  }
];
$.Velocity.RunSequence(seq);
})(jQuery);