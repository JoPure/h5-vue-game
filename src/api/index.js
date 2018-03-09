import Vue from 'vue';
import Resource from 'vue-resource';
import MessageBox from 'vue-msgbox';

Vue.use(Resource);
Vue.http.options.emulateJSON = true;

if (process.env.NODE_ENV === 'production') {
  var baseUrl = 'http://sdk-test.changic.net.cn:2580'
} else {
  // var baseUrl = "http://10.10.15.44:8080"
  var baseUrl = "http://sdk-test.changic.net.cn"
}

export default {
  get (option) {
    Vue.http.get(baseUrl + option.url, {
      headers: option.headers || {},
      emulateJSON: true,
      params: option.data || {}
    })
      .then((response) => {
        successCallback(response, option.success);
      }, (response) => {
        errorCallback(response, option.error);
      });
  },
  post (option) {
    Vue.http.post(baseUrl + option.url, option.data || {}, {
      headers: option.headers || {},
      emulateJSON: true
    })
      .then((response) => {
        successCallback(response, option.success);
      }, (response) => {
        errorCallback(response, option.error);
      });
  },

  jsonp (option) {
    Vue.http.jsonp(baseUrl + option.url, {
      headers: option.headers || {},
      // emulateJSON: true,
      params: option.data || {},
      // method:'GET',
      jsonp: 'jsonCallback'
    })
      .then((response) => {
        alert(typeof response);
        response = JSON.parse(response);
        successCallback(response, option.success);
      }, (response) => {
        alert(123123);
        errorCallback(response, option.error);
      });
  }
}

function gotoLoginPage() {
  if (location.port == '80') {
    window.location.href = location.protocol + '//' + location.hostname + '/login'
  } else {
    window.location.href = location.protocol + '//' + location.hostname + ':' + location.port + '/login'
  }
}

function successCallback(response, successFun) {
  if (response.ok) {
    if (typeof response == 'string') {
      try {
        response = JSON.parse(response)
      } catch (e) {
        MessageBox.alert(response).then(function () {
          return gotoLoginPage();
        });
      }
    }
    if (response.data.code == 200) {
      successFun(response.data)
    } else if (response.data.code == 1001 || response.data.code == 1004 || response.data.code == 1010) {
      gotoLoginPage();
    } else {
      //  MessageBox.alert(response.data['error_msg']).then(function () {
      // gotoLoginPage();
      // });
    }
  }
}

function errorCallback(response, errorFun) {
  if (errorFun) {
    errorFun()
  } else {
    MessageBox.alert('网络错误，请稍后再试!');
  }
}
