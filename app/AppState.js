import { Player } from './models/player.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  players = [

    new Player("Jake"),
    new Player("John"),
    new Player("Sarah"),
    new Player("Rebecca"),
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())