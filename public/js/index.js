var socket = io()

var code = ''

function startSession() {
    const sessionCode = document.getElementById('sessionCode')
    code = sessionCode.value
}

socket.on('connect', function() {
    console.log('Client Connected')
})

socket.on('getCast', function(castData){
    const jsonData = JSON.parse(castData)
    var id = jsonData.id
    if (code == id) {
        var image = jsonData.image
        var imageElement = document.getElementById('setImg')
        imageElement.src = 'data:image/png;base64,' + image
    }
})