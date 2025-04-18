export default function TestButton({ text, onClickButton }: { text: string; onClickButton: () => void }) {
  return (
    <div
      onClick={onClickButton}
      className="w-full bg-blue-950/50 hover:bg-blue-200/60 p-3 text-center rounded-2xl cursor-pointer">
      {text}
    </div>
  );
}
