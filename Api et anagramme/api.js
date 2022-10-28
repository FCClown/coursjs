// Option fonction anonyme
(async() => {
	const contenu = await fetch("https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_stations-velos-libre-service-nantes-metropole-disponibilites&q=&facet=banking&facet=bonus&facet=status&facet=contract_name");
    const contenuJson = await contenu.json()
    console.log(contenuJson)

    //contenuJson.forEach(element => {
      //  console.log(element)
    //});

    contenuJson.records.forEach(element => console.log(element.fields.address));


})()