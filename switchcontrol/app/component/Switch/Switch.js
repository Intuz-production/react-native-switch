// Copyright (C) 2018 INTUZ. 

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to
// the following conditions:

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR
// ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH
// THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    Animated
} from 'react-native';

import styles from './styles'
import Images from './Images';

class Switch extends Component {
    static defaultProps = {   
        isOn: 0,
        toggleOnImage: Images.toggleOn,
        toggleOffImage: Images.toggleOff
    };

    constructor(props) {
        super(props);
        this.state = {
            value:this.props.isOn
        };
    }

    btnSwitchPress(){
        if(this.state.value == 1) {
            this.setState({value:0},this.props.callbackAfterSwitchUpdate(0 ,this.props.extraParam))
        } else {
            this.setState({value:1},this.props.callbackAfterSwitchUpdate(1, this.props.extraParam))
        }
    }

    render() {
        return (
            <View>
                <TouchableOpacity activeOpacity={1} onPress={() => this.btnSwitchPress()}>
                    <Image source={(this.state.value == 1)
                        ? this.props.toggleOnImage
                        : this.props.toggleOffImage}/>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Switch
