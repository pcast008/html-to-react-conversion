import React from "react";
import "./CharacterCardsSection.css"

class CharacterCardsSection extends React.Component {
    render() {
        return (
            <section id="character-cards">
                {this.props.characterCards}
            </section>
        )
    }
}

export default CharacterCardsSection;