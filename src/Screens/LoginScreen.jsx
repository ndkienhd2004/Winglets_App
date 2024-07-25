import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Keyboard,
  Text,
  ActivityIndicator,
} from 'react-native';
import Logo from '../../assets/image/logo.png';
import Input from '../Components/Input';
import Button from '../Components/Button';

const LoginScreen = ({navigation, setIsLoggedIn}) => {
  const [inputs, setInputs] = useState({email: '', password: ''});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    }
    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    }
    if (isValid) {
      login();
    }
  };

  const login = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      setIsLoggedIn(true);
    }, 3000);
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <View style={styles.inputContainer}>
        {initialLoading ? (
          <View style={styles.spinnerContainer}>
            <ActivityIndicator
              size="large"
              color="#E73688"
              style={styles.spinner}
            />
          </View>
        ) : (
          <>
            {loading ? (
              <ActivityIndicator size="large" color="#E73688" />
            ) : (
              <>
                <Input
                  onChangeText={text => handleOnchange(text, 'email')}
                  onFocus={() => handleError(null, 'email')}
                  iconName="email-outline"
                  label="Email"
                  placeholder="Enter your email address"
                  error={errors.email}
                />
                <Input
                  onChangeText={text => handleOnchange(text, 'password')}
                  onFocus={() => handleError(null, 'password')}
                  iconName="lock-outline"
                  label="Password"
                  placeholder="Enter your password"
                  error={errors.password}
                  password
                />
                <Button title="Log In" onPress={validate} />
                <Text
                  onPress={() => navigation.navigate('RegistrationScreen')}
                  style={styles.registerText}>
                  Don't have an account? Register
                </Text>
              </>
            )}
          </>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  logo: {
    width: 320,
    height: 320,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  registerText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default LoginScreen;
