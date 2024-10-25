import { Container, Form, Avatar } from "./style";
import { useState } from "react";
import { useAuth } from "../../Hooks/auth";
import { FiArrowLeft, FiUsers, FiMail, FiLock, FiUser, FiCamera} from "react-icons/fi"
import { Input } from "../../Components/Input";
import { Link } from "react-router-dom"
import { Button } from "../../Components/Button";

export function Profile() {

    const { user, updateProfile } = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState()
    const [passwordNew, setPasswordNew] = useState()

    async function handleUpdate() {
        
        const user = {
            name, 
            email,
            password: passwordNew,
            old_password: passwordOld
        }
        
        await updateProfile({user})
    }

    return(
        <Container>
            
            <header>
                <Link to="/">
                    <FiArrowLeft/>
                </Link>
            </header>

            <Form>
                
                <Avatar>
                    <img
                        src="https://github.com/SauronNoMosuko.png" 
                        alt="Foto do Usuário"
                      />

                    <label htmlFor="avatar">

                        <FiCamera/>

                        <input
                            id="avatar"
                            type="file"
                        />

                    </label>

                </Avatar>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordOld(e.target.value)}
                />

                <Input
                    placeholder="Nova Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordNew(e.target.value)}
                />

                <Button title="Salvar" onClick={handleUpdate}/>

            </Form>

        </Container>
    )
}