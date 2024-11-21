import { useState } from "react";
import Banner from "./components/Banner";
import { Form } from "./components/Form/Form";

function App() {
    const [teamMembers, setTeamMembers] = useState([]);

    const onNewTeamMemberRegister = (newTeamMember) => {
        console.log(newTeamMember);
        setTeamMembers([...teamMembers, newTeamMember]);
    };

    return (
        <div className="App">
            <Banner />
            <Form
                onRegister={(newTeamMember) =>
                    onNewTeamMemberRegister(newTeamMember)
                }
            />
        </div>
    );
}

export default App;
