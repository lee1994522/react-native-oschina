import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text as RNText,
} from 'react-native';

export class Text extends Component {

    render() {
        return (
            <RNText {...this.props}
                style={[window.theme.text, this.props.style]}>
                {
                    React.Children.map(this.props.children, (child) => {
                        return child;
                    })
                }
            </RNText>
        );
    }

}