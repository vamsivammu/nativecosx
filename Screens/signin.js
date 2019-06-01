import React from 'react'
import {Text,Button,View} from 'react-native'
import {Container,Header,Left,Right,Body,Title, Content,H1, H3, Item, Label, Input, Row} from 'native-base'
export default class SignInScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            emailormob:'',
            otp:'',
            submittext:'GET OTP'
        }
        this.submit = this.submit.bind(this)
        this.gotosignup = this.gotosignup.bind(this)
    }
    gotosignup(){
        this.props.navigation.goBack()
    }

    submit(){
        if(this.state.submittext == 'GET OTP'){
            //GENERATE OTP

            this.setState({submittext:'SUBMIT'})
        }else{
            //login
            this.props.navigation.navigate('Zone')

        }
    }


    
    render(){


        return(
            <Container>


            <Content style={{height:"100%",paddingTop:"20%",paddingLeft:"4%"}}>

                <H1 style={{fontWeight:"bold"}}>Sign-in</H1>
                <Text style={{paddingTop:"5%",}}>Don't have an account? <Text onPress={this.gotosignup} style={{color:'skyblue'}}>Create your account</Text></Text>

                <Item style={{paddingTop:"5%",paddingBottom:"5%",borderBottomColor:"white"}}>
                    <Text>
                        EMAIL ID or MOBILE
                    </Text>
                    
                </Item>
                <Item rounded >
                    <Input placeholder="EMAIL ID or MOBILE" onChangeText={t=>this.setState({emailormob:t})} />
                </Item>
                <Item style={{paddingTop:"5%",paddingBottom:"5%",borderBottomColor:"white"}}>
                    <Text>
                        OTP
                    </Text>
                    
                </Item>
                <Item rounded>
                    <Input placeholder="OTP" onChangeText={t=>this.setState({otp:t})} />
                </Item>

                <Item style={{marginTop:30,borderBottomColor:"white",justifyContent:'center'}}>    
                    <Button onPress={this.submit} title={this.state.submittext}></Button>
                    </Item>
            </Content>
            
        </Container>
        )

    }


}