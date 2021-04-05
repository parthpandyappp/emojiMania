import React, { useState } from 'react';
import "./styles.css";

var emojiDict = {
  '🙂': "smile", '🤩': "star-struck", '🤗': "Hug",
  '😐': "Neutral face", '😬': "Grimacing face", '🤣': "Rolling on the Floor Laughing", '😂': "Face with Tears of Joy", '😉': "Winking Face", '😇': "Smiling Face with Halo", '😘': "Face Blowing a Kiss", '😋': "Face Savoring Food", '😛': "Face with Tongue", '😜': "Winking Face with Tongue", '🤪': "Zany face",
  '😝': "Squinting Face with Tongue", '🤭': "Face with Hand Over Mouth", '🤫': "Shushing face", '🤔': "Thinking face", '🤐': "Zipper-mouth Face", '🤨': "Face with Raised Eyebrow", '😐': "Neutral Face", '😑': "Expression-less face", '😶': "Face without mouth", '😏': "Smirking Face", '😒': "Unamused Face", '🙄': "Face with rolling eyes", '🤥': "Lying face", '😌': "Relieved face", '😔': "Pensive face",
}

var emojiArray = Object.keys(emojiDict);

export default function App() {

  const [meaning, setMeaning] = useState("")

  function getEmoji(emoji) {
    var meaning = emojiDict[emoji]
    setMeaning(meaning);
  }

  function handleChange(e) {
    var userInput = e.target.value;
    var meaning = emojiDict[userInput]

    if (meaning === undefined) {
      meaning = "Sorry! We can't find what you searched for!"
    }
    else if (userInput.length === 0) {
      meaning = "";
    }
    setMeaning(meaning);

  }

  function currentDate() {
    return new Date().getFullYear();
  }


  const someStyle = {
    marginTop: "60%", marginLeft: "100px", marginRight: "100px",
  }

  return (
    <div>
      <div className="App">
        <h1 style={{ fontFamily: "Kiwi Maru" }}>Emoji Mania</h1>

        <input onChange={handleChange} type="text" style={{ height: "2.2rem", width: "20rem", textAlign: "center" }} placeholder="Put emojis here to get their meanings" />

        <h2>{meaning}</h2>

        <h3 style={{ fontFamily: "Kiwi Maru" }}><b>Our emoji dictionary</b></h3>

        <div style={{ width: "300px", textAlign: "center", margin: "auto" }}>
          {emojiArray.map((emoji) => { return <span onClick={() => { getEmoji(emoji) }} style={{ cursor: "pointer", padding: "0.5rem", fontSize: "1.8rem" }} key={emoji}>{emoji}</span> })}
        </div>
      </div>

      <div id="footer">
        <hr />
        <div style={{ width: "300px", textAlign: "center", margin: "auto" }}>
          <p className="text-center" style={{ fontFamily: "Roboto Mono", lineHeight: 0.5 }}>Copyright ©️ {currentDate()} Parth Pandya </p>

          <p className="text-center" style={{ fontFamily: "Roboto Mono", fontSize: 10, lineHeight: 0.5 }}>Some rights reserved.</p>
        </div></div>
    </div>

  );
}
