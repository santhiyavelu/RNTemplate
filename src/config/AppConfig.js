import {Platform} from 'react-native';

export default {
  // font scaling override - RN default is on
  appDisplayVersion: '1.1.223',
  serverChangePass: '85247',
  allowTextFontScaling: true,
  allowIQKeyboardManager: true,
  allowIQKeyboardManagerToolbar: true,
  pagingRecordsPerPage: 15,
  timeZone: (-1 * new Date().getTimezoneOffset()) / 60,
  gDynamicLinksAPIKey: '',
  gMapAPIKey: Platform.OS === 'android' ? '' : '',
  appDownloadLink: Platform.OS === 'android' ? '' : '',
  otpTimer: 30,
};
