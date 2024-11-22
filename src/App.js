import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import { Footer } from "./components/Footer/Footer";

function App() {
    const teams = [
        {
            name: "Programação",
            primaryColor: "#57c278",
            secondaryColor: "#d9f7e9",
        },
        {
            name: "Frontend",
            primaryColor: "#82CFFA",
            secondaryColor: "#E8F8FF",
        },
        {
            name: "Data Science",
            primaryColor: "#A6D157",
            secondaryColor: "#F0F8E2",
        },
        {
            name: "Devops",
            primaryColor: "#E06B69",
            secondaryColor: "#FDE7E8",
        },
        {
            name: "Ux e Design",
            primaryColor: "#DB6EBF",
            secondaryColor: "#FAE9F5",
        },
        {
            name: "Mobile",
            primaryColor: "#FFBA05",
            secondaryColor: "#FFF5D9",
        },
        {
            name: "Inovação e Gestão",
            primaryColor: "#FF8A29",
            secondaryColor: "#FFEEDF",
        },
    ];

    const [teamMembers, setTeamMembers] = useState([]);

    const onNewTeamMemberRegister = (newTeamMember) => {
        console.log(newTeamMember);
        setTeamMembers([...teamMembers, newTeamMember]);
    };

    return (
        <div className="App">
            <Banner />
            <Form
                teams={teams.map((team) => team.name)}
                onRegister={(newTeamMember) =>
                    onNewTeamMemberRegister(newTeamMember)
                }
            />
            {teams.map((team) => (
                <Team
                    key={team.name}
                    name={team.name}
                    primaryColor={team.primaryColor}
                    secondaryColor={team.secondaryColor}
                    teamMembers={teamMembers.filter(
                        (teamMember) => teamMember.team === team.name
                    )}
                />
            ))}
            <Footer />
        </div>
    );
}

export default App;
