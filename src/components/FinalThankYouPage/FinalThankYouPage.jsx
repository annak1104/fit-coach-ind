import React from "react";

import telegramIcon from "../../assets/telegram.svg";

const FinalThankYouPage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white text-center p-6 shadow-lg">
      {/* Motivational Headline */}
      <h1 className="font-montserrat font-bold text-3xl md:text-4xl text-gray-800 mb-6">
        Kamu tinggal selangkah lagi menuju tubuh lebih sehat & penghasilan
        tambahan!
      </h1>

      {/* Encouraging CTA */}
      <button className="bg-green-600 text-white font-bold font-montserrat text-lg py-4 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:bg-green-700 active:scale-95">
        Mulai sekarang dan dapatkan cuan!
      </button>

      {/* Telegram & Quick Payment Reminder */}
      <div className="mt-8 flex flex-col items-center">
        <img
          src={telegramIcon}
          alt="Telegram Logo"
          className="w-12 h-12 mb-4"
        />
        <p className="font-open-sans text-lg text-gray-700 max-w-lg">
          Gabung dengan FitCoach di Telegram dan akses link undangan unikmu
          untuk mulai mengajak teman dan meraih reward!
        </p>
      </div>
    </div>
  );
};

export default FinalThankYouPage;
