import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',    
    },
    logo:{
      width: 150,
      height: 50,
      marginTop: 40,
      marginBottom: 40,
    }, 
    rodape:{
      width: 320,
      height: 50,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
    },
    input:{
      width: '80%',
      height: 40,
      backgroundColor: '#F4F3F3',
      marginBottom: 20,
      padding: 8,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#E0E0E0',
    },
    forgotContainer:{
      width: '80%',
      alignItems: 'center',    
      marginBottom: '8%'
    },
    forgotText:{
      color:'ligtblue',    
    },
    loginButton:{
      marginTop: '1%',
      backgroundColor: '#399fff',    
      width: '80%',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    loginText:{
      color: '#FFF',
      fontSize: 17,    
    },
    facebookContainer:{
      flexDirection: 'row',
      alignItems: 'center',  
      marginTop: '6%',
      marginBottom: '6%',    
    },
    facebookText:{
      color: '#399fff',
      paddingLeft: 8,
      fontSize: 15,
      fontWeight: 'bold',
    },
    divisor:{
      marginTop: '10%',
      flexDirection: 'row',
      width: '90%',
      alignItems: 'center',
      justifyContent: 'center',    
    },
    divisorLine:{
      width: '45%',
      height: 3,
      backgroundColor: '#EFEDED',
      borderRadius: 5,
    },
    signUpContainer:{
      flexDirection: 'row',
      marginTop: '10%',
    },
    signUpText:{
      color: 'black',
      paddingRight: 5,
      fontSize: 15,
    },
    signUpButton:{
      color: '#399fff',
      fontWeight: 'bold',
    }
  });
  