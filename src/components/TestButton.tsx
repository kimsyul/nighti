export default function TestButton({ text, onClickButton }: { text: string; onClickButton: () => void }) {
  return (
    <div
      onClick={onClickButton}
      className="w-full  bg-primary/50 hover:bg-secondary/60 border p-3 text-center rounded-2xl cursor-pointer">
      {text}
    </div>
  );
}
