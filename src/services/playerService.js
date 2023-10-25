export const getAllPlayers = () => {
    return fetch('http://localhost:8088/players?_expand=position&_expand=team').then(res => res.json())
}

export const getPlayerById = (playerId) => {
    return fetch(`http://localhost:8088/players?id=${playerId}`).then(res => res.json())
}

export const getAllTeams = () => {
    return fetch('http://localhost:8088/teams?_expand=user').then(res => res.json())
}

export const getTeamByUserId = (userId) => {
    return fetch(`http://localhost:8088/teams?userId=${userId}&_expand=user`).then(res => res.json())
}

export const updateTeam = (team) => {
    return fetch(`http://localhost:8088/teams/${team.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(team),
    }).then((response) => response.json())  
}

export const getAllPositions = () => {
    return fetch('http://localhost:8088/positions').then(res => res.json())
}

export const addNewPlayer = (newPlayer) => {
    return fetch('http://localhost:8088/players', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify(newPlayer)
    }).then((res) => res.json())
}

export const deletePlayer = (player) => {
    return fetch(`http://localhost:8088/players/${player.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",

        }

    })
}

export const addPlayerToTeam = (player) => {
    return fetch(`http://localhost:8088/players/${player.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(player),
    }).then((response) => response.json())
}