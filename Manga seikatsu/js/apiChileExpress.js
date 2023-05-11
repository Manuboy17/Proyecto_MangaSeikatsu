const ulrRegion = `https://testservices.wschilexpress.com/georeference/api/v1.0/regions`
const formCobertura = document.querySelector('#region')
const formComuna = document.querySelector('#comuna')
const option = document.createElement('option')
const btn = document.getElementById('btn-buscar')

var codigo = "0"
fetch(ulrRegion)
    .then(res => res.json())
    .then(data => {
        
        for(let i of data["regions"]){
            const option = document.createElement('option')
            option.value = i.regionName
            option.text = i.regionName
            formCobertura.appendChild(option)
        }
        for(let e of data["regions"]){
            formCobertura.addEventListener('change', function() {
                const indice = formCobertura.selectedIndex;
                if(indice === -1) return
                const opcionSeleccionada = formCobertura.options[indice];
                var region = opcionSeleccionada.value
                if(region == e.regionName) { 
                    codigo = e.regionId 
                    return codigo 
                }
            }
            
        }
        
})
// function obtenerCodigo(){
//    fetch(ulrRegion)
//         .then(res => res.json())
//         .then(data => {
//             for(let e of data["regions"]){
//                 const indice = formCobertura.selectedIndex;
//                 if(indice === -1) return
//                 const opcionSeleccionada = formCobertura.options[indice];
//                 var region = opcionSeleccionada.value
//                 if(region == e.regionName) { codigo = e.regionId}
//                 console.log(codigo)
//             }
//     })
//     return codigo
// }
// codigo = obtenerCodigo()

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
