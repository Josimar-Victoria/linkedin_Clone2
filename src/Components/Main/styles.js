import styled from "styled-components";

export const Conatiner = styled.div`
  grid-area: "main";
`;

export const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

export const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
`;
export const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;
export const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;
  }
  img {
    width: 48px;
    height: 48px;
    align-items: center;
  }
  & div {
    display: flex;
    flex-direction: column;
    text-align: left;
    flex-grow: 1;
    flex-basis: 0;
    margin-left: 8px;
    overflow: hidden;
    span {
      &:first-child {
        font-size: 14px;
        font-weight: 700;
        color: rgba(0, 0, 0, 1);
      }
      &:nth-child(n + 1) {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }
  button {
    position: absolute;
    right: 0;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;
export const Description = styled.div`
  padding: 0 16px;
  overflow: height;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;

export const ShearIMg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

export const SocialCounts = styled.ul`
 line-height: 1.3;
 display: flex;
 align-items:  flex-start;
 overflow:auto;
 margin: 0 16px;
 padding: 8px 0;
 align-items: center;
 border-bottom:  1px solid #e9e5df;
 list-style:  none;
 li{
   margin-right: 5px;
   font-size: 12px;
   align-items: center;
   button{
     cursor: pointer;
     background-color: transparent;
     border: none;
   }
 }
`
export const SoialActions = styled.div`
align-items: center;
display: flex;
margin: 0;
button {
  background: transparent;
  border: solid 1px gray;
  border-radius: 50px;
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  margin: 0 10px;
  padding: 5px;

  @media screen and (max-width: 768px){
    span{
      margin-left: 8px
    }
  }
}
`