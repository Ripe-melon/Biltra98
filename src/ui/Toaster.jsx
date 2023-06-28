import styled from "styled-components";

const Wrapper = styled.div`
    position: fixed;
    right: 20px;
    bottom: 20px;
    width 280px;

    .toast {
        border-radius: 6px;
        background: #fefefe;
        border: #ccc 1px solid;
        box-shadow: 1px 1px 4px 1px rgba(0,0,0, 0.2);¨
        padding: 15px;
        margin-top: 15px;
    }
`;

function Toaster({ toasts }) {
  return (
    <Wrapper>
      {toasts.map((toast) => (
        <div className="toast">{toast}</div>
      ))}
    </Wrapper>
  );
}

export default Toaster;
