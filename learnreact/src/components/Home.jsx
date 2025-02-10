import React, {useState} from "react"

export default function Home(props) {

    const handleUpClick = () =>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase!", "success")
    }

    const handleLoClick = () =>{
      let newText = text.toLowerCase()
      setText(newText)
      props.showAlert("Converted to lowercase!", "success")
  }

    const handleOnChange = (event) =>{
        console.log("On change")
        setText(event.target.value)
    }

    const [text, setText] = useState("")
    //text = "new text" //wrong way to change state
    //setText("new text") //correct way
   

  return (
    <> 
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
      <form>
        <div className="mb-3">
          <h1 > {props.heading}</h1>
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'black',color: props.mode==='light'?'black':'white'}} id="myBox" rows="8" />
        </div>
      </form>
    </div>

    <div className="container">

        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
    </div>

    <div className="containerv my-5" style={{color: props.mode==='light'?'black':'white'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>

      <h2>Preview</h2>
      <p>{text.length>0 ? text : "Enter something in textbox above to preview it here."}</p>
    </div>

    </>
  );

}

 //<> </> is called jsx fragment
