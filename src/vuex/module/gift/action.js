/**
 * Created by jo.chan on 2016/11/4.
 */

import api from '../../../api/index'
import config from '../../../api/config'
import MessageBox from 'vue-msgbox';

/**
 * 获取礼包激活码
 * @param commit
 * @param gameId
 * @param giftId
 */

export const requestCode = ({commit}, gift)=> {
  api.get({
    url: '/7wan/gift/receive',
    data: {
      userId: localStorage.getItem('userId'),
      gameId: gift.gameId,
      giftId: gift.giftId
    },
    success: function (responseData) {
      if(responseData.code == 200 && responseData.data && responseData.data.activationCode){
        if (responseData.data.activationCode == "") {
          return MessageBox.alert('无激活码');
        }
        MessageBox.alert(responseData.data.activationCode);
      }else{
        console.log(responseData.error_msg);
      }
    },
    error: function (err) {
      console.log('error:' + err);
    }
  })
};



