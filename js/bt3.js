document.getElementById('btn3').onclick=function(e){
  e.preventDefault();
  var tongThuThap=Number( document.getElementById('tongTN').value);
  var nguoiPhuThuoc=Number(document.getElementById('nguoiPhuThuoc').value);
  var thuThap=(tongThuThap-4000000)-(nguoiPhuThuoc*1600000);
console.log(tongThue(thuThap));
// console.log(thuThap);

}
function tongThue(thuThap){
  var tongThuThue=0;
  if(thuThap<=60e+6){
    tongThuThue=thuThap*0.05;
}
  else if(thuThap<=120e+6){
    tongThuThue=thuThap*0.1;
  }
  else if(thuThap<=120e+6){
    tongThuThue=thuThap*0.15;
  }
  else if(thuThap<=210e+6){
    tongThuThue=thuThap*0.20;
  }
  else if(thuThap<=384e+6){
    tongThuThue=thuThap*0.25;
  }
  else if(thuThap<=624e+6){
    tongThuThue=thuThap*0.30;
  }
  else{
    tongThuThue=thuThap*0.35;
  }
  return tongThuThue;
}
