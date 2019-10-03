const { menubar } = require('menubar');

console.log(process.cwd() + '/icon.png')

const mb = menubar({
    width: 145,
    height: 35,
    icon: process.cwd() + '/icon.png'
});

mb.on('ready', () => {
});