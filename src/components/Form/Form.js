import { useState } from "react";
import { Button } from "../Button/Button";
import { DropdownList } from "../DropdownList/DropdownList";
import TextInput from "../TextInput";
import "./Form.css";

export const Form = ({ onRegister, teams, onTeamRegister }) => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [image, setImage] = useState("");
    const [team, setTeam] = useState("");

    const [teamName, setTeamName] = useState("");
    const [teamColor, setTeamColor] = useState("");

    const onSave = (event) => {
        event.preventDefault();
        onRegister({ name, position, image, team });
        setName("");
        setPosition("");
        setImage("");
        setTeam("");
    };

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextInput
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={(value) => setName(value)}
                />
                <TextInput
                    required={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={position}
                    onChange={(value) => setPosition(value)}
                />
                <TextInput
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    onChange={(value) => setImage(value)}
                />
                <DropdownList
                    required={true}
                    label="Time"
                    items={teams}
                    value={team}
                    onChange={(value) => setTeam(value)}
                />
                <Button>Criar Card</Button>
            </form>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    onTeamRegister({ name: teamName, color: teamColor });
                }}
            >
                <h2>Preencha os dados para criar um novo time.</h2>
                <TextInput
                    required={true}
                    label="Nome"
                    placeholder="Digite o nome do time"
                    value={teamName}
                    onChange={(value) => setTeamName(value)}
                />
                <TextInput
                    required={true}
                    label="color"
                    placeholder="Digite a cor do time"
                    value={teamColor}
                    onChange={(value) => setTeamColor(value)}
                />
                <Button>Criar um novo time</Button>
            </form>
        </section>
    );
};
