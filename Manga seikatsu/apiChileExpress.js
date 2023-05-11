const ulrRegion = `https://testservices.wschilexpress.com/georeference/api/v1.0/regions`
const formCobertura = document.querySelector('#region')
const formComuna = document.querySelector('#comuna')

function asignarCodigo(data, valorSeleccionado) {
    for(let e of data["regions"]){
        if(valorSeleccionado === e.regionName) { 
            return e.regionId;
        }
    }
    return "0";
}

fetch(ulrRegion)
    .then(res => res.json())
    .then(data => {
        
        for(let i of data["regions"]){
            const option = document.createElement('option')
            option.value = i.regionName
            option.text = i.regionName
            formCobertura.appendChild(option)
        }
        

        formCobertura.onchange = function(){
            const valorSeleccionado = formCobertura.value
            const codigo = asignarCodigo(data, valorSeleccionado);
            
            formComuna.innerHTML = '';

            if(codigo !== "0") {
                fetch(`https://testservices.wschilexpress.com/georeference/api/v1.0/coverage-areas?RegionCode=${codigo}&type=1`)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        for(let i of data["coverageAreas"]){
                            const option = document.createElement('option')
                            option.value = i.countyName
                            option.text = i.countyName
                            formComuna.appendChild(option)
                        }
                    })
            }
        }
    });