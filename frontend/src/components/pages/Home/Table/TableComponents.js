import styled from 'styled-components';

const CenterDiv = styled.div`
display: "flex";
flexDirection: "column";
alignItems: "center";
`;

const TableContainer = styled.div`
border: solid .2em #f5f5f5;  
border-radius: 2.5em;
width: auto;
height: auto;
background-color:#ffffff;
`;


const HoverButton = styled.button`
  transition: transform 0.2s cubic-bezier(0.235, 0, 0.05, 0.95);
  box-shadow: 0px 15px 20px rgba(81, 83, 82, 0.4);

  &:hover {
    transform: perspective(1px) scale3d(1.044, 1.044, 1) translateZ(0) !important;
  }

  &:disabled {
    background: grey;
    cursor: not-allowed;
  }
`;


export { TableContainer, CenterDiv, HoverButton }