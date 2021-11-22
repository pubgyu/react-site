import { NavLink } from "react-router-dom"
import styled from 'styled-components'

const HeaderStyle = styled.header`
    position:fixed;
    top:0;
    left:0;
    display:flex;
    width:100%;
    padding:15px;
    box-sizing:border-box;
    background-color:#fff;
    border-bottom:1px solid #ddd;
    overflow:hidden;
    z-index:100;
    justify-content:space-between;
    align-items: center;
    & > .logo {
        font-size:20px;
        color:#666;
        letter-spacing:3px;
    }
    & > ul {
        font-size:0;
        li {
            display:inline-block;
            margin:0 20px;
            a {
                font-size:14px;
                color:#666;
                text-transform:uppercase;
            }
        }
    }
`;

function Header() {
    return (
        <HeaderStyle id="header">
            <h1 className="logo">PUBGYU</h1>
            <ul>
                <li>
                    <NavLink to="/" activeclassname="is-active">movie</NavLink>
                </li>
                <li>
                    <NavLink to="/redux" activeclassname="is-active">redux</NavLink>
                </li>
            </ul>
        </HeaderStyle>
    )
}

export default Header;