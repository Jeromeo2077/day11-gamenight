import { AppState } from "../AppState.js";

export class PlayersController {
  constructor() {
    console.log('PlayerController Loaded');
    console.log(AppState.players);
  }


  drawPlayers() {
    const players = AppState.players
    let playerContent = ''
    players.forEach(player => playerContent += player.PlayerTemplateCard)

    const playerCardsElem = document.getElementById('playercard')
    playerCardsElem.innerHTML = playerContent
  }
}