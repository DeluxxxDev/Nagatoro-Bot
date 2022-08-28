const fs = require('fs')
const chalk = require('chalk')

//Cofinguracion del bot :v
global.ownerNumber = ['5493816565890']
global.ownerName = 'Deluxxx'
global.packname = ''
global.author = 'Nagaroto-MD'
global.prefa = ['','!','.','#','!']
global.sessionName = 'qr'

//Mensajes frecuentes UwU
global.mess = {
admin: 'Eres tonto? esto solo es para los admins!',
botAdmin: 'No te podre ayudar si no soy admin!',
botOwner: 'Tu no eres mi dueño!',
group: 'Perdon sempai, esto solo es para grupos!',
private: 'Este comando solo es para mi chat privado (PV)',
wait: 'Espera un momento...',
done: 'Listo sempai!'
}


//Fotos del bot
global.thumb = fs.readFileSync('./media/thumb.jpg')
global.thumblink = "https://c4.wallpaperflare.com/wallpaper/227/985/292/nagatoro-hayase-manga-please-don-t-bully-me-nagatoro-hd-wallpaper-thumb.jpg"
global.icon = { url: "https://i.pinimg.com/736x/c3/bb/22/c3bb22734e6ad8da8ef4c09a6c84c0a0.jpg"}
global.iconlink = "https://i.pinimg.com/736x/c3/bb/22/c3bb22734e6ad8da8ef4c09a6c84c0a0.jpg"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Se actualizo '${__filename}'`))
delete require.cache[file]
require(file)
})
