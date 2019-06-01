import React from 'react'

import {Text,StyleSheet,View} from 'react-native'
import {Container,Header,Left,Right,Body,Title, Content,H1, H3, Item, Label, Input, Row,Card,CardItem} from 'native-base'

export default class SelectZone extends React.Component{


    constructor(props){
        super(props)
        // this.selectzone= this.selectzone.bind(this)
    }

    selectzone(zone){
        alert(zone)
        this.props.navigation.navigate('UpdateProfile')
        
    }

    render(){

        
let styles = StyleSheet.create({
           
    container:{
        flex:1,
        backgroundColor:'cyan',
        alignSelf:'stretch',
        justifyContent:'center'
    },
    boxContainer:{
        height:70,
        marginLeft:10,
        marginRight:10,
        marginTop:10,
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'white'
    },
    textContainer:{
        color:'darkblue',
        textAlign:'center',
        fontSize:25,
        fontWeight:"500"
    }



})

        return(
                <View style={styles.container}>

                    <View onTouchEnd={()=>this.selectzone('Employer')} style={styles.boxContainer}>
                        <Text style={styles.textContainer}>
                            EMPLOYER ZONE
                        </Text>
                    </View>

                    <View onTouchEnd={()=>this.selectzone('Candidate')} style={styles.boxContainer}>
                    <Text style={styles.textContainer}>
                            CANDIDATE ZONE
                        </Text>
                    </View >

                    <View onTouchEnd={()=>this.selectzone('Institution')} style={styles.boxContainer}>

                    <Text style={styles.textContainer}>
                            INSTITUTION ZONE
                        </Text>

                    </View>
                    
                    <View onTouchEnd={()=>this.selectzone('Freelancer')} style={styles.boxContainer}>

                    <Text style={styles.textContainer}>
                             EXPLORE FREELANCERS 
                        </Text>

                    </View>
                </View>
        )
    }

 

}
