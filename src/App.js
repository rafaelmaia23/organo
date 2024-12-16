import { useEffect, useReducer, useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import { Footer } from "./components/Footer/Footer";
import { v4 as uuidv4 } from "uuid";
import { SiOpenmediavault } from "react-icons/si";
import teamMembersReducer, {
    ADD_TEAM_MEMBER,
    FAVORITE_TEAM_MEMBER,
    REMOVE_TEAM_MEMBER,
    SET_TEAM_MEMBERS,
} from "./reducers/teamMembresReducer";

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

    const [isFormVisible, setIsFormVisible] = useState(true);

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

    // const [teamMembers, setTeamMembers] = useState(seedForTeamMembers);
    const [teamMembers, dispatch] = useReducer(
        teamMembersReducer,
        seedForTeamMembers
    );

    const addTeamMember = (teamMember) => {
        dispatch({ type: ADD_TEAM_MEMBER, teamMember });
    };

    const removeTeamMember = (id) => {
        dispatch({ type: REMOVE_TEAM_MEMBER, id });
    };

    useEffect(() => {
        fetch("http://localhost:8080/teamMembers")
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: SET_TEAM_MEMBERS, payload: data });
            });
    }, []);

    // function deleteTeamMember(id) {
    //     setTeamMembers(
    //         teamMembers.filter((teamMember) => teamMember.id !== id)
    //     );
    // }

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
        dispatch({ type: FAVORITE_TEAM_MEMBER, id });
    };

    const onNewTeamMemberRegister = (newTeamMember) => {
        // setTeamMembers([...teamMembers, newTeamMember]);
        addTeamMember(newTeamMember);
    };

    const onNewTeamRegister = (newTeam) => {
        setTeams([...teams, { ...newTeam, id: uuidv4() }]);
    };

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
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
                isVisible={isFormVisible}
            />
            <section className="teams">
                <header className="teams-header">
                    <h1>Minha organização</h1>
                    <div
                        className="teams-header-icon"
                        onClick={toggleFormVisibility}
                    >
                        <SiOpenmediavault size={35} color="#FFF" />
                    </div>
                </header>
                {teams.map((team, id) => (
                    <Team
                        changeTeamColor={changeTeamColor}
                        key={id}
                        team={team}
                        teamMembers={teamMembers.filter(
                            (teamMember) => teamMember.team === team.name
                        )}
                        onDelete={removeTeamMember}
                        onFavorite={onFavorite}
                    />
                ))}
            </section>
            <Footer />
        </div>
    );
}

export default App;
