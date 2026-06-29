interface HexagramCardProps {
  hexagram: {
    number: number;
    name: string;
    korean: string;
    interpretation: string;
    guidance: string;
  };
}

export default function HexagramCard({ hexagram }: HexagramCardProps) {
  return (
    <div className="glass-lg p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4 animate-float">☯️</div>
        <h2 className="text-3xl font-bold text-white mb-2">
          제{hexagram.number}괘
        </h2>
        <h3 className="text-2xl font-semibold text-teal-300 mb-1">
          {hexagram.name}
        </h3>
        <p className="text-xl text-emerald-300">{hexagram.korean}</p>
      </div>

      <div className="bg-white/10 rounded-2xl p-6 mb-6">
        <h4 className="text-lg font-semibold text-white mb-3">📖 괘의 의미</h4>
        <p className="text-white/90 leading-relaxed">{hexagram.interpretation}</p>
      </div>

      <div className="bg-white/10 rounded-2xl p-6">
        <h4 className="text-lg font-semibold text-white mb-3">🌟 길잡이</h4>
        <p className="text-white/90 leading-relaxed">{hexagram.guidance}</p>
      </div>

      <div className="mt-6 text-center text-sm text-white/70">
        <p>"운은 준비된 자를 만난다"</p>
      </div>
    </div>
  );
}
