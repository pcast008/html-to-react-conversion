import "./CharacterRatingsSection.css";

function CharacterRatingsSection({ tableRows }) {
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
                <tbody>
                    {tableRows}
                </tbody>            
            </table>
        </section>
    )
}

export default CharacterRatingsSection;