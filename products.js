$(document).ready(() => {
    appendProducts()
})

function appendProducts() {
    let upper = "<div class='flex flex-row'>"
    upper += product('Standard Glas', 'Das Standard-Modell. Gut geeignet für durchschnittliche Dienstleistungen.', '250€', './images/01server.jpg')
    upper += product('Standard Perforiert', 'Kombiniert Luftzirkulation mit einfacher Handhabung. Ideal für Büros.', '270€', './images/02server.jpg')
    upper += product('Breit Perforiert 2', 'Bietet mehr Fläche für Luftdurchlass – perfekt für leistungsstarke Geräte.', '290€', './images/03server.jpg')
    upper += product('Ultra Breit Glas', 'Maximale Sichtfläche bei elegantem Design. Geeignet für Präsentationsräume.', '320€', './images/04server.jpg')
    upper += "</div>"
    $("#upper").append(upper)

    let lower = "<div class='flex flex-row'>"
    lower += product('Ultra Breit Glas 2', 'Noch breiter, noch klarer. Perfekt für moderne Konferenzräume.', '340€', './images/05server.jpg')
    lower += product('Hoch Glas', 'Vertikales Design für Anwendungen mit begrenzter Breite.', '260€', './images/06server.jpg')
    lower += product('Hoch Perforiert', 'Optimiert für vertikale Kühlung – beliebt in Serverräumen.', '280€', './images/07server.jpg')
    lower += product('Ultra Hoch Perforiert', 'Maximale Kühlung bei minimalem Platzverbrauch.', '310€', './images/08server.jpg')
    lower += "</div>"
    $("#lower").append(lower)
}


function product(name, info, price, image) {
    return `
    <div class='mx-2 my-4 w-[24rem] h-[17rem] rounded-2xl bg-gray-700 text-[2rem] text-black flex justify-center'>
        <div class='bg-gray-300 w-[23rem] h-[16rem] rounded-2xl mt-2'>
            <div class='flex flex-row h-12 w-full bg-gray-200 rounded-xl font-bold'>
                <div class='-mt-[1rem] m-2'>${name}</div>
            </div>
            <div class='flex flex-row'>
                <img src="${image}" alt="${name}" width="200" height="200">
                <div class='flex flex-col'>
                    <div class='ml-2 text-[1rem]'>
                        ${info}
                    </div>
                    <div class='flex grow h-full'></div>
                    <div class='bg-gray-200 w-full text-center rounded-xl mx-2 w-8 font-bold text-[2rem]'>
                        ${price}
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}