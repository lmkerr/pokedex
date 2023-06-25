import styled from 'styled-components';

const Error = styled.div<{ $inputColor?: string }>`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  margin: 0.6em 0;
  font-size: 1.4em;
  font-weight: 500;
  font-family: inherit;
  background-color: #500000;
  cursor: pointer;
  transition: border-color 0.25s;
  color: ${(props) => props.$inputColor || '#ababab'};
`;

export default Error;
