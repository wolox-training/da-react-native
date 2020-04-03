import { StyleSheet } from 'react-native';

import { WHITE, RED } from '@constants/colors';

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
    backgroundColor: WHITE,
    borderRadius: 5,
    height: 45,
    marginBottom: 15,
    padding: 10,
    width: 250
  },
  loginSubmit: {
    alignItems: 'center',
    borderColor: WHITE,
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    justifyContent: 'center',
    marginBottom: 15,
    height: 45,
    width: 250
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
