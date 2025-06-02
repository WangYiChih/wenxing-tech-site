import React from "react";

export default function HomePage() {
  return (
    <main className="bg-[#f8f9fa] text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          未知 × 創新｜打造下一代的科技原型創客
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          天主教文興國高中特色科技實驗課程，探索 AI、機器人、物聯網與競賽應用，啟動學生的創造與實作潛能。
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button className="bg-white text-blue-700 font-semibold px-6 py-2 rounded-full shadow hover:bg-blue-100">
            了解課程架構
          </button>
          <button className="bg-white text-blue-700 font-semibold px-6 py-2 rounded-full shadow hover:bg-blue-100">
            查看歷屆成果
          </button>
          <button className="bg-white text-blue-700 font-semibold px-6 py-2 rounded-full shadow hover:bg-blue-100">
            擁有學習網站
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(0,150,255,0.08),rgba(0,150,255,0.08)_1px,transparent_1px,transparent_20px)] animate-[bgmove_30s_linear_infinite] z-0"></div>
        <style>{`
          @keyframes bgmove {
            from { background-position: 0 0; }
            to { background-position: 1000px 0; }
          }
        `}</style>
        <h2 className="text-3xl font-bold text-center mb-12 relative z-10">下一代 讓科技上身</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto relative z-10">
          {[
            { icon: "🛠️", title: "動手實作", desc: "每位學生親手打造作品，從程式到硬體全方位學習。" },
            { icon: "🏆", title: "競賽陪伴", desc: "全程指導參與全國與國際科技競賽，屢獲佳績。" },
            { icon: "🤖", title: "AI 科技", desc: "結合人工智慧、物聯網等技術，走在時代尖端。" },
            { icon: "🔗", title: "跨領域整合", desc: "融合數學、物理與生活應用，強化邏輯與創造力。" },
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 課程架構預留區塊 */}
      <section className="py-16 px-8 bg-[#e8f7fa]">
        <h2 className="text-3xl font-bold text-center mb-6">課程架構（敬請期待）</h2>
        <p className="text-center text-gray-700 max-w-xl mx-auto">
          本課程將依照學生年級與能力進行模組化教學，結合理論與實作，涵蓋 LED 控制、感測器應用、無線通訊、AI 辨識與競賽專題。完整課表即將公布。
        </p>
      </section>

      {/* 歷屆成果預留區塊 */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">歷屆成果展示</h2>
        <p className="text-center text-gray-600">學生作品與獲獎紀錄整理中，將於近期公開展示。</p>
      </section>

      {/* 社區公益服務（預留） */}
      <section className="py-16 px-8 bg-[#f0fff4]">
        <h2 className="text-3xl font-bold text-center mb-6">社區公益服務</h2>
        <p className="text-center text-gray-700">學生將參與本地社區活動、教育推廣與科技服務，培養社會責任與實踐能力。</p>
      </section>

      {/* 企業協助專區（預留） */}
      <section className="py-16 px-8 bg-[#fff7ed]">
        <h2 className="text-3xl font-bold text-center mb-6">企業協助專區</h2>
        <p className="text-center text-gray-700">本校科技課程期待企業與我們攜手合作，提供器材、技術或經費資源，培育下一代科技人才。</p>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-8 bg-[#023e8a] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">想讓孩子成為能解決問題的未來創客嗎？</h2>
        <p className="mb-6">現在就加入我們的科技實驗課程，一起創造不一樣的未來。</p>
        <button className="bg-white text-[#023e8a] font-semibold px-6 py-2 rounded-full shadow hover:bg-blue-100">
          聯絡我們
        </button>
      </section>
    </main>
  );
}
