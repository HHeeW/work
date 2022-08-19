import React from 'react'
import { TabBarIOS, TabBarIOSItem } from 'react-native'

const MenuItem = (props) => {
    const TabBarIOS = props.itemComponent || TabBarIOS.Item;
    _onPressItem = () => {
        props._onPress(props.id)
    }
  return (
    <TabBarItem {...props}
        onPress={this._onPressItem}>
            {props.children}
    </TabBarItem>
  )
}

export default MenuItem