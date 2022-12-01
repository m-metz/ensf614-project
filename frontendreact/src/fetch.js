export async function getFetch(api) {
        let response = await fetch(api);
        return response.json();
}

export function deleteFetch(api) {
    fetch(api, {
        method: 'DELETE'
    })
}

export function putFetch(api) {
    fetch(api, {
        method: 'PUT'
    })
}

export function postFetch(api, data) {
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
