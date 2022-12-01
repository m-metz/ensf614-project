export async function getFetch(api) {
        let response = await fetch(api);
        return response.json();
}

function deleteFetch(api) {
    fetch(api, {
        method: 'DELETE'
    })
}

function putFetch(api) {
    fetch(api, {
        method: 'PUT'
    })
}

function postFetch(api, data) {
    fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            data
        )
    })
}
