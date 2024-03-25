import React, { useState } from 'react'



export default function Textform(props) {

	const handleupppercaseclick = () => {
		// console.log('Handled');
		// setText("handleuppercaseclick")
		// setText(e.target.value.toUpperCase())
		// setText(text.toUpperCase())
		let newtext = text.toUpperCase()
		setText(newtext)
		props.alertset("Transformed to UpperCase", "success ")
	}

	const handlelowercaseclick = () => {
		let newText = text.toLowerCase()
		setText(newText)
		props.alertset("Transformed to LowerCase", "success ")
	}

	const handlechange = (e) => {
		setText(e.target.value)
	}

	const handlecleartext = () =>{
		let newtext = ''
		setText(newtext)
		props.alertset("All Text Cleared", "success ")
	}
	
	const handletrim = () =>{
		let newtext = text.replaceAll(" ", "")
		setText(newtext)
		props.alertset("Cleared all WhiteSpaces", "success ")
	}

	let mystyle = {
		// color: "#fff",
		backgroundColor: "rgb(209, 209, 209)"
	}

	const [text, setText] = useState("")
	return (
		<>
			<div className='container'>
				<h1>{props.heading}</h1>
				<div className="mb-3 mt-4">
					<textarea className=" mt-3 form-control" spellCheck="false" style={mystyle} placeholder='Enter Your Text' value={text} onChange={handlechange} id="exampleFormControlTextarea1" rows="12"></textarea>
					<button className="btn btn-primary mx-2 my-4" disabled={text.length===0} onClick={handleupppercaseclick}>
						Convert to UpperCase
					</button>

					<button className="btn btn-primary mx-2 my-4" disabled={text.length===0} onClick={handlelowercaseclick}>
						Convert to Lowerercase
					</button>

					<button className="btn btn-primary mx-2 my-4" disabled={text.length===0} onClick={handlecleartext}>
						Clear Text
					</button>

					<button className="btn btn-primary mx-2 my-4" disabled={text.length===0} onClick={handletrim}>
						Clear all whiteSpaces
					</button>
				</div>
				</div>
				<hr />
			<div className="container my-3">
				<h2>Your text Summary</h2>
				<p>{text.split(" ").filter((text)=>{ return text.length!==0}).length} words and {text.length} chars</p>
			</div>
		</>
	)
}
