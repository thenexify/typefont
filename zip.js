const jszip = require('jszip')
const fs = require('fs')

const zipFiles = async (font)=>{
    const rootDir = 'C:/Users/LENOVO/Desktop/BK/BharathCoder/Assets/Backend/ProjectJSBackend/TypeFont/'
    const zip = new jszip();
    const fileContent = fs.readFileSync(font.ttfSrc)
    const fileExtension = font.ttfSrc.slice(font.ttfSrc.length-3)
    const format = `${rootDir}${font.name}.${fileExtension}`
    zip.file(format, fileContent)
    const zipContent = await zip.generateAsync({type: 'nodebuffer'})
    fs.writeFileSync('output-typefont.zip', zipContent)
    console.log('Write ZIP file to output.zip');
}

module.exports = {zipFiles}