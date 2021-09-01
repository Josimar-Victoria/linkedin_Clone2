import styled from "styled-components";

export const Section = styled.div`
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  top: 20px;
  h5 {
    a {
      font-weight: 700;
      color: #0a66c2;
      font-size: 15px;
    }
  }
  p {
    font-size: 14px;
    color: #434649;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

export const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
  margin-top: 10px;
`;

export const Content = styled.div``;

export const Layout = styled.div`
display: grid;
grid-template-areas: "lefside main rightside";
grid-template-columns: minmax(0, 5fr)  minmax(0, 12fr)  minmax(300px, 7fr);
column-gap: 25px;
row-gap: 25px;
grid-template-rows: auto;
margin: 25px 0;
@media(max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;;
}

`