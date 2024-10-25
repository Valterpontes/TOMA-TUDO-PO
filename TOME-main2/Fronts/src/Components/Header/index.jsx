import { RiShutDownLine } from "react-icons/ri"
import { Container, Profile, Logout } from "./style.js";
import { useAuth } from "../../Hooks/auth.jsx";

export function Header() {

    const { signOut } = useAuth()

    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/SauronNoMosuko.png" alt="Foto de Usuário" />

                <div>
                    <span>Bem vindo</span>
                    <strong>Douglas Numeriano</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}