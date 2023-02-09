import styled from "styled-components";

const H1 = styled.h1`
color: white;
font-size: 50px;
margin: 20px;
`;

function Title() {
  return (
    <div className="title">
      <H1>Vocabulary List</H1>
    </div>
  );
}

export default Title;
