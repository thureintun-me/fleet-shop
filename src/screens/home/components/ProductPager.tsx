import PagerView from "react-native-pager-view";
import {Image, StyleSheet, View} from "react-native";
import React, {useState} from "react";
import {useTheme} from "@react-navigation/native";

interface  ProductPagerProps {
    images : string [] | undefined
}
const ProductPager : React.FC<ProductPagerProps> = ({images}) => {
    const {colors, fonts} = useTheme();
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = (position: number) => {
        setCurrentPage(position);
    };

    return (
      <>
          <PagerView style={{height:330}} initialPage={0}
                     onPageSelected={(e) => handlePageChange(e.nativeEvent.position)}>
              {
                images?.map((item, index) => {
                      return (
                          <View style={{...styles.page,borderColor:colors.border,}} key={item}>
                              <Image source={{uri: item}} style={{
                                  width: "100%",
                                  height: 300,
                                  resizeMode:'contain'
                              }}/>
                          </View>
                      )
                  })
              }
          </PagerView>
          <View style={styles.indicatorContainer}>
              {images?.map((_, index) => (
                  <View
                      key={index}
                      style={[
                          styles.indicator,
                          index === currentPage && {backgroundColor:colors.primary},
                      ]}
                  />
              ))}
          </View>
      </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        marginHorizontal:30,
        borderRadius:30

    },
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    indicator: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#ccc',
        marginHorizontal: 5,
    },
    activeIndicator: {
        backgroundColor: '#000', // Active dot color
    },
});

export default ProductPager;
