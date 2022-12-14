import styled from "styled-components";

export const StyedNavDetails = styled.header`
    width: 100%;
    color: #ffff;
    nav{
        display: flex;
        text-align:center;
        flex-direction: column;
        background-color: #808080;

        li{
            display: inline-flex;
            margin-left: 10px;
            list-style: none;
        }
        a{
            text-decoration: none;
            color: #ffff;
            margin-bottom: 5px; 
        }
        a:hover{
            text-decoration: underline;
        }
        @media screen and (max-width: 1024px){
            height: 47px;
            font-size: 14.3px;
        }
    }
`