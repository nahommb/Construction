import React, { useState } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

const DropdownMenu = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  background-color: white;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 5px;
  margin-top: 10px;
`;

const DropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #ddd;
  }
`;

const App = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>Dropdown</DropdownButton>
      <DropdownMenu show={showDropdown}>
        <DropdownItem href="#option1">Option 1</DropdownItem>
        <DropdownItem href="#option2">Option 2</DropdownItem>
        <DropdownItem href="#option3">Option 3</DropdownItem>
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default App;
