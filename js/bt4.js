document.getElementById('btn4').onclick=function(e){
  e.preventDefault();
  var soKenhCaoCap=Number(document.getElementById('kenhCaoCap').value);
  var khachHang=String(document.getElementById('khachang').value);
  if(khachHang=='doanhnghiep'){
    var kenhKetNoi=Number(document.getElementById('kenhKetNoi').value);

  }

  console.log(loaiKhachHang(khachHang,soKenhCaoCap,kenhKetNoi));
}
function themDN(){
  var khachang=String(document.getElementById('khachang').value);
  var input=` <label for="exampleInputPassword1" class="form-label">Số kênh ket noi:</label>
  <input type="number" class="form-control" id="kenhKetNoi">`;
  if(khachang=='doanhnghiep'){
  document.getElementById('themDH').innerHTML=input;

  }else{
    document.getElementById('themDH').innerHTML='';
  }

}
function loaiKhachHang(khachHang,kenhcaocap,kenhKetNoi){
  var phiXuLi_ND=4.5;
  var phiDichVu_ND=20.5;
  var kenhCaoCap_ND=7.5;
  var phiXuLi_DN=15;
  var phiDichVu_DN=75;
  var kenhCaoCap_DN=50;
  var phiKetNoi_DN=0;
  
  if(kenhKetNoi<10){
    phiKetNoi_DN=0
  }else{
      
    phiKetNoi_DN= (kenhKetNoi-10)*5;
   
    }
    
  
  var tongPhi=0;
  switch(khachHang){
    case 'nhadan':
    tongPhi=phiXuLi_ND+phiDichVu_ND+(kenhcaocap*kenhCaoCap_ND);
      break;
    case 'doanhnghiep':
    tongPhi=phiXuLi_DN
    +phiDichVu_DN+phiKetNoi_DN+(kenhcaocap*kenhCaoCap_DN);
    break;
  }
  return tongPhi;

}