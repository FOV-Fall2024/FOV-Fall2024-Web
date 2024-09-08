import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold">Liên Hệ</h3>
          <p className="text-lg">[Địa Chỉ]</p>
          <p className="text-lg">Điện thoại: [Số Điện Thoại]</p>
          <p className="text-lg">Email: [Địa Chỉ Email]</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold">Giờ Hoạt Động</h3>
          <p className="text-lg">Thứ Hai - Thứ Sáu: 11h - 21h</p>
          <p className="text-lg">Thứ Bảy - Chủ Nhật: 10h - 22h</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Tìm Chúng Tôi</h3>
          {/* Thay thế bằng mã nhúng bản đồ thực tế */}
          <div className="bg-gray-700 h-32 w-full md:w-64"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
