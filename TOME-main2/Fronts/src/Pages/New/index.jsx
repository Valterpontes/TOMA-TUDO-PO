import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { TextArea } from "../../Components/TextArea"
import { Container, Form } from "./style";
import { NoteItem } from "../../Components/NoteItem";
import { Section } from "../../Components/Section";
import { Button } from "../../Components/Button";
import { Link } from "react-router-dom"

export function New() {
    return(
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <h1>Criar Nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>

                    <Input
                        placeholder="Título"
                    />

                    <TextArea placeholder="Observações"/>

                    <Section title="Links úteis">
                        <NoteItem value="https://rocketseat.com.br"/>
                        <NoteItem isNew={true} placeholder="Novo Link"/>
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="React"/>
                            <NoteItem isNew={true} placeholder="Nova tag"/>
                        </div>
                    </Section>

                    <Button title="Salvar"/>

                </Form>
            </main>
        </Container>
    )
}