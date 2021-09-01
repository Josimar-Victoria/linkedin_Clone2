import React from 'react'
import { Link } from 'react-router-dom'
import LeftSidebar from '../../Components/LeftSidebar'
import Main from '../../Components/Main'
import RightSidebar from '../../Components/RightSidebar'
import { Container, Layout, Section } from './styles'

export default function Home() {
    return (
        <Container>
            <Section>
            <h5>
                <Link to="/">Adquiere aptitudes útiles </Link>
            </h5>
                <p> Accede gratis durante un mes a más de 17.000 cursos impartidos por expertos ... </p>
            </Section>
            <Layout>
              <LeftSidebar/>
              <Main/>
              <RightSidebar/>
            </Layout>
        </Container>
    )
}
