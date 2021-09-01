import React from "react";
import AppsIcon from "@material-ui/icons/Apps";
import { Link } from "react-router-dom";
import {
  Container,
  Content,
  Logo,
  Nav,
  NavList,
  NavListWrap,
  Search,
  SearchIcon,

  SignOut,

  User,
  Work,
} from "./styles";

export default function Header() {
  return (
    <Container>
      <Content>
        <Logo>
          <Link to="/">
            <img src="/images/home-logo.svg" alt="logo" />
          </Link>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="search icon" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <Link to="/">
                <img src="/images/nav-home.svg" alt="nav icon" />
                <span>Inicio</span>
              </Link>
            </NavList>
            <NavList>
              <Link to="/">
                <img src="/images/nav-network.svg" alt="nav icon" />
                <span>Mi Red</span>
              </Link>
            </NavList>
            <NavList>
              <Link to="/">
                <img src="/images/nav-jobs.svg" alt="nav icon" />
                <span>Trabajos</span>
              </Link>
            </NavList>
            <NavList>
              <Link to="/">
                <img src="/images/nav-notifications.svg" alt="nav icon" />
                <span>Notificasiones</span>
              </Link>
            </NavList>
            <User>
              <Link to="/">
                <img src="/images/user.svg" alt="user icon" />
                <span>Yo</span>
                <img src="/images/down-icon.svg" alt="img" />
              </Link>
                <SignOut>
                  <Link to="/">
                     Cerrar Sesion
                  </Link>
                </SignOut>
            </User>

            <Work>
              <Link to="/">
                <span>
                  <AppsIcon />
                </span>
                <p>Productos</p>
              </Link>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
}
