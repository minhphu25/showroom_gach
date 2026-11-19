/**
 * ==========================================================================
 * GẠCH MEN HƯNG THỊNH - DỮ LIỆU SẢN PHẨM CHUYÊN SÂU
 * File: products-data.js
 * Quản lý toàn bộ thông tin 20 sản phẩm mẫu chuẩn thực tế:
 * { id, name, category, categoryKey, price, unit, image, dimensions, material, origin, isHot, description }
 * ==========================================================================
 */

const PRODUCTS_DATA = [
  // --- NHÓM 1: GẠCH LÁT NỀN BÓNG KIẾNG ---
  {
    id: 1,
    name: "Gạch Lát Nền Vân Đá Marble Calacatta Trắng 80x80",
    category: "Gạch lát nền bóng kiếng",
    categoryKey: "gach-lat-nen",
    price: 380000,
    unit: "đ/m²",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    dimensions: "80x80 cm",
    material: "Porcelain bóng kiếng toàn phần",
    origin: "Việt Nam (Công nghệ Ý)",
    isHot: true,
    description: "Bề mặt sáng bóng gương với đường vân đá Calacatta Ý tự nhiên, xương gạch Porcelain chịu lực cao chống trầy xước hoàn hảo cho phòng khách và đại sảnh biệt thự."
  },
  {
    id: 2,
    name: "Gạch Bóng Kiếng Royal Xám Khói Vân Mây 80x80",
    category: "Gạch lát nền bóng kiếng",
    categoryKey: "gach-lat-nen",
    price: 420000,
    unit: "đ/m²",
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80",
    dimensions: "80x80 cm",
    material: "Granite vi tinh thể",
    origin: "Nhập khẩu Tây Ban Nha",
    isHot: true,
    description: "Tông màu xám khói hiện đại phong cách Bắc Âu, bề mặt tráng men nano chống bám bẩn tuyệt đối, tạo chiều sâu thị giác sang trọng."
  },
  {
    id: 3,
    name: "Gạch Porcelain Nero Marquina Đen Tia Chớp 60x120",
    category: "Gạch lát nền bóng kiếng",
    categoryKey: "gach-lat-nen",
    price: 560000,
    unit: "đ/m²",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    dimensions: "60x120 cm",
    material: "Porcelain siêu cứng",
    origin: "Nhập khẩu Ấn Độ",
    isHot: false,
    description: "Khổ lớn 60x120cm xu hướng mới, nền đen tuyền sang trọng với các đường chỉ trắng xẹt qua như tia chớp, chuyên lát phòng tắm cao cấp và sảnh khách sạn."
  },
  {
    id: 4,
    name: "Gạch Lát Nền Bê Tông Beton Grey Matt 60x60",
    category: "Gạch lát nền bóng kiếng",
    categoryKey: "gach-lat-nen",
    price: 280000,
    unit: "đ/m²",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
    dimensions: "60x60 cm",
    material: "Ceramic men mờ",
    origin: "Việt Nam",
    isHot: false,
    description: "Bề mặt men Matt mịn chống trơn trượt R10, màu xi măng công nghiệp phù hợp với phong cách thiết kế Minimalist hoặc Industrial."
  },
  {
    id: 5,
    name: "Gạch Bóng Kiếng Vân Đá Onyx Vàng Hoàng Gia 80x80",
    category: "Gạch lát nền bóng kiếng",
    categoryKey: "gach-lat-nen",
    price: 450000,
    unit: "đ/m²",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    dimensions: "80x80 cm",
    material: "Porcelain xuyên sáng",
    origin: "Đài Loan",
    isHot: true,
    description: "Vân đá cẩm thạch ngọc Onyx vàng ấm cúng, đem lại phong thủy vượng khí và đẳng cấp hoàng gia cho không gian phòng khách trang trọng."
  },

  // --- NHÓM 2: GẠCH GIẢ GỖ ---
  {
    id: 6,
    name: "Gạch Giả Gỗ Teak Tự Nhiên Chống Xước 15x80",
    category: "Gạch giả gỗ",
    categoryKey: "gach-gia-go",
    price: 260000,
    unit: "đ/m²",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    dimensions: "15x80 cm",
    material: "Xương bán sứ Semi-Porcelain",
    origin: "Việt Nam",
    isHot: true,
    description: "Vân gỗ tự nhiên uốn lượn sắc sảo, chống ẩm mốc cong vênh và mối mọt 100%, lý tưởng thay thế sàn gỗ tự nhiên cho phòng ngủ và ban công."
  },
  {
    id: 7,
    name: "Gạch Thanh Gỗ Sồi Bắc Âu Scandinavia 20x100",
    category: "Gạch giả gỗ",
    categoryKey: "gach-gia-go",
    price: 340000,
    unit: "đ/m²",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    dimensions: "20x100 cm",
    material: "Porcelain men mờ",
    origin: "Malaysia",
    isHot: false,
    description: "Màu gỗ sồi sáng nhẹ nhàng thanh thoát chuẩn Scandinavia, bề mặt sần gân gỗ nhẹ chống trượt khi đi chân trần."
  },
  {
    id: 8,
    name: "Gạch Giả Gỗ Óc Chó Walnut Nâu Trầm 20x120",
    category: "Gạch giả gỗ",
    categoryKey: "gach-gia-go",
    price: 410000,
    unit: "đ/m²",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    dimensions: "20x120 cm",
    material: "Porcelain cao cấp",
    origin: "Ý",
    isHot: true,
    description: "Khổ lớn thanh dài 20x120cm mô phỏng hoàn hảo gỗ Óc Chó cao cấp, sắc thái trầm ấm quyền quý dành cho biệt thự và căn hộ hạng sang."
  },
  {
    id: 9,
    name: "Gạch Giả Gỗ Vintage Xám Tro Chống Trơn 15x90",
    category: "Gạch giả gỗ",
    categoryKey: "gach-gia-go",
    price: 290000,
    unit: "đ/m²",
    image: "https://images.unsplash.com/photo-1540518614846-7ede433c4ef7?auto=format&fit=crop&w=800&q=80",
    dimensions: "15x90 cm",
    material: "Ceramic chịu lực",
    origin: "Việt Nam",
    isHot: false,
    description: "Tông màu xám tro hoài niệm cổ điển, bề mặt nhám sần hạn chế trơn trượt tối đa, phù hợp cho khu vực sân vườn, resort và quán cafe decor."
  },
  {
    id: 10,
    name: "Gạch Gỗ Chevron Xương Cá Nghệ Thuật 20x100",
    category: "Gạch giả gỗ",
    categoryKey: "gach-gia-go",
    price: 480000,
    unit: "đ/m²",
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=800&q=80",
    dimensions: "20x100 cm",
    material: "Porcelain phủ Nano",
    origin: "Tây Ban Nha",
    isHot: true,
    description: "Thiết kế vát cạnh hỗ trợ lát theo mô hình xương cá Herringbone hoặc Chevron sang trọng, tạo điểm nhấn ấn tượng cho không gian sinh hoạt chung."
  },

  // --- NHÓM 3: GẠCH TRANG TRÍ ---
  {
    id: 11,
    name: "Gạch Mosaic Lục Giác Gốm Sứ Men Rạn Ngọc",
    category: "Gạch trang trí",
    categoryKey: "gach-trang-tri",
    price: 620000,
    unit: "đ/m²",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    dimensions: "Vỉ 30x30 cm (Viên 5x5)",
    material: "Gốm nung men rạn thủ công",
    origin: "Làng nghề Bát Tràng",
    isHot: true,
    description: "Họa tiết lục giác men rạn màu ngọc bích cổ phong, từng vỉ mosaic kết lưới chắc chắn chuyên ốp tường bếp, quầy bar và phòng tắm phong cách Indochine."
  },
  {
    id: 12,
    name: "Gạch Bông Cổ Điển Heritage Đen Trắng 20x20",
    category: "Gạch trang trí",
    categoryKey: "gach-trang-tri",
    price: 310000,
    unit: "đ/m²",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80",
    dimensions: "20x20 cm",
    material: "Xi măng ép thủy lực",
    origin: "Việt Nam",
    isHot: false,
    description: "Họa tiết hoa văn đối xứng đen trắng thanh lịch, lưu giữ hồn xưa nét nay, độ bền màu vĩnh cửu theo năm tháng sử dụng."
  },
  {
    id: 13,
    name: "Gạch Thẻ Subway Trắng Bóng Vát Cạnh 7.5x15",
    category: "Gạch trang trí",
    categoryKey: "gach-trang-tri",
    price: 230000,
    unit: "đ/m²",
    image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80",
    dimensions: "7.5x15 cm",
    material: "Ceramic men bóng",
    origin: "Việt Nam",
    isHot: false,
    description: "Dòng gạch thẻ kinh điển phong cách ga tàu điện ngầm New York, vát cạnh 3D tinh xảo, bắt sáng rực rỡ cho mảng tường bếp và vách tắm."
  },
  {
    id: 14,
    name: "Gạch Mosaic Thủy Tinh Ánh Kim Hồ Bơi Cao Cấp",
    category: "Gạch trang trí",
    categoryKey: "gach-trang-tri",
    price: 550000,
    unit: "đ/m²",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
    dimensions: "Vỉ 30x30 cm",
    material: "Thủy tinh pha lê cường lực",
    origin: "Thái Lan",
    isHot: true,
    description: "Thủy tinh ánh kim lấp lánh phản chiếu ánh nắng và làn nước trong xanh, chịu được hóa chất xử lý hồ bơi và thời tiết khắc nghiệt."
  },
  {
    id: 15,
    name: "Gạch Ốp Tường 3D Gợn Sóng Wave White 30x60",
    category: "Gạch trang trí",
    categoryKey: "gach-trang-tri",
    price: 275000,
    unit: "đ/m²",
    image: "https://images.unsplash.com/photo-160058515526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
    dimensions: "30x60 cm",
    material: "Ceramic men mờ dập nổi",
    origin: "Việt Nam",
    isHot: false,
    description: "Bề mặt điêu khắc vân sóng nhấp nhô nhẹ nhàng, đem đến cảm giác mềm mại thư thái như resort spa 5 sao ngay tại nhà bạn."
  },

  // --- NHÓM 4: THIẾT BỊ VỆ SINH ---
  {
    id: 16,
    name: "Bồn Cầu Thông Minh Cảm Ứng Tự Động HT-Smart 01",
    category: "Thiết bị vệ sinh",
    categoryKey: "thiet-bi-ve-sinh",
    price: 7800000,
    unit: "đ/bộ",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    dimensions: "680x400x520 mm",
    material: "Sứ nung 1280°C + Nắp đóng êm UF",
    origin: "Công nghệ Nhật Bản",
    isHot: true,
    description: "Tự động mở nắp khi đến gần, sưởi ấm bệ ngồi, vòi rửa đa chế độ kháng khuẩn, sấy khô khí ấm và xả xoáy siphon êm ái tiết kiệm nước."
  },
  {
    id: 17,
    name: "Bộ Sen Cây Tắm Đứng Phím Đàn Hiển Thị Nhiệt Độ HT-8809",
    category: "Thiết bị vệ sinh",
    categoryKey: "thiet-bi-ve-sinh",
    price: 3250000,
    unit: "đ/bộ",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80",
    dimensions: "Cột tăng giảm 80-120 cm",
    material: "Đồng thau mạ Crom xám Gunmetal",
    origin: "Hàn Quốc",
    isHot: true,
    description: "Thiết kế 4 phím đàn độc lập, màn hình LED phát điện thủy lực hiển thị nhiệt độ nước chính xác, bát sen mưa silicon chống cặn bẩn."
  },
  {
    id: 18,
    name: "Chậu Lavabo Đặt Bàn Đá Nhân Tạo Trắng Mịn HT-L60",
    category: "Thiết bị vệ sinh",
    categoryKey: "thiet-bi-ve-sinh",
    price: 1450000,
    unit: "đ/bộ",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
    dimensions: "600x400x140 mm",
    material: "Đá Solid Surface liền khối",
    origin: "Việt Nam",
    isHot: false,
    description: "Thiết kế góc bo mềm mại tinh tế, bề mặt men Nano chống ố vàng và kháng khuẩn, lỗ xả tràn an toàn chống tràn nước ra sàn."
  },
  {
    id: 19,
    name: "Bồn Cầu Liền Khối Men Nano Kháng Khuẩn HT-Plus 88",
    category: "Thiết bị vệ sinh",
    categoryKey: "thiet-bi-ve-sinh",
    price: 2850000,
    unit: "đ/bộ",
    image: "https://images.unsplash.com/photo-1564540574859-0dfb63985953?auto=format&fit=crop&w=800&q=80",
    dimensions: "720x390x650 mm",
    material: "Sứ phủ men Nano tuyết",
    origin: "Chính hãng Hưng Thịnh",
    isHot: true,
    description: "Đúc liền khối không kẽ hở dễ dàng vệ sinh chùi rửa, hệ thống xả kép 3L/6L tiết kiệm nước, bảo hành men sứ 10 năm chính hãng."
  },
  {
    id: 20,
    name: "Vòi Lavabo Nóng Lạnh Mạ Titan Xám Khói HT-V12",
    category: "Thiết bị vệ sinh",
    categoryKey: "thiet-bi-ve-sinh",
    price: 890000,
    unit: "đ/bộ",
    image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80",
    dimensions: "Cao 20 cm",
    material: "Đồng mạ điện phân PVD",
    origin: "Đức",
    isHot: false,
    description: "Lõi van gốm Ceramic chống rò rỉ hơn 500.000 lần đóng mở, đầu vòi tạo bọt Neoperl Thụy Sĩ chống bắn tóe và êm dịu cho làn da."
  }
];
