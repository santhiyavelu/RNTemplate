import NetInfo from '@react-native-community/netinfo';
import {networkInfoActions} from '../features/networkInfo/networkInfoSlice';

class NetworkInfoHelper {
  unsubscribe = undefined;

  networkInfoListener(dispatch) {
    NetInfo.fetch().then(state => {
      dispatch(
        networkInfoActions.networkInfoChange({
          isConnected: state.isConnected,
          isInternetReachable: state.isInternetReachable,
        }),
      );
    });

    this.unsubscribe = NetInfo.addEventListener(state => {
      dispatch(
        networkInfoActions.networkInfoChange({
          isConnected: state.isConnected,
          isInternetReachable: state.isInternetReachable,
        }),
      );
    });
  }

  removeNetworkInfoListener() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
}

export default new NetworkInfoHelper();
