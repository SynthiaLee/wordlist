import { useState } from "react";
import styled from "styled-components";

const H1 = styled.h1`
color:white;
font-size: 30px;
border-bottom: solid white 3px;
`;

const Label = styled.label`
display: flex;
align-items: center;
gap: 10px;
`;



const Switch = styled.div`
position: relative; 
  width: 60px;
  height: 32px;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 4px; 

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`;

const Input = styled.input`
display: none;

&:checked + ${Switch} {
  background: #47a647;

  &:before {
      transform: translate(32px, -50%);
    }
}

`;

function Menu({definition, onHideChange}) {

  function handleToggleChange(val) {
    onHideChange(!val);
  }
    
  return (
    <div>
      <H1>Options</H1>
      <KirbySwitch label="숨기기?" value={!definition} onChange={handleToggleChange}/>
      <Label>
        <span> 단어 뜻 숨기기 </span>
        <Input type="checkbox"/>
        <Switch/>

      </Label>
    </div>
  );
}

export default Menu;


function KirbySwitch(prop) {
  const {value, onChange, label} = prop;
  
  function handleToggle() {
    onChange(!value);
  }

  return (<StyledKirbySwitch onClick={handleToggle}>
      <Label>{label}</Label>
      <SwitchArea isToggle={value}>
        <Thumb isToggle={value}/>
      </SwitchArea>
    </StyledKirbySwitch>)
}

const StyledKirbySwitch = styled.div`
  display: flex;
`;

const SwitchArea = styled.div`
  display: flex;
  background-color: ${ props => props.isToggle ? '#47a647' : '#b3b3b3'};

  height: 35px;
  width: 70px;
  padding: 5px;


`;

const Thumb = styled.div`
  background-color: white;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  transition: 0.3s transform;

  ${ props => props.isToggle ?
      'transform: translateX(100%);' :
      '' }
`;