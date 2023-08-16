import {useState} from 'react';
import {View, TouchableOpacity, FlatList, TextInput} from 'react-native';
import {Text} from '../../components';
import styles from './styles';
import {feedActions} from '../../features/feeds/feedsSlice';
import {useSelector, useDispatch} from 'react-redux';
import {Colors} from '../../themes';

const {createNewPost, addLikeToPost} = feedActions;

const TestFeed = () => {
  const postDispatch = useDispatch();
  const feeds = useSelector(state => state.feeds);
  const [postInputText, setPostInputText] = useState('');

  const renderFeedList = () => {
    return (
      <View>
        <FlatList
          data={feeds}
          renderItem={({item, index}) => {
            return (
              <View style={styles.feedCell}>
                <Text style={styles.feedPostText}>{item.postText}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: Colors.modalCancelText,
                  }}>
                  <TouchableOpacity
                    style={styles.feedActionBtns}
                    onPress={() => {
                      postDispatch(addLikeToPost(item.timeStamp));
                    }}>
                    <Text color={'white'}>Like ({item.likesCount})</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.feedActionBtns}>
                    <Text color={'white'}>
                      Comment ({item.comments.length})
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        numberOfLines={0}
        style={styles.postInputField}
        value={postInputText}
        onChangeText={changedText => {
          setPostInputText(changedText);
        }}
        placeholder="Write Post..."
      />
      <TouchableOpacity
        onPress={() => {
          postDispatch(createNewPost(postInputText));
          setPostInputText('');
        }}
        style={styles.submitButton}>
        <Text>Create Post</Text>
      </TouchableOpacity>
      {renderFeedList()}
    </View>
  );
};

export default TestFeed;
