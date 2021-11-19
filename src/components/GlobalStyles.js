import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    a {color:#000;text-decoration:none;}
    .contents {margin-top:80px;}
`;
export default GlobalStyles;