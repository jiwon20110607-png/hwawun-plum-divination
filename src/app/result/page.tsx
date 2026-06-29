'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import HexagramCard from '@/components/HexagramCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { calculateHexagram } from '@/utils/hexagramCalculator';
import { hexagrams } from '@/data/hexagrams';

interface HexagramData {
  number: number;
  name: string;
  korean: string;
  interpretation: string;
  guidance: string;
}

export default function ResultPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [hexagramData, setHexagramData] = useState<HexagramData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const numbersStr = searchParams.get('numbers');
    if (!numbersStr) {
      router.push('/');
      return;
    }

    const numbers = numbersStr.split(',').map(Number);
    const hexagramNumber = calculateHexagram(numbers);
    const data = hexagrams.find(h => h.number === hexagramNumber);

    if (data) {
      setHexagramData(data as HexagramData);
    }
    setLoading(false);
  }, [searchParams, router]);

  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="animate-float text-3xl">✨</div>
      </div>
    );
  }

  if (!hexagramData) {
    return (
      <div className="min-h-screen w-full flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center text-white">데이터를 찾을 수 없습니다</div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-2xl animate-slide-up">
          <HexagramCard hexagram={hexagramData} />

          <div className="mt-8 flex gap-4">
            <button
              onClick={() => router.push('/')}
              className="flex-1 glass-lg py-3 px-4 rounded-xl text-white font-semibold transition-all duration-300 hover:shadow-lg"
            >
              🏠 처음으로
            </button>
            <button
              onClick={() => window.location.reload()}
              className="flex-1 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              🎲 다시 생성
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
