import React, { Component } from "react";
import { Card, CardImg, ButtonGroup, Button } from "reactstrap";
import { FILTERS } from "../non-components/filters";

class Filter extends Component {
    render() {
      const card = this.props.cards
        .filter(({ type }) => {
          return !this.props.filter || type === this.props.filter;
        })
        .map(card => {
          return (
            <div
              key={Math.random()
                .toString(36)
                .slice(2)}
              className="col-2 m-1"
            >
              <Card onClick={() => this.props.cardSelect(card.id)}>
                <CardImg src={card.image} alt={card.name} />
              </Card>
            </div>
          );
        });
      const filterButtons = FILTERS.map(filterName => {
        return (
          <Button
            key={filterName}
            onClick={() => this.props.cardFilterSelect(filterName)}
          >
            {filterName}
          </Button>
        );
      });
   
      return (
        <div className="container">
          <div className="row">
            <div className="col d-flex align-content-start flex-wrap">{card}</div>
            <div className="p-5 col-1">
              <ButtonGroup size="lg" vertical>
                <h6 style={{ color: "#04802B" }}>Card Attributes</h6>
   
                <Button onClick={() => this.props.cardFilterSelect(null)}>
                  All
                </Button>
                {filterButtons}
              </ButtonGroup>
            </div>
          </div>
        </div>
      );
    }
  }
  export default Filter;