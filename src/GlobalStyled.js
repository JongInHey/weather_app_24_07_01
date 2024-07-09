import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
    ${reset}

    a {
        text-decoration: none;
        color: #eee;
    }
    body {
        color: white;
        font-family: "Noto Sans KR", sans-serif;
    }
`;
