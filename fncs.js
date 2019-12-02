async function launchSncfRequest(query) {
        let response = await fetch(`https://ressources.data.sncf.com/api/records/1.0/search/?dataset=referentiel-gares-voyageurs&q=${query}`)
        .catch((e) => alert(e));
        let data = await response.json();
        return data.records.map(gare => gare.fields.gare_ut_libelle);
 }

 launchSncfRequest('Lille').then(function(gares) {return console.log(gares)});


