interface NumberCardProps {
  number: number;
}

export default function NumberCard({ number }: NumberCardProps) {
  return (
    <div className="glass-lg p-4 rounded-xl flex items-center justify-center">
      <span className="text-3xl font-bold text-white drop-shadow-lg">
        {number}
      </span>
    </div>
  );
}
