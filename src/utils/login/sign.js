/**
 * Created by xiaoyi on 2016/10/28 0028.
 */
import md5 from './md5'
function createSignature(params){
  var keys = [];
  for(var key in params) {
    keys.push(key);
  }
  keys.sort();
  var values = [];
  for(var i = 0; i < keys.length; i++) {
    values.push(params[keys[i]]);
  }
  return md5.hex(values.join("") + 'dcc69fcc39d543bf8ecbc5ffc6524a2c');
}

export default{
  create (params){
    return createSignature(params);
  }
}
