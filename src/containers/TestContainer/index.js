import React from 'react';
import {View, TextInput, TouchableOpacity, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {itemsActions} from '../../features/items/itemsSlice';
import dateUtils from '../../util/dateUtils';
const {addItem} = itemsActions;

class TestContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      ourCollection: [],
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <TextInput
          value={this.state.inputValue}
          onChangeText={changedText => {
            this.setState({inputValue: changedText});
          }}
          style={{height: 44, backgroundColor: 'yellow', margin: 10}}
        />

        <TouchableOpacity
          onPress={() => {
            this.props.addItem(this.state.inputValue);
            this.setState({inputValue: ''});
          }}>
          <Text>Add</Text>
        </TouchableOpacity>

        <FlatList
          data={this.props.items.items}
          renderItem={({item, index}) => {
            return <Text>{item}</Text>;
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items,
});

const actions = {addItem};

export default connect(mapStateToProps, actions)(TestContainer);
