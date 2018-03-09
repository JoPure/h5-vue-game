/**
 * Created by jo.chan on 2016/10/31.
 */
export const getPic = state =>state.scroll;
export const getPicMiddle = state=>state.scrollMiddle;
export const getNotice = state =>state.Notice;

export const getRecentGames = state =>state.recentGames;

export const getHotPlayGames = state => state.hotGameList;
export const getNewPlayGames = state =>state.newGameList;
export const getInfoList = state => state.infoList;
export const getGameZoneList = state=>state.gameZoneList;
export const getRecommends = state=>state.gameDetail.recommends;
export const getDetailGift = state=>state.gameDetail.gift;
export const getGameInfo = state=>state.gameDetail.gameInfo;



