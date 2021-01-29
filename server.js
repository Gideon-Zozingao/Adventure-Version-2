let express = require('express')

let path = require('path')

let app = express()
// the CSS file codes are from bootsraps 4 css library
app.use('/css', express.static(path.join(__dirname, 'css')))

app.use('/public', express.static(path.join(__dirname, 'public')))
//handles the hhtp request
app.get(
    '/', function (req, res) {
        res.sendFile(path.join(__dirname, 'welcome.html'))
    })

app.get(
    '/home', function (req, res) {
        res.sendFile(path.join(__dirname, 'welcome.html'))
    }

)
app.get(
    '/fortune', function (req, res) {
        res.sendFile(path.join(__dirname, 'fortune.html'))

    }

)
app.get(


    '/story', function (req, res) {
        res.sendFile(path.join(__dirname, 'story.html'))

    }

)


app.get(
    '/welcome', function (req, res) {
        res.sendFile(path.join(__dirname, 'welcome.html'))

    }

)
app.get(
    '/corals', function (req, res) {
        res.sendFile(path.join(__dirname, 'corals.html'))

    }

)




app.get(
    '/caves', function (req, res) {
        res.sendFile(path.join(__dirname, 'caves.html'))

    }

)



app.get(
    '/secret-cave', function (req, res) {
        res.sendFile(path.join(__dirname, 'secret-cave.html'))

    }

)

app.get(
    '/main-cave', function (req, res) {
        res.sendFile(path.join(__dirname, 'main-cave.html'))

    }

)

app.get(
    '/pearl-cave', function (req, res) {
        res.sendFile(path.join(__dirname, 'pearl-cave.html'))

    }

)


app.get(
    '/precious-stone', function (req, res) {
        res.sendFile(path.join(__dirname, 'precious-stone.html'))

    }

)


app.get(
    '/shark', function (req, res) {
        res.sendFile(path.join(__dirname, 'shark.html'))

    }

)


app.get(
    '/next-day-for-pearl', function (req, res) {
        res.sendFile(path.join(__dirname, 'next-day-for-pearl.html'))

    }

)

app.get(
    '/the-pearls-are-gone', function (req, res) {
        res.sendFile(path.join(__dirname, 'the-pearls-are-gone.html'))

    }

)
//this always redirects to the 404.html page when requested resources are not available
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "404.html"))
})
//listens on POrt 8086
let server = app.listen(8086, function () {
    let host = server.address().address
    let port = server.address().port
    // indicates that the server is up and running

    console.log('Server running at' + host + ":" + port)
})
