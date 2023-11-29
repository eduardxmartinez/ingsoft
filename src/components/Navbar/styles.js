import styled from "styled-components";
import { NavLink as LinkRouter } from "react-router-dom";

export const Nav = styled.nav`
align-items: center;
background: navy;
top: 0;
display: flex;
height: 50px;
justify-content: space-evenly;
left: 0;
margin: 0 auto;
position: fixed;
right: 0;
width: 100%;
z-index: 100;
color:white;
`
export const Link = styled(LinkRouter)`
align-items: center;
color: white;
display: inline-flex;
height: 100%;
justify-content: center;
text-decoration: none;
width: 50%%;
`