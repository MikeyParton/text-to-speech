document.addEventListener("DOMContentLoaded", (event) => {
	window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

	const recognition = new SpeechRecognition()
	recognition.interimResults = true

	let p = document.createElement('p')
	const words = document.querySelector('.words')
	words.appendChild(p)

	recognition.addEventListener('result', e => {
    console.log('aaaaaah')
		const transcript = Array.from(e.results)
			.map(result => result[0])
			.map(result => result.transcript)
			.join("")

		p.textContent = transcript
		if (e.results[0].isFinal){

			let response = document.createElement('p')
			response.className = "response"

			if (transcript.includes('get the weather')){
				response.textContent = "It's too hot today, I don't know"
				words.appendChild(response)
			}

			if (transcript.includes('who am I')){
				response.textContent = "You are a douchebag"
				words.appendChild(response)
			}

			p = document.createElement('p')
			words.appendChild(p)

		}
	})

	recognition.addEventListener('end', recognition.start)
  debugger
	recognition.start()
})
