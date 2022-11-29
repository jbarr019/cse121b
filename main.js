//Array parameters for number of words for each type
var params =	[3,	//ADJ_NUM
				3,	//NOUN_NUM
				4,	//PLUR_NOUN
				4,	//VERB_ING
				1,	//GAME_NUM
				1,	//PLANT_NUM
				1,	//BODY_NUM
				1,	//PLACE_NUM
				1];	//NUM_NUM

//Adds an event listener to the button
document.querySelector('#madlib_btn').addEventListener('click', btn_handler)

//Initial value of the first message
document.querySelector('#msg1').textContent = "Please enter the following values:"

//Gets the current date
let current_date = new Date()

//Sets the info in the footer
document.querySelector('#year').textContent = current_date.getFullYear()
document.querySelector('#name').textContent = "Joshua Barreiro"
document.querySelector('#class').textContent = "CSE121b"

//Initially launches the prompts
create_prompts()

//Creates the prompts and input boxes for each word type
function create_prompts() {
    adjList = document.createElement("adjs")
    let adjPrompt = document.createElement("h3")
    adjPrompt.textContent = String(params[0]) + " Adjectives"
    adjList.appendChild(adjPrompt)
    document.querySelector('#values').appendChild(adjList)
	create_input_boxes(adjList, params[0], "adj")
	
    let nounList = document.createElement("nouns")
	let nounPrompt = document.createElement("h3")
	nounPrompt.textContent = String(params[1]) + " Nouns"
	nounList.appendChild(nounPrompt)
	document.querySelector('#values').appendChild(nounList)
	create_input_boxes(nounList, params[1], "noun")

	let plurList = document.createElement("plurs")
	let plurPrompt = document.createElement("h3")
	plurPrompt.textContent = String(params[2]) + " Plural Nouns"
	plurList.appendChild(plurPrompt)
	document.querySelector('#values').appendChild(plurList)
	create_input_boxes(plurList, params[2], "plur")

	let verbList = document.createElement("verbs")
	let verbPrompt = document.createElement("h3")
	verbPrompt.textContent = String(params[3]) + " Verbs Ending in -ing"
	verbList.appendChild(verbPrompt)
	document.querySelector('#values').appendChild(verbList)
	create_input_boxes(verbList, params[3], "verb")

	let gameList = document.createElement("game")
	let gamePrompt = document.createElement("h3")
	gamePrompt.textContent = String(params[4]) + " Game"
	gameList.appendChild(gamePrompt)
	document.querySelector('#values').appendChild(gameList)
	create_input_boxes(gameList, params[4], "game")

	let plantList = document.createElement("plant")
	let plantPrompt = document.createElement("h3")
	plantPrompt.textContent = String(params[5]) + " Plant"
	plantList.appendChild(plantPrompt)
	document.querySelector('#values').appendChild(plantList)
	create_input_boxes(plantList, params[5], "plant")

	let bodList = document.createElement("bod")
	let bodPrompt = document.createElement("h3")
	bodPrompt.textContent = String(params[6]) + " Body Part"
	bodList.appendChild(bodPrompt)
	document.querySelector('#values').appendChild(bodList)
	create_input_boxes(bodList, params[6], "bod")

	let placeList = document.createElement("place")
	let placePrompt = document.createElement("h3")
	placePrompt.textContent = String(params[7]) + " Place"
	placeList.appendChild(placePrompt)
	document.querySelector('#values').appendChild(placeList)
	create_input_boxes(placeList, params[7], "place")

	let numList = document.createElement("num")
	let numPrompt = document.createElement("h3")
	numPrompt.textContent = String(params[8]) + " Number"
	numList.appendChild(numPrompt)
	document.querySelector('#values').appendChild(numList)
	create_input_boxes(numList, params[8], "num")
}

//Creates the input text boxes for each type depending on how many is needed
function create_input_boxes(srcList, input_num, srcID) {
	
	for (let i = 0; i < input_num; i++) {
		let a_textbox = document.createElement('li')
		let an_input = document.createElement('input')
		
		an_input.type = "text"
		an_input.id = srcID + String(i + 1)

		a_textbox.appendChild(an_input)
		srcList.appendChild(a_textbox)
	}
}

//Whenever the button is pushed, it either displays Mad Lib or resets it
function btn_handler() {
	let element = document.getElementById("values")
	switch (document.querySelector('#madlib_btn').textContent) {
		case "Mad Lib!":
			display_madlib()
			document.querySelector('#madlib_btn').textContent = "Reset"
			document.querySelector('#msg1').textContent = "Your Mad Lib:"
			element.style.fontSize = "24px"
			element.style.display = "block"
			break
		case "Reset":
			reset()
			document.querySelector('#madlib_btn').textContent = "Mad Lib!"
			document.querySelector('#msg1').textContent = "Please enter the following values:"
			element.style.fontSize = "16px"
			element.style.display = "grid"
			break
		default:
			document.querySelector('#madlib_btn').textContent = "Mad Lib!"
			break
	}
}

//Resets the Mad Lib inputs
function reset() {
	document.querySelector('#values').innerHTML = ""
	create_prompts()
}

//Displays the completed Mad Lib
function display_madlib() {
	let in_str = ""
	let final_str = ""

	final_str += "A vacation is when you take a trip to some "
	in_str = String(document.querySelector('#adj1').value)
	final_str += in_str.toUpperCase()

	final_str += " place with your "
	in_str = String(document.querySelector('#adj2').value)
	final_str += in_str.toUpperCase()

	final_str += " family. Usually you go to some place that is near a/an "
	in_str = String(document.querySelector('#noun1').value)
	final_str += in_str.toUpperCase()

	final_str += " or up on a/an "
	in_str = String(document.querySelector('#noun2').value)
	final_str += in_str.toUpperCase()

	final_str += ". A good vacation place is one where you can ride "
	in_str = String(document.querySelector('#plur1').value)
	final_str += in_str.toUpperCase()

	final_str += " or play "
	in_str = String(document.querySelector('#game1').value)
	final_str += in_str.toUpperCase()

	final_str += " or go hunting for "
	in_str = String(document.querySelector('#plur2').value)
	final_str += in_str.toUpperCase()

	final_str += ". I like to spend my time "
	in_str = String(document.querySelector('#verb1').value)
	final_str += in_str.toUpperCase()

	final_str += " or "
	in_str = String(document.querySelector('#verb2').value)
	final_str += in_str.toUpperCase()

	final_str += ". When parents go on a vacation, they spend their time eating three "
	in_str = String(document.querySelector('#plur3').value)
	final_str += in_str.toUpperCase()

	final_str += " a day, and fathers play golf, and mothers sit around "
	in_str = String(document.querySelector('#verb3').value)
	final_str += in_str.toUpperCase()

	final_str += ". Last summer, my little brother fell in a/an "
	in_str = String(document.querySelector('#noun3').value)
	final_str += in_str.toUpperCase()

	final_str += " and got poison "
	in_str = String(document.querySelector('#plant1').value)
	final_str += in_str.toUpperCase()

	final_str += " all over his "
	in_str = String(document.querySelector('#bod1').value)
	final_str += in_str.toUpperCase()

	final_str += ". My family is going to go to (the) "
	in_str = String(document.querySelector('#place1').value)
	final_str += in_str.toUpperCase()

	final_str += ", and I will practice "
	in_str = String(document.querySelector('#verb4').value)
	final_str += in_str.toUpperCase()

	final_str += ". Parents need vacations more than kids because parents are always very "
	in_str = String(document.querySelector('#adj3').value)
	final_str += in_str.toUpperCase()

	final_str += " and because they have to work "
	in_str = String(document.querySelector('#num1').value)
	final_str += in_str.toUpperCase()

	final_str += " hours every day all year making enough "
	in_str = String(document.querySelector('#plur4').value)
	final_str += in_str.toUpperCase()

	final_str += " to pay for the vacation."

	document.querySelector('#values').textContent = final_str
	
}

//Mad Lib Reference URL
let ref_url = "https://www.printablee.com/post_camping-mad-libs-printable_153008/"