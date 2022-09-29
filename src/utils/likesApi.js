import tokenService from "./tokenService";

const BASE_URL = "/api/";

export function create(logId) {
    return fetch(`${BASE_URL}logs/${logId}/likes`, {
        method: "POST",
        headers: {
            Authorization: "Bearer " + tokenService.getToken(), 
        },
    }).then((res) => {
        if (res.ok) return res.json();
        throw new Error(res.error);
    });
}

export function removeLike(likeId) {
    return fetch(`${BASE_URL}likes/${likeId}`, {
        method: "DELETE",
        headers: {
            Authorization: "Bearer " + tokenService.getToken(), 
        }
    }).then((res) => {
        if (res.ok) return res.json();
        throw new Error(res.error);
    });
}