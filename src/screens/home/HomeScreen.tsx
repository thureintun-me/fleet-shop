import React from "react";
import {FlatList, Image, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {HomeStackScreenProps} from "@navigation/types";
import {useTheme} from "@react-navigation/native";
import useFetchAllProducts from "@screens/home/hooks/useFetchAllProducts";
import AppTitle from "@components/AppTitle";
import {Star} from "lucide-react-native";
import CardItem from "@components/CardItem";


const ItemSeparator = () => {
    return <View style={styles.separator}/>;
};
const HomeScreen = ({navigation, route}: HomeStackScreenProps<'HomeScreen'>) => {

    const {colors, fonts} = useTheme();
    const {data, fetchNextPage, isFetchingNextPage, hasNextPage} = useFetchAllProducts();
    const products = data?.pages?.flatMap((page) => page.products);

    const getMoreProducts = () => {
        if (hasNextPage) {
            fetchNextPage();
        }

    }

    const navigateToDetails = (id : number) => {
        navigation.navigate("DetailsScreen",{
            productId:id
        });
    }


    return (
        <SafeAreaView style={{...styles.container, backgroundColor: colors.background}}>

            <View style={{marginTop: 20}}>
                <AppTitle/>
            </View>

            <FlatList
                data={products}
                numColumns={2}
                style={{
                    flex: 1,
                    paddingVertical: 20
                }}
                onEndReached={getMoreProducts}
                onEndReachedThreshold={0.8} //
                columnWrapperStyle={{
                    justifyContent: 'space-between',
                }}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={({item, index}) => (

                    <CardItem {...item} onPress={navigateToDetails}/>

                )}
                ListFooterComponent={() => (
                    isFetchingNextPage ? <View style={{flex: 1, justifyContent: "center", alignItems: 'center',marginVertical:20}}>
                        <Text style={{...fonts.regular}}>Loading more...</Text>
                    </View> : null
                )}

            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            padding: 16,
        },
        separator: {
            height: 30,
        },

    }
)
export default HomeScreen;
