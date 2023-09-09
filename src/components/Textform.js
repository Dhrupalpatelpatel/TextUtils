import React, {useState} from 'react'

export default function Textform(props) {
  const [text , setText] = useState('enter text here');
    const handleupclick = ()=>{
        console.log("uppercase was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const handleloclick = ()=>{
      console.log("lowercase was clicked")
      let lowertext = text.toLowerCase();
      setText(lowertext)
    }
    const handleonchange = (event)=>{
        console.log("on change")
        setText(event.target.value)
    }
 
// setText("hello")    way to change the text
  return (
<>
   
    <div>
<h1>{props.heading}</h1>
<div className="mb-3">

<textarea className="form-control" onChange={handleonchange} value={text} id="mybox" rows="8"></textarea>
</div>

      <button className='btn btn-primary mx-2' onClick={handleupclick}>Uppercase</button>
      <button className='btn btn-primary mx-2' onClick={handleloclick}>Lowercase</button>

    </div>
    <div className='container'>
      <h1>Your text summary</h1>
      <p> {text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length } Minutes to read</p>
    </div>
    </>
  )
}
