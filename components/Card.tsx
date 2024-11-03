import { View, Text, StyleSheet } from 'react-native'
import React, { useMemo } from 'react'
import { Colors } from './../constants/Colors';
import { Calculations } from './Calculations';
import Entypo from '@expo/vector-icons/Entypo';

interface CardProps{
    theme: boolean,
    title: string,
    area: number,
}

const Card: React.FC<CardProps> = ({theme, title, area}) => {
    const baseFontSize = 12;

    const styles = useMemo(
        () => StyleSheet.create({
                card:{
                    backgroundColor: theme ? Colors.dark.card : Colors.light.card,
                    marginVertical: 10,
                    height: 50,
                    width: '100%',
                    borderRadius: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                    alignItems: 'center',
                },
                text:{
                    fontFamily: 'bb',
                    fontSize: baseFontSize * 1.3,
                    color: theme ? Colors.dark.text : Colors.light.text,
                    textAlignVertical: 'center',
                },
                valueWrapper:{
                    maxWidth: '80%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                },
                checker:{
                    textAlignVertical: 'center',
                    marginLeft: 5,
                },
            }),
        [theme]
    )

    const result = Calculations(area, title)

    const value = result?.value
    const check = result?.check
  return (
    <View style={styles.card}>
        <Text style={styles.text}>{title}</Text>
        <View  style={styles.valueWrapper}>
            <Text style={styles.text}>{value}</Text>
            {area && check == 0 ? 
                (<Entypo style={styles.checker} name="cross" size={24} color={theme ? Colors.dark.wrong : Colors.light.wrong} />) :
                check == 1 ? (<Entypo style={styles.checker} name="check" size={24} color={theme ? Colors.dark.right : Colors.light.right} />) :
                check == 2 ? (<Entypo style={styles.checker} name="circle-with-minus" size={24} color={theme ? Colors.dark.neutral : Colors.light.neutral} />) :
                null
            }
        </View>
    </View>
  )
}

export default Card