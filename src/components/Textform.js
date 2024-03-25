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

	const [text, setText] = useState("")
	return (
		<>
			<div className='container mt-4'>
				<h1>{props.heading}</h1>
				<div className="mb-3 mt-4">
					<textarea className=" mt-3 form-control" placeholder='Enter Your Text' value={text} onChange={handlechange} id="exampleFormControlTextarea1" rows="12"></textarea>
				</div>
				<div className='d-flex justify-content-between'>
					<button className="btn btn-primary mr-3" onClick={handleupppercaseclick}>
						Convert to UpperCase
					</button>

					<button className="btn btn-primary" onClick={handlelowercaseclick}>
						Convert to Lowerercase
					</button>

					<button className="btn btn-primary" onClick={handlecleartext}>
						Clear Text
					</button>

					<button className="btn btn-primary" onClick={handletrim}>
						Clear all whiteSpaces
					</button>
				</div>
			</div>
			<div className="container my-3">
				<h2>Your text Summary</h2>
				<p>{text.split(" ").length} words and {text.length} chars</p>
				<p>{text.split(" ").length} Word can be readed in {0.008 * text.split(" ").length} </p>
			</div>
		</>
	)
}
