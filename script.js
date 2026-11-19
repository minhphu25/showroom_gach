/**
 * ==========================================================================
 * GẠCH MEN HƯNG THỊNH - CORE JAVASCRIPT SYSTEM (VANILLA JS ES6+)
 * File: script.js
 * Quản lý toàn bộ tính năng: Render Shared Layout (Header & Footer dùng chung),
 * Dynamic SEO, Render Sản Phẩm, Live Search, Bộ lọc kép, Phân trang 8 items,
 * Modal Quick View, Mobile Drawer & Form tương tác.
 * Tuyệt đối không phụ thuộc jQuery hay bất kỳ thư viện ngoài nào.
 * ==========================================================================
 */

/* ==========================================================================
   1. NẠP DỮ LIỆU SẢN PHẨM (TÁCH BIỆT TỪ FILE products-data.js)
   ========================================================================== */
// Tham chiếu mảng dữ liệu 20 sản phẩm từ file products-data.js
const RAW_PRODUCTS = typeof PRODUCTS_DATA !== "undefined" ? PRODUCTS_DATA : [];

/* ==========================================================================
   2. HỆ THỐNG GIAO DIỆN DÙNG CHUNG (SHARED HEADER & FOOTER COMPONENT)
   Tự động nạp duy nhất 1 Header và 1 Footer dùng chung cho cả 3 trang.
   Ưu tiên đọc từ header.html / footer.html; Tự động fallback template nếu mở file://
   ========================================================================== */
async function renderSharedLayout() {
  const headerContainer = document.getElementById("site-header");
  const footerContainer = document.getElementById("site-footer");

  const currentPath = window.location.pathname.toLowerCase();
  const isProductsPage = currentPath.includes("products");
  const isContactPage = currentPath.includes("contact");
  const isHomePage = !isProductsPage && !isContactPage;

  // Đường dẫn link điều hướng theo ngữ cảnh trang hiện tại
  const homeAboutHref = isHomePage
    ? "#about-section"
    : "index.html#about-section";
  const homeWhyHref = isHomePage
    ? "#why-choose-us"
    : "index.html#why-choose-us";

  // 1. NẠP VÀ RENDER HEADER DÙNG CHUNG
  if (headerContainer && headerContainer.children.length === 0) {
    let headerHtml = "";
    try {
      const response = await fetch("header.html");
      if (response.ok) {
        headerHtml = await response.text();
      }
    } catch (e) {
      // Fallback nếu trình duyệt chặn fetch cục bộ qua file://
    }

    if (!headerHtml) {
      headerHtml = `
        <div class="top-bar">
          <div class="container">
            <div class="top-bar-left">
              <div class="top-bar-item">
                <i class="fa-solid fa-location-dot"></i>
                <span>188 Đường 3/2, P.12, Q.10, TP. Hồ Chí Minh</span>
              </div>
              <div class="top-bar-item">
                <i class="fa-solid fa-clock"></i>
                <span>Mở cửa: 08:00 - 20:30 (Thứ 2 - Chủ Nhật)</span>
              </div>
            </div>
            <div class="top-bar-right">
              <div class="top-bar-item">
                <i class="fa-solid fa-envelope"></i>
                <a href="mailto:lienhe@gachmenhungthinh.vn">lienhe@gachmenhungthinh.vn</a>
              </div>
              <div class="top-bar-item">
                <i class="fa-solid fa-headset"></i>
                <a href="tel:0912345678">Hotline 24/7: <strong>0912.345.678</strong></a>
              </div>
            </div>
          </div>
        </div>

        <header class="main-header">
          <div class="container header-container">
            <a href="index.html" class="brand-logo">
              <div class="brand-logo-img">
                <img src="manhhuyen.svg" alt="Hưng Thịnh Logo" />
              </div>
              <div class="brand-text">
                <span class="brand-title">HƯNG THỊNH</span>
                <span class="brand-subtitle">GẠCH MEN & THIẾT BỊ VỆ SINH</span>
              </div>
            </a>

            <nav class="nav-menu">
              <a href="index.html" class="nav-link ${isHomePage ? "active" : ""}">Trang Chủ</a>
              <a href="products.html" class="nav-link ${isProductsPage ? "active" : ""}">Sản Phẩm</a>
              <a href="${homeAboutHref}" class="nav-link">Về Chúng Tôi</a>
              <a href="${homeWhyHref}" class="nav-link">Ưu Điểm</a>
              <a href="contact.html" class="nav-link ${isContactPage ? "active" : ""}">Liên Hệ</a>
            </nav>

            <div class="header-actions">
              <div class="header-hotline">
                <div class="hotline-icon">
                  <i class="fa-solid fa-phone"></i>
                </div>
                <div class="hotline-text">
                  <small>Tư vấn công trình</small>
                  <a href="tel:0912345678"><strong>0912.345.678</strong></a>
                </div>
              </div>
              <a href="contact.html" class="btn btn-primary btn-sm">
                <i class="fa-solid fa-file-invoice"></i> Nhận Báo Giá
              </a>
              <button class="mobile-toggle" id="mobile-menu-toggle" aria-label="Mở Menu">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </header>

        <div class="mobile-drawer-overlay" id="mobile-drawer-overlay"></div>
        <aside class="mobile-drawer" id="mobile-drawer">
          <div class="flex items-center justify-between" style="padding-bottom: 1rem; border-bottom: 1px solid var(--border-color);">
            <div class="flex items-center gap-2">
              <div class="brand-logo-img" style="width: 36px; height: 36px;">
                <img src="manhhuyen.svg" alt="Hưng Thịnh Logo" />
              </div>
              <strong style="color: var(--primary); font-size: 1.1rem;">HƯNG THỊNH</strong>
            </div>
            <button id="mobile-drawer-close" style="font-size: 1.5rem; color: var(--text-muted);">&times;</button>
          </div>
          <div class="mobile-nav-list">
            <a href="index.html" class="mobile-nav-link ${isHomePage ? "active" : ""}">Trang Chủ <i class="fa-solid fa-chevron-right text-xs"></i></a>
            <a href="products.html" class="mobile-nav-link ${isProductsPage ? "active" : ""}">Sản Phẩm <i class="fa-solid fa-chevron-right text-xs"></i></a>
            <a href="products.html?cat=gach-lat-nen" class="mobile-nav-link" style="padding-left: 1rem; font-size: 0.95rem; color: var(--text-muted);">— Gạch Lát Nền Bóng Kiếng</a>
            <a href="products.html?cat=gach-gia-go" class="mobile-nav-link" style="padding-left: 1rem; font-size: 0.95rem; color: var(--text-muted);">— Gạch Giả Gỗ</a>
            <a href="products.html?cat=gach-trang-tri" class="mobile-nav-link" style="padding-left: 1rem; font-size: 0.95rem; color: var(--text-muted);">— Gạch Trang Trí</a>
            <a href="products.html?cat=thiet-bi-ve-sinh" class="mobile-nav-link" style="padding-left: 1rem; font-size: 0.95rem; color: var(--text-muted);">— Thiết Bị Vệ Sinh</a>
            <a href="contact.html" class="mobile-nav-link ${isContactPage ? "active" : ""}">Liên Hệ & Showroom <i class="fa-solid fa-chevron-right text-xs"></i></a>
          </div>
          <div style="margin-top: auto; padding-top: 1.5rem; border-top: 1px solid var(--border-color);">
            <p class="text-xs text-muted" style="margin-bottom: 0.5rem;"><i class="fa-solid fa-phone text-primary"></i> Hotline: 0912.345.678</p>
            <p class="text-xs text-muted" style="margin-bottom: 1rem;"><i class="fa-solid fa-location-dot text-primary"></i> 188 Đường 3/2, Quận 10, TP.HCM</p>
            <a href="contact.html" class="btn btn-primary btn-block btn-sm">Báo Giá Công Trình</a>
          </div>
        </aside>
      `;
    }

    headerContainer.innerHTML = headerHtml;

    // Kích hoạt class active cho nav link đúng trang
    const navLinks = headerContainer.querySelectorAll(
      ".nav-link, .mobile-nav-link",
    );
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (!href) return;
      if (
        (isProductsPage && href.includes("products")) ||
        (isContactPage && href.includes("contact")) ||
        (isHomePage && (href === "index.html" || href === "/"))
      ) {
        link.classList.add("active");
      }
    });
  }

  // 2. NẠP VÀ RENDER FOOTER DÙNG CHUNG
  if (footerContainer && footerContainer.children.length === 0) {
    let footerHtml = "";
    try {
      const response = await fetch("footer.html");
      if (response.ok) {
        footerHtml = await response.text();
      }
    } catch (e) {
      // Fallback nếu trình duyệt chặn fetch cục bộ qua file://
    }

    if (!footerHtml) {
      footerHtml = `
        <footer class="main-footer">
          <div class="container">
            <div class="footer-grid">
              <div class="footer-col">
                <div class="flex items-center gap-2" style="margin-bottom: 1.25rem;">
                  <div class="brand-logo-img">
                    <img src="manhhuyen.svg" alt="Hưng Thịnh Logo" />
                  </div>
                  <div>
                    <strong style="color: #ffffff; font-size: 1.2rem; display: block; line-height: 1.1;">HƯNG THỊNH</strong>
                    <small style="color: #94a3b8; font-size: 0.75rem;">CERAMICS & SANITARY WARE</small>
                  </div>
                </div>
                <p class="footer-about-text">
                  Công ty TNHH Gạch Men & Vật Liệu Xây Dựng Hưng Thịnh. Tổng kho gạch ốp lát và thiết bị phòng tắm chuẩn mực Châu Âu, đối tác tin cậy của hàng nghìn nhà thầu trên toàn quốc.
                </p>
                <div class="footer-contact-item">
                  <i class="fa-solid fa-location-dot"></i>
                  <span>Showroom: 188 Đường 3/2, Phường 12, Quận 10, TP.HCM</span>
                </div>
                <div class="footer-contact-item">
                  <i class="fa-solid fa-warehouse"></i>
                  <span>Tổng kho: Cụm Công Nghiệp Bình Chuẩn, TP. Thuận An, Bình Dương</span>
                </div>
                <div class="footer-contact-item">
                  <i class="fa-solid fa-phone"></i>
                  <span>Hotline: 0912.345.678 - 0988.888.999</span>
                </div>
              </div>

              <div class="footer-col">
                <h4>Danh Mục Sản Phẩm</h4>
                <div class="footer-links">
                  <a href="products.html?cat=gach-lat-nen"><i class="fa-solid fa-angle-right"></i> Gạch Lát Nền Bóng Kiếng</a>
                  <a href="products.html?cat=gach-gia-go"><i class="fa-solid fa-angle-right"></i> Gạch Giả Gỗ Chống Trơn</a>
                  <a href="products.html?cat=gach-trang-tri"><i class="fa-solid fa-angle-right"></i> Gạch Thẻ Ốp Tường Bếp</a>
                  <a href="products.html?cat=gach-trang-tri"><i class="fa-solid fa-angle-right"></i> Gạch Mosaic Hồ Bơi & Quầy Bar</a>
                  <a href="products.html?cat=thiet-bi-ve-sinh"><i class="fa-solid fa-angle-right"></i> Bồn Cầu Thông Minh Điện Tử</a>
                  <a href="products.html?cat=thiet-bi-ve-sinh"><i class="fa-solid fa-angle-right"></i> Sen Cây Tắm Nhiệt Độ PVD</a>
                </div>
              </div>

              <div class="footer-col">
                <h4>Chính Sách & Hỗ Trợ</h4>
                <div class="footer-links">
                  <a href="contact.html"><i class="fa-solid fa-angle-right"></i> Chính sách bảo hành 10 năm</a>
                  <a href="contact.html"><i class="fa-solid fa-angle-right"></i> Quy trình giao nhận & kiểm hàng</a>
                  <a href="contact.html"><i class="fa-solid fa-angle-right"></i> Chính sách đổi trả nguyên hộp</a>
                  <a href="contact.html"><i class="fa-solid fa-angle-right"></i> Chiết khấu dự án & thầu thợ</a>
                  <a href="contact.html"><i class="fa-solid fa-angle-right"></i> Hướng dẫn thi công & dán gạch</a>
                  <a href="contact.html"><i class="fa-solid fa-angle-right"></i> Bảo mật thông tin khách hàng</a>
                </div>
              </div>

              <div class="footer-col">
                <h4>Đăng Ký Nhận Khuyến Mãi</h4>
                <p class="footer-newsletter-text">Đăng ký để nhận catalogue bộ sưu tập gạch 2026 và bảng báo giá chiết khấu mới nhất.</p>
                <form class="newsletter-form" id="newsletter-form">
                  <input type="email" class="newsletter-input" placeholder="Nhập email của bạn..." required />
                  <button type="submit" class="btn btn-primary btn-sm"><i class="fa-solid fa-paper-plane"></i></button>
                </form>
                <div class="social-icons">
                  <a href="https://facebook.com" class="social-icon" target="_blank" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                  <a href="https://zalo.me/0912345678" class="social-icon" target="_blank" aria-label="Zalo"><i class="fa-solid fa-comment-dots"></i></a>
                  <a href="https://youtube.com" class="social-icon" target="_blank" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
                  <a href="https://tiktok.com" class="social-icon" target="_blank" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
                </div>
              </div>
            </div>

            <div class="footer-bottom">
              <div>
                © 2026 <strong>Gạch Men Hưng Thịnh</strong>. Giữ toàn quyền tác quyền. Mã số thuế: 0315899888.
              </div>
              <div>
                Thiết kế & phát triển giao diện chuẩn Vanilla HTML5/CSS3/JS.
              </div>
            </div>
          </div>
        </footer>

        <div class="modal-overlay" id="quickview-modal" onclick="if(event.target===this) closeQuickViewModal()">
          <div class="modal-content"></div>
        </div>

        <div class="floating-actions">
          <a href="tel:0912345678" class="floating-btn floating-btn-phone" title="Gọi ngay cho chúng tôi">
            <i class="fa-solid fa-phone"></i>
          </a>
          <a href="https://zalo.me/0912345678" target="_blank" class="floating-btn floating-btn-zalo" title="Chat Zalo tư vấn">
            <span>Zalo</span>
          </a>
        </div>

        <button class="scroll-top-btn" id="scroll-top-btn" aria-label="Lên đầu trang">
          <i class="fa-solid fa-arrow-up"></i>
        </button>

        <div class="toast-container" id="toast-container"></div>
      `;
    }

    footerContainer.innerHTML = footerHtml;
  }
}

/* ==========================================================================
   3. HỆ THỐNG SEO ĐỘNG (DYNAMIC SEO VIA JSON)
   ========================================================================== */
function updateOrCreateMetaTag(attrName, attrValue, contentValue) {
  if (!contentValue) return;
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute("content", contentValue);
}

async function applyDynamicSEO() {
  try {
    const currentPath = window.location.pathname.toLowerCase();
    let pageKey = "index";

    if (currentPath.includes("products")) {
      pageKey = "products";
    } else if (currentPath.includes("contact")) {
      pageKey = "contact";
    } else {
      pageKey = "index";
    }

    let seoConfig = null;
    try {
      const response = await fetch("seo.json");
      if (response.ok) {
        seoConfig = await response.json();
      }
    } catch (fetchErr) {
      console.warn(
        "[SEO] Không thể nạp seo.json qua fetch (thường gặp khi mở qua file://), dùng fallback.",
        fetchErr,
      );
    }

    if (!seoConfig) {
      seoConfig = {
        index: {
          meta_title:
            "Gạch Men Hưng Thịnh - Tổng Kho Gạch Ốp Lát & Thiết Bị Vệ Sinh Cao Cấp",
          meta_description:
            "Gạch Men Hưng Thịnh chuyên phân phối sỉ lẻ gạch lát nền bóng kiếng, gạch giả gỗ, gạch trang trí mosaic và thiết bị vệ sinh cao cấp chính hãng.",
          keywords:
            "gạch men hưng thịnh, gạch ốp lát, gạch bóng kiếng, gạch giả gỗ, gạch trang trí, thiết bị vệ sinh",
          og_image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        },
        products: {
          meta_title:
            "Danh Mục Sản Phẩm Gạch Ốp Lát & Thiết Bị Vệ Sinh | Gạch Men Hưng Thịnh",
          meta_description:
            "Khám phá bộ sưu tập hơn 500+ mẫu gạch lát nền bóng kiếng, gạch xương bán sứ giả gỗ, gạch trang trí nghệ thuật và thiết bị vệ sinh cao cấp.",
          keywords:
            "danh mục gạch men, gạch bóng kiếng 80x80, gạch giả gỗ, gạch mosaic trang trí, bồn cầu thông minh",
          og_image:
            "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80",
        },
        contact: {
          meta_title: "Liên Hệ & Hệ Thống Showroom | Gạch Men Hưng Thịnh",
          meta_description:
            "Liên hệ ngay Gạch Men Hưng Thịnh để nhận bảng báo giá dự án, chiết khấu đại lý công trình và thông tin hệ thống showroom.",
          keywords:
            "liên hệ gạch men hưng thịnh, showroom gạch quận 10, tổng kho gạch bình dương",
          og_image:
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
        },
      };
    }

    const currentSEO = seoConfig[pageKey] || seoConfig["index"];

    if (currentSEO.meta_title) {
      document.title = currentSEO.meta_title;
      updateOrCreateMetaTag("property", "og:title", currentSEO.meta_title);
    }

    if (currentSEO.meta_description) {
      updateOrCreateMetaTag("name", "description", currentSEO.meta_description);
      updateOrCreateMetaTag(
        "property",
        "og:description",
        currentSEO.meta_description,
      );
    }

    if (currentSEO.keywords) {
      updateOrCreateMetaTag("name", "keywords", currentSEO.keywords);
    }

    if (currentSEO.og_image) {
      updateOrCreateMetaTag("property", "og:image", currentSEO.og_image);
    }

    updateOrCreateMetaTag("property", "og:url", window.location.href);
    updateOrCreateMetaTag("property", "og:type", "website");
  } catch (error) {
    console.error("[SEO] Lỗi khởi tạo SEO động:", error);
  }
}

/* ==========================================================================
   4. QUẢN LÝ TRANG SẢN PHẨM (LIVE SEARCH, BỘ LỌC, PHÂN TRANG)
   ========================================================================== */
const productState = {
  allProducts:
    typeof PRODUCTS_DATA !== "undefined" ? PRODUCTS_DATA : RAW_PRODUCTS,
  filteredProducts:
    typeof PRODUCTS_DATA !== "undefined"
      ? [...PRODUCTS_DATA]
      : [...RAW_PRODUCTS],
  searchTerm: "",
  selectedCategory: "all",
  selectedPriceRange: "all",
  sortBy: "default",
  currentPage: 1,
  itemsPerPage: 8, // Chia đúng 8 sản phẩm trên 1 trang theo đề bài
};

function formatVND(amount) {
  return amount.toLocaleString("vi-VN") + " đ";
}

function applyFiltersAndSort() {
  const query = productState.searchTerm.trim().toLowerCase();

  productState.filteredProducts = productState.allProducts.filter((item) => {
    const matchesSearch =
      query === "" ||
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query);

    let matchesCategory = true;
    if (productState.selectedCategory !== "all") {
      matchesCategory = item.category === productState.selectedCategory;
    }

    let matchesPrice = true;
    const price = item.price;
    switch (productState.selectedPriceRange) {
      case "under-300k":
        matchesPrice = price < 300000;
        break;
      case "300k-500k":
        matchesPrice = price >= 300000 && price <= 500000;
        break;
      case "500k-1000k":
        matchesPrice = price > 500000 && price <= 1000000;
        break;
      case "over-1000k":
        matchesPrice = price > 1000000;
        break;
      default:
        matchesPrice = true;
    }

    return matchesSearch && matchesCategory && matchesPrice;
  });

  switch (productState.sortBy) {
    case "price-asc":
      productState.filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      productState.filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case "name-asc":
      productState.filteredProducts.sort((a, b) =>
        a.name.localeCompare(b.name, "vi"),
      );
      break;
    default:
      productState.filteredProducts.sort((a, b) => a.id - b.id);
  }

  productState.currentPage = 1;
  renderProducts();
  renderPagination();
}

function renderProducts() {
  const gridContainer = document.getElementById("products-grid");
  const countDisplay = document.getElementById("products-count-text");
  if (!gridContainer) return;

  const total = productState.filteredProducts.length;

  if (countDisplay) {
    countDisplay.innerHTML = `Hiển thị <strong>${total}</strong> sản phẩm phù hợp`;
  }

  if (total === 0) {
    gridContainer.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-box-open"></i>
        <h4>Không tìm thấy sản phẩm phù hợp</h4>
        <p>Rất tiếc, không có mẫu gạch nào khớp với tiêu chí tìm kiếm hoặc bộ lọc của bạn. Vui lòng thử tìm từ khóa khác hoặc thiết lập lại bộ lọc.</p>
        <button class="btn btn-primary btn-sm" onclick="resetAllFilters()">
          <i class="fa-solid fa-rotate-left"></i> Đặt lại bộ lọc
        </button>
      </div>
    `;
    return;
  }

  const startIndex = (productState.currentPage - 1) * productState.itemsPerPage;
  const endIndex = startIndex + productState.itemsPerPage;
  const currentProducts = productState.filteredProducts.slice(
    startIndex,
    endIndex,
  );

  let html = "";
  currentProducts.forEach((item) => {
    html += `
      <div class="product-card" data-id="${item.id}">
        <div class="product-thumb">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
          <div class="product-badges">
           
            <span class="badge badge-cat">${item.category}</span>
          </div>
          <button class="product-quick-btn" onclick="openQuickViewModal(${item.id})">
            <i class="fa-regular fa-eye"></i> Xem nhanh
          </button>
        </div>
        <div class="product-body">
          <span class="product-cat">${item.dimensions || item.material}</span>
          <h3 class="product-title" title="${item.name}">
            <a href="javascript:void(0)" onclick="openQuickViewModal(${item.id})">${item.name}</a>
          </h3>
          <p class="product-desc">${item.description}</p>
          <div class="product-price-box">
            <div>
              <span class="product-price">${formatVND(item.price)}</span>
              <span class="product-unit"> / ${item.unit}</span>
            </div>
            <span class="text-xs text-muted"><i class="fa-solid fa-shield-halved text-primary"></i> Chính hãng</span>
          </div>
          <div class="product-btn-action">
            <button class="btn btn-primary btn-sm btn-block" onclick="requestQuote('${item.name}')">
              <i class="fa-solid fa-file-invoice-dollar"></i> Nhận báo giá
            </button>
          </div>
        </div>
      </div>
    `;
  });

  gridContainer.innerHTML = html;
}

function renderPagination() {
  const paginationWrapper = document.getElementById("pagination-wrapper");
  if (!paginationWrapper) return;

  const total = productState.filteredProducts.length;
  const totalPages = Math.ceil(total / productState.itemsPerPage);

  if (totalPages <= 1) {
    paginationWrapper.innerHTML = "";
    return;
  }

  let html = "";

  const isPrevDisabled = productState.currentPage === 1;
  html += `
    <button class="page-btn" ${isPrevDisabled ? "disabled" : ""} onclick="goToPage(${productState.currentPage - 1})" title="Trang trước">
      <i class="fa-solid fa-chevron-left"></i>
    </button>
  `;

  for (let i = 1; i <= totalPages; i++) {
    const isActive = i === productState.currentPage;
    html += `
      <button class="page-btn ${isActive ? "active" : ""}" onclick="goToPage(${i})">
        ${i}
      </button>
    `;
  }

  const isNextDisabled = productState.currentPage === totalPages;
  html += `
    <button class="page-btn ${isNextDisabled ? "disabled" : ""} onclick="goToPage(${productState.currentPage + 1})" title="Trang kế tiếp">
      <i class="fa-solid fa-chevron-right"></i>
    </button>
  `;

  paginationWrapper.innerHTML = html;
}

function goToPage(pageNumber) {
  const totalPages = Math.ceil(
    productState.filteredProducts.length / productState.itemsPerPage,
  );
  if (pageNumber < 1 || pageNumber > totalPages) return;

  productState.currentPage = pageNumber;
  renderProducts();
  renderPagination();

  const topAnchor = document.getElementById("products-layout-top");
  if (topAnchor) {
    topAnchor.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function resetAllFilters() {
  productState.searchTerm = "";
  productState.selectedCategory = "all";
  productState.selectedPriceRange = "all";
  productState.sortBy = "default";
  productState.currentPage = 1;

  const searchInput = document.getElementById("product-search-input");
  if (searchInput) searchInput.value = "";

  const allCategoryRadio = document.querySelector(
    'input[name="category-filter"][value="all"]',
  );
  if (allCategoryRadio) allCategoryRadio.checked = true;

  const allPriceRadio = document.querySelector(
    'input[name="price-filter"][value="all"]',
  );
  if (allPriceRadio) allPriceRadio.checked = true;

  const sortSelect = document.getElementById("product-sort-select");
  if (sortSelect) sortSelect.value = "default";

  applyFiltersAndSort();
  showToast("Đã đặt lại toàn bộ bộ lọc!", "info");
}

/* ==========================================================================
   5. MODAL QUICK VIEW SẢN PHẨM CHI TIẾT
   ========================================================================== */
function openQuickViewModal(productId) {
  const productList =
    typeof PRODUCTS_DATA !== "undefined" ? PRODUCTS_DATA : RAW_PRODUCTS;
  const product = productList.find((p) => p.id === productId);
  if (!product) return;

  const modalOverlay = document.getElementById("quickview-modal");
  if (!modalOverlay) return;

  const modalContainer = modalOverlay.querySelector(".modal-content");
  modalContainer.innerHTML = `
    <button class="modal-close-btn" onclick="closeQuickViewModal()" aria-label="Đóng">&times;</button>
    <div class="modal-body-grid">
      <div class="modal-img-wrapper">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div class="modal-details">
        <span class="badge badge-cat" style="align-self:flex-start; margin-bottom: 0.5rem;">${product.category}</span>
        <h2 style="font-size: 1.35rem; font-weight: 800; color: var(--dark); line-height: 1.3;">${product.name}</h2>
        <div class="modal-price">${formatVND(product.price)} <small style="font-size: 0.85rem; color: var(--text-muted); font-weight: normal;">/ ${product.unit}</small></div>
        <p style="font-size: 0.9rem; color: var(--text-main); margin-bottom: 1rem; line-height: 1.6;">${product.description}</p>
        
        <div class="spec-list">
          <div class="spec-item"><span class="spec-label">Kích thước:</span> <span class="spec-val">${product.dimensions}</span></div>
          <div class="spec-item"><span class="spec-label">Chất liệu xương:</span> <span class="spec-val">${product.material}</span></div>
          <div class="spec-item"><span class="spec-label">Xuất xứ:</span> <span class="spec-val">${product.origin}</span></div>
          <div class="spec-item"><span class="spec-label">Tình trạng kho:</span> <span class="spec-val" style="color:var(--accent-green)"><i class="fa-solid fa-circle-check"></i> Sẵn sàng giao ngay</span></div>
        </div>

        <div style="margin-top: auto; padding-top: 1.5rem; display: flex; gap: 0.75rem;">
          <a href="tel:0912345678" class="btn btn-primary" style="flex:1;">
            <i class="fa-solid fa-phone"></i> Gọi ngay: 0912.345.678
          </a>
          <button class="btn btn-secondary" onclick="requestQuote('${product.name}')">
            <i class="fa-solid fa-envelope"></i> Báo giá nhanh
          </button>
        </div>
      </div>
    </div>
  `;

  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeQuickViewModal() {
  const modalOverlay = document.getElementById("quickview-modal");
  if (modalOverlay) {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeQuickViewModal();
  }
});

/* ==========================================================================
   6. XỬ LÝ TOAST & TƯƠNG TÁC FORM
   ========================================================================== */
function showToast(message, type = "success") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast ${type === "error" ? "toast-error" : ""}`;

  let iconHtml =
    '<i class="fa-solid fa-circle-check" style="color:#10b981;"></i>';
  if (type === "error") {
    iconHtml =
      '<i class="fa-solid fa-circle-exclamation" style="color:#da251d;"></i>';
  } else if (type === "info") {
    iconHtml = '<i class="fa-solid fa-circle-info" style="color:#0056b3;"></i>';
  }

  toast.innerHTML = `
    ${iconHtml}
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function requestQuote(productName) {
  closeQuickViewModal();
  const contactNoteInput =
    document.getElementById("contact-note") ||
    document.getElementById("quick-note");
  if (contactNoteInput) {
    contactNoteInput.value = `Tôi muốn nhận báo giá ưu đãi cho: ${productName}`;
    contactNoteInput.focus();
    contactNoteInput.scrollIntoView({ behavior: "smooth", block: "center" });
    showToast(`Đã điền sản phẩm vào form báo giá bên dưới!`, "info");
  } else {
    window.location.href = `contact.html?product=${encodeURIComponent(productName)}`;
  }
}

/* ==========================================================================
   7. KHỞI TẠO DOM VÀ GẮN EVENT LISTENERS
   ========================================================================== */
document.addEventListener("DOMContentLoaded", async () => {
  // 1. Render Header & Footer Dùng Chung trước tiên
  await renderSharedLayout();

  // 2. Kích hoạt tính năng SEO Động theo URL
  await applyDynamicSEO();

  // 3. Mobile Menu Drawer Toggle
  const mobileToggleBtn = document.getElementById("mobile-menu-toggle");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const mobileDrawerOverlay = document.getElementById("mobile-drawer-overlay");
  const mobileDrawerClose = document.getElementById("mobile-drawer-close");

  function openMobileMenu() {
    if (mobileDrawer && mobileDrawerOverlay && mobileToggleBtn) {
      mobileDrawer.classList.add("active");
      mobileDrawerOverlay.classList.add("active");
      mobileToggleBtn.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  function closeMobileMenu() {
    if (mobileDrawer && mobileDrawerOverlay && mobileToggleBtn) {
      mobileDrawer.classList.remove("active");
      mobileDrawerOverlay.classList.remove("active");
      mobileToggleBtn.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  if (mobileToggleBtn)
    mobileToggleBtn.addEventListener("click", openMobileMenu);
  if (mobileDrawerClose)
    mobileDrawerClose.addEventListener("click", closeMobileMenu);
  if (mobileDrawerOverlay)
    mobileDrawerOverlay.addEventListener("click", closeMobileMenu);

  // 4. Header Scroll Shadow & Scroll To Top Button
  const header = document.querySelector(".main-header");
  const scrollTopBtn = document.getElementById("scroll-top-btn");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    if (header) {
      if (scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }

    if (scrollTopBtn) {
      if (scrollY > 400) {
        scrollTopBtn.classList.add("visible");
      } else {
        scrollTopBtn.classList.remove("visible");
      }
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 5. Khởi tạo chức năng riêng cho TRANG SẢN PHẨM (products.html)
  const productsGrid = document.getElementById("products-grid");
  if (productsGrid) {
    const urlParams = new URLSearchParams(window.location.search);
    const urlCat = urlParams.get("cat");
    if (urlCat) {
      const catMap = {
        "gach-lat-nen": "Gạch lát nền bóng kiếng",
        "gach-gia-go": "Gạch giả gỗ",
        "gach-trang-tri": "Gạch trang trí",
        "thiet-bi-ve-sinh": "Thiết bị vệ sinh",
      };
      const matchedCat = catMap[urlCat] || urlCat;
      const targetRadio = document.querySelector(
        `input[name="category-filter"][value="${matchedCat}"]`,
      );
      if (targetRadio) {
        targetRadio.checked = true;
        productState.selectedCategory = matchedCat;
      }
    }

    applyFiltersAndSort();

    const searchInput = document.getElementById("product-search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        productState.searchTerm = e.target.value;
        applyFiltersAndSort();
      });
    }

    const categoryRadios = document.querySelectorAll(
      'input[name="category-filter"]',
    );
    categoryRadios.forEach((radio) => {
      radio.addEventListener("change", (e) => {
        productState.selectedCategory = e.target.value;
        applyFiltersAndSort();
      });
    });

    const priceRadios = document.querySelectorAll('input[name="price-filter"]');
    priceRadios.forEach((radio) => {
      radio.addEventListener("change", (e) => {
        productState.selectedPriceRange = e.target.value;
        applyFiltersAndSort();
      });
    });

    const sortSelect = document.getElementById("product-sort-select");
    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        productState.sortBy = e.target.value;
        applyFiltersAndSort();
      });
    }

    const resetBtn = document.getElementById("btn-reset-filters");
    if (resetBtn) {
      resetBtn.addEventListener("click", resetAllFilters);
    }

    const mobileFilterTrigger = document.getElementById(
      "mobile-filter-trigger",
    );
    const filterSidebar = document.getElementById("filter-sidebar");
    const closeFilterSidebar = document.getElementById("close-filter-sidebar");

    if (mobileFilterTrigger && filterSidebar) {
      mobileFilterTrigger.addEventListener("click", () => {
        filterSidebar.classList.add("open");
      });
    }
    if (closeFilterSidebar && filterSidebar) {
      closeFilterSidebar.addEventListener("click", () => {
        filterSidebar.classList.remove("open");
      });
    }
  }

  // 6. Xử lý Form Liên Hệ
  const contactForms = document.querySelectorAll(".contact-form");
  contactForms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const phoneInput = form.querySelector('input[type="tel"]');
      if (phoneInput && !phoneInput.value.trim()) {
        showToast("Vui lòng nhập số điện thoại để chúng tôi liên hệ!", "error");
        phoneInput.focus();
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.innerHTML : "";
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML =
          '<i class="fa-solid fa-spinner fa-spin"></i> Đang gửi...';
      }

      setTimeout(() => {
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }
        showToast(
          "Gửi thông tin thành công! Chuyên viên Hưng Thịnh sẽ gọi lại trong 5 phút.",
          "success",
        );
      }, 1000);
    });
  });

  // 7. Tự động điền sản phẩm từ URL Param nếu có
  const urlParams = new URLSearchParams(window.location.search);
  const requestedProduct = urlParams.get("product");
  if (requestedProduct) {
    const noteArea = document.getElementById("contact-note");
    if (noteArea) {
      noteArea.value = `Tôi muốn nhận tư vấn và báo giá công trình cho sản phẩm: ${requestedProduct}`;
    }
  }

  // 8. Đăng ký nhận tin Newsletter ở Footer
  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector("input");
      if (emailInput && emailInput.value.trim()) {
        showToast(
          "Cảm ơn bạn đã đăng ký nhận khuyến mãi từ Hưng Thịnh!",
          "success",
        );
        newsletterForm.reset();
      }
    });
  }
});
