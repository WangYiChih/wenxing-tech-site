import React, { useState, useEffect, useRef } from "react";

export default function HomePage() {
  const [curriculumIndex, setCurriculumIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const [showCurriculum, setShowCurriculum] = useState(false);
  const resultRef = useRef(null);
  const curriculumRef = useRef(null);

  const curriculumSections = [
    {
      title: "探索 1：AI 人工智能",
      content:
        "使用 AI ，探索 AI ，窺看核心基本原理，從模型的使用與Hugging face社群的結合，一步一步進入 AI 的底層,融入全新世代取得一席之地。",
    },
    {
      title: "探索 2：AIoT 智慧物聯",
      content:
        "從單芯片開發板開始，一窺計算機的內部，從馮諾伊曼架構到當前 GPU 的平行運算，將知識實現在生活四周，清楚信息與數據的傳遞與不可失去性。",
    },
    {
      title: "探索 3：數學 × 自然科學",
      content:
        "實現從生活中萃取出數學，再以真實物理世界來佐證數學，自然科學與數學從來都是環環相扣，學生需要的只是啟發與相信，數學，除了宗教外，最接近宇宙真相的學科。",
    },
  ];

  const handleClick = () => {
    if (!showCurriculum) {
      setShowCurriculum(true);
      setCurriculumIndex(0);
      setTimeout(() => {
        curriculumRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      setCurriculumIndex((curriculumIndex + 1) % 3);
    }
    setAnimationKey((prev) => prev + 1);
  };

  const handleScrollToResults = () => {
    resultRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const results = [
    {
      image: "/images/hackathon1.jpg",
      caption: "2024 總統盃黑客松現場參賽剪影"
    },
    {
      image: "/images/hackathon2.jpg",
      caption: "團隊進行成果簡報，展示創新構想"
    },
    {
      image: "/images/hackathon3.jpg",
      caption: "專案簡報強調即時語音對話與實用性"
    },
    {
      image: "/images/hackathon4.jpg",
      caption: "榮獲最佳技術獎與最佳創意獎合影留念"
    }
  ];

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
          <button
            onClick={handleScrollToResults}
            className="bg-white text-blue-700 font-semibold px-6 py-2 rounded-full shadow hover:bg-blue-100"
          >
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
          {["🛠️", "🏆", "🤖", "🔗"].map((icon, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl shadow text-center">
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{["動手實作", "競賽陪伴", "AI 科技", "跨領域整合"][i]}</h3>
              <p className="text-sm text-gray-600">
                {["每位學生親手打造作品，從程式到硬體全方位學習。", "全程指導參與全國與國際科技競賽，屢獲佳績。", "結合人工智慧、物聯網等技術，走在時代尖端。", "融合數學、物理與生活應用，強化邏輯與創造力。"][i]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Exploratory Curriculum Reveal Section */}
      {showCurriculum && (
        <section ref={curriculumRef} key={animationKey} className="py-8 px-8 transition-all duration-700 ease-in-out animate-slide-fade-in">
          <h2 className="text-3xl font-bold text-center mb-8">
            {curriculumSections[curriculumIndex].title}
          </h2>
          <div className="max-w-4xl mx-auto text-center text-lg leading-relaxed">
            <p>{curriculumSections[curriculumIndex].content}</p>
          </div>
        </section>
      )}

      {/* Result Showcase Section */}
      <section ref={resultRef} className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">歷屆成果展示｜2024 總統盃黑客松</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {results.map((item, i) => (
            <div key={i} className="text-center">
              <img src={item.image} alt={`result-${i}`} className="w-full rounded-xl shadow mb-2" />
              <p className="text-sm text-gray-700">{item.caption}</p>
            </div>
          ))}
        </div>
      </section>

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
          animation: slowbg 60s linear infinite;
        }
      `}</style>

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
