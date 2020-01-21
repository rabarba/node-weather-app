console.log('Client side javascript file is loaded...')

var search = document.querySelector('input')
var messageOne = document.querySelector('#message-one')
var messageTwo = document.querySelector('#message-two')

search.addEventListener('keyup', (e) => {

    e.preventDefault()

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    var location = search.value
    if (location.length < 3) return

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
   
})