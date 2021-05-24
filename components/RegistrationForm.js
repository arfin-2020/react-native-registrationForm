import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, CheckBox ,TextInput,Button,Platform, TouchableOpacity } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons';

export default function RegistrationForm() {
    const [isSelected, setSelection] = useState(true);
    const [image, setImage] = useState(null);
    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);
    
      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        }); 
        console.log(result);
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };
    return (
        <View style={styles.registrationDiv}>
            <Text style = {styles.topText}>You are going to supply the Craft Item <br/> through the app</Text>
                <TouchableOpacity
                onPress={pickImage}
                style={styles.roundButton1}>
                 <Text><FontAwesomeIcon style={styles.camera}  size="20"  icon={ faCamera } /></Text>
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} 
                </TouchableOpacity>
                <Text style={styles.uploadText}>Upload picture</Text>
                <View style={styles.SameStyle}>
                    <Text style={styles.text}>Crafts Owner Name</Text>
                    <TextInput style={styles.inputText} />
                </View>
                <View style={styles.SameStyle}>
                    <Text style={styles.text}>Craftsman Shop Name</Text>
                    <TextInput style={styles.inputText} />
                </View>
                <View style={styles.SameStyle}>
                    <Text style={styles.text}>Craftsman Location</Text>
                    <TextInput style={styles.inputText} />
                </View>
                <View style={styles.SameStyle}>
                    <Text style={styles.text}>Crafts Mail</Text>
                    <TextInput style={styles.inputText} />
                </View>
                <View style={styles.SameStyle}>
                    <Text style={styles.text}>password</Text>
                    <TextInput style={styles.inputText} secureTextEntry={true} />
                </View>
                <View style={styles.SameStyle}>
                    <Text style={styles.text}>National ID Card Number</Text>
                    <TextInput style={styles.inputText} />
                </View>
                <View style={styles.SameStyle}>
                    <Text style={styles.text}>Phone Number</Text>
                    <TextInput style={styles.inputText} />
                </View>
                <View style={styles.checkboxDiv}>
                    <View>
                        <CheckBox value={isSelected}
                        onValueChange={setSelection} color='black'
                        style={styles.checkbox}
                        />
                    </View>
                    <View>
                        <Text style={styles.policyText}>I Accept the terms and policy</Text>
                    </View>
                </View>
                <View style={styles.buttonDiv}> <Button title="Register" color="#36d578"/></View>
                <View style={styles.footerText}>
                        <View><Text style={styles.accountText}>Already have an Account?</Text></View>
                        <View><Text style={styles.signinText}>Sign In </Text> </View>
                </View> 
                
        </View>
    )
}

    const styles = StyleSheet.create({
        registrationDiv: {
            marginLeft:10,
          },
          topText:{
              color:'grey'
          },
          uploadText:{
                marginTop:20,
                marginBottom:20,
                color:'grey'
          },
          SameStyle:{
            marginBottom:15,
          },
          text:{
            marginBottom:10,
            color:'grey'
          },
          inputText:{
            paddingVertical:10,
            paddingHorizontal:15,   
            width:308,
            borderWidth:1,
            borderRadius:10,
            shadowOpacity: 0.2,
            shadowRadius:10,
            fontWeight:'bold',
            
          },
          roundButton1: {
            marginTop:10,
            width: 100,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            borderRadius: 100,
            backgroundColor: '#bfc0c2',
          },
          checkboxDiv:{
              flexDirection: 'row',
              marginTop:10,
              marginBottom:10,
          },
          policyText:{
              marginLeft:15,
              fontWeight:'bold'
          },
          buttonDiv:{
            marginTop:10,
            width:300,
            marginBottom:20,
          },
          footerText:{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent:'center',
              marginBottom:10,
          },
          signinText:{
              marginLeft:5,
              color: '#36d578',
              fontWeight:'bold',
          },
          accountText:{
              color:'grey',
          }

    })
