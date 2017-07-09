(function($){

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

  $('#div4').on('mouseover',function(){
    $(this).velocity("callout.bounce")
  });
  $('#div5').on('mouseover',function(){
    $(this).velocity("transition.flipYOut")
  });
  $.Velocity.RegisterEffect("callout.pulse", {
      defaultDuration: 300,
      calls: [
          [ { scaleX: 2 }, 0.50 ],
          [ { scaleX: 1 }, 0.50 ],
          [ { scaleX: 2 }, 0.50 ]
      ]
  });
  $('#div6').on('mouseover',function(){
    $(this).velocity("callout.pulse")
  });
  $('#div7').on('mouseover',function(){
    $(this).velocity({
      backgroundColor: "#0f0",
      backgroundColorAlpha: 0.5
    })
  });

  $('#div8').on('mouseover',function(){
    $(this).velocity({
      translateX: "200px"
    })
    $(this).velocity("reverse",{ duration: 1000 })
  });

  $('#div9').on('mouseover',function(){
    $(this).velocity({
      translateX: "1000px",
      rotateZ: "45deg"
      
    }),
    setTimeout(() => {
                    $(this).velocity("finish")
                }, 500)
  }); 

  $('#div10').on('mouseover',function(){
    $(this).velocity({
      translateX: "200px",
      translateY: "-200px",
      rotateZ: "45deg"
    })
  }); 

})(jQuery);