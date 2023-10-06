import React from "react";
import styled, {keyframes, withTheme} from "styled-components";
import logo from "./assets/logo.png"

const Header = (props: { theme: object }) => (
    <Container>
        <div>
            <Logo src={logo} />
        </div>
    </Container>
);

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  height: 10rem;
  animation: ${props => (props.theme.rotate ? rotate360 : "none")} 2s linear infinite;
`;

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.background};
  padding: 4rem;
  text-align: center;
  font-size: 2rem;
`;

export default withTheme(Header);