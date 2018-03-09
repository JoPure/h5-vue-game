/**
 * Created by jo.chan on 2016/10/31.
 */

import MessageBox from 'vue-msgbox';
import config from '../../../api/config';
import api from '../../../api/index'

let pageData = {
  count: 6,
  hotCount: 8,
  currentPage: 1,
};

/**
 * 顶部轮播
 * @param commit
 */
export const requestGetScrollPic = ({commit}) => {
  api.get({
    url: '/7wan/getScrollPic',
    success: function (responseData) {
      if (responseData.code == 200) {
        var getScrollPic = responseData.data[0].scroll;
        commit('SUCCESS_REQUEST_SCROLLPIC', getScrollPic);
      }
      else {
        console.log(responseData.code + ":" + responseData.error_msg);
      }

    },
    error: function (err) {
      console.log('no');
    }
  })
}

/**
 * 第二轮播
 * @param commit
 */
export const requestGetScrollPicMiddle = ({commit}) => {
  api.get({
    url: '/7wan/getScrollPic',
    success: function (responseData) {
      if (responseData.code == 200) {
        var getScrollPicMiddle = responseData.data[1].scroll;
        commit('SUCCESS_REQUEST_SCROLLPICMIDDLE', getScrollPicMiddle);
      }
      else {
        console.log(responseData.code + ":" + responseData.error_msg);
      }

    },
    error: function (err) {
      console.log('no');
    }
  })
}


/**
 * 获取公告列表
 * @param commit
 */
export const requestGetNotice = ({commit}) => {
  api.get({
    url: '/7wan/getNotice',
    data: {
      type: 1
    },
    success: function (responseData) {
      if (responseData.code == 200) {
        var Notice = responseData.data;
        commit('SUCCESS_REQUEST_NOTICE', Notice);
      }
      else {
        console.log(responseData.code + ":" + responseData.error_msg);
      }
    },
    error: function (err) {
      console.log('no');
    }
  })
}

/**
 * 最近在玩
 * @param commit
 */
export const requestRecentPayGames = ({commit}) => {
  api.get({
    url: '/7wan/getRecentPayGames',
    data: {
      userId: localStorage.getItem('userId'),
    },
    success: function (responseData) {
      if (responseData.code == 200) {
        var recentGames = responseData.data;
        commit('SUCCESS_REQUEST_RECENTGAMES', recentGames);
      }
      else {
        console.log(responseData.code + ":" + responseData.error_msg);
      }
    },
    error: function (err) {
      console.log('no');
    }
  })
}

/**
 * 热门游戏列表
 * @param commit
 */
export const requestHotInfo = ({commit}) => {
  api.get({
    url: '/7wan/sectionMainGameList',
    data: {
      count: pageData.hotCount,
      type: 1
    },
    success: function (responseData) {
      if (responseData.code == 200) {
        var hotGameList = responseData.data;
        commit('SUCCESS_REQUEST_HOT', hotGameList);
      }
      else {
        console.log(responseData.code + ":" + responseData.error_msg);
      }
    },
    error: function (err) {
      console.log('no');
    }
  })
}

/**
 * 新上架列表
 * @param commit
 */
export const requestNewInfo = ({commit}) => {
  api.get({
    url: '/7wan/sectionMainGameList',
    data: {
      count: pageData.count,
      type: 2
    },
    success: function (responseData) {
      if (responseData.code == 200) {
        var newGameList = responseData.data;
        commit('SUCCESS_REQUEST_NEW', newGameList);
      }
      else {
        console.log(responseData.code + ":" + responseData.error_msg);
      }

    },
    error: function (err) {
    }
  })
}

/**
 * 获取游戏详情
 * @param commit
 */
export const requestGameDetail = ({commit}, gameId) => {
  api.get({
    url: '/7wan/gameDetail',
    data: {
      gameId: gameId
    },
    success: function (responseData) {
      if (responseData.code == 200) {
        var gameDetail = responseData.data;
        commit('SUCCESS_REQUEST_GAMEDETAIL', gameDetail);
      }
      else {
        console.log(responseData.code + ":" + responseData.error_msg);
      }
    },
    error: function (err) {
    }
  })
}


