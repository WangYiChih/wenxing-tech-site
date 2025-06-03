import React, { useState, useEffect } from "react";

export default function HomePage() {
  const [curriculumIndex, setCurriculumIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const [showCurriculum, setShowCurriculum] = useState(false);

  const curriculumSections = [
    {
      title: "探索 1：AI 人工智能,
      content:
        "使用 AI ，探索 AI ，窺看核心基本原理，從模型的使用與Hugging face社群的結合，一步一步進入 AI 的底層,融入全新世代站穩一席之地。",
    },
    {
      title: "探索 2：感測器與智慧生活",
      content:
        "從環境感測器出發，進行資料蒐集與雲端儲存，設計日常生活應用專案，例如智慧盆栽、環境監測與自動化裝置。",
    },
    {
      title: "探索 3：AI × 創造力 × 展示力",
      content:
        "導入生成式 AI 與影像識別應用，並結合簡報製作與展示技巧，讓學生具備創意表達與公開分享的能力。",
    },
  ];

  const handleClick = () => {
    setShowCurriculum(true);
    setCurriculumIndex((curriculumIndex + 1) % 3);
    setAnimationKey(prev => prev + 1);
  };

  return (
    <main className="text-gray-800 bg-[#f8f9fa] transition-colors duration-700">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          未知 × 創新｜打造下一代的科技原型創客
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed md:leading-loose">
          天主教文興國高中特色科技實驗課程，探索 AI、機器人、物聯網與競賽應用，啟動學生的創造與實作潛能。
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button
            onClick={handleClick}
            className="bg-white text-blue-700 font-semibold px-6 py-2 rounded-full shadow hover:bg-blue-100"
          >
            了解課程架構
          </button>
          <button className="bg-white text-blue-700 font-semibold px-6 py-2 rounded-full shadow hover:bg-blue-100">
            查看歷屆成果
          </button>
          <button className="bg-white text-blue-700 font-semibold px-6 py-2 rounded-full shadow hover:bg-blue-100">
            建立學習網站
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(0,150,255,0.05),rgba(0,150,255,0.05)_1px,transparent_1px,transparent_24px)] animate-slowbg z-0"></div>
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

      {/* Exploratory Curriculum Reveal Section */}
      {showCurriculum && (
        <section key={animationKey} className="py-16 px-8 transition-all duration-700 ease-in-out animate-slide-fade-in">
          <h2 className="text-3xl font-bold text-center mb-12">
            {curriculumSections[curriculumIndex].title}
          </h2>
          <div className="max-w-4xl mx-auto text-center text-lg leading-relaxed">
            <p>{curriculumSections[curriculumIndex].content}</p>
          </div>
        </section>
      )}

      <style jsx>{`
        @keyframes slide-fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-fade-in {
          animation: slide-fade-in 0.6s ease-out;
        }
        @keyframes slowbg {
          0% { background-position: 0 0; }
          100% { background-position: 1000px 0; }
        }
        .animate-slowbg {
          animation: slowbg 120s linear infinite;
        }
      `}</style>

      {/* 預留區塊與其他段落照舊 */}
      {/* ...（略）... */}
    </main>
  );
}
