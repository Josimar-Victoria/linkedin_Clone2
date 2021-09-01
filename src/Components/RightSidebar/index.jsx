import React from "react";
import {
  Container,
  Avatar,
  FeedList,
  FollowCard,
  Title,
  Recommendation,
  BannerCard,
} from "./styles";

export default function RightSidebar() {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Añadir a tu feed</h2>
          <img src="/images/feed-icon.svg" alt="icons" />
        </Title>
        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Linkedin</span>
              <button>Seguir</button>
            </div>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Videos</span>
              <button>Seguir</button>
            </div>
          </li>
        </FeedList>
        <Recommendation>
          Ver todas las recomendaciones
          <img src="/images/right-icon.svg" alt="iconst" />
        </Recommendation>
      </FollowCard>
      <BannerCard>
          <img src='https://pbs.twimg.com/media/DlxDLEWW0AA7cfh.jpg' alt="bannerCart"/>
      </BannerCard>
    </Container>
  );
}
