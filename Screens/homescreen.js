import React from 'react'
import {Text,Button,View} from 'react-native'
import {Container,Header,Left,Right,Body,Title, Content,H1, H3, Item, Label, Input, Row} from 'native-base'
export default class HomeScreen extends React.Component{
    static navigationOptions = {
        title:"Home",
        headerRight:(<Text>GIGX</Text>),
        headerLeft:(<Text onPress={()=>this.props.navigation.openDrawer()}>Menu</Text>)
    }
    constructor(props){
        super(props)
        this.state={
            email:'',
            mobile:''
        }
        this.submit = this.submit.bind(this)
        this.gotosignin = this.gotosignin.bind(this)
    }
    gotosignin(){
        this.props.navigation.navigate('SignIn')
    }

    submit(){
        this.props.navigation.navigate('SignIn')
    }
    render(){


        return(
                <Container>


                    <Content style={{height:"100%",paddingTop:"20%",marginLeft:4,marginRight:4}}>

                        <H1 style={{fontWeight:"bold"}}>Create your account</H1>
                        <Text style={{paddingTop:"5%"}}>Already have an account? <Text onPress={this.gotosignin} style={{color:'skyblue'}}>Sign In</Text></Text>

                        <Item style={{paddingTop:"5%",paddingBottom:"5%",borderBottomColor:"white"}}>
                            <Text>
                                EMAIL ID
                            </Text>
                            
                        </Item>
                        <Item rounded >
                            <Input onChangeText={(t)=>this.setState({email:t})} placeholder="EMAIL ID" />
                        </Item>
                        <Item style={{paddingTop:"5%",paddingBottom:"5%",borderBottomColor:"white"}}>
                            <Text>
                                MOBILE NUMBER
                            </Text>
                            
                        </Item>
                        <Item rounded>
                            <Input  onChangeText={t=>this.setState({mobile:t})} placeholder="MOBILE NUMBER" />
                        </Item>
                    <Item style={{marginTop:30,borderBottomColor:"white",justifyContent:'center'}}>    
                    <Button onPress={this.submit} title="SUBMIT"></Button>
                    </Item>
                    </Content>
                    
                </Container>
        )

    }


}