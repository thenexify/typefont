const JSZip = require('jszip')
const fs = require('fs');
const path = require('path');
const sixtDigit = new Date().getTime()

const zipFiles = async (fontArray)=>{
    const zip = new JSZip();
    const fileExt = fontArray.ttfSrc.slice(fontArray.ttfSrc.length-4)
    const fileName = fontArray.name

    const fileContent = fs.readFileSync(path.join(__dirname, fontArray.ttfSrc))

    zip.file(`${fileName}${fileExt}`, fileContent)
    const zipContent = await zip.generateAsync({type: 'nodebuffer'})
    fs.writeFileSync(path.join(`./downloads/${sixtDigit}.zip`), zipContent)
    console.log('Write ZIP ✅');
}

module.exports = {zipFiles}