import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Completestate from './Completestate';

const Container = styled.div`
display: flex;
position: relative;
height: 100vh;



form {
  flex: 2;
width: 100%;
display: flex;
background-color: white;
flex-direction: column;
align-items: center;
justify-content: center;
color: gray;
position: relative;
z-index: 20;
}

@media (max-width: 1260px){
flex-direction: column;
width:100%;
flex: none;
overflow-x: hidden;
}
`;

const Image = styled.img`
flex:1;
z-index: 30;
@media (max-width: 1260px){
width: 100%;
height: 300px;
}
`;

const Rightbody = styled.div`
flex: 2;
width: 100%;
display: flex;
background-color: white;
flex-direction: column;
align-items: center;
justify-content: center;
color: gray;
position: relative;
z-index: 20;

@media (max-width: 1260px){
flex-direction: column;
width: 100%;
}
`;



const Cardfront = styled.img`
position: absolute;
top: 70px;
left: 150px;
z-index: 50;

@media (max-width: 1260px){
flex-direction: column;
top:180px;
left:15px;
box-shadow: rgba(0,0,0,0.2) 0px 20px 30px;
z-index: 60;
width:300px
}
`;
const Cardnumber= styled.p`
position: absolute;
top: 205px;
left: 190px;
font-size: 25px;
letter-spacing: 5px;
color: white;
text-transform: uppercase;
z-index: 60;

@media (max-width: 1260px){
flex-direction: column;
top:280px;
left:35px;
width: 100%;
font-size: 16px;
}
`;
const Divider= styled.span`
position: absolute;
top: 280px;
left: 538px;
font-size: 14px;
color: white;
text-transform: uppercase;
z-index: 60;

@media (max-width: 1260px){
flex-direction: column;
top:315px;
left:273px;
}
`;

const Cardowner= styled.p`
position: absolute;
top: 280px;
left: 190px;
font-size: 18px;
color: white;
text-transform: uppercase;
z-index: 60;

@media (max-width: 1260px){
flex-direction: column;
top:315px;
left:35px;
width: 100%;
font-size: 14px;
}
`;
const Month = styled.p`
position: absolute;
top: 280px;
left: 520px;
font-size: 14px;
color: white;
text-transform: uppercase;
z-index: 60;

@media (max-width: 1260px){
flex-direction: column;
top:315px;
left:255px;

}
`;

const Year = styled.p`
position: absolute;
top: 280px;
left: 545px;
font-size: 14px;
color: white;
text-transform: uppercase;
z-index: 60;

@media (max-width: 1260px){
flex-direction: column;
top:315px;
left:280px;
}
`;

const CVC = styled.p`
position: absolute;
top: 460px;
left: 600px;
font-size: 14px;
color: white;
text-transform: uppercase;
z-index: 50;

@media (max-width: 1260px){
flex-direction: column;
top:158px;
left:285px;
z-index: 60;
}
`;
const Cardback = styled.img`
position: absolute;
top: 350px;
left: 230px;
z-index: 50;


@media (max-width: 1260px){
flex-direction: column;
top:84px;
left:50px;
width:300px
}
`;
const Cardlogo = styled.img`
position: absolute;
top: 88px;
left: 170px;
z-index: 60;
@media (max-width: 1260px){
flex-direction: column;
top:200px;
left:30px;

}
`;

const Cardownerinput = styled.input`
margin-bottom: 50px;
padding: 10px;
width: 38%;
border-radius: 5px;
border: 1px solid lightgray;
opacity: 0.8;
outline: none;

:focus{
  border: 2px solid darkviolet;
}
@media (max-width: 1260px){

width:85%;
padding: 15px;
}
`;
const Cardnumberinput = styled.input`
margin-bottom: 60px;
padding: 10px;
width: 38%;
border-radius: 5px;
border: 1px solid lightgray;
opacity: 0.8;
outline: none;

:focus{
  border: 2px solid darkviolet;
}
@media (max-width: 1260px){
  padding: 15px;
  width:85%;
  
  }
`;

const Inputfield = styled.div`
display: flex;
gap: 20px;
width: 38%;
margin-bottom: 30px;
opacity: 0.8;
position: relative;

@media (max-width: 1260px){

  width:85%;
  margin-top: 20px;
  }
`;

const Expiryfield = styled.div`
display: flex;
gap: 10px
`;


const Button = styled.button`
padding: 15px;
width: 38%;
border-radius: 10px;
border: 1px solid lightgray;
background-color: hsl(278, 68%, 11%);
color: white;

:hover{
  transform: scale(0.97);
  cursor: pointer;
 
}
@media (max-width: 1260px){ 
 width: 85%;
  }
`;
const Yearinput = styled.input`
width:60px;
padding: 7px;
border-radius: 5px;
border: 1px solid lightgray;
outline: none;

:focus{
  border: 2px solid darkviolet;
}
`;
const Monthinput = styled.input`
width: 60px;
padding: 7px;
border-radius: 5px;
border: 1px solid lightgray;
outline: none;

:focus{
  border: 2px solid darkviolet;
}
`;
const CVCinput = styled.input`
width: 202px;
padding: 7px;
border-radius: 5px;
border: 1px solid lightgray;
outline: none;

:focus{
  border: 2px solid darkviolet;
}

@media (max-width: 1260px){
flex-direction: column;
width: 170px;
padding: 10px;
}
`;

const Cardholdername = styled.p`
font-size: 14px;
margin-right: 260px;
margin-bottom: 2px;
color: black;
text-transform: uppercase;

@media (max-width: 1260px){ 
  margin-top: 90px;
  margin-right: 230px;
  }

`;

const Cardnumbertext = styled.p`
margin-right: 250px;
justify-content: flex-start;
align-items: flex-start;
text-align: right;
margin-bottom: 2px;
font-size: 14px;
color: black;
text-transform: uppercase;
@media (max-width: 1260px){ 
  margin-right: 220px;
  }
`;

const Expirytext = styled.p`
position: absolute;
top: -20px;
left: 0px;
font-size: 14px;
color: black;
text-transform: uppercase;
`;

const CVCtext= styled.p`
position: absolute;
top: -20px;
left: 150px;
font-size: 14px;
color: black;
text-transform: uppercase;
`;

const Spanname= styled.span`
position: absolute;
  top: 210px;
  font-size:10px;
  left: 285px;
  color:red;
@media (max-width: 1260px){ 

  top: 170px;
  left: 35px;
  }
`;
const Spannunmber= styled.span`
position:absolute;
 top: 315px;
 font-size:11px;
 left: 285px;
 color:red;
@media (max-width: 1260px){ 

  top: 285px;
  left: 35px;
  }
`;
const Spanmonth= styled.span`
position:absolute;
top: 410px;
font-size:10px;
left: 285px;
color:red;
@media (max-width: 1260px){ 

  top: 400px;
  left: 30px;
  }
`;
const Spanyear= styled.span`
position:absolute;
top: 410px;
font-size:10px;
left: 360px;
color:red;

@media (max-width: 1260px){ 

  top: 400px;
  left: 110px;
  }
`;
const Spancvc= styled.span`
position:absolute;
top: 410px;
font-size:10px;
left: 440px;
color:red;
@media (max-width: 1260px){ 

  top: 400px;
  left: 190px;
  }
`;

const Homepage = () => {
  
  const [values, setValues] = useState({
    cardHolderName:"",
    cardNumber:"",
    month:"",
    year:"",
    cvc:""
  });

  const onChange = (e) => {
    const {name, value} = e.target
    
    setValues({...values,[name]: value,});
    
  }


  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


 
  //allow only numbers
  let numberRegex = /^[0-9]+$/;
//allow only letters
let letterRegex = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;

let monthRegex = /^\d{1,2}$/

let yearRegex = /^\d{2}$/

let cvcRegex = /^\d{3}$/

let Format = /\d{1,4}/g

  const handleSubmit =(e) =>{
    e.preventDefault();
    setFormErrors(validate(values));
    setIsSubmit(true);
  };

  useEffect(() => {
 if(Object.keys(formErrors).length === 0 && isSubmit) {
 }
  },[formErrors, isSubmit])

  const validate =(values) =>{
    const errors = {}
    if(!values.cardHolderName ) {
      errors.cardHolderName = "card holder name is required";
    } 
    else if (!letterRegex.test(values.cardHolderName)){
      errors.cardHolderName = "Wrong format. Alphabets only"
    }

    if(!values.cardNumber) {
      errors.cardNumber = "card number is required";
    } 
    else if (!numberRegex.test(values.cardNumber)){
      errors.cardNumber = "Wrong format. Numbers only"
      
    }
    else if (values.cardNumber.length < 16 ){
      errors.cardNumber = "Number must be not be less than 16"
    } else if ( values.cardNumber.length  > 16 ){
      errors.cardNumber = "Number must not be more than 16"
    }
   
    if(!values.month) {
      errors.month = "can't be blank";
    }
    else if (!monthRegex.test(values.month)){
      errors.month = "invalid"
    }
    else if (values.month > 12 || values.month < 1){
      errors.month = "invalid!"
    }
    if(!values.year) {
      errors.year = "can't be blank";
    }
    else if (!yearRegex.test(values.year)){
      errors.year = "invalid"
    }
    else if (values.year < 0){
      errors.year = "invalid!"
    }
    if(!values.cvc) {
      errors.cvc = "can't be blank";
    }else if (!cvcRegex.test(values.cvc)){
      errors.cvc = "invalid"
    }
    else if ( values.cvc < 1){
      errors.cvc = "invalid!"
    }
    return errors;
  };
  return (
    <Container >
        <Image src='./images/bg-main-desktop.png' alt=''  />
        <Cardfront src='./images/bg-card-front.png' alt='' />
        <Cardback src='./images/bg-card-back.png' alt='' />
        <Cardlogo src='./images/card-logo.svg' alt='' />
        <Cardnumber> { values.cardNumber !=="" ? values.cardNumber.match(Format).join(" "): "0000 0000 0000 0000"}</Cardnumber>
        <Cardowner>{ values.cardHolderName !=="" ? values.cardHolderName :"Jane Appleseed"}</Cardowner>
        <Month>{ values.month !=="" ? values.month:"00"}</Month>
        <Year>{values.year !=="" ? values.year :"00"}</Year>
        <Divider>/</Divider>
        <CVC>{values.cvc !=="" ? values.cvc :"000"}</CVC>

        <form onSubmit={handleSubmit}>
        
       { Object.keys(formErrors).length === 0 && isSubmit ? <Completestate /> : <Rightbody>
       
        <Cardholdername>
        Cardowner
        </Cardholdername>
        <Cardownerinput placeholder='e.g. Jane Appleseed' 
        name='cardHolderName'
        onChange={onChange}
        value={values.cardHolderName}
       
        />
        <Spanname >
           {formErrors.cardHolderName}
        </Spanname>
        <Spanmonth>
           {formErrors.month}
        </Spanmonth>

        <Spanyear>
           {formErrors.year}
        </Spanyear>
        
        <Spancvc>
           {formErrors.cvc}
        </Spancvc>
   
        <Cardnumbertext>
        cardnumber
        </Cardnumbertext>
        <Cardnumberinput placeholder='e.g. 1234 5678 9123 0000'
        name='cardNumber'
        onChange={onChange}
        value={values.cardNumber}
        />
        <Spannunmber>
           {formErrors.cardNumber}
        </Spannunmber>
        <Inputfield>
        <Expirytext>Exp. Date (MM/YY)</Expirytext>
        <CVCtext>CVC</CVCtext>
        <Expiryfield>
        <Monthinput placeholder='MM' 
        onChange={onChange}
        name='month'
        value={values.month}
        />
       
        <Yearinput placeholder='YY' 
        onChange={onChange}
        name='year'
        value={values.year}
        />
        
        </Expiryfield>
        <CVCinput placeholder='e.g. 123'
        onChange={onChange}
        name='cvc'
        value={values.cvc}
        />
        </Inputfield>
        <Button>Confirm</Button>
        </Rightbody> }
        </form>
        </Container>
  )
}

export default Homepage



/* 0000 0000 0000 0000
  Jane Appleseed
  00/00

  000

  Cardholder Name
  e.g. Jane Appleseed

  Card Number
  e.g. 1234 5678 9123 0000

  Exp. Date (MM/YY)
  MM
  YY

  CVC
  e.g. 123

  Confirm */