import React, { Component } from "react";
import { Card, CardImg } from "reactstrap";


class CardInfo extends Component {
  renderCard(card) {
    return (
      <Card>
        <CardImg src={card.image} alt={card.name} />
      </Card>
    );
  }
 
  renderInfo(card) {
    return (
      <ul className="list-unstyled">
        <li>
          <h6>Name :</h6>
          <div>{card.name}</div>
        </li>
 
        <li>
          <h6>Type : </h6>
          <div>{card.type}</div>
        </li>
 
        <li>
          <h6>Description : </h6>
          <div>{card.description}</div>
        </li>
      </ul>
    );
  }
  render() {
    const card = this.props.card;
    if (card != null)
      return (
        <div className=" cardInfo p-5 ">
          <div className="row">
            <div className="col-12 col-md-5 ">
              {this.renderCard(card)}
            </div>
            <div className="col-12 col-md-5 border border-primary">
              <h4>Project Information</h4>
              {this.renderInfo(card)}
            </div>
          </div>
        </div>
      );
    else return <div />;
  }
}
 
export default CardInfo;