"use client";

import React from "react";
import { Mail, Phone, ArrowRight, MousePointer2 } from "lucide-react";

export default function ContactPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-[#F3F4F6] flex items-center justify-center p-4 lg:p-10">
      <div className="lg:w-10/12 w-11/12  bg-white rounded-xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        
         <div className="p-8 lg:p-10 flex flex-col justify-center">
          <span className="text-accent-600 font-bold tracking-widest text-sm uppercase mb-4 block">
            We're here to help you
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            Nâng Cấp <span className="text-accent-600">Trải Nghiệm</span> Gear Của Bạn
          </h1>
          <p className="text-gray-500 text-lg mb-10 max-w-md">
            Bạn đang tìm kiếm những mẫu bàn phím cơ, chuột gaming hay phụ kiện máy tính cao cấp nhất? Đừng ngần ngại liên hệ với Yejara Team.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center text-accent-600">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-medium">Email hỗ trợ</p>
                <p className="text-lg font-bold text-slate-800 tracking-tight">duyenktb1410@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center text-accent-600">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-medium">Hotline tư vấn</p>
                <p className="text-lg font-bold text-slate-800 tracking-tight">+84 337 019 197</p>
              </div>
            </div>
          </div>
        </div>

        {/* FROM */}
        <div className="p-8 lg:p-10 flex items-center justify-center">
          <div className="w-full max-w-md bg-white rounded-xl border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-4 lg:p-7">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Họ và tên</label>
                <input 
                  type="text" 
                  placeholder="Nhập tên của bạn..." 
                  className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="hello@example.com" 
                  className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Sản phẩm quan tâm</label>
                <select className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm appearance-none cursor-pointer">
                  <option>Bàn phím cơ Custom</option>
                  <option>Chuột Gaming không dây</option>
                  <option>Lót chuột & Phụ kiện khác</option>
                  <option>Tư vấn Setup góc làm việc</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Lời nhắn</label>
                <textarea 
                  rows={4} 
                  placeholder="Bạn cần tư vấn gì cho dàn máy của mình?" 
                  className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-accent-600-hover  text-white font-bold py-2 rounded-full flex items-center justify-between px-2 transition-all group overflow-hidden">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-accent-600 group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={20} />
                </div>
                <span className="flex-1 text-center pr-6">Gửi yêu cầu ngay</span>
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}