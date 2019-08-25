import React from 'react';
import { render } from 'react-dom';
import TheCooperators from './TheCooperators'
import cooperatorsImage from './../cooperatorsReport.png';
import './styles/Card.css';

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.componentToRender = {
            "The Co-operators": <TheCooperators />
        };
        this.backgroundImage = {
            "The Co-operators": cooperatorsImage
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        render(
            this.componentToRender[this.props.title],
            document.getElementById('App')
        );
    }

    render() {
        return (
            <div className = "Card" onClick = {this.onClick} style = {
                {
                    backgroundImage: `url(${this.backgroundImage[this.props.title]})`,
                    backgroundSize: "600px"
                }
            }>
                <h2>{this.props.title}</h2>
            </div>
        );
    }
}

export default Card;