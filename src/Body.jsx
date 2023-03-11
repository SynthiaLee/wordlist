import Word from "./Word";
import Menu from "./Menu";
import {useState} from 'react';

function Body() {
  const [definition,setDefinition] = useState(false);

  function handleHideChange(val) {
    setDefinition(val);
  }

  return (
    <div className="body">
      <div className="body-left">
        <Word definition={definition}/>
      </div>
      <div className="body-right">
        <Menu definition={definition} onHideChange={handleHideChange}/>
      </div>
    </div>
  );
}

export default Body;