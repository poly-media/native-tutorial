import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

class PlaceInput extends Component {

    state = {
        placeName: ''
    }

    placeNameChangedHandler = (val) => {
        this.setState({
            placeName: val
        })
    }

    placeBtnPressHandler = () => {
        if(this.state.placeName.trim() === 0 ){
          return;
        }
        this.props.onPlaceAdded(this.state.placeName);
      }

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput style={styles.placeInput}
                    value={this.state.placename}
                    placeholder='An awesome Place'
                    onChangeText={this.placeNameChangedHandler}
                />
                <Button style={styles.placeBtn}
                    title='Add'
                    onPress={this.placeBtnPressHandler} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    placeInput: {
        width: '70%'
    },
    placeBtn: {
        width: '30%'
    },
})

export default PlaceInput;