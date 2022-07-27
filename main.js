// Bài 1
//Mô hình 3 khối
//Đầu vào:
//- Người dùng nhập tên,tống thu nhập năm và số người phụ thuộc
//Xử lí
function dom(id) {
  return document.getElementById(id).value;
}
function xuLi() {
  let tagTen = dom("ten");
  let tagThuNhap = +dom("thuNhap");
  let tagNguoiPhuThuoc = +dom("nguoiPhuThuoc");
  let thuNhapChiuThue = 0;
  if (tagThuNhap <= 5000000) {
    alert("Số tiền thu nhập không hợp lệ !");
    return;
  }
  thuNhapChiuThue = tagThuNhap - 4000000 - tagNguoiPhuThuoc * 1600000;
  let tagTienThue = tienThue(thuNhapChiuThue, tagThuNhap);
  display(tagTienThue, tagTen);
  // display(tagTienThue, tagTen);
}
function getIncome(number) {
  return number * 1000000;
}
function tienThue(thuNhapChiuThue, tagThuNhap) {
  if (tagThuNhap > getIncome(960)) {
    thuNhapChiuThue *= 35 / 100;
  } else if (tagThuNhap > getIncome(624) && tagThuNhap <= getIncome(960)) {
    thuNhapChiuThue *= 30 / 100;
  } else if (tagThuNhap > getIncome(984) && tagThuNhap <= getIncome(624)) {
    thuNhapChiuThue *= 25 / 100;
  } else if (tagThuNhap > getIncome(210) && tagThuNhap <= getIncome(384)) {
    thuNhapChiuThue *= 20 / 100;
  } else if (tagThuNhap > getIncome(120) && tagThuNhap <= getIncome(210)) {
    thuNhapChiuThue *= 15 / 100;
  } else if (tagThuNhap > getIncome(60) && tagThuNhap <= getIncome(120)) {
    thuNhapChiuThue *= 10 / 100;
  } else {
    thuNhapChiuThue *= 5 / 100;
  }
  return thuNhapChiuThue;
}

function display(tagTienThue, tagTen) {
  let currentFormat = new Intl.NumberFormat("vn-Vn");
  document.getElementById("divResult").style.display = "block";
  document.getElementById("xuatTienThue").innerHTML =
    " Tên : " +
    tagTen +
    "; Tiền thuế thu nhập cá nhân : " +
    currentFormat.format(tagTienThue) +
    " VND";
}
// function display(tagTienThue, tagTen) {
//   let currentFormat = new Intl.NumberFormat("vn-Vn");

//   document.getElementById("footer").innerHTML =
//     " Tên : " +
//     tagTen +
//     "; Tiền thuế thu nhập cá nhân : " +
//     currentFormat.format(tagTienThue) +
//     " VND";
// }

// Đầu ra:
//-Xuất ouput ra Tên và số tiền thuế thu nhập cá nhân

// Bài 2
//Mô hình 3 khối
//Đầu vào:
//-Cho người dùng chọn loại khách hàng, nhập mã khách hàng , số kênh cao cấp và số kết nối (nếu là doanh nghiệp)

//Xử lí:

function dom2(id) {
  return document.getElementById(id).value;
}
function tinhToan() {
  let tagMaKH = +dom2("maKH");
  let tagSoKenh = +dom2("soKenh");
  let tagLoaiKH = dom2("loaiKH");
  let tagSoKetNoiDn = +dom2("soKetNoi");
  if (tagLoaiKH === "chuaChon") {
    alert("Hãy chọn loại khách hàng");
    return;
  }
  let tienCap = tinhTienThue(tagLoaiKH, tagSoKenh, tagSoKetNoiDn);
  hienThi(tagMaKH, tienCap);
}

function tinhTienThue(tagLoaiKH, tagSoKenh, tagSoKetNoiDn) {
  let tienCap = 0;
  switch (tagLoaiKH) {
    case "nhaDan": {
      tienCap = 4.5 + 20.5 + tagSoKenh * 7.5;
      break;
    }
    case "doanhNghiep": {
      if (tagSoKetNoiDn <= 10) {
        tienCap = 15 + 75 + tagSoKenh * 50;
      } else {
        tienCap = 15 + 75 + tagSoKenh * 50 + (tagSoKetNoiDn - 10) * 5;
      }
      break;
    }
  }
  return tienCap;
}
function hienThi(tagMaKH, tienCap) {
  let currentFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  document.getElementById("ketQua1").innerHTML =
    "Mã khách hàng : " +
    tagMaKH +
    " ; Tiền cáp : " +
    currentFormat.format(tienCap);
}

//Function đóng, mở tùy chọn mục "số kết nối" của Doanh nghiệp
document.getElementById("loaiKH").onchange = function () {
  myFunction();
};
function myFunction() {
  var x = document.getElementById("loaiKH").value;
  if (x === "doanhNghiep") {
    document.getElementById("soKetNoi").style.display = "block";
  } else {
    document.getElementById("soKetNoi").style.display = "none";
  }
}

//Đầu ra:
//-Xuất ra output mã khách hàng và số tiền cáp
