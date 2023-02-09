import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #faa0a0;
  color: white;
  font-size: 15px;
  border: solid #faa0a0 1px;
  border-radious: 5px;
  margin: 5px;
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

const H2 = styled.h2`
  color: white;
`;

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

  function handleKeyDown(e) {
    console.log(e.key)
    if (e.key === "Enter") {
      addVocab();
    }
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
          <Input
            id="word"
            type="text"
            placeholder="enter word here"
            value={word}
            onChange={handleWordChange}
            onKeyDown={handleKeyDown}
          ></Input>
        </div>
        <div>
          <Input
            id="meaning"
            type="text"
            placeholder="enter meaning here"
            value={meaning}
            onChange={handleMeaningChange}
            onKeyDown={handleKeyDown}
          ></Input>
        </div>
        <Button onClick={addVocab}>add word to your wordlist</Button>
      </div>
      <div className="print-out">
        <H2>Vocabulary List</H2>
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
