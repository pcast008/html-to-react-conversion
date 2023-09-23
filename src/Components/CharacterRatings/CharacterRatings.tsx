import "./CharacterRatings.css";
import { Component } from "react";
import { Character } from "../../../public/fma-data";

interface CharacterRatingsProps {
  characters: Character[];
}

class CharacterRatings extends Component<CharacterRatingsProps> {
  render() {
    const sortedCharacters = this.props.characters.sort(
      (a, b) => b.votes - a.votes
    );
    const topCharacters = sortedCharacters.filter((_char, i) => i <= 4);

    const renderTopCharacters = topCharacters.map((char, i) => {
      return (
        <tr key={char.name} className={i % 2 === 0 ? "dark" : "light"}>
          <td>
            {char.name}{" "}
            {char.name === "Edward Elrich" ? `"${char.nickName}"` : ""}
          </td>
          <td>{char.skillset.join(", ")}</td>
          <td>{char.votes}</td>
        </tr>
      );
    });

    return (
      <section id="character-ratings">
        <h4>Top Characters</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Skillset</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody>{renderTopCharacters}</tbody>
        </table>
      </section>
    );
  }
}

export default CharacterRatings;
