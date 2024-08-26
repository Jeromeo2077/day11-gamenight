import { AppState } from "../AppState.js";

export class PlayersController {
  constructor() {
    console.log('PlayerController Loaded');
    console.log(AppState.players);
  }
}