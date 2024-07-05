import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert('Covereted to uppercase',"success");
  };

  const handleLowerClick = () => {
    setText(text.toLowerCase());
    props.showAlert('Covereted to lowercase',"success");
  };

  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  const handleClear =() =>{
    let newText=''
    setText(newText);
    props.showAlert('Text cleared',"success");
  }

  const handleCopy= () =>{
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Copied',"success");
  }

  const handleExtraSpaces = () =>{

    let newText = text.split(/[  ]+/)
    setText(newText.join(" "));
    props.showAlert('Removed extra spaces',"success");

  }

  const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color:props.mode=== 'dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="16"
          placeholder="Enter Your text here"
          value={text}
          onChange={handleOnchange}
          style={{backgroundColor:props.mode=== 'dark'?'grey':'white',
            color:props.mode=== 'dark'?'white':'black'
          }}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick} style={{backgroundColor:props.mode=== 'dark'?'black':'blue'}} >
        Convert to Uppercase
      </button>
      <button  className="btn btn-primary mx-1" onClick={handleLowerClick} style={{backgroundColor:props.mode=== 'dark'?'black':'blue'}}>
        Convert to Lowercase
      </button>
      <button  className="btn btn-primary mx-1" onClick={handleClear} style={{backgroundColor:props.mode=== 'dark'?'black':'blue'}}>
        Clear Text
      </button>
      <button  className="btn btn-primary mx-1" onClick={handleCopy} style={{backgroundColor:props.mode=== 'dark'?'black':'blue'}}>
        Copy Text
      </button>

      <button  className="btn btn-primary mx-1" onClick={handleExtraSpaces} style={{backgroundColor:props.mode=== 'dark'?'black':'blue'}}>
        Remove Extra Spaces
      </button>
    </div>
    <div className="container my-3" style={{color:props.mode=== 'dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p> {text.split(" ").length} words & {text.length} characters</p>
        <p> {0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something to preview'}</p>
    </div>
    </>
  );
}
