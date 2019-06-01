import React from 'react'
import {Text,Image,View,ScrollView,TextInput,StyleSheet} from 'react-native'
import ImagePicker from 'react-native-image-picker'
import {DocumentPicker,DocumentPickerUtil} from 'react-native-document-picker'

export default class UpdateProfileEmp extends React.Component{


    constructor(props){
        super(props)
        this.state = {
            name:'',
            email:'',
            mobile:'',
            salaryrange:'',
            jobtitle:'',
            currentloc:'',
            pic:'',
            uploaded:false,
            resume:'',
            uploadtext:'UPLOAD JOB DESCRIPTION'
        }
        this.uploadresume = this.uploadresume.bind(this)
        this.uploadpic = this.uploadpic.bind(this)
        
    }

    uploadpic(){
        ImagePicker.showImagePicker({},resp=>{
            if (resp.didCancel) {
                console.log('User cancelled image picker');
              } else if (resp.error) {
                console.log('ImagePicker Error: ', resp.error);
              } else if (resp.customButton) {
                console.log('User tapped custom button: ', resp.customButton);
              } else {

                let uri = resp.uri

                this.setState({pic:uri,uploaded:true})
              }
        })
    }

    uploadresume(){
        DocumentPicker.show({
            filetype: [DocumentPickerUtil.pdf()],
          },(error,res) => {
           
            console.log(
               res.uri,
               res.type, 
               res.fileName,
               res.fileSize
            );
            this.setState({
                uploadtext:res.fileName
            })
          });
    }

    render(){

        let styles = StyleSheet.create({

            container:{
                flex:1,
                backgroundColor:'cyan',
                alignSelf:'stretch',
                // justifyContent:'space-evenly'
            },
            status:{
                flexDirection:'row',
                // flex:1,
                marginTop:10,
                marginRight:10,
                marginLeft:10,
                justifyContent:'space-evenly'
            },
            numbers:{
                width:30,
                height:30,
                borderRadius:15,
                backgroundColor:'lightgray',
                alignContent:'center',
                justifyContent:'center'
            },
            picContainer:{
                // flex:1,
                flexDirection:'row',
                
                justifyContent:'center'
            },
            pic:{
                width:100,
                height:100,
                marginTop:30,
                alignSelf:'center',
                // backgroundColor:'lightgray',
                justifyContent:'center',
                alignContent:'center'
            },
            pictext:{
                textAlign:'center',
                alignSelf:'center',
            },
            tabContainer:{
                flex:4,
                paddingTop:20,
                    justifyContent:'flex-start'
            },
            tabs:{
                marginLeft:10,
                marginRight:10,
                justifyContent:'center',
                alignContent:'center',
                marginTop:5,
                backgroundColor:'white',
                height:45,
                borderRadius:25
            }

        })

        return(
            <ScrollView style={styles.container}>

            <View style={styles.status}>

                <View style={styles.numbers}>
                    <Text style={{textAlign:'center',alignSelf:'center'}}>1</Text>
                </View>
              
                <View style={styles.numbers}>
                    <Text style={{textAlign:'center',alignSelf:'center'}}>2</Text>
             </View>
                  
                    <View style={styles.numbers}>
                        <Text style={{textAlign:'center',alignSelf:'center'}}>3</Text>
                    </View>
    
            </View>

            <View style={styles.picContainer}>
            {!this.state.uploaded && <View onTouchEnd={this.uploadpic} style={styles.pic}>
                    <Text style={styles.pictext}>
                        UPLOAD COMPANY LOGO
                    </Text>
                    
                </View>}
                {
                        this.state.uploaded && <Image onTouchEnd={this.uploadpic} source={{uri:this.state.pic}} style={styles.pic}></Image>
                    }
            </View>
            <View style={styles.tabContainer}>

                    <View onTouchEnd={this.uploadresume} style={styles.tabs}>
                            <Text style={{textAlign:'center',alignSelf:'center',color:'darkblue',fontWeight:'400'}}>
                                {this.state.uploadtext}
                            </Text>
                    </View>
                    <View style={styles.tabs}>
                            <TextInput placeholder="ENTITY FULL NAME" onChangeText={(t)=>{this.setState({name:t})}} style={{textAlign:'center',alignSelf:'center',width:'100%'}}>
                               
                            </TextInput>
                    </View>                        
                    <View style={styles.tabs}>
                            <TextInput placeholder="WORK LOCATION" onChangeText={(t)=>{this.setState({currentloc:t})}} style={{textAlign:'center',alignSelf:'center',width:'100%'}}>
                                 
                            </TextInput>
                    </View>                       
                     <View style={styles.tabs}>
                            <TextInput placeholder="COMPANY EMAIL ID" onChangeText={(t)=>{this.setState({email:t})}} placeholder="EMAIL ID" style={{textAlign:'center',alignSelf:'center',width:'100%'}}>
                                 
                            </TextInput>
                    </View>                       
                     <View style={styles.tabs}>
                            <TextInput placeholder="CONTACT NUMBER(OPTIONAL)" onChangeText={(t)=>{this.setState({mobile:t})}} style={{textAlign:'center',alignSelf:'center',width:'100%'}}>
                            </TextInput>
                    </View>                        
                    <View style={styles.tabs}>
                            <TextInput placeholder="JOB TITLE" onChangeText={(t)=>{this.setState({jobtitle:t})}} style={{textAlign:'center',alignSelf:'center',width:'100%'}}>
                                 
                            </TextInput>
                    </View>
                    <View style={styles.tabs}>
                            <TextInput placeholder="SALARY RANGE" onChangeText={(t)=>{this.setState({salaryrange:t})}} style={{textAlign:'center',alignSelf:'center',width:'100%'}}>
                                 
                            </TextInput>
                    </View>
                    <View style={styles.tabs}>
                            <Text  style={{color:'darkblue',textAlign:'center',alignSelf:'center'}}>
                            UPLOAD VIDEO JD(OPTIONAL)
                            </Text>
                    </View>
            </View>
        </ScrollView>
        )


    }


}