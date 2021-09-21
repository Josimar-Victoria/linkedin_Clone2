/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Create,
  Event,
  MessageOutlined,
  Photo,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
  VerticalSplit,
  YouTube,
} from "@material-ui/icons";
import React from "react";
import { Conatiner } from "../LeftSidebar/styles";
import { Inputicon } from "./Inputicon";
import LikesIcons from "./LikesIcons";
import {
  Article,
  Description,
  ShareBox,
  SharedActor,
  ShearIMg,
  SocialCounts,
} from "./styles";
import "./styles.css";
export default function Main() {
  return (
    <Conatiner>
      <ShareBox>
        Share
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
      <div>
        <Article>
          <SharedActor>
            <a>
              <img src="/images/user.svg" alt="User" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>mas</button>
          </SharedActor>
          <Description>Description</Description>
          <ShearIMg>
            <a>
              <img
                src="https://ichef.bbci.co.uk/news/640/cpsprodpb/182B5/production/_111279989_053468858-1.jpg"
                alt="img"
              />
            </a>
          </ShearIMg>
          <SocialCounts>
            <li>
              <button>
                <img
                  src="	https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
                  alt="img"
                />
              </button>
              <button>
                <img
                  src="https://static-exp1.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22"
                  alt="img"
                />
              </button>
              <button>
                <img
                  src="https://static-exp1.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8"
                  alt="img"
                />
              </button>
              <span>759</span>
            </li>
            <li>345 comments</li>
          </SocialCounts>
        <div className="like__actions_icons">
        <LikesIcons Icons={ThumbUpAltOutlined} title='Like'/>
          <LikesIcons Icons={MessageOutlined} title='Comments'/>
          <LikesIcons Icons={ShareOutlined} title='Share'/>
          <LikesIcons Icons={SendOutlined} title='Send'/>
        </div>
        </Article>
      </div>
    </Conatiner>
  );
}
