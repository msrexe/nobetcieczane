let getElement= (id) => document.getElementById(id)
let getValue = (id) => getElement(id).value

function createElement(isim,adres,sehir,tel) {
    return `<button onclick="myFunc('`+isim+`')" id="eczaneisim" class="w3-btn w3-block w3-border w3-black"> <b> `+isim+`</b>     (Ayrıntı için tıklayınız..)</button><div id="`+isim+`" class="w3-hide w3-dark-grey w3-center"><p><b>Adres</b> : `+ adres +`</p><p><b>Telefon</b> : `+tel+`</p><a href="https://www.google.com/search?q=`+ isim +`,+`+sehir+`"><b>Eczaneyi Google'da Ara</b></a></div><br>`
}
function pti(elm) {
    let il = getValue(elm)
    let myObj = { 1: "Adana", 2: "Adiyaman", "3": "Afyonkarahisar", "4": "Ağrı", "5": "Amasya", "6": "Ankara", "7": "Antalya", "8": "Artvin", "9": "Aydın", "10": "Balikesir", "11": "Bilecik", "12": "Bingöl", "13": "Bitlis", "14": "Bolu", "15": "Burdur", "16": "Bursa", "17": "Çanakkale", "18": "Çankırı", "19": "Çorum", "20": "Denizli", "21": "Diyarbakır", "22": "Edirne", "23": "Elazığ", "24": "Erzincan", "25": "Erzurum", "26": "Eskişehir", "27": "Gaziantep", "28": "Giresun", "29": "Gümüşhane", "30": "Hakkari", "31": "Hatay", "32": "Isparta", "33": "Mersin", "34": "İstanbul", "35": "İzmir", "36": "Kars", "37": "Kastamonu", "38": "Kayseri", "39": "Kırklareli", "40": "Kırşehir", "41": "Kocaeli", "42": "Konya", "43": "Kütahya", "44": "Malatya", "45": "Manisa", "46": "Kahramanmaraş", "47": "Mardin", "48": "Muğla", "49": "Muş", "50": "Nevşehir", "51": "Niğde", "52": "Ordu", "53": "Rize", "54": "Sakarya", "55": "Samsun", "56": "Siirt", "57": "Sinop", "58": "Sivas", "59": "Tekirdağ", "60": "Tokat", "61": "Trabzon", "62": "Tunceli", "63": "Şanlıurfa", "64": "Uşak", "65": "Van", "66": "Yozgat", "67": "Zonguldak", "68": "Aksaray", "69": "Bayburt", "70": "Karaman", "71": "Kırıkkale", "72": "Batman", "73": "Şırnak", "74": "Bartın", "75": "Ardahan", "76": "Iğdır", "77": "Yalova", "78": "Karabük", "79": "Kilis", "80": "Osmaniye", "81": "Düzce" }
    return str_format(myObj[il])
}
function ilc(ilce){
    return str_format(getValue(ilce))
}
function str_format(name) {
    let str = name.
    replace("ı","i").
    replace("ş","s").
    replace("ö","o").
    replace("ü","u").
    replace("ç","c").
    replace("ğ","g").toLowerCase()
    return str
}
function bul() {
    jsonload()

}
function jsonload() {
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    let url = "https://eczaci-api.herokuapp.com/get/"+pti("iller") +"/"+ilc("ilceler")
    console.log(url)
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
    loading(true);
    fetch(proxyUrl + url).then(function(response){
        loading(false);
        return response.json();
    }).then(function(eczaneler){
        getElement("text").innerHTML = ""
        getElement("text").innerHTML += '<h2 class="w3-panel">Nöbetçi Eczaneler : </h2>'
        listdiv.innerHTML = ""
        eczaneler.forEach(eczane => {
            listdiv.innerHTML += createElement(eczane["name"],eczane["address"],eczane["town"],eczane["phone"])
        });

    })
}

function loading(loading){
  if (loading) {
    getElement('loading').style.display = 'block';
    getElement('loaded-text').style.display = 'none';
  }else{
    getElement('loading').style.display = 'none';
    getElement('loaded-text').style.display = 'block';
  }
}
