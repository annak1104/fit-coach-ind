import React from "react";

import telegram from "../../assets/telegram.svg";

const levels = {
  "Gain muscle & strength": "Strength Builder",
  "Lose fat & get lean": "Lean & Shredded",
  "Improve endurance & overall fitness": "Endurance Master",
};

const ResultsPage = ({ answers }) => {
  if (!answers || answers.length === 0) {
    return (
      <p className="text-center text-gray-700">
        No results available. Please complete the quiz.
      </p>
    );
  }

  const userGoal = answers[0].title;

  return (
    <div className="bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Rencana FitCoach untuk kamu: {userGoal} & dapatkan penghasilan sambil
        berlatih!
      </h1>

      <div className="max-w-lg w-full flex flex-col gap-6">
        {/* Mindful eating practices */}
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Pola makan penuh kesadaran 🥗</h2>
          <p>
            Kenali pemicu emosional dan bangun kebiasaan makan sehat jangka
            panjang.
          </p>
        </div>

        {/* Nutrition Plan */}
        <div className="bg-orange-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Rencana nutrisi 🥦</h2>
          <p>Menu makan yang disesuaikan untuk mendukung kemajuanmu.</p>
        </div>

        {/* Progress Tracking */}
        <div className="bg-gray-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Pemantauan perkembangan 📈</h2>
          <p>Dapatkan masukan langsung dari para ahli.</p>
        </div>
      </div>

      {/* CTA Button */}
      <button className="mt-8 bg-green-600 text-white font-bold text-lg py-4 px-4 rounded-full hover:bg-green-700 transition active:scale-95">
        Mulai perjalanan fitness dan penghasilanmu sekarang juga!
      </button>

      {/* Telegram Info */}
      <div className="mt-6 flex flex-col items-center">
        <img src={telegram} className="w-12 h-12 mb-2" alt="Telegram Logo" />
        <p className="text-gray-700 text-center">
          Kamu perlu menginstal Telegram untuk menggunakan aplikasi ini.
        </p>
      </div>
    </div>
  );
};

export default ResultsPage;
