import React,{useState} from 'react'




export default function TextForm(props) {
    const [text, setText] = useState("");
    //setText("New Text");

    const handleUpClick = () =>{
        console.log("This button Cliked")
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase","Success")
    }

    const handleOnChange = (event) =>{
        console.log("This button Cliked")
        setText(event.target.value);
    }
    const handleDownClick = () =>{
        console.log("Lower button Clicked")
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lowercase","Success")
    }
    
    const handleClear =() =>{
        let newText = ""
        setText(newText)        
        props.showAlert("Field Reset","Success")
         
    }
    // const handleCopy = () =>{
    //     let newText = document.getElementById("exampleFormControlTextarea1")
    //     newText.select();
    //     navigator.clipboard.writeText(text.valueOf);
    // }
    // const handleExtraSpaces = () =>{
    //     let newText = text.split(/[]+/);
    //     setText(newText.join(" "))
    // }

  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
      
<div className="mb-3">
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
</div>
 <button className='btn btn-primary mx-2' onClick={handleUpClick}> Convert to UpperCase</button>
 <button className='btn btn-primary mx-2' onClick={handleDownClick}> Convert to LowerCase</button>
 <button className='btn btn-primary mx-2 my-2' onClick={handleClear}> ClearText</button>
 {/* <button className='btn btn-primary mx-2 my-2' onClick={handleCopy}> Copy</button> */}
 {/* <button className='btn btn-primary mx-2 my-2' onClick={handleExtraSpaces}> Extra Spaces</button> */}
     
    </div>
    <div className='container my-10'>
        <h1>Your Text Summary </h1>
        <p>Your text have {text.length} charecter and {text.split(" ").length} words</p>
        
        <p> You can read this whole sentence in {0.008* text.split(" ").length} </p> 
        <h2>Preview</h2>
        <p>{text}</p>

    </div>
    </>
  )
}
