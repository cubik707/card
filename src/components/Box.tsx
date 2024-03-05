import styled, {css} from "styled-components";
import {myTheme} from "../styles/Theme.styled";

type BtnPropsType = {
    btnType : "primary" | "outlined"
}

export const Box = styled.div`
    width: 300px;
    height: 350px;
    border-radius: 15px;
    background-color: ${myTheme.colors.card};
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.1);
`

export const Image = styled.img.attrs((props) => ({
        src: props.src
    })
)`
    width: 280px;
    height: 170px;
    border-radius: 10px;
    border: 1px solid ${myTheme.colors.imgBorder};
    box-shadow: 0 4px 4px 1px rgba(0, 0, 0, 0.25);
    
    margin: 10px 10px 20px 10px;
`

export const Headline = styled.h1`
    font-size: 16px;
    margin: 0 0 20px 20px ;
`

export const Text = styled.p`
    font-size: 12px;
    margin: 20px;
    color: ${myTheme.colors.text};
`

export const ButtonContainer = styled.div`
    margin-left: 20px;
    display: flex;
    gap: 12px;
`


export const Button = styled.button`
    width: 86px;
    height: 30px;
    border: none;
    border-radius: 5px;    
    padding: 6px 20px;
    font-size: 10px;
    color: ${myTheme.colors.buttonText};
    font-weight: bold;

    ${props => props.btnType === "outlined" && css<BtnPropsType>`
        border: 2px solid ${myTheme.colors.button};
        color: ${myTheme.colors.button};
        background-color: transparent;
        
        &:hover{
            border-color: ${myTheme.colors.buttonHover};
            color: ${myTheme.colors.buttonHover};
            background-color: transparent;
        }
    `}

    ${props => props.btnType === "primary" && css<BtnPropsType>`
        background-color: ${myTheme.colors.button};
    
        &:hover {
            background-color: ${myTheme.colors.buttonHover};
        }
    `}
`