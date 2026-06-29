interface CardButtonProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function CardButton({ label, isSelected, onClick }: CardButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`p-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
        isSelected
          ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg'
          : 'glass text-white hover:shadow-lg'
      }`}
    >
      {label}
    </button>
  );
}
