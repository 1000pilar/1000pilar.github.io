var judul = 'Mencari Luas Suatu Daerah dengan integral a ke b dengan Persamaan 1/(x+1)';
console.log (judul);

var a = 4;
if(a === -1) {
  console.log("Ketik nilai pembatas integral, a!!!");
}
else {
  console.log("Nilai a yang kamu input: "+ [a]);
}

var b = 9;
if(b === 0) {
  console.log("Ketik nilai pembatas integral, b!!!");
}
else {
  console.log("Nilai b yang kamu input: "+ [b]);
}

var h = 0.125;
if(h === 0) {
  console.log("Ketik nilai lebar segmen, h!!!");
}
else {
  console.log("Lebar Segmen yang kamu input tes: "+ [h]);
}

var r = (b - a)/h;
var f0 = 0;
var f8 = 0;
var Fi = 0;

console.log('Nilai r : '+r)
for (var i=0; i < r+1 ; i++){
var Xr = a + (i * h);
var Fr = 1/(Xr+1);
//   console.log("Nilai Xr : "+Xr);
//   console.log("Nilai Fr : "+Fr);
  if ((i !== 0) && (i !== 8)){
  Fi += Fr;
      }else if (i === 0){
        f0 += Fr;
      }else if (i === 8){
        f8 += Fr;
      }
}
//   console.log("Nilai Fr : "+Fi);
var dX= (h/2)*(f0+(2*Fi)+f8);
console.log("Nilai Luas dari integral "+[a]+" Ke "+[b]+ " dengan persamaan 1/(x+1) adalah "+dX);
console.log("Silahkan Coba Input nilai a, b dan h yang lain!!!")
