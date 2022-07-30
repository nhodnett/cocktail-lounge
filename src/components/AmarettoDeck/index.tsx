import { Component } from "react";
import "./styles.css";
import { fetchSpecialtyCocktails } from "../../apiCalls";
import { Drink, Props, TypeState } from "../Types";
import { Link } from "react-router-dom";

class AmarettoDeck extends Component<{}, TypeState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      drinkList: [],
    };
  }

  componentDidMount = () => {
    fetchSpecialtyCocktails("search.php?s=amaretto").then((data) => {
      this.setState({ drinkList: data.drinks });
    });
  };

  formatAmarettos = () => {
    return this.state.drinkList.map((amaretto: Drink) => {
      return (
        <Link to={`/drinks/${amaretto.idDrink}`}>
          <div>
          <h1>{amaretto.strDrink}</h1>
          <img src={amaretto.strDrinkThumb} />
          </div>
        </Link>
      );
    });
  };

  render() {
    return <div className="AmarettoContainer">{this.formatAmarettos()}</div>;
  }
}
export default AmarettoDeck;
