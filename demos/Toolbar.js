import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';

import { Avatar, Drawer, Toolbar, Button, COLOR } from 'react-native-material-ui';
const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
    },
});

export default class Toolbar extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigation.goBack()}
                    centerElement="Title"
                />
                <View style={styles.container}>
                    <Toolbar
                        centerElement="With menu"
                        rightElement={{
                            actions: ['edit'],
                            menu: { labels: ['Item 1', 'Item 2'] },
                        }}
                    />
                </View>
                <View style={styles.container}>
                    <Toolbar
                        leftElement="menu"
                        centerElement="Searchable"
                        searchable={{
                            autoFocus: true,
                            placeholder: 'Search',
                        }}
                    />
                </View>
                <View style={styles.container}>
                    <Toolbar
                        leftElement="clear"
                        centerElement="With button"
                        rightElement={
                            <Button
                                text="Save"
                                style={{ text: { color: 'white' } }}
                            />
                        }
                    />
                </View>
                <View style={styles.container}>
                    <Toolbar
                        size={16}
                        leftElement="clear"
                        centerElement="Custom icon size"
                        rightElement={{
                            actions: ['edit'],
                            menu: { labels: ['Item 1', 'Item 2'] },
                        }}
                    />
                </View>
                <View style={styles.container}>
                    <Toolbar
                        leftElement="clear"
                        centerElement="Custom styles"
                        rightElement={{
                            actions: ['edit'],
                            menu: { labels: ['Item 1', 'Item 2'] },
                        }}
                        style={{
                            container: { backgroundColor: COLOR.orange300 },
                            leftElement: { color: COLOR.orange900 },
                            titleText: { color: COLOR.orange900 },
                            rightElement: { color: COLOR.orange900 },
                        }}
                    />
                </View>
                <View style={styles.container}>
                    <Toolbar centerElement="Only title" />
                </View>
            </View>
        )
    }
}
}