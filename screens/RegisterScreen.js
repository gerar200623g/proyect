// screens/RegisterScreen.js
import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebaseConfig";
import { Avatar } from 'react-native-elements';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Guardar el avatar seleccionado junto con otros datos del usuario si es necesario
        navigation.navigate('Home');
      })
      .catch(error => setError(error.message));
  };

  const avatars = [
    { uri: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { uri: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { uri: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { uri: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { uri: 'https://randomuser.me/api/portraits/men/5.jpg' },
  ];

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/imagen.jpeg')}
        style={styles.logo}
      />

      {/* Avatar Selection */}
      <Text style={styles.avatarText}>Selecciona un avatar:</Text>
      <View style={styles.avatarContainer}>
        {avatars.map((avatar, index) => (
          <TouchableOpacity key={index} onPress={() => setSelectedAvatar(avatar.uri)}>
            <Avatar
              rounded
              source={{ uri: avatar.uri }}
              size="medium"
              containerStyle={[
                styles.avatar,
                selectedAvatar === avatar.uri && styles.selectedAvatar,
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>

      <TextInput
        placeholder="INGRESE SU CORREO"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={[styles.input, styles.emailInput]}
        placeholderTextColor="#A0A0A0"
      />
      <TextInput
        placeholder="INGRESE CONTRASEÑA"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={[styles.input, styles.passwordInput]}
        placeholderTextColor="#A0A0A0"
      />
      <TextInput
        placeholder="CONFIRMAR CONTRASEÑA"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={[styles.input, styles.passwordInput]}
        placeholderTextColor="#A0A0A0"
      />
      <TouchableOpacity onPress={handleRegister} style={[styles.button, styles.darkGreenButton]}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.newUserText}>¿Ya tienes una cuenta? Inicia sesión</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>Eco-héroes unidos por un mundo mejor</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#3C553E',
  },
  logo: {
    width: 360,
    height: 350,
    marginBottom: 20,
  },
  avatarText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  avatar: {
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedAvatar: {
    borderColor: '#17B559',
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#A0A0A0',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 16,
    color: '#FFFFFF',
  },
  emailInput: {
    backgroundColor: '#29382E',
  },
  passwordInput: {
    backgroundColor: '#29382E',
  },
  button: {
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  darkGreenButton: {
    backgroundColor: '#17B559',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginBottom: 20,
  },
  newUserText: {
    color: '#A0A0A0',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  footerText: {
    color: '#A0A0A0',
    textAlign: 'center',
    bottom: 20,
  },
});

export default RegisterScreen;
