export const getAllPlayers = () => {
    return fetch('http://localhost:8088/players?_expand=position&_expand=team').then(res => res.json())
}

export const getPlayerById = (playerId) => {
    return fetch(`http://localhost:8088/players?id=${playerId}`).then(res => res.json())
}

export const getAllTeams = () => {
    return fetch('http://localhost:8088/teams?_expand=user').then(res => res.json())
}