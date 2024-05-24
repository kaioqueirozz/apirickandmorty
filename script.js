async function findCharacter() {
    
        const character_infos = await fetch(`https://rickandmortyapi.com/api/character`);
        const data = await character_infos.json();
        console.log(data.results)
        
    for (const each_character of data.results){
        addCharacter(each_character.image,each_character.name,each_character.species, each_character.status, each_character.location.name)
    }
    
}

function addCharacter (image, name, species, status, location){
    const father_section = document.querySelector('#page')
    const father_div = document.createElement('div')
    father_div.setAttribute("id", "character")
    father_section.appendChild(father_div)

    const img = document.createElement('img')
    img.classList.add("character_img")
    img.src = image
    father_div.appendChild(img)
    
    //COLOCAR O NOME
    const p_name = document.createElement('p')
    p_name.setAttribute("class","character_name")
    p_name.textContent = "Name: "  
    father_div.appendChild(p_name)
    const span_name = document.createElement('p')
    span_name.setAttribute("class", "character_description")
    span_name.textContent = `${name}`
    p_name.appendChild(span_name)
    
    //COLOCAR ESPECIE
    const p_species = document.createElement('p')
    p_species.setAttribute("class","character_infos")
    p_species.textContent = "Species: "  
    father_div.appendChild(p_species)
    const span_species = document.createElement('p')
    span_species.setAttribute("class", "character_description")
    span_species.textContent = `${species}`
    p_species.appendChild(span_species)
    
    //COLOCAR Status
    const p_status = document.createElement('p')
    p_status.setAttribute("class","character_infos")
    p_status.textContent = "Status: "  
    father_div.appendChild(p_status)
    const span_status = document.createElement('p')
    span_status.setAttribute("class", "character_description")
    span_status.textContent = `${status}`
    p_status.appendChild(span_status)
    
    //COLOCAR Location
    const p_location = document.createElement('p')
    p_location.setAttribute("class","character_infos")
    p_location.textContent = "location: "  
    father_div.appendChild(p_location)
    const span_location = document.createElement('p')
    span_location.setAttribute("class", "character_description")
    span_location.textContent = `${location}`
    p_location.appendChild(span_location)
    
};

findCharacter()