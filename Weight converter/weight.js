@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap'); 

*{
box-sizing: border-box;
font-family:  'Poppins', sans-serif;
}
*{
    box-sizing: border-box;
}
html{
    scroll-behavior: smooth;
}
body{
margin: 0;
padding: 0;
width: 100%;
height: 100%;
overflow-y:  auto;
background: #e0e5ec;
text-align: center;
}
.user-inputs{
    text-align: center;
    padding: 40px;
    
}
h1{
    font-size: 1.4rem;
    color: rgb(58, 85, 237); 
}
::placeholder{
    font-size: 0.8rem;
    
}
.container{
 display: flex;
 align-items: center;
 justify-content: center;
 margin: 100px auto;
 text-align: center;
}
select,#items-container,button,#convert-input,#user-value{
    background-color: #e0e5ec;;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.9),
     -9px -9px 16px rgba(255, 255, 255, 0.5);
     border: 1px solid rgba(214, 214, 214, 0.2); 
}
#items-container{
    width: 450px;
    height: 550px;
    border-radius: 12px;
    border-radius: 20px;
    text-align: center;
    position: relative;
}
#input{
    padding: 10px 50px;
    border-radius: 20px;
    margin-top: 25px;
}
#line{
    width: 90%;
    border: 1px solid rgb(118, 117, 117);
    margin: 50px auto;
}
#convert{
display: flex;
gap: 2rem;
align-items: center;
justify-content: center;
margin-top: 50px;
}
#user-value{
    margin-top: 50px;
    background-color: #fff;
    font-size: 1rem;
    text-align: center;
    padding: 11px 0px;
    outline: none;
}
#output{   
     height: 45px;
     width: 150px;
     text-align: center;
     border-radius: 20px;
}
#convert-btn{
    padding: 15px 30px;
    position: absolute;
    left: 70px;
    border-radius: 20px;
}
#convert-btn:hover{
    background-color: rgb(58, 85, 237);
    transition: all ease-in-out 0.4s;
    color: white;
    transform: scale(1.05);
}
#convert-input{
    position: absolute;
    padding: 12px 1px;
    outline: none;
    margin-top: 2px;
    background-color: #fff;
    text-align: center;
}
select{
    outline: none;
}
h2{
    font-size: 1.7rem;
    margin-top: 1rem;
    position: relative;
    top: 2rem;
}

#refresh{
    position: absolute;
    left: 30px;
    top: 30px;
    font-size: 1.5rem;
    color: rgb(40, 64, 205);
   }

@media screen and (max-width: 460px) {
    #items-container{
        width: 90%;
        margin: 100px auto;
    }
    #convert-btn{
        left: 40px;
    }
    #convert-input{
        max-width: 40%;
    }
    @media screen and (max-width: 370px){
        #items-container{
        width: 95%;
        margin: 100px auto;
     }
    }
}