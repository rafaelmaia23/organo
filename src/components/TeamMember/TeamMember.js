import { AiFillCloseCircle } from "react-icons/ai";
import "./TeamMember.css";

export const TeamMember = ({ teamMember, color, onDelete }) => {
    return (
        <div className="team-member">
            <AiFillCloseCircle
                size={25}
                className="delete"
                onClick={() => onDelete(teamMember.id)}
            />
            <div
                className="team-member--header"
                style={{ backgroundColor: color }}
            >
                <img src={teamMember.image} alt={teamMember.name} />
            </div>
            <div className="team-member--footer">
                <h4>{teamMember.name}</h4>
                <h5>{teamMember.position}</h5>
            </div>
        </div>
    );
};
