import { TeamMember } from "../TeamMember/TeamMember";
import "./Team.css";
import hexToRgba from "hex-to-rgba";

export const Team = ({ team, teamMembers, onDelete, changeTeamColor }) => {
    return (
        teamMembers.length > 0 && (
            <section
                className="team"
                style={{
                    backgroundImage: "url(/images/fundo.png)",
                    backgroundColor: hexToRgba(team.color, "0.4"),
                }}
            >
                <input
                    onChange={(event) =>
                        changeTeamColor(event.target.value, team.id)
                    }
                    value={team.color}
                    type="color"
                    className="input-color"
                />
                <h3 style={{ borderColor: team.color }}>{team.name}</h3>
                <div className="team-members">
                    {teamMembers.map((teamMember) => (
                        <TeamMember
                            key={teamMember.name}
                            teamMember={teamMember}
                            color={team.color}
                            onDelete={onDelete}
                        />
                    ))}
                </div>
            </section>
        )
    );
};
