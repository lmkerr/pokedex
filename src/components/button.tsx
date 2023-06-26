import styled from 'styled-components';

const Button = styled.button<{ $inputColor?: string }>`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1.4em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  color: ${(props) => props.$inputColor || '#FF1616'};
  &:hover {
    border-color: #b50e0e;
  }
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

export default Button;
