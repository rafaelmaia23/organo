import { TeamMember } from "../TeamMember/TeamMember";
import "./Team.css";

export const Team = (props) => {
    return (
        props.teamMembers.length > 0 && (
            <section
                className="team"
                style={{ backgroundColor: props.secondaryColor }}
            >
                <h3 style={{ borderColor: props.primaryColor }}>
                    {props.name}
                </h3>
                <div className="team-members">
                    {props.teamMembers.map((teamMember) => (
                        <TeamMember
                            key={teamMember.name}
                            name={teamMember.name}
                            position={teamMember.position}
                            image={teamMember.image}
                            color={props.primaryColor}
                        />
                    ))}
                </div>
            </section>
        )
    );
};
