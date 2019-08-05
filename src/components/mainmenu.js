import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Filter from "./filter";
import CardInfo from "./cardinfo";
import { CARDS } from "../non-components/cards";

class MainMenu extends Component {
    constructor(props) {
      super(props);
   
      this.state = {
        cards: CARDS,
        selectedCard: null,
        cardFilter: null
      };
    }

    cardSelect(cardId) {
        this.setState({ selectedCard: cardId });
      }
     
      cardFilterSelect(filterName) {
        this.setState({ cardFilter: filterName });
      }

      render() {
        return (
          <div>
            <Navbar>
              <div className="container">
                <NavbarBrand href="/" className="mx-auto">
                  {" "}
                  <h2>App4Apps</h2>{" "}
                </NavbarBrand>
              </div>
            </Navbar>
            <Filter
              cards={this.state.cards}
              cardSelect={cardId => this.cardSelect(cardId)}
              filter={this.state.cardFilter}
              cardFilterSelect={filterName => this.cardFilterSelect(filterName)}
            />
            <CardInfo
              card={
                this.state.cards.filter(
                  card => card.id === this.state.selectedCard
                )[0]
              }
            />
          </div>
        );
      }
    }
     
export default MainMenu;