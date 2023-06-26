import styled from 'styled-components';

const Input = styled.input<{ $inputColor?: string }>`
  padding: 0.5em;
  margin: 0.5em;
  font-size: 1.5em;
  color: ${(props) => props.$inputColor || '#b50e0e'};
  background: #ababab;
  border: none;
  border-radius: 3px;
  min-width: 40%;
`;

export default Input;
