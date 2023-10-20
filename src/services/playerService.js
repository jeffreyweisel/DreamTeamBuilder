export const getAllPlayers = () => {
    return fetch('http://localhost:8088/players?_expand=position').then(res => res.json())
}