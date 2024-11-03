import { View, Text, StyleSheet, StatusBar, Dimensions, TextInput, TouchableOpacity, ScrollView, TouchableNativeFeedback, Appearance } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from './../constants/Colors';
import Card from './../components/Card'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Global } from './../constants/Global';

const HomeScreen = () => {
  const [isLoadinng, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000);

    return () => clearTimeout(timer)
  }, [])

  const baseFontSize = 12;

  const [darkTheme, setDarkTheme] = useState(Appearance.getColorScheme() === 'dark')

  const [length, setLength] = useState('');
  const [width, setwidth] = useState('');

  const toggleDarkMode = () => {
    Global.Shubha = 0;
    Global.Phala = 0;
    setDarkTheme(!darkTheme)
  }

  const handleChangeHeight = (text: String) => {
    Global.Shubha = 0;
    Global.Phala = 0;
    const numericHeight  = text.replace(/[^0-9.]/g, '');
    if ((numericHeight.match(/\./g) || []).length > 1) return;
    setLength(numericHeight)
  }
  const handleChangeWidth = (text: String) => {
    Global.Shubha = 0;
    Global.Phala = 0;
    const numericWidth  = text.replace(/[^0-9.]/g, '');
    if ((numericWidth.match(/\./g) || []).length > 1) return;
    setwidth(numericWidth)
  }

  const getStyles = () => {
    return StyleSheet.create({
      container:{
        flex: 1,
        backgroundColor: darkTheme? Colors.dark.background : Colors.light.background
      },
      header:{
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.light.button,
      },
      headerText:{
        fontFamily: 'bb',
        fontSize: baseFontSize * 2,
        color: darkTheme? Colors.dark.text : Colors.dark.text,
      },
      touchableHolder:{
        position: 'absolute',
        right: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: '80%',
        aspectRatio: 1,
        borderRadius: 50,
        overflow: 'hidden',
      },
      iconHolder:{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      divider:{
        height: 1,
        width: '85%',
        alignSelf: 'center',
        backgroundColor: darkTheme? Colors.dark.border : Colors.light.border,
      },
      body:{
        flex: 1,
      },
      inputSection:{
        height: 155,
        width: '100%',
        paddingHorizontal: '10%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      },
      input:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        height: '50%',
      },
      ft:{
        fontFamily: 'bb',
        fontSize: baseFontSize * 1.5,
        color: darkTheme ? Colors.dark.secondaryText : Colors.light.secondaryText,
        letterSpacing: 1,
      },
      inputWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '50%',
        width: '35%',
        textAlign: 'center',
      },
      heightInput:{
        height: '100%',
        width: '80%',
        textAlign: 'center',
        borderRadius: 10,
        backgroundColor: darkTheme? Colors.dark.card : Colors.light.card,
        fontSize: baseFontSize * 1.3,
        color: darkTheme ? Colors.dark.secondaryText : Colors.light.secondaryText
      },
      x:{
        fontFamily: 'bb',
        fontSize: baseFontSize * 1.5,
        color: darkTheme? Colors.dark.secondaryText : Colors.light.secondaryText,
      },
      widthInput:{
        height: '100%',
        width: '80%',
        textAlign: 'center',
        borderRadius: 10,
        backgroundColor: darkTheme? Colors.dark.card : Colors.light.card,
        fontSize: baseFontSize * 1.3,
        color: darkTheme ? Colors.dark.secondaryText : Colors.light.secondaryText
      },
      area: {
        width: '100%',
        height: 155 * (25/100),
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: '20%',
      },
      areaText:{
        fontFamily: 'bb',
        color: darkTheme? Colors.dark.text : Colors.light.text,
        fontSize: baseFontSize * 1.5,
      },
      calculatedAreaWrapper:{
        height: '100%',
        width: '50%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
      },
      calculatedArea: {
        fontFamily: 'bb',
        fontSize: baseFontSize * 1.3,
        height: "100%",
        minWidth: "50%",
        width: 'auto',
        textAlign: 'center',
        textAlignVertical: 'center',
        padding: 'auto',
        borderRadius: 10,
        backgroundColor: darkTheme? Colors.dark.card : Colors.light.card,
        color: isNaN(parseFloat(length)) || isNaN(parseFloat(width)) ? darkTheme ? Colors.dark.secondaryText : Colors.light.secondaryText : darkTheme ? Colors.dark.text : Colors.light.text
      },
      sqft:{
        fontFamily: 'bb',
        height: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: baseFontSize * 1.2,
        color: darkTheme? Colors.dark.secondaryText : Colors.light.secondaryText,
      },
      buttonWrapper:{
        height: 80,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      button:{
        height: '50%',
        backgroundColor: darkTheme ? Colors.dark.button : Colors.light.button,
        width: '80%',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
      },
      buttonText:{
        fontFamily: 'bb',
        fontSize: baseFontSize * 1.5,
        fontWeight: 'bold',
        letterSpacing: .8,
        color: darkTheme? Colors.dark.text : 'white',
      },
      outputWrapper:{
        flex: 1,
        width: '80%',
        margin: 'auto',
      },
      footer:{
        height:50
      },
    })
  }

  const styles = getStyles();

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.header}>
        <Text style={styles.headerText}>Vaasthu Aaya Varga</Text>
        <View style={styles.touchableHolder}>
          <TouchableNativeFeedback onPress={toggleDarkMode}>
            <View style={styles.iconHolder}>
              {darkTheme ?
                (<MaterialIcons name="light-mode" size={24} color={Colors.dark.text} />) :
                (<MaterialIcons name="dark-mode" size={24} color={Colors.dark.text} />)
              }
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
      <View style={styles.inputSection}>
        <View style={styles.input}>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.heightInput} placeholder='Length' placeholderTextColor={darkTheme ? Colors.dark.secondaryText : Colors.light.secondaryText} value={length} keyboardType='numeric' maxLength={5} onChangeText={handleChangeHeight} />
            <Text style={styles.ft}>ft</Text>
          </View>
          <Text style={styles.x}>X</Text>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.widthInput} placeholder='Width' placeholderTextColor={darkTheme ? Colors.dark.secondaryText : Colors.light.secondaryText} value={width} keyboardType='numeric' maxLength={5} onChangeText={handleChangeWidth} />
            <Text style={styles.ft}>ft</Text>
          </View>
        </View>
        <View style={styles.area}>
          <Text style={styles.areaText}>Area</Text>
          <View style={styles.calculatedAreaWrapper}>
            <Text style={styles.calculatedArea}>{isNaN(parseFloat(length)) || isNaN(parseFloat(width)) ? 'Area' : (parseFloat(length) * parseFloat(width)) - Math.round(parseFloat(length) * parseFloat(width)) === 0 ? (parseFloat(length) * parseFloat(width)) : (parseFloat(length) * parseFloat(width)).toFixed(2)}</Text>
            <Text style={styles.sqft}>Sq. ft.</Text>
          </View>
        </View>
      </View>
      <View style={styles.divider}></View>
      <ScrollView style={styles.outputWrapper} showsVerticalScrollIndicator={false} >
        <Card theme={darkTheme} title={"Dhana/Runa"} area={parseFloat(length) * parseFloat(width)} />
        <Card theme={darkTheme} title={"Aaya"} area={parseFloat(length) * parseFloat(width)} />
        <Card theme={darkTheme} title={"Aayushya"} area={parseFloat(length) * parseFloat(width)} />
        <Card theme={darkTheme} title={"Vaara"} area={parseFloat(length) * parseFloat(width)} />
        <Card theme={darkTheme} title={"Thithi"} area={parseFloat(length) * parseFloat(width)} />
        <Card theme={darkTheme} title={"Nakshatra"} area={parseFloat(length) * parseFloat(width)} />
        <Card theme={darkTheme} title={"Yoga"} area={parseFloat(length) * parseFloat(width)} />
        <Card theme={darkTheme} title={"Karana"} area={parseFloat(length) * parseFloat(width)} />
        <Card theme={darkTheme} title={"Amsha"} area={parseFloat(length) * parseFloat(width)} />
        <Card theme={darkTheme} title={"Dhikpaalaka"} area={parseFloat(length) * parseFloat(width)} />
        <Card theme={darkTheme} title={"Graha"} area={parseFloat(length) * parseFloat(width)} />
        <Card theme={darkTheme} title={"Shubha"} area={parseFloat(length) * parseFloat(width)} />
        <Card theme={darkTheme} title={"Phala"} area={parseFloat(length) * parseFloat(width)} />

        <View style={styles.footer}/>
      </ScrollView>
    </View>
  )
}

export default HomeScreen