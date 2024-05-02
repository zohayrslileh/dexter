import Appearance from "@/View/Appearance"
import { Lang } from "@/Tools/Language"
import styled from "@emotion/styled"

/**
 * Donation
 * 
 * @returns 
 */
export default function () {

    return <Container>
        <p id="message">
            <b><Lang>Help us</Lang> </b>
            <Lang>to keep this extension working</Lang>
            <br />
            <Lang>by makingg a small</Lang>
            <b> <Lang>donation of 1$ or 2$</Lang></b>
        </p>
        <a href="#"><Lang>Donation</Lang></a>
    </Container>
}

/**
 * Container
 * 
 */
const Container = styled.div`
    background-color: ${() => Appearance.theme.schema.COLOR.hex};
    color: ${() => Appearance.theme.schema.BACKGROUND.hex};
    margin: 4px;
    flex: 1;
    display: grid;
    gap: 10px;
    padding: 13px;

    > #message {
        font-size: 18px;
        line-height: 1.4;
        margin: 0;

        > b {
            font-family: ${() => Appearance.schema.FONT_BOLD};
        }
    }

    > a {
        text-decoration: none;
        background-color: ${() => Appearance.schema.GREEN_COLOR.hex};
        border: 3.5px solid ${() => Appearance.schema.BLACK_COLOR.hex};
        color: ${() => Appearance.schema.PRIMARY_COLOR.hex};
        font-weight: bold;
        font-size: 20px;
        padding: 7px 10px;
        width: fit-content;
        margin: auto;
        border-radius: 50px;
    }
`