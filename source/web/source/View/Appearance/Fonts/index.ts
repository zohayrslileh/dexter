import RubikRegular from "./Rubik-Regular.ttf"
import RubikMedium from "./Rubik-Medium.ttf"
import RubikLight from "./Rubik-Light.ttf"
import RubikBold from "./Rubik-Bold.ttf"
import { css } from "@emotion/react"

/*
|-----------------------------
|  Fonts
|-----------------------------
|
|
*/
const fonts = css`

    @font-face {
        font-family: Rubik-Regular;
        src: url(${RubikRegular});
    }

    @font-face {
        font-family: Rubik-Medium;
        src: url(${RubikMedium});
    }

    @font-face {
        font-family: Rubik-Light;
        src: url(${RubikLight});
    }

    @font-face {
        font-family: Rubik-Bold;
        src: url(${RubikBold});
    }
`

export default fonts