/**
 * Created by jo.chan on 2016/10/31.
 */
import
{
  SUCCESS_REQUEST_SCROLLPIC,
  SUCCESS_REQUEST_SCROLLPICMIDDLE,
  SUCCESS_REQUEST_NOTICE,
  SUCCESS_REQUEST_RECENTGAMES,
  SUCCESS_REQUEST_HOT,
  SUCCESS_REQUEST_NEW,
  SUCCESS_REQUEST_NEWS,
  SUCCESS_REQUEST_GAMEZONE,
  SUCCESS_REQUEST_GAMEDETAIL
}
  from './module-type'

const mutations = {
  //获取轮播图列表
  [SUCCESS_REQUEST_SCROLLPIC](state, data){
    state.scroll = data
  },
  //获取第二轮播图列表
  [SUCCESS_REQUEST_SCROLLPICMIDDLE](state, data){
    state.scrollMiddle = data
  },
  //获取公告列表
  [SUCCESS_REQUEST_NOTICE](state, data){
    state.Notice = data
  },
  //获取最近在玩列表
  [SUCCESS_REQUEST_RECENTGAMES](state, data){
    state.recentGames = data
  },
  //获取热门游戏列表
  [SUCCESS_REQUEST_HOT] (state, data) {
    state.hotGameList = data;
  },
  //获取新上架列表
  [SUCCESS_REQUEST_NEW](state, data){
    state.newGameList = data
  },
  //获取新闻列表
  [SUCCESS_REQUEST_NEWS] (state, data) {
    state.infoList = data
  },
  //获取新开服列表
  [SUCCESS_REQUEST_GAMEZONE](state, data){
    state.gameZoneList = data
  },
  //获取详情
  [SUCCESS_REQUEST_GAMEDETAIL](state, data){
    state.gameDetail = data
  }
}

export default mutations
