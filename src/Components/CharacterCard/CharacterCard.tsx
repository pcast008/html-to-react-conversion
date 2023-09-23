import "./CharacterCard.css";

interface CharacterCardProps {
  name: string;
  nickName: string | null;
  imageUrl: string;
  background: string;
}

function CharacterCard({
  name,
  nickName,
  imageUrl,
  background,
}: CharacterCardProps): JSX.Element {
  return (
    <div className="card">
      <div className="card-titles">
        <h3>{name}</h3>
        <h4>{nickName}</h4>
      </div>
      <img src={imageUrl} alt="" />
      <p>{background}</p>
    </div>
  );
}

export default CharacterCard;
