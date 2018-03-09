/**
 * Created by jo.chan on 2016/10/31.
 */
import
{
  // SUCCESS_REQUEST_BASEINFO,
  SUCCESS_REQUEST_GIFT,
  SUCCESS_REQUEST_DAY,
  SUCCESS_REQUEST_WEEK
}
  from './module-type'

const mutations = {
  //获取基本登录信息
  // [SUCCESS_REQUEST_BASEINFO](state, data){
  //   state.baseInfo = data
  // },

  //获取礼包列表
  [SUCCESS_REQUEST_GIFT](state, data){
    state.giftList = data
  },
  //获取今日开服列表
  [SUCCESS_REQUEST_DAY](state, data){
    state.dayList = data
  },
  [SUCCESS_REQUEST_WEEK](state, data){
    state.weekList = data
  }
}

export default mutations
