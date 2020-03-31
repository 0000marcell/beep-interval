const player = require('play-sound')(opts = {})
const delay = 3000


setInterval(() => {
  player.play('./beep.mp3', { timeout: 1000 }, function(err){
    if (err) throw err
  })
}, delay)
