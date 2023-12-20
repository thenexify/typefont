const searchBarInput = document.getElementById('search');
const searchButton = document.getElementById('searchBtn')
const fontItems = document.getElementsByClassName('fonts-item')

searchButton.addEventListener('click', ()=>{
    Array.from(fontItems).forEach(elem=>{
        if(elem.getElementsByClassName('fontName')[0].innerText.toLowerCase().indexOf(searchBarInput.value)!=-1){
            elem.style.display = ''
        }
        else if(elem.getElementsByClassName('fontName')[0].innerText.indexOf(searchBarInput.value)!=-1){
            elem.style.display = ''
        }
        else if(elem.getElementsByClassName('fontName')[0].innerText.toUpperCase().indexOf(searchBarInput.value)!=-1){
            elem.style.display = ''
        }
        else{
            elem.style.display = 'none'
        }
    })
})

searchBarInput.addEventListener('keyup', (event)=>{
    if(event.key == 'Enter'){
        Array.from(fontItems).forEach(elem=>{
            if(elem.getElementsByClassName('fontName')[0].innerText.toLowerCase().indexOf(searchBarInput.value)!=-1){
                elem.style.display = ''
            }
            else if(elem.getElementsByClassName('fontName')[0].innerText.indexOf(searchBarInput.value)!=-1){
                elem.style.display = ''
            }
            else if(elem.getElementsByClassName('fontName')[0].innerText.toUpperCase().indexOf(searchBarInput.value)!=-1){
                elem.style.display = ''
            }
            else{
                elem.style.display = 'none'
            }
        })
    }
})