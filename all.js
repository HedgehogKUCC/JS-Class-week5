// 匯入語系檔案
import zh_TW from './zh_TW.js';

// 加入至 VeeValidate 的設定檔案
VeeValidate.localize('tw', zh_TW);

// input 驗證
Vue.component('ValidationProvider', VeeValidate.ValidationProvider);

// 自定義設定檔案，錯誤的 className
VeeValidate.configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  }
});

new Vue({
  el: '#app',
  data: {
    form: {
      username: '',
      email: '',
      telephone: '',
      address: '',
      payment: '',
    }
  }
})