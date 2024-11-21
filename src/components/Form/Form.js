import { useState } from "react";
import { Button } from "../Button/Button";
import { DropdownList } from "../DropdownList/DropdownList";
import TextInput from "../TextInput";
import "./Form.css";

export const Form = (props) => {
    const teams = [
        "Programação",
        "Frontend",
        "Data Science",
        "Devops",
        "Ux e Design",
        "Mobile",
        "Inovação e Gestão",
    ];

    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [image, setImage] = useState("");
    const [team, setTeam] = useState("");

    const onSave = (event) => {
        event.preventDefault();
        props.onRegister({ name, position, image, team });
        // console.log("Form submitted => ", name, position, image, team);
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
        </section>
    );
};
