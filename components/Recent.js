import { FlatList, ActivityIndicator, RefreshControl } from "react-native";
import { useState, useEffect, useCallback } from "react";
import Item from "./Items";
import NotFound from "./NotFound";
export default function Recent({ searchQuery = "" }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const fetchQuotes = async (reset = false) => {
    setLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/quotes?limit=10&skip=${page}`);
      const result = await response.json();
      if (result && result.quotes.length > 0) {
        const newData = reset ? result.quotes : [...data, ...result.quotes];
        setData(newData);
        setFilteredData(newData);
      }
    } catch (error) {
      console.error("Failed to fetch quotes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, [page]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setPage(0);
    setData([])
    fetchQuotes(true);
    setRefreshing(false);
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredData(data); 
    } else {
      const lowerQuery = searchQuery.toLowerCase();
      const filtered = data.filter(
        (item) =>
          item.author.toLowerCase().includes(lowerQuery) ||
          item.quote.toLowerCase().includes(lowerQuery)
      );
      setFilteredData(filtered);
    }
  }, [searchQuery, data]);

  const renderItem = ({ item }) => <Item title={item.author} description={item.quote} />;

  const handleEndReached = () => {
    if (!loading && searchQuery.trim() === "") {
      setPage((prev) => prev + 10);
    }
  };

  return (
    <FlatList
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={NotFound}
      data={filteredData}
      renderItem={renderItem}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.1}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      ListFooterComponent={loading ? <ActivityIndicator size="large" color="#E9CA97" /> : null}
    />
  );
}
