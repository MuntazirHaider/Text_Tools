import React, {useState} from 'react'

export default function Content(props) {

    const upperCaseFunction = ()=>{
        let newText =text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","primary");
    }

    const lowerCaseFunction = ()=>{
      let newText =text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase" , "primary")
  }

  const repeatText = ()=>{
    let newText = text + ' ' +text;
    setText(newText);
    props.showAlert("Text is repeated" , "primary")
}

const reverseFunction = ()=>{
  let newText = text.split('').reverse().join('');
  setText(newText);
  props.showAlert("Text is reversed" , "primary")
}

const removeExtraSpaceFunction = ()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra space is removed from the text" , "primary")
}

  const clearText = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert("Text is cleared" , "danger")
}

    const textOnChange = (e)=>{
        setText(e.target.value);
    }
    
    const [text, setText] = useState('');

  return (   
    <>
    <h1 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
    <div className="mb-2"  style={{color: props.mode==='dark'?'white':'black'}}>
  <textarea
    className="form-control"
    id="exampleFormControlTextarea1"
    rows={8}
    // defaultValue={""}
    placeholder="Enter text here"
    value={text}
    onChange={textOnChange}
    style={{backgroundColor: props.mode==='dark'?'#000000':'#e9ecefb3'
    ,color: props.mode==='dark'?'white':'black'}}
  />
</div>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={upperCaseFunction}>Convert to  Uppercase</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={lowerCaseFunction}>Convert to  Lowercase</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={repeatText}>Repeat Text</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={reverseFunction}>Reverse Text</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={removeExtraSpaceFunction}>Remove Extra Space</button>
<button disabled={text.length===0} className='btn btn-danger mx-2 my-1' onClick={clearText}>Clear Text</button>

<div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
  <h1>Text Analysis</h1>
  <p>{text.split(/\s+/).filter((e)=>{return e.length!=0}).length} words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").length } minute take to read.</p>
</div>
</>
  )
}
