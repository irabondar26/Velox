interface StartedBtnProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const StartedBtn = ({ text, onClick, className = '' }: StartedBtnProps) => {
  const baseStyles = "px-4 py-3 rounded-sm text-xs text-black font-bold transition-all duration-300 active:scale-95";
  return (
    <button onClick={onClick} className={`${baseStyles} ${className}`}>{text}</button>
  );
};

export default StartedBtn;