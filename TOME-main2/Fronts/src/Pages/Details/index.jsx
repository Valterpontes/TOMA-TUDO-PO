import { Fragment } from "react"
import { Container, Links, Content } from "./style.js"
import { Header } from "../../Components/Header/index.jsx"
import { Section } from "../../Components/Section/index.jsx"
import { Button } from "../../Components/Button"
import { Tag } from "../../Components/Tags/index.jsx"
import { ButtonText } from "../../Components/ButtonText/index.jsx"

export function Details() {
  

  
  return(
    <Fragment>

      <Container>
      <Header/>

        <main>
          <Content>

            <ButtonText title="Excluir Nota"/>

            <h1>Introdução ao React</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dignissimos itaque natus facilis delectus, expedita possimus assumenda eos fugit at esse aut consequatur ipsam laboriosam iusto voluptates doloribus! Labore, officiis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor iste odio nisi cupiditate, aliquid maiores doloribus voluptas amet placeat fugit harum unde voluptatem ipsum expedita quo laborum vero dignissimos! Voluptate.</p>

            <Section title = "Links Úteis">
              <Links>
                <li><a href="https://www.rocketseat.com.br/">https://www.rocketseat.com.br/</a></li>
                <li><a href="https://www.rocketseat.com.br/">https://www.rocketseat.com.br/</a></li>
              </Links>
            </Section>

            <Section title="Marcadores">
              <Tag title="express"/>
              <Tag title="node"/>
            </Section>

            <Button title= "Voltar" />


          </Content>
        </main>
      </Container>

    </Fragment>
  )

} 