import Header from "./Components/Header/Header";
import CharacterRatings from "./Components/CharacterRatings/CharacterRatings";
import CharacterCardsSection from "./Components/CharacterCardsSection/CharacterCardsSection";
import { characters } from "../public/fma-data";

function App() {
  return (
    <>
      <Header></Header>
      <CharacterRatings characters={characters}></CharacterRatings>
      <CharacterCardsSection characters={characters}></CharacterCardsSection>
    </>
  );
}

export default App;
