import "./CharacterCardsSection.css";
import CharacterCard from "../CharacterCard/CharacterCard";
import { Character } from "../../../public/fma-data";

interface CharacterCardsSectionProps {
  characters: Character[];
}

function CharacterCardsSection({
  characters,
}: CharacterCardsSectionProps): JSX.Element {
  return (
    <section id="character-cards">
      {characters.map((char) => {
        return (
          <CharacterCard
            key={char.name}
            name={char.name}
            nickName={char.nickName}
            imageUrl={char.imageUrl}
            background={char.background}
          />
        );
      })}
    </section>
  );
}

export default CharacterCardsSection;
