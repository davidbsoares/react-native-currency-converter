import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
    firstRow: {
        marginTop: 40,
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    row: {
        
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },  
    text: {
       fontSize: 16,
       color: colors.text
    },
    separator: {
        backgroundColor: colors.border,
        height: StyleSheet.hairlineWidth,
        marginLeft: 20
    }
});

export const FirstRowItem = ({ text, onPress, rightIcon }) =>(    
    <TouchableOpacity onPress={onPress} style={styles.firstRow} >
        <Text style={styles.text}>{text}</Text>
        {rightIcon}
    </TouchableOpacity>
    
);

export const RowItem = ({ text, onPress, rightIcon }) => (
    <TouchableOpacity onPress={onPress} style={styles.row}>
        <Text style={styles.text}>{text}</Text>
        {rightIcon}
    </TouchableOpacity>
  );

export const RowSeparator = () => <View style={styles.separator} />;