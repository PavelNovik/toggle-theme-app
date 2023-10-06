import React, { useState } from 'react';
import { ThemeProvider } from "styled-components";
import './App.css';
import Header from "./Header";
import normalLogo from "./assets/logo.png";
import crazyLogo from "./assets/crazyLogo.jpg";
import Button from "./Switch";

const App = () => {
    const normal = {
        primaryColor: "#FFA72A",
        accentColor: "#458622",
        backgroundColor: "#FFC777",
        textColor: "#504f4d",
        secondaryColor: "#7F5315",
        logo: normalLogo,
        rotate: false
    }
    const crazy = {
        primaryColor: "#1B8C81",
        accentColor: "#458622",
        backgroundColor: "#8FC266",
        textColor: "#D94B2B",
        secondaryColor: "#B9667F",
        logo: crazyLogo,
        rotate: true
    }
    const [normalTheme, setNormalTheme] = useState<boolean>(true)

    const onClickHandler = function () {
        setNormalTheme(!normalTheme);
    };

    return (
        <ThemeProvider theme={normalTheme ? crazy : normal}>

            <Header />
            {/*<button onClick={toggleTheme} >Click me</button>*/}
            <Button nameBtn={"Click me"} onClickHandler={onClickHandler} />
        </ThemeProvider>
    );
}

export default App;
