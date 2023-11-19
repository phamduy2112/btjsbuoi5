
// input:khi người dùng nhập vào thì lấy value của người dùng và lưu trữ
// xử lí: tạo 2 function tinhdoituong ,tinhKhuVuc và dùng swith case để chọn từng loại option value và function: tính tổng
//output: xuất cho người dùng biết
document.getElementById('btn1').onclick=function(e){
e.preventDefault();
var khuvuc=String(document.getElementById('khuvuc').value);
var doituong=String(document.getElementById('doituong').value);
var diem1=Number(document.getElementById('diem1').value);
var diem2=Number(document.getElementById('diem2').value);
var diem3=Number(document.getElementById('diem3').value);
var diemKhuVuc=tinhKhuVuc(khuvuc);
var diemDoiTuong=tinhdoituong(doituong);
var diemTongKet=diemTong(diem1,diem2,diem3,diemKhuVuc,diemDoiTuong);
var ketqua=rotDau(diem1,diem2,diem3,diemTongKet);
document.getElementById('kq1').innerHTML=ketqua;


}
function rotDau(diem1,diem2,diem3,diemTongKet){
  var text='';
  if(diem1<=0 || diem2<=0 ||diem3<=0){
    text='👉Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0';
  }else{
    text=`👉Bạn đã đậu. Tổng điểm:${diemTongKet}`
  }
  return text;
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