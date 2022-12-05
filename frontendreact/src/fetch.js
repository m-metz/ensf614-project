/**
 * Fetch functions to be used through entire react application
 */


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

export async function postFetch(api, data) {
    let response = await fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            data
        )
    });
    return response.json();
}
