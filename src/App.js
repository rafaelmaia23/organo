import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import { Footer } from "./components/Footer/Footer";
import { v4 as uuidv4 } from "uuid";

function App() {
    const [teams, setTeams] = useState([
        {
            id: uuidv4(),
            name: "Programação",
            color: "#57c278",
        },
        {
            id: uuidv4(),
            name: "Frontend",
            color: "#82CFFA",
        },
        {
            id: uuidv4(),
            name: "Data Science",
            color: "#A6D157",
        },
        {
            id: uuidv4(),
            name: "Devops",
            color: "#E06B69",
        },
        {
            id: uuidv4(),
            name: "Ux e Design",
            color: "#DB6EBF",
        },
        {
            id: uuidv4(),
            name: "Mobile",
            color: "#FFBA05",
        },
        {
            id: uuidv4(),
            name: "Inovação e Gestão",
            color: "#FF8A29",
        },
    ]);

    const seedForTeamMembers = [
        {
            favorite: false,
            id: uuidv4(),
            name: "JULIANA AMOASEI",
            position: "Software Developer and Instructor",
            image: "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
            team: teams[0].name,
        },
        {
            favorite: false,
            id: uuidv4(),
            name: "DANIEL ARTINE",
            position: "Software Engineer at Stone Age",
            image: "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
            team: teams[0].name,
        },
        {
            favorite: false,
            id: uuidv4(),
            name: "GUILHERME LIMA",
            position: "Python and JavaScript Developer at Alura",
            image: "https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
            team: teams[0].name,
        },
        {
            favorite: false,
            id: uuidv4(),
            name: "PAULO SILVEIRA",
            position: "Hipster and CEO at Alura",
            image: "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
            team: teams[0].name,
        },
        {
            favorite: false,
            id: uuidv4(),
            name: "JULIANA AMOASEI",
            position: "Software Developer and Instructor",
            image: "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
            team: teams[1].name,
        },
        {
            favorite: false,
            id: uuidv4(),
            name: "DANIEL ARTINE",
            position: "Software Engineer at Stone Age",
            image: "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
            team: teams[1].name,
        },
        {
            favorite: false,
            id: uuidv4(),
            name: "GUILHERME LIMA",
            position: "Python and JavaScript Developer at Alura",
            image: "https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
            team: teams[1].name,
        },
        {
            favorite: false,
            id: uuidv4(),
            name: "PAULO SILVEIRA",
            position: "Hipster and CEO at Alura",
            image: "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
            team: teams[1].name,
        },
        {
            favorite: false,
            id: uuidv4(),
            name: "JULIANA AMOASEI",
            position: "Software Developer and Instructor",
            image: "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
            team: teams[2].name,
        },
        {
            favorite: false,
            id: uuidv4(),
            name: "DANIEL ARTINE",
            position: "Software Engineer at Stone Age",
            image: "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
            team: teams[2].name,
        },
        {
            favorite: false,
            id: uuidv4(),
            name: "GUILHERME LIMA",
            position: "Python and JavaScript Developer at Alura",
            image: "https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
            team: teams[2].name,
        },
        {
            favorite: false,
            id: uuidv4(),
            name: "PAULO SILVEIRA",
            position: "Hipster and CEO at Alura",
            image: "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
            team: teams[2].name,
        },
        {
            favorite: false,
            id: uuidv4(),
            name: "JULIANA AMOASEI",
            position: "Software Developer and Instructor",
            image: "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
            team: teams[3].name,
        },
        {
            favorite: false,
            id: uuidv4(),
            name: "DANIEL ARTINE",
            position: "Software Engineer at Stone Age",
            image: "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
            team: teams[3].name,
        },
        {
            favorite: false,
            id: uuidv4(),
            name: "GUILHERME LIMA",
            position: "Python and JavaScript Developer at Alura",
            image: "https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
            team: teams[3].name,
        },
        {
            favorite: false,
            id: uuidv4(),
            name: "PAULO SILVEIRA",
            position: "Hipster and CEO at Alura",
            image: "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
            team: teams[3].name,
        },
        {
            favorite: false,
            id: uuidv4(),
            name: "JULIANA AMOASEI",
            position: "Software Developer and Instructor",
            image: "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
            team: teams[4].name,
        },
        {
            favorite: false,
            id: uuidv4(),
            name: "DANIEL ARTINE",
            position: "Software Engineer at Stone Age",
            image: "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
            team: teams[4].name,
        },
        {
            favorite: false,
            id: uuidv4(),
            name: "GUILHERME LIMA",
            position: "Python and JavaScript Developer at Alura",
            image: "https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
            team: teams[4].name,
        },
        {
            favorite: false,
            id: uuidv4(),
            name: "PAULO SILVEIRA",
            position: "Hipster and CEO at Alura",
            image: "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
            team: teams[4].name,
        },
        {
            favorite: false,
            id: uuidv4(),
            name: "JULIANA AMOASEI",
            position: "Software Developer and Instructor",
            image: "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
            team: teams[5].name,
        },
        {
            favorite: false,
            id: uuidv4(),
            name: "DANIEL ARTINE",
            position: "Software Engineer at Stone Age",
            image: "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
            team: teams[5].name,
        },
        {
            favorite: false,
            id: uuidv4(),
            name: "GUILHERME LIMA",
            position: "Python and JavaScript Developer at Alura",
            image: "https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
            team: teams[5].name,
        },
        {
            favorite: false,
            id: uuidv4(),
            name: "PAULO SILVEIRA",
            position: "Hipster and CEO at Alura",
            image: "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
            team: teams[5].name,
        },
    ];

    const [teamMembers, setTeamMembers] = useState(seedForTeamMembers);

    function deleteTeamMember(id) {
        setTeamMembers(
            teamMembers.filter((teamMember) => teamMember.id !== id)
        );
    }

    function changeTeamColor(color, id) {
        setTeams(
            teams.map((team) => {
                if (team.id === id) {
                    team.color = color;
                }
                return team;
            })
        );
    }

    const onFavorite = (id) => {
        setTeamMembers(
            teamMembers.map((teamMember) => {
                if (teamMember.id === id) {
                    teamMember.favorite = !teamMember.favorite;
                }
                return teamMember;
            })
        );
    };

    const onNewTeamMemberRegister = (newTeamMember) => {
        setTeamMembers([...teamMembers, newTeamMember]);
    };

    const onNewTeamRegister = (newTeam) => {
        setTeams([...teams, { ...newTeam, id: uuidv4() }]);
    };

    return (
        <div className="App">
            <Banner />
            <Form
                teams={teams.map((team) => team.name)}
                onRegister={(newTeamMember) =>
                    onNewTeamMemberRegister(newTeamMember)
                }
                onTeamRegister={onNewTeamRegister}
            />
            <section className="teams">
                <h1>Minha organização</h1>
                {teams.map((team, id) => (
                    <Team
                        changeTeamColor={changeTeamColor}
                        key={id}
                        team={team}
                        teamMembers={teamMembers.filter(
                            (teamMember) => teamMember.team === team.name
                        )}
                        onDelete={deleteTeamMember}
                        onFavorite={onFavorite}
                    />
                ))}
            </section>
            <Footer />
        </div>
    );
}

export default App;
