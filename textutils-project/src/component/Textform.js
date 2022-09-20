import React, {useState} from 'react';



export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("UpperCase Button Clicked");
    let newText = text.toUpperCase();
    SetText(newText);
    props.settingAlert("Converted to Upper Case", "success");
  }
  const handleOnChange = (event) => {
    // console.log("Handle on Change");
    SetText(event.target.value);
  }
  const handleLoClick = (event) => {
    // console.log("Lower Case Button Clicked");
    let lowerText = text.toLowerCase();
    SetText(lowerText);
    props.settingAlert("Converted to Lower Case", "success");
  }
  const handleCopyClick = (event) => {
    navigator.clipboard.writeText(text);
    props.settingAlert("Text Copied Successfully!", "success");
  }
  const[text, SetText] = useState("");
  return (
    <>
    <div style={{color: props.mode === 'dark'?'white':'black'}}>
      <h1 >{props.heading}</h1>
      <div className='container my-3'>
        <h1>Enter Some Text Here</h1>
      <textarea className='textarea form-control my-3' style={{backgroundColor: props.mode === 'dark'?'#1d3c5a':'white' , color: props.mode === 'dark'?'white':'black'}} value={text} onChange={handleOnChange} name="textarea" id="myBox" cols="30" rows="8"></textarea>
      <button disabled= {text.length ===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Change to UpperCase</button>
      <button disabled= {text.length ===0} className='btn btn-secondary mx-2 my-1' onClick={handleLoClick}>Change to LowerCase</button>
      <button disabled= {text.length ===0} className='btn btn-secondary mx-2 my-1' onClick={handleCopyClick}>Copy Text</button>
    
      <h1>This is Text's Summary</h1>
      <p>{text.split(/\s/).filter((element) => { return element.length!==0}).length } words and {text.length} characters</p>
      <p>{0.008*text.split(" ").filter((element) => { return element.length!==0}).length} Minutes to read</p>
      <h1>Preview</h1>
      <p>{text.length>0?text:"Nothing to Preview"}</p>
    </div>
    </div>
    </>
  )
}


