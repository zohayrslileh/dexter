import Appearance from "@/View/Appearance"
import { Lang } from "@/Tools/Language"
import styled from "@emotion/styled"

/**
 * Request
 * 
 * @returns 
 */
export default function () {

    return <Container>
        <p id="title">
            <Lang>Request a feature you</Lang>
            <br />
            <Lang>wich to be on Dexter</Lang>!
        </p>
        <p id="note">
            <Lang>if your feature idea is really good! you</Lang>
            <br />
            <Lang>will win a</Lang>
            <b> <Lang>lifetime subscription for free</Lang></b>
        </p>
        <a href="#"><Lang>Request a Feature</Lang></a>
    </Container>
}

/**
 * Container
 * 
 */
const Container = styled.div`
    display: grid;
    gap: 10px;

    > #title {
        font-size: 20px;
        font-family: ${() => Appearance.schema.FONT_MEDIUM};
        margin: auto;
        width: fit-content;
        line-height: 1.2;
        padding-bottom: 10px;
        border-bottom: 1px solid ${() => Appearance.theme.schema.COLOR.rgba(0.3)};
    }

    > #note {
        font-size: 11px;
        line-height: 1.2;
        margin: 0;

        > b {
            color: ${() => Appearance.schema.GREEN_COLOR.hex};
            font-weight: 100;
        }
    }

    > a {
        text-decoration: none;
        background-color: ${() => Appearance.schema.GREEN_COLOR.hex};
        border: 4px solid ${() => Appearance.schema.BLACK_COLOR.hex};
        color: ${() => Appearance.schema.PRIMARY_COLOR.hex};
        font-weight: bold;
        font-size: 20px;
        padding: 5px 10px;
        width: fit-content;
        margin: auto;
    }
`