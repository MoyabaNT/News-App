import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

type Props = {}

const SearchBar = (props: Props) => {
  return (
    <View style={styles.Container}>
        <View style={styles.searchBar}>
            <Ionicons name='search-outline' size={20} color={Colors.lightGrey} />
            <TextInput 
            placeholder= 'search'
            placeholderTextColor={Colors.lightGrey}
            style={styles.searchTxt}
            autoCapitalize='none'
            />
        </View>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    Container: {
        marginHorizontal: 20
    },
    searchBar: {
        backgroundColor: '#E4E4E4',
        paddingHorizontal: 12,
        paddingVertical: 12,
        borderRadius: 10,
        flexDirection: 'row',
        gap: 10
    },
    searchTxt: {
        fontSize: 14,
        flex: 1,
    }
})