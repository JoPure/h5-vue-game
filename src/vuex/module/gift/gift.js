/**
 * Created by jo.chan on 2016/11/1.
 */

import * as actions from '../gift/action'
import * as getters from '../gift/getters'
import mutations  from '../gift/mutations'

const state = {
  giftList: [],
  dayList: [],
  weekList: []
}


export default{
  state,
  mutations,
  actions,
  getters,

}
