async function personajes() {
    let data = await fetch("https://swapi.dev/api/people/");
    let response = await data.json();
    return response.results;
} 

(async () => {
    let personajeslista = await personajes();

    const groupBygender = personajeslista.reduce((group, person) => {
        const { gender } = person;
        group[gender] = group[gender] ?? [];
        group[gender].push(person.name);
        return group;
    }, {});
    console.log(groupBygender);
})();