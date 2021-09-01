import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Entrar,
  Form,
  GoogleBtn,
  Hero,
  Nav,
  Section,
  SignIn,
} from "./styles";

export default function Login() {
  return (
    <Container>
      <Nav>
        <Link to="/">
          <img src="/images/login-logo.svg" alt="login_logo" />
        </Link>
        <div>
          <Entrar>Join now</Entrar>
          <SignIn>Sign In</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>¡Te damos la bienvenida a tu comunidad profesional!</h1>
          <img src="/images/login-hero.svg" alt="img" />
        </Hero>
        <Form>
          <GoogleBtn>
            <img src="/images/google.svg" alt="img" />
            Inicia sesión con Google
          </GoogleBtn>
        </Form>
      </Section>
    </Container>
  );
}
