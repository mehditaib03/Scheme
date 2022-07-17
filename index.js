
const inputColor = document.getElementById('colorPicker')
const schemeImg = document.getElementById('schemeColor');
const hexHtml = document.getElementById('hexdiv');
const getColorBtn = document.getElementById('get-color');
const modeDropDown = document.getElementById('colorDropDown');

console.log('yu',inputColor.value); 

/*Default */
fetch('https://www.thecolorapi.com/scheme?hex=000000&mode=monochrome')
    .then(res => res.json())
    .then(data => {
        // console.log("data",data)
        let html = ""
        for (const ele of data.colors) {
            html += `
            <div  id="groupeHexImage" onclick=copyClick("${ele.hex.value}")>
             <img id="testHex" src=${ele.image.bare}> 
            <p id="hexCode"> ${ele.hex.value}</p>
            </div> `;
        }

        schemeImg.innerHTML = `${html}`
    })

/*Fn to copy to clipboard when div clicked */
function copyClick(value) {
    navigator.clipboard.writeText(value);
    alert('Copied to clipboard: ' + value)
}


/*Get Scheme when click*/
getColorBtn.addEventListener('click', () => {
    fetch(`https://www.thecolorapi.com/scheme?hex=${inputColor.value.substring(1)}&mode=${modeDropDown.value.toLowerCase()}`)
        .then(res => res.json())
        .then(data => {
            let html = ""
            for (const ele of data.colors) {
                html += `
            <div id="groupeHexImage" onclick=copyClick("${ele.hex.value}") >
            <img id="testHex" src=${ele.image.bare}> 
            <p id="hexCode"> ${ele.hex.value}</p>
            </div> `;
                // navigator.clipboard.writeText(ele.hex.value);
            }
 
            schemeImg.innerHTML = `${html}`
        })

})
