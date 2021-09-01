import {
  Create,
  Event,
  Photo,
  VerticalSplit,
  YouTube,
} from "@material-ui/icons";
import React from "react";
import { Conatiner } from "../LeftSidebar/styles";
import { Inputicon } from "./Inputicon";
import { ShareBox } from "./styles";

export default function Main() {
  return (
    <Conatiner>
      <ShareBox>
        <div className="feed__container_Input">
          <div className="feed__input">
            <Create className="feed__icons_input" />
            <form className="">
              <input type="text" placeholder="Crear Publication" />
              <button type="submit">Enviar</button>
            </form>
          </div>
          <div className="fee__input_icons">
            <Inputicon Icon={Photo} title="Fotos" color="#70b5f9" />
            <Inputicon Icon={YouTube} title="Videos" color="#7fc15e" />
            <Inputicon Icon={Event} title="Eventos" color="#e7a33e" />
            <Inputicon
              Icon={VerticalSplit}
              title="Escribir articulo"
              color="#fc9295"
            />
          </div>
        </div>
      </ShareBox>
    </Conatiner>
  );
}
