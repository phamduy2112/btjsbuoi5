
document.getElementById('btn2').onclick=function(e){
  e.preventDefault();
  var name=document.querySelector('#input-text').value;
var tienDien=Number(document.querySelector('#tien_Dien').value);
var tong=Number(tinhTienDien(tienDien))

document.getElementById('kq2').innerHTML=tong;
}
function tinhTienDien(tienDien){
var tongTien=0;
if(tienDien<=50){
  tongTien=tienDien*500;
}
else if (tienDien<=100){
  tongTien=50*500 +((tienDien-50)*650);

}else if(tienDien<=200){
  tongTien=50*500+50*650+((tienDien-100)*850);
}else if(tienDien<=350){
  tongTien=50*500+50*650+100*850+((tienDien-150)*1100);
}else{
  tongTien=50*500+50*650+100*850+150*1100+((tienDien-350)*1300);

}

return tongTien;
}