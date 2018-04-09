export function post(path, paramaters) {
    const uri = `https://instalura-api.herokuapp.com/api/${path}`;

    const requestInfo = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(paramaters)
    }

    return fetch(uri, requestInfo)
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                console.warn("erro de login");
                throw new Error("Não foi possível efetuar login.");
            }
        }).catch(e => console.warn("erro de login: " + e.message));
}