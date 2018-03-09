/**
 * Created by jo.chan on 2016/10/31.
 */

import * as actions from './action'
import * as getters from './getters'
import mutations  from './mutations'

const state = {
  scroll: [],
  scrollMiddle: [],
  Notice: [],
  recentGames: [],
  hotGameList: [],
  newGameList: [],
  infoList: [],
  gameZoneList: [],
  gameDetail: {
    recommends: [],
    gift: [],
    gameInfo: {}
  }
}

export default{
  state,
  mutations,
  actions,
  getters,
}
