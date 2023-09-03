import Header from "./Components/Header/Header";
import CharacterRatingsSection from "./Components/CharacterRatingsSection/CharacterRatingsSection";
import CharacterCardsSection from "./Components/CharacterCardsSection/CharacterCardsSection";
import CharacterCard from "./Components/CharacterCard/CharacterCard";
import TableRow from "./Components/TableRow/TableRow";
import { data } from "../public/fma-data";

const characterCards = data.map(char => {
    return (
        <CharacterCard 
            key={char.name}
            name={char.name} 
            nickName={char.nickName} 
            image={char.imageUrl} 
            description={char.background}/>
    )
})

const topChars = data.filter(char => char.votes >= 93);

const tableRows = topChars.map((char, i) => {
    return (
        <TableRow 
            key={char.name}
            name={char.nickName === null ? char.name : `${char.name} "${char.nickName}"`}
            skillSet={char.skillset.join(", ")}
            votes={char.votes}
            className={i % 2 === 0 ? "light" : "dark"}
        />
    )
})

function App() {
  return (
    <>
        <Header />
        <CharacterRatingsSection tableRows={tableRows} />
        <CharacterCardsSection characterCards={characterCards} />
    </>
  )
}

export default App;