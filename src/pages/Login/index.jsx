import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { TextInput } from 'react-native-web';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { styles } from './styles';
import logo from '../../../assets/logo.png';
import rodape from '../../../assets/rodape.png';

export default class Login extends Component {
  

  constructor(props){
    super(props);
    
    this.state = {
      login: '',
      senha: '',
      resultado: '',
    }

  }

   onEntrar(){
    var l = this.state.login
    var s = this.state.senha;
    var r = this.state.resultado;
    if(l == 'Gustavo Medeiros' && s == '25/02/1997') {
        r = 'Seja Bem-vindo!';
    } else {
        r = 'Usuário ou senha inválidos!';
    }

    this.setState({login: l, senha: s, resultado: r}); 
  
  }

  render() {
  return (
    
    <View style={styles.container}>

      <StatusBar backgroundColor="#FFF" translucent={false} />

      <Image source={logo} style={styles.logo} />

      <TextInput placeholder="Telefone, nome de usuário ou email" style={styles.input} onChangeText={(login)=> this.setState({login})} value={this.state.login}/>  

      <TextInput placeholder="Senha" style={styles.input} onChangeText={(senha)=> this.setState({senha})} value={this.state.senha}/>  


      <TouchableOpacity style={styles.loginButton} onPress={this.onEntrar
                .bind(this)}>
          <Text style ={styles.loginText}> Entrar </Text>
      </TouchableOpacity>

      
      <View style={styles.divisor}>
        <View style={styles.divisorLine}></View>
        <Text style={{ marginHorizontal: '3%' }} >OU</Text>
        <View style={styles.divisorLine}></View>
      </View>


      <TouchableOpacity style={styles.facebookContainer}>
      <FontAwesome5 name="facebook" size={25} color="#399fff"/>
      <Text style={styles.facebookText}> Entrar com o Facebook</Text>
      </TouchableOpacity>  

      <View style={styles.forgotContainer}>
        <TouchableOpacity>
          <Text style={styles.forgotText}>Esqueceu a senha?</Text>
        </TouchableOpacity>    
      </View>
      
      <View>
        <Text> {this.state.resultado} </Text>
      </View>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Não tem uma conta?</Text>
        <TouchableOpacity>
          <Text style={styles.signUpButton}> Cadastre-se</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Obtenha o aplicativo.</Text>
      </View>  

      <Image source={rodape} style={styles.rodape} />


    </View>
  );
}
}