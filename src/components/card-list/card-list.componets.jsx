import { Component } from "react";
import "./card-list.style.css";
import Card from "../card/card.component";

class CardList extends Component {
  render() {
    // console.log(this.props.monsters);
    // console.log('render your file');
    const { monsters, id } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card key={id} monster={monster} />;
        })}
      </div>
    );
  }
}
export default CardList;
