import React,{useState} from "react";
import styled from "styled-components";



 export default function Nav(){
    const [tags,setTags]= useState([
        {
            id:1,
            name:'Dashboard',
            
            image:require("../../assets/images/Property 1=dashboard.svg"),
        },
        {
            id:2,
            name:'All Files',
            image:require("../../assets/images/Property 1=all.svg"),
        },
        {
            id:3,
            name:'Shared',
            image:require("../../assets/images/Property 1=share.svg"),
        },
        {
            id:4,
            name:'favourites',
           
            image:require("../../assets/images/Property 1=like.svg")
        },
        {
            id:5,
            name:'Recent',
            image:require("../../assets/images/Property 1=unread.svg"),

        },
        {
            id:6,
            name:'Request',
            image:require("../../assets/images/Property 1=reduce.svg"),
            
        },
    ])
    const renderTags =()=>{
        return tags.map((tag)=>(
            <LinkTag>
                <LinkImage src={tag.image}/>
                <LinkName>{tag.name}</LinkName>
                </LinkTag>

        ))
    }
    return (
        
        <MainContainer>
            <Leftcontainer>
                <TagContainer>
                    <TagName>a</TagName>
                </TagContainer>
                <Heading>arifeen</Heading>
                <ListTagItem>
                    {renderTags}
                </ListTagItem>
                
            </Leftcontainer>
            
        <HeaderContainer>
            <Left>
            <LineTag></LineTag>
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
        
       
       
       
        </MainContainer>
     
    )
}
    const MainContainer=styled.div`
     
     display:flex;
     background-color:#212236;
    

   margin-left: auto;
    
   
    `;
      const Leftcontainer=styled.div`
      width:11%;
      height:500px;
      background-color:#1B1C30;
      `;
      const TagContainer=styled.div``;
      const TagName=styled.button`
      background-color:#84E9F4;
      margin-top:20px;
      border-radius: 30%;`;
      const Heading=styled.h1``;
      const ListTagItem=styled.div``;
      const LinkTag=styled.div``;
      const LinkImage=styled.img``;
      const LinkName=styled.p``;
    const HeaderContainer=styled.div`
    width:80%;
    
   
    display:flex;
    justify-content:space-between;
    margin-left:10%;
    padding:10px;
     
    
    `;
    const Left=styled.div`
    margin: 0 auto;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
   
    `;
    const LineTag=styled.div`
    border-bottom:3px solid #000;
    `;
    const LogoImage=styled.img`
         width: 5%;
    display: block;
    margin-right: 445px;
    margin-bottom: 393px;
   
   
   `;
   const ImageTag=styled.div`
   display:flex;
 
   margin:0 auto;
  
   `;
    const StateImage=styled.img`
     width: 5%;  
    display: flex;
    border-radius: 50%;
    margin-right: 77px;
    margin-bottom: 426px;
   `;
    const StateName=styled.p`
    font-size:10px;
    margin-right: 26px;
    margin-bottom: 400px;
    color:#727488;

    margin-left: -59px;
    
    `;
    const ArrowImage=styled.img`
     margin-right:10px;
    display:flex;
    width: 24px;
    margin-bottom: 424px;
   
    `;
    
    const ArrowName=styled.p`
           margin-right: 141px;
       color:#727488;
       margin-top: 10px;
    `;
    const Middle=styled.div`
    width: 8%;
    padding-right:20px;
   
    display: flex;
    `;
    const PropertyImage=styled.img`
     width:30%;
    display: flex;
    
    margin-bottom: 425px;`;
    const BellImage=styled.img`
     width:30%;
    display: flex;
    margin-bottom: 425px;`;
    const Right=styled.div`
    width: 10%;
    padding-right:20px;
   
    display: flex;
    justify-content: space-between;`;
    const FrameImage=styled.img`
      width:50%;
    display: flex;
    border-radius: 50%;
    margin-bottom: 425px;
    `;
    const TagImage=styled.img`
     width:20%;
    display: flex;
    margin-right: 62px;
    margin-bottom:400px;
    `;
  
   

