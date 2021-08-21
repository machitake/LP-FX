  //スライダー

  $('.slider').slick({
    autoplay:true,
    autoplaySpeed:1300,
    dots:true,
    slidesToShow:4, //表示するスライドの数
    //slidesToScroll:2, //１度にスクロールする数

    responsive:[
      {
          breakpoint: 480,
          settings:{
              slidesToShow:1,
              dots: false,
          }
      },
  ]
});