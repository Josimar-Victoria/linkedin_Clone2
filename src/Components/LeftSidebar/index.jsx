import React from "react";
import { Link } from "react-router-dom";
import {
  AddPhotoText,
  AddText,
  ArCard,
  CardBackground,
  CommunityCard,
  Conatiner,
  Item,
  Photo,
  UserInfo,
  Widget,
} from "./styles";

export default function LeftSidebar() {
  return (
    <Conatiner>
      <ArCard>
        <UserInfo>
          <CardBackground />
          <Link>
            <Photo />
            <AddText>Bienvenido!!</AddText>
          </Link>
          <Link>
            <AddPhotoText>añadir foto</AddPhotoText>
          </Link>
        </UserInfo>
        <Widget>
          <Link>
            <div>
              <span>Conexiones</span>
              <span>Haga crecer su red</span>
            </div>
            <img src="/images/widget-icon.svg" alt='icons'/>
          </Link>
        </Widget>
        <Item>
          <span>
            <img src="/images/item-icon.svg" alt='icons'/>
            My Items
          </span>
        </Item>
        </ArCard>
      <CommunityCard>
        <Link>
           <span>Grupos</span>
        </Link>
        <Link>
         <span>
         Eventos
          <img src="/images/plus-icon.svg" alt='icons'/>
         </span>
        </Link>
        <Link>
          <span>Hashtags segidos</span>
        </Link>
        <Link>
          <span>Descubrir más</span>
        </Link>
      </CommunityCard>
    </Conatiner>
  );
}
