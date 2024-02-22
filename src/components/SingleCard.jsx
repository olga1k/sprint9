export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handlClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div>
      <div className={`m-auto card ${flipped ? "flipped" : ""}`}>
        <div className="size-full rounded-xl front bg-white dark: text-dark-blue flex items-center justify-center p-1 border-2 border-dark-blue">{card.phrase}</div>
        <div
          onClick={handlClick}
          className="size-full rounded-xl bg-light-green back flex items-center justify-center p-2 text-center"
        >
        </div>
      </div>
    </div>
  );
}
