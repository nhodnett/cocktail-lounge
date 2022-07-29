import { FC } from "react";
import { Drink } from "../Types";
import "./RandomDrinkCards.css";

const RandomDrinkCards: FC<Drink> = ({ strDrink, strDrinkThumb, idDrink }) => {
  return (
    <div className="drink-card">
      <img
        className="drink-image"
        src={strDrinkThumb}
        alt={`Picture${idDrink} of a cocktail stirred to perfection`}
      />
      <h2>{strDrink}</h2>
    </div>
  );
};

export default RandomDrinkCards;
