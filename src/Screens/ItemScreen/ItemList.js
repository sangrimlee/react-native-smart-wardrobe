import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, Text, FlatList, RefreshControl } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../store/actions/item';
import ItemCard from './ItemCard';

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const ItemList = ({ category }) => {
  const numColumns = 2;
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);
  const { itemList } = useSelector((state) => state.item);
  const { userToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setRefreshing(false);
      dispatch(getItems(userToken));
    });
  }, [refreshing]);

  useEffect(() => {
    console.log('아이템리스트 업데이트');
    const temp = JSON.parse(JSON.stringify(itemList));
    const filteredList = temp.filter((item) => item.category == category);
    if (category !== '전체') {
      setData(filteredList);
    } else {
      setData(temp);
    }
  }, [itemList]);

  const formatData = (dataList, numColumns) => {
    const totalRows = Math.floor(dataList.length / numColumns);
    let totalLastRows = dataList.length - totalRows * numColumns;
    while (totalLastRows !== 0 && totalLastRows !== numColumns) {
      dataList.push({ id: 'blank', empty: true });
      totalLastRows++;
    }
    return dataList;
  };

  const renderItem = ({ item }) => {
    if (item.empty === true) {
      return (
        <View style={{ flex: 1, marginBottom: 16, paddingHorizontal: 8 }} />
      );
    }
    return <ItemCard itemInfo={item} numColumns={numColumns} />;
  };

  return (
    <View style={styles.container}>
      {data.length ? (
        <FlatList
          data={formatData(data, numColumns)}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          numColumns={numColumns}
          horizontal={false}
          style={{ paddingTop: 8 }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>해당 아이템이 없습니다.</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    backgroundColor: '#FEFFFE',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTitle: {
    fontFamily: 'SFPro-Text-Regular',
    fontSize: 16,
    color: '#2c2c2c',
  },
});

export default ItemList;
