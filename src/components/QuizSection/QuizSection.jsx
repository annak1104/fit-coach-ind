import { AnimatePresence, motion } from "framer-motion";

import React, { useEffect, useRef, useState } from "react";

import logoDark from "../../assets/logo-dark.svg";
import logo from "../../assets/logo.svg";
import referral from "../../assets/referral.webp";
import telegram from "../../assets/telegram.svg";
import FinalThankYouPage from "../../components/FinalThankYouPage/FinalThankYouPage";
import MLMEarningsSimulator from "../../components/MLMEarningsSimulator/MLMEarningsSimulator";
import ResultsPage from "../../components/ResultsPage/ResultsPage";

// Questions for the quiz
const questions = [
  {
    question: "Apa tujuan utama kamu dalam berolahraga?",
    options: [
      {
        title: "Membangun otot",
        description: "Ingin jadi lebih kuat dan berotot.",
      },
      {
        title: "Menurunkan berat badan",
        description: "Ingin menghilangkan lemak dan tampil lebih ramping.",
      },
      {
        title: "Menjaga kebugaran",
        description:
          "Ingin meningkatkan stamina dan kesehatan secara keseluruhan.",
      },
    ],
  },
  {
    question: "Seberapa sering kamu berolahraga?",
    options: [
      {
        title: "Jarang",
        description:
          "Saya hampir nggak pernah punya waktu atau motivasi buat olahraga.",
      },
      {
        title: "Kadang-kadang",
        description: "Saya olahraga sesekali, tapi belum punya jadwal rutin.",
      },
      {
        title: "Teratur",
        description: "Saya punya jadwal latihan yang konsisten setiap minggu.",
      },
    ],
  },
  {
    question:
      "Apakah kamu tertarik mendapatkan penghasilan dengan membantu orang lain mencapai tujuan kebugaran mereka?",
    options: [
      {
        title: "Ya",
        description:
          "Aku ingin banget menginspirasi orang lain dan dapat penghasilan dari situ!",
      },
      {
        title: "Mungkin",
        description: "Kalau caranya gampang, bisa jadi aku tertarik.",
      },
      {
        title: "Tidak",
        description: "Aku cuma mau fokus ke perkembangan diriku sendiri dulu.",
      },
    ],
  },
  {
    question:
      "Kamu sering berbagi tips atau perkembangan olahraga ke teman-teman?",
    options: [
      {
        title: "Ya",
        description:
          "Aku sering posting perkembangan latihanku di media sosial!",
      },
      {
        title: "Kadang-kadang",
        description: "Aku ngobrol soal olahraga sama teman kalau lagi kumpul.",
      },
      {
        title: "Nggak terlalu",
        description: "Aku lebih suka simpan itu untuk diriku sendiri.",
      },
    ],
  },
  {
    question:
      "Berapa banyak waktu yang bisa kamu komit untuk latihan dan berbagi perjalanan fitness-mu?",
    options: [
      {
        title: "2–3 jam per minggu",
        description:
          "Aku bisa luangin sedikit waktu setiap minggu buat latihan dan update.",
      },
      {
        title: "4–5 jam per minggu",
        description:
          "Aku siap meluangkan lebih banyak waktu buat latihan dan pantau perkembangan.",
      },
      {
        title: "6+ jam per minggu",
        description:
          "Aku totalitas! Siap untuk latihan intens dan pencatatan yang detail.",
      },
    ],
  },
];

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const quizRef = useRef(null);
  const resultsRef = useRef(null);

  const startQuiz = () => {
    setQuizStarted(true);
    setTimeout(() => {
      quizRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleAnswer = (answer) => {
    // Save the answer and move to the next question
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz is completed, show results page
      setQuizCompleted(true);
    }
  };

  // Scroll to the top of the results page when the quiz is completed
  useEffect(() => {
    if (quizCompleted) {
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  }, [quizCompleted]);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div>
      {/* Show results, MLM earnings simulator, and thank you page after quiz completion */}
      {quizCompleted ? (
        <div ref={resultsRef}>
          {" "}
          {/* Attach ref to the results container */}
          <ResultsPage answers={answers} />
          <MLMEarningsSimulator />
          <FinalThankYouPage />
        </div>
      ) : (
        <>
          {/* Hero Section */}
          {!quizStarted && (
            <section className="relative h-screen bg-cover bg-center bg-[url('./assets/fitnes.jpg')]">
              <div className="absolute inset-0 backdrop-blur-sm"></div>
              <div className="relative flex flex-col items-center justify-center h-full text-white px-6">
                <div className="w-[60%]">
                  <img src={logo} alt="Main-logo" />
                </div>
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="font-montserrat font-bold text-4xl md:text-5xl mb-6 text-center"
                >
                  Transformasi tubuh & dompet kamu: Tetap bugar, jadi inspirasi,
                  dan dapat penghasilan!
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="font-open-sans text-lg mb-8 text-center"
                >
                  Ikuti kuis singkat ini untuk menemukan jenis olahraga yang
                  paling cocok buat kamu — dan cari tahu bagaimana kamu bisa
                  menghasilkan uang sambil berbagi perjalanan kebugaranmu.
                </motion.p>
                <motion.button
                  onClick={startQuiz}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#43A047] text-white font-montserrat text-lg font-bold py-4 px-8 rounded-full transition-all duration-300 ease-in-out"
                >
                  Mulai kuisnya sekarang!
                </motion.button>
              </div>
            </section>
          )}

          {/* MLM Info Section */}
          {!quizStarted && (
            <section className="bg-[#F5F5F5] p-6">
              <div className="max-w-screen-md mx-auto text-center">
                <h2 className="font-montserrat text-3xl font-bold text-[#43A047] mb-6">
                  Dapatkan penghasilan sambil berlatih
                </h2>
                <p className="font-roboto text-gray-700 text-lg mb-6">
                  Ajak teman & dapatkan komisi saat mereka mencapai tujuan
                  kebugaran bersama kamu!
                </p>
                {/* Add referral network illustration here */}
                <div className="flex justify-center">
                  <img
                    src={referral}
                    alt="Referral Network"
                    className="w-1/2"
                  />
                </div>
              </div>
            </section>
          )}

          {/* Telegram Info Section */}
          {!quizStarted && (
            <section className="bg-white p-6">
              <div className="max-w-screen-md mx-auto text-center">
                <img
                  src={telegram}
                  className="w-12 h-12 m-auto"
                  alt="Telegram Logo"
                />
                <h2 className="font-montserrat text-3xl font-bold text-gray-800 mb-4">
                  Kamu perlu menginstal Telegram
                </h2>
                <p className="font-roboto text-gray-700 text-lg mb-6">
                  Dapatkan update latihan, panduan nutrisi, dan mulai hasilkan
                  uang dari referral!
                </p>
                <button className="bg-[#FB8C00] text-white font-montserrat font-bold text-lg py-4 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:bg-orange-600 active:scale-95">
                  Dapatkan Telegram
                </button>
              </div>
            </section>
          )}

          {/* Quiz Section */}
          {quizStarted && (
            <div ref={quizRef} className="pt-16 h-screen pb-10">
              <div className="w-[60%] m-auto">
                <img src={logoDark} alt="Main-logo" />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative flex flex-col items-center justify-center bg-white px-6"
              >
                <p className="text-lg font-semibold text-gray-700 mt-9 mb-2">
                  Langkah {currentQuestion + 1} dari {questions.length}
                </p>
                <div className="w-full bg-gray-300 h-2 mb-8 mt-8">
                  <motion.div
                    initial={{
                      width: `${(currentQuestion / questions.length) * 100}%`,
                    }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                    className="bg-orange-500 h-2"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                  {questions[currentQuestion].question}
                </h2>

                <AnimatePresence mode="sync">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswer(option)}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="w-full flex flex-col text-left bg-white text-gray-800 font-bold p-4 rounded-lg mb-4 shadow-md transition-all hover:border-green-500 hover:shadow-lg"
                    >
                      <span className="text-lg font-bold">{option.title}</span>
                      <span className="text-sm text-gray-400">
                        {option.description}
                      </span>
                    </motion.button>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default QuizSection;
