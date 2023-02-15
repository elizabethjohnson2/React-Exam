import React from "react";
import styled from "styled-components";

 export default function Nav(){
    // const [persons,setPersons]= useState([
    //     {
    //         id:1,
    //         name:'Griffin Wooldridge',
    //         age:20,
    //         image:require("../../assets/images/Ellipse4.png")
    //     },
    //     {
    //         id:2,
    //         name:'Hester Hogan',
    //         age:23,
    //         image:require("../../assets/images/Ellipse3.png")
    //     },
    //     {
    //         id:3,
    //         name:'Danny Winget',
    //         age:25,
    //         image:require("../../assets/images/Ellipse2.png")
    //     },
    //     {
    //         id:4,
    //         name:'Joshua Vergara',
    //         age:23,
    //         image:require("../../assets/images/Ellipse1.png")
    //     },
    //     {
    //         id:5,
    //         name:'Jon Rettinger',
    //         age:20,
    //         image:require("../assets/images/Ellipse5.png")
    //     },
    // ])
    


    return (
        <MainContainer>
     
        <HeaderContainer>
            <Left>
                <LogoImage src={require("../../assets/images/Property 1=serach.svg").default} alt="logo"/>
                <StateImage src={require("../../assets/images/Component 429.svg").default} alt="Image"/>
                <ImageTag>
                <StateName>United States</StateName>
                <ArrowImage src={require("../../assets/images/Property 1=arrow.svg").default} alt="Image"/>
                </ImageTag>
                <ArrowName>87%</ArrowName>
            </Left>
            <Middle>
                <PropertyImage src={require("../../assets/images/Property 1=night.svg").default} alt="Night"/>
                <BellImage src={require("../../assets/images/Property 1=bell.svg").default} alt="Bell"/>
            </Middle>
            <Right>
                <FrameImage src={require("../../assets/images/Frame 3466889.png")} alt="frame"/>
                <TagImage src={require("../../assets/images/Property 1=down.svg").default} alt="arrow"/>
            </Right>
        </HeaderContainer>
        <LeftContainer>


        </LeftContainer>
       
        </MainContainer>
     
    )
}
    const MainContainer=styled.div``;
    const HeaderContainer=styled.div`
    display:flex;
    justify-content:space-between;
    margin-left:10%;
     
    
    `;
    const Left=styled.div`
    margin: 0 auto;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
   
    `;
    
    const LogoImage=styled.img`
     width: 14%;
    display: block;
    margin-right: 100px;
   
   
   `;
   const ImageTag=styled.div`
   display:flex;
   width:30px;
   margin:0 auto;
  
   `;
    const StateImage=styled.img`
     width: 18%;  
    display: flex;
    border-radius: 50%;
    margin-left: 359px;
   `;
    const StateName=styled.p`
    font-size:10px;
    `;
    const ArrowImage=styled.img`
   
    `;
    
    const ArrowName=styled.p`
   margin-right: -57px;
    `;
    const Middle=styled.div`
    width: 10%;
   
    display: flex;
    `;
    const PropertyImage=styled.img`
     width:20%;
    display: flex;`;
    const BellImage=styled.img`
     width:20%;
    display: flex;`;
    const Right=styled.div`
    width: 10%;
   
    display: flex;
    justify-content: space-between;`;
    const FrameImage=styled.img`
      width:44%;
    display: flex;
    border-radius: 50%;
    `;
    const TagImage=styled.img`
     width:10%;
    display: flex;
    margin-right: 62px;
    `;
    const LeftContainer=styled.div``;

