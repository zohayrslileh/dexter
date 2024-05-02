import Switch from "@/View/Components/Switch"
import Appearance from "@/View/Appearance"
import Features from "@/Models/Features"
import { Lang } from "@/Tools/Language"
import styled from "@emotion/styled"
import useForm from "@/Tools/Form"
import { useEffect } from "react"

/**
 * Features
 * 
 * @returns 
 */
export default function () {

    /**
     * Features
     * 
     */
    const { value, update } = useForm(() => Features.value)

    /**
     * On change value
     * 
     */
    useEffect(function () {

        // Save
        Features.update(value)

    }, [value])

    return <Container>

        <p id="title"><Lang>Features</Lang></p>

        <div id="features">
            <div className="feature">
                <p><Lang>Total</Lang> <b><Lang>Sales</Lang></b></p>
                <Switch value={value.sales} onChange={update.sales} />
            </div>
            <div className="feature">
                <p><Lang>Total</Lang> <b><Lang>Downloads</Lang></b></p>
                <Switch value={value.downloads} onChange={update.downloads} />
            </div>
            <div className="feature">
                <p><Lang>Product</Lang> <b><Lang>Age</Lang></b></p>
                <Switch value={value.age} onChange={update.age} />
            </div>
        </div>

    </Container>
}

/**
 * Container
 * 
 */
const Container = styled.div`
    padding-inline: 40px;
    padding-bottom: 20px;
    display: grid;
    gap: 10px;
    border-bottom: 4px solid ${() => Appearance.schema.BLACK_COLOR.hex};

    > #title {
        color: ${() => Appearance.schema.GREEN_COLOR.hex};
        box-shadow: 0px 1px 0px 3.5px ${() => Appearance.schema.BLACK_COLOR.hex};
        padding-block: 7px;
        border-radius: 3px;
        margin: auto;
        width: 115px;
        font-size: 20px;
    }

    > #features {

        > .feature {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 2px solid ${() => Appearance.schema.GRAY_COLOR.rgba(0.2)};
    
            &:last-child {
                border: none;
            }
    
            > p {
                font-size: 18px;
                line-height: 0.5;
    
                > b {
                    font-family: ${() => Appearance.schema.FONT_BOLD};
                }
            }
        }
    }
`