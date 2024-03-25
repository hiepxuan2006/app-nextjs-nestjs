/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import * as React from 'react'

export interface FooterAppProps {}

export default function Footer() {
  return (
    <footer className="border border-zinc-800 bg-black mx-auto text-gray-100 mt-2">
      <div className="flex flex-col justify-between py-10 gap-10 px-6 space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <Link
            href="/"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex items-center justify-center pb-2">
              <img
                src="/_ipx/s_150x35/logo.png"
                width="150"
                height="35"
                alt="Motchill"
                loading="lazy"
                data-nuxt-img=""
              />
            </div>
          </Link>
          <div className="pt-2">
            <p className="text-gray-300 text-sm">
              <Link className="text-[#d98a5e] hover:opacity-90" href="/">
                <strong>Motchill</strong>
              </Link>
              - Trang web xem phim trực tuyến miễn phí chất lượng cao với giao
              diện trực quan, tốc độ tải trang nhanh, cùng kho phim với hơn
              10.000+ phim mới, phim hay, luôn cập nhật phim nhanh, hứa hẹn sẽ
              đem lại phút giây thư giãn cho bạn.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 text-base gap-x-3 gap-y-8 lg:w-2/3 md:grid-cols-3">
          <div className="space-y-3">
            <span className="tracking-wide uppercase text-gray-50">
              Danh Mục
            </span>
            <ul className="space-y-1">
              <li>
                <Link
                  className="text-sm text-gray-400 hover:text-blue-600"
                  title="Phim Mới"
                  href="/phim-moi"
                >
                  Phim Mới
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-gray-400 hover:text-blue-600"
                  title="Phim Chiếu Rạp"
                  href="/phim-chieu-rap"
                >
                  Phim Chiếu Rạp
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-gray-400 hover:text-blue-600"
                  title="Phim Bộ"
                  href="/phim-bo"
                >
                  Phim Bộ
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-gray-400 hover:text-blue-600"
                  title="Phim Lẻ"
                  href="/phim-le"
                >
                  Phim Lẻ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <span className="uppercase text-gray-50">Thể Loại</span>
            <ul className="space-y-1">
              <li>
                <Link
                  className="text-sm text-gray-400 hover:text-blue-600"
                  title="Phim Cổ Trang"
                  href="/the-loai/co-trang"
                >
                  Phim Cổ Trang
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-gray-400 hover:text-blue-600"
                  title="Phim Đam Mỹ"
                  href="/the-loai/phim-bl"
                >
                  Phim Đam Mỹ
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-gray-400 hover:text-blue-600"
                  title="Phim Bách Hợp"
                  href="/the-loai/bach-hop"
                >
                  Phim Bách Hợp
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-gray-400 hover:text-blue-600"
                  title="Phim Viễn Tưởng"
                  href="/the-loai/vien-tuong"
                >
                  Phim Viễn Tưởng
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <span className="tracking-wide uppercase text-gray-50">
              Điều Khoản
            </span>
            <ul className="space-y-1">
              <li>
                <Link
                  className="text-sm text-gray-400 hover:text-blue-600"
                  title="DMCA"
                  href="/dmca"
                >
                  DMCA
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-gray-400 hover:text-blue-600"
                  title="Liên Hệ"
                  href="/lien-he"
                >
                  Liên Hệ
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-gray-400 hover:text-blue-600"
                  title="Privacy"
                  href="#"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-gray-400 hover:text-blue-600"
                  title="Terms of Service"
                  href="#"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-3 text-sm text-center text-gray-400  border-t border-zinc-700">
        <span>© 2024 Motchill. All rights reserved.</span>
        <button
          type="button"
          className="bg-zinc-700 px-3 py-1.5 absolute right-2 top-1 rounded-sm"
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
            ></path>
          </svg>
        </button>
      </div>
    </footer>
  )
}
