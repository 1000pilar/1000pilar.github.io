// event pada saat link diklik
$('.page-scroll').on('click', function(){


	
//Ambil isi href

var tujuan = $(this).attr('href');


//tangkap elemen yang bersangkutan
var elemenTujuan = $(tujuan);



//pindahkan scroll
$('html body').animate({

scrollTop: elemenTujuan.offset().top - 50

}, 1250, 'easeInOutExpo');

//e.preventDefault();


});

