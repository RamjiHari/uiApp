import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
      },
      footer: {
          backgroundColor: '#fff',
          paddingHorizontal: 20,
          paddingVertical: 20,
          flexDirection: 'row',
      },
      text_header: {
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 30
      },
      text_footer: {
          color: '#05375a',
          fontSize: 18
      },
      picker:{
        borderBottomWidth: 1,
        width:'33.33%',
        borderBottomColor: "rgba(155,155,155,1)",
        marginTop: 10,
        marginLeft: 6,
        paddingBottom: 5,

      },
      action: {
          flexDirection: 'row',
          width:'33.33%',
          marginTop: 10,
          borderBottomWidth: 1,
          borderBottomColor: "rgba(155,155,155,1)",
          paddingBottom: 5,
          marginLeft:6
      },
      label: {
        margin: 8,
      },
      checkbox: {
        alignSelf: "center",
      },
      actionError: {
          flexDirection: 'row',
          marginTop: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#FF0000',
          paddingBottom: 5
      },
      textInput: {
          flex: 1,
          marginTop: Platform.OS === 'ios' ? 0 : -12,
          paddingLeft: 10,
          color: '#000',
      },
      errorMsg: {
          color: '#FF0000',
          fontSize: 14,
      },
      button: {
          alignItems: 'center',
          marginTop: 50
      },
      signIn: {
          width: '100%',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10
      },
      textSign: {
          fontSize: 18,
          fontWeight: 'bold'
      }
});