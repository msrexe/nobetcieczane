let getElement= (id) => document.getElementById(id)
let getValue = (id) => getElement(id).value

function createElement(isim,adres,tel) {
    return `<button onclick="myFunc('`+isim+`')" id="eczaneisim" class="w3-btn w3-block w3-teal">`+isim+`</button><div id="`+isim+`" class="w3-hide w3-dark-grey w3-center"><p>Adres : `+ adres +`</p><p>Telefon : `+tel+`</p></div>`
}


function str_format(name) {
    let str = getValue(name)
    str = str.
    replace("ı","i").
    replace("ş","s").
    replace("ö","o").
    replace("ü","u").
    replace("ç","c").
    replace("ğ","g")
    str = str.
    replace("ı","i").
    replace("ş","s").
    replace("ö","o").
    replace("ü","u").
    replace("ç","c").
    replace("ğ","g")
    return str.toLowerCase()
}

function bul() {
    jsonload()
    
}

function jsonload() {
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    let url = "https://eczaci-api.herokuapp.com/get/"+str_format("il") +"/"+str_format("ilce")
    let listdiv = getElement("liste")
    const myInit = {
        headers: {
            'Accept' : 'application/json',
            'Content-Type':'application/json'
        },
        method: 'GET',
        mode: 'no-cors',
        cache: 'default'
    } 
    fetch(proxyUrl + url).then(function(response){
        return response.json();
    }).then(function(eczaneler){
        console.log()
        listdiv.innerHTML = ""
        eczaneler.forEach(eczane => {
            listdiv.innerHTML += createElement(eczane["name"],eczane["address"],eczane["phone"])
        });
        
    })
}






