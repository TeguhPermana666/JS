const {coffeStock,isCoffeMachineReady} = require('./export_import');

const makeCoffe = (type, miligrams) => {
    if (coffeStock[type]>= miligrams && isCoffeMachineReady) {
        console.log('kopi berhasil di buat');
    }
    else{
        console.log('Biji kopi habis');
    }
}
makeCoffe('arabica', 100);