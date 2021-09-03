import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';

import {
  fetchLoading,
  fetchSuccess,
  fetchError,
  fetchGetTemp,
} from '../redux/actionCreators';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
    };
  }

  render() {
    const {isLoading, isSuccess, isError, cityName, temp} =
      this.props.fetchTempReducer;

    const getTemp = async () => {
      try {
        this.props.fetchGetTemp(this.state.cityName);
      } catch (e) {
        console.log(e);
      }
    };

    const getDisplay = () => {
      if (isLoading) {
        return '...Loading';
      }
      if (isSuccess) {
        return 'Nhiệt độ ' +cityName + ' là: ' + temp;
      }
      if (isError) {
        return 'Error';
      }
      return 'Nhap ten tp';
    };

    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>{getDisplay()}</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({cityName: text})}></TextInput>
        <TouchableOpacity style={styles.button} onPress={getTemp}>
          <Text style={styles.textBtn}>Lấy Nhiệt độ</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    fetchTempReducer: state.fetchTempReducer,
  };
}

export default connect(mapStateToProps, {fetchLoading, fetchGetTemp})(Main);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
  },
  input: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: 'blue',
    color: 'white',
    paddingHorizontal: 10,
  },
  button: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  textBtn: {
    color: 'white',
  },
});
