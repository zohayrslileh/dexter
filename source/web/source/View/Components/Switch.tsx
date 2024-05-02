import Appearance from "@/View/Appearance"
import styled from "@emotion/styled"

/**
 * Switch Component
 * 
 */
export default function ({ value, onChange, ...props }: Props) {

    return (
        <Container {...props} className="switch">
            <input type="checkbox" checked={value} onChange={event => onChange && onChange(event.target.checked)} />
            <span className="slider"></span>
        </Container>
    )
}

/**
 * Container
 * 
 */
const Container = styled.label`
    --button-width: 4em;
    --button-height: 1.8em;
    --toggle-diameter: 1.5em;
    --button-toggle-offset: calc((var(--button-height) - var(--toggle-diameter)) / 2);
    --toggle-shadow-offset: 10px;
    --toggle-wider: 3.15em;
    cursor: pointer;

    input {
        display: none;

        &:active + .slider::after {
            width: var(--toggle-wider);
        }

        &:checked + .slider {
            background-color: ${() => Appearance.schema.GREEN_COLOR.hex};

            &::after {
                transform: translateX(calc(var(--button-width) - var(--toggle-diameter) - var(--button-toggle-offset)));
                box-shadow: calc(var(--toggle-shadow-offset) * -1) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
                background-color: ${() => Appearance.schema.BLACK_COLOR.hex};
            }
        }

        &:checked:active + .slider::after {
            transform: translateX(calc(var(--button-width) - var(--toggle-wider) - var(--button-toggle-offset)));
        }
    }

    > .slider {
        display: inline-block;
        width: var(--button-width);
        height: var(--button-height);
        background-color: ${() => Appearance.schema.GRAY_COLOR.hex};
        border-radius: 50px;
        position: relative;
        transition: 0.3s all ease-in-out;
        border: 3px solid ${() => Appearance.schema.BLACK_COLOR.hex};

        &::after {
            content: "";
            display: inline-block;
            width: var(--toggle-diameter);
            height: var(--toggle-diameter);
            background-color: ${() => Appearance.schema.DARK_GRAY_COLOR.hex};
            border-radius: calc(var(--toggle-diameter) / 2);
            position: absolute;
            top: var(--button-toggle-offset);
            transform: translateX(var(--button-toggle-offset));
            box-shadow: var(--toggle-shadow-offset) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
            transition: 0.3s all ease-in-out;
            left: 0;
        }
    }
`

/**
 * Props
 * 
 */
interface Props extends Omit<React.ComponentProps<typeof Container>, "value" | "onChange"> {
    value?: boolean
    onChange?: (value: boolean) => void
}