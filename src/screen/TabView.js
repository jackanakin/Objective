import * as React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

import { strings } from '../../locales/_i18n';

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
};

const FirstRoute = () =>
    <View style={[styles.container, { backgroundColor: '#ff4081' }]}>
        <Text style={{ fontFamily: 'sans-serif-medium' }}>sans-serif-medium</Text>
        <Text style={{ fontFamily: 'Roboto' }}>Roboto</Text>
        <Text style={{ fontFamily: 'monospace' }}>monospace</Text>
    </View>;
const SecondRoute = () => <View style={[styles.container, { backgroundColor: '#673ab7' }]} />;

export default class TabViewExample extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: '1', title: strings('appHome.active') },
            { key: '2', title: strings('appHome.new') },
        ],
    };

    _handleIndexChange = index => this.setState({ index });

    _renderHeader = props => <TabBar {...props} />;

    _renderScene = SceneMap({
        '1': FirstRoute,
        '2': SecondRoute,
    });

    render() {
        return (
            <TabViewAnimated
                navigationState={this.state}
                renderScene={this._renderScene}
                renderHeader={this._renderHeader}
                onIndexChange={this._handleIndexChange}
                initialLayout={initialLayout}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});