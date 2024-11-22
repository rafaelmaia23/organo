import "./TeamMember.css";

export const TeamMember = ({ name, image, position }) => {
    return (
        <div className="team-member">
            <div className="team-member--header">
                <img src={image} alt={name} />
            </div>
            <div className="team-member--footer">
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    );
};
