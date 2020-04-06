import { StyleSheet } from 'react-native';

import { WHITE, RED } from '@constants/colors';

const COMMON_STYLES = {
  button: {
    borderRadius: 5,
    height: 45,
    marginBottom: 15,
    width: 250
  }
};

export const styles = StyleSheet.create({
  loginBg: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative'
  },
  loginLogo: {
    height: 120,
    marginBottom: 90,
    width: 160
  },
  loginInput: {
    ...COMMON_STYLES.button,
    backgroundColor: WHITE,
    padding: 10
  },
  loginSubmit: {
    ...COMMON_STYLES.button,
    alignItems: 'center',
    borderColor: WHITE,
    borderStyle: 'solid',
    borderWidth: 1,
    justifyContent: 'center'
  },
  loginSubmitText: {
    color: WHITE,
    fontWeight: '700',
    textTransform: 'uppercase'
  },
  loginError: {
    color: RED,
    height: 20
  },
  loginFooter: {
    bottom: 0,
    position: 'absolute',
    marginBottom: 20,
    textAlign: 'center',
    width: '100%'
  }
});

export default styles;
