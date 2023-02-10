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

const Input = styled.input`
opacity: 0;
position: absolute;
`;

const Switch = styled.div`
position: relative;
width: 40px;
height: 20px;
background: #b3b3b3;
border-radius: 32px;
padding: 4px;

&:before {
  content: "";
  position: absolute;
  width: 18px;
  height: 16px;
  border-radius: 35px;
  top: 50%;
  left: 4px;
  background: white;
  transform: translate(0, -50%);
}
`;

function Menu() {
  return (
    <div>
      <H1>Options</H1>
      <Label>
        <span> 단어 뜻 숨기기 </span>
        <Input type="checkbox"/>
        <Switch/>

      </Label>
    </div>
  );
}

export default Menu;
