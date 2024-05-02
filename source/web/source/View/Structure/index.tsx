import { Lang } from "@/Tools/Language"
import styled from "@emotion/styled"
import Features from "./Features"
import Donation from "./Donation"
import Request from "./Request"

/**
 * Structure
 * 
 * @returns 
 */
export default function () {

    return <Container>
        <p id="message"><Lang>Good Morning!</Lang> 😊</p>
        <Features />
        <Request />
        <Donation />
    </Container>
}

/**
 * Container
 * 
 */
const Container = styled.div`
    text-align: center;
    line-height: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100%;

    > #message {
        font-size: 20px;
    }
`