import styled from "styled-components";

export const Container = styled.div`
  grid-area: "Rightside";
  margin: 10px;
`;
export const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0/ 20%);
  padding: 12px;
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgb(0, 0, 0, 0.9);
`;
export const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 16px;

    & > div {
      display: flex;
      flex-direction: column;
    }

    button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      cursor: pointer;
      align-items: center;
      padding: 16px;
      border-radius: 15px;
      font-weight: 600;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      max-height: 32px;
      max-width: 480px;
      text-align: center;
      outline: none;
    }
  }
`;

export const Avatar = styled.div`
  background-image: url("data:image/png;base64,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");
  background-size: content;
  background-position: center;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;

export const Recommendation = styled.a`
  color: #0a66c2;
  display: flex;
  align-items: center;
  font-size: 16px;
`;

export const BannerCard = styled(FollowCard)`
img{
    width: 100%;
    height: 100%;
}`;
