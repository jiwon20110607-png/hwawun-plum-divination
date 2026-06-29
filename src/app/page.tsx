'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import CardButton from '@/components/CardButton';
import NumberCard from '@/components/NumberCard';
import Footer from '@/components/Footer';

const speeds = [
  { label: '1초', value: 1 },
  { label: '2초', value: 2 },
  { label: '3초', value: 3 },
  { label: '6초', value: 6 },
];

export default function Home() {
  const [selectedSpeed, setSelectedSpeed] = useState<number | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedNumbers, setGeneratedNumbers] = useState<number[] | null>(null);
  const router = useRouter();

  const generateNumbers = async () => {
    if (!selectedSpeed) return;

    setIsGenerating(true);
    setGeneratedNumbers(null);

    await new Promise(resolve => setTimeout(resolve, selectedSpeed * 1000));

    const numbers = Array.from({ length: 3 }, () =>
      Math.floor(Math.random() * 99) + 1
    );

    setGeneratedNumbers(numbers);
    setIsGenerating(false);
  };

  const handleViewResult = () => {
    if (generatedNumbers) {
      router.push(`/result?numbers=${generatedNumbers.join(',')}`);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md animate-slide-up">
          <div className="glass-lg p-8 mb-8">
            <h2 className="text-xl font-semibold text-white mb-6 text-center">
              🌸 속도를 선택하세요
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {speeds.map(speed => (
                <CardButton
                  key={speed.value}
                  label={speed.label}
                  isSelected={selectedSpeed === speed.value}
                  onClick={() => setSelectedSpeed(speed.value)}
                />
              ))}
            </div>
          </div>

          {selectedSpeed && !generatedNumbers && (
            <button
              onClick={generateNumbers}
              disabled={isGenerating}
              className="w-full glass-lg py-4 px-6 rounded-2xl font-semibold text-white transition-all duration-300 mb-8 hover:shadow-lg disabled:opacity-70"
            >
              {isGenerating ? (
                <span className="inline-block animate-float">✨ 운을 묻는 중...</span>
              ) : (
                '🎲 숫자 생성하기'
              )}
            </button>
          )}

          {generatedNumbers && (
            <div className="glass-lg p-8 mb-8 animate-slide-up">
              <h3 className="text-lg font-semibold text-white mb-6 text-center">
                📍 당신의 운 숫자
              </h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {generatedNumbers.map((num, idx) => (
                  <NumberCard key={idx} number={num} />
                ))}
              </div>
              <button
                onClick={handleViewResult}
                className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                📖 해석 보기
              </button>
              <button
                onClick={() => {
                  setGeneratedNumbers(null);
                  setSelectedSpeed(null);
                }}
                className="w-full mt-3 glass py-2 px-4 rounded-xl text-white font-semibold transition-all duration-300"
              >
                다시 시도
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
