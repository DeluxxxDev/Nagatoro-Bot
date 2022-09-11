const fs = require('fs')
const chalk = require('chalk')

//Cofinguracion del bot :v
global.ownerNumber = ['584140186784']
global.ownerName = 'DuMor23'
global.packname = ''
global.author = 'Itsuki-MD'
global.prefa = ['/','','!','.','#','!']
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
global.thumb0 = fs.readFileSync('./media/thumb.jpg')
global.thumb = fs.readFileSync('./media/itsuki.jpg')
global.thumblink = "https://telegra.ph/file/878a97bf1aa9c155ad1a4.jpg"
global.icon = { url: "https://telegra.ph/file/6b9bd1dfda9cd4e0edac2.jpg"}
global.iconlink = "https://telegra.ph/file/6b9bd1dfda9cd4e0edac2.jpg"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Se actualizo '${__filename}'`))
delete require.cache[file]
require(file)
})
