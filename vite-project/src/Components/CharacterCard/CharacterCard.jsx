import "./CharacterCard.css";

function CharacterCard({ name, nickName, image, description }) {
    return(
        <div className="card">
            <div className="card-titles">
                <h3>{name}</h3>
                <h4>{nickName}</h4>
            </div>
            <img
                src={image}
                alt=""
            />
            <p>
                {description}
            </p>
        </div>
    )
}

export default CharacterCard;