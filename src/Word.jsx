import { useState } from "react";
/* import styled from 'styled-components';


const Button = styled.button`
background-color: #8A9A5B		;
color:white;
font-size:15px;
border: solid #8A9A5B 1px;
border-radious: 3px;
margin:5px;
`;

const Input = styled.input`
width: 300px;
height: 20px;
background-color: white;
color: black;
border: none;
border-radious: 3px;
margin: 5px;
font-size: 15px;
`;
*/

function Word() {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");
  const [vocabList, setVocabList] = useState([]);

  function handleWordChange(e) {
    setWord(e.target.value);
    console.log(word);
  }

  function handleMeaningChange(e) {
    setMeaning(e.target.value);
    console.log(meaning);
  }

  function addVocab() {
    if (word.length > 0 && meaning.length > 0) {
      if (isNaN(word) && isNaN(meaning)) {
        const newVocab = { word: word, meaning: meaning };
        setVocabList([...vocabList, newVocab]);
        setWord("");
        setMeaning("");
      } else {
        alert("No numbers are needed");
      }
    } else {
      alert("Please fill in both boxes to add new vocabulary");
    }
  }

  return (
    <div>
      <div className="word-input">
        <div>
          <input
          id="word"
          type="text"
          placeholder="enter word here"
          value={word}
          onChange={handleWordChange}>
          </input>
        </div>
        <div>
          <input
            id="meaning"
            type="text"
            placeholder="enter meaning here"
            value={meaning}
            onChange={handleMeaningChange}
          ></input>
        </div>
        <button onClick={addVocab}>
          add word to your wordlist
          </button>
      </div>
      <div className="print-out">
        <h2>Vocabulary List</h2>
        {vocabList.map((vocab) => (
          <div className="vocab-list">
            <div className="word">{vocab.word}</div>
            <div className="meaning">{vocab.meaning}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Word;
