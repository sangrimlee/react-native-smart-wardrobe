import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import axios from 'axios';
import LikeItem from './LikeItem';

const EmptyView = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.decription}>
        계속해서 보길 원하는{'\n'}아이템 또는 코디를 추가하십시오.
      </Text>
    </View>
  );
};

const LikeList = () => {
  const insets = useSafeAreaInsets();
  const { userToken } = useSelector((state) => state.auth);
  const [likeList, setLikeList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getLikeList = async () => {
      setLoading(true);
      const url = 'http://3.21.245.113:8000/clothes/infolike';
      try {
        const { data } = await axios.post(url, { token: userToken });
        setLikeList(data.items);
      } catch (e) {}
      setLoading(false);
    };
    getLikeList();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {likeList.length === 0 ? (
        <EmptyView />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flexDirection: 'row', marginBottom: insets.bottom }}>
            <View style={styles.colContainer}>
              {likeList
                .filter((_, i) => i % 2 === 0)
                .map((item) => (
                  <LikeItem {...item} key={item.id} />
                ))}
            </View>
            <View style={styles.colContainer}>
              {likeList
                .filter((_, i) => i % 2 === 1)
                .map((item) => (
                  <LikeItem {...item} key={item.id} />
                ))}
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
  colContainer: {
    flex: 1,
    paddingHorizontal: 4,
  },
  decription: {
    fontFamily: 'SFPro-Text-Light',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 40,
  },
});

export default LikeList;
