import styled, {css} from "styled-components"

const PStyled = styled.p`
    padding: 10px;
    border: 1px solid lightGray;
    background: #f0f0f0;    
    border-radius: 6px;

    ${(props) => props.type === 'error' && css`
        border-color: transparent;
        background-color: Tomato;
        color: white;
    `};
    ${(props) => props.type === 'success' && css`
        border-color: transparent;
        background-color: Yellowgreen;
        color: white;
    `};
`;

function Message({ error, type }) {
    return <> {error && // in case of error, it will ignore empty element.
        (<PStyled type={type} className={type}>{error}</PStyled>
      )}
    </>
}

export default Message