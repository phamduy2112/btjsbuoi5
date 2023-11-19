document.getElementById('btn1').onclick=function(e){
e.preventDefault();
var khuvuc=String(document.getElementById('khuvuc').value);
var doituong=String(document.getElementById('doituong').value);
var diem1=Number(document.getElementById('diem1').value);
var diem2=Number(document.getElementById('diem2').value);
var diem3=Number(document.getElementById('diem3').value);
var diemKhuVuc=tinhKhuVuc(khuvuc);
var diemDoiTuong=tinhdoituong(doituong);

console.log(diemTong(diem1,diem2,diem3,diemKhuVuc,diemDoiTuong));
}
function diemTong(diem1,diem2,diem3,khuvuc,doituong){
var tongDiem=0;
tongDiem=diem1+diem2+diem3+khuvuc+doituong;
return tongDiem;
}
function tinhdoituong(doituong){

var diemDoiTuong=0;
switch(doituong){
case '1':
  diemDoiTuong=2.5;
  break;
   case '2':
    diemDoiTuong=1;
    break;
  case '3':
    diemDoiTuong=0.5;
    break;
    default:
      diemDoiTuong=0;
      break; 

}
return diemDoiTuong; 
}
function tinhKhuVuc(khuvuc){

var diemKhuVuc=0;
switch(khuvuc){
case 'A':
 diemKhuVuc=2;
  break;
   case 'B':
    diemKhuVuc=1;
    break;
  case 'C':
    diemKhuVuc=0.5;
    break;
    default:
      diemKhuVuc=0;
      break; 

}
return diemKhuVuc; 
}