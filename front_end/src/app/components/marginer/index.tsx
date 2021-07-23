import styled from "styled-components"

export interface MarginerProps {
    margin: number | string;
    direction?:"horizontal" | "vertical";
}

const HorizontalMargin = styled.span<MarginerProps>`
display: flex;
min-width: ${({ margin }) => typeof margin === "string" ? margin : `${margin}px`};
`;

const VerticalMargin = styled.span<MarginerProps>`
display: flex;
min-height: ${({ margin }) => typeof margin === "string" ? margin : `${margin}px`};
`;

function Marginer(props: MarginerProps) {
    const { direction } = props;
    if(direction === "horizontal")
    return <HorizontalMargin {...props} />
    else {
        return <VerticalMargin {...props} />
    }
}

Marginer.defaultProps = {
    direction: "horizontal"
}

export default Marginer;