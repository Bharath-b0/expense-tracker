import React,{useState} from 'react';
import "./styles.css";
import Input from "../Input";
import Button from '../Button';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword ,signInWithPopup,GoogleAuthProvider} from "firebase/auth";
import { toast } from 'react-toastify';
import {auth,db,provider} from "../../firebase";
import {doc,setDoc,getDoc} from "firebase/firestore";
import {useNavigate} from "react-router-dom";
function SignupSigninComponent() {
  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [confirmPassword, setConfirmPassword]=useState("");
  const [loginForm,setLoginForm]=useState(false);
  const [loading, setLoading]=useState(false);
  const navigate=useNavigate();

  function signupWithEmail(){
    setLoading(true);
    console.log("Name",name);
    console.log("email",email);
    console.log("password",password);
    console.log("confirmpassword",confirmPassword);
    //auth user firbase
    if(name!="" && email!="" && password!="" && confirmPassword!=""){
      if(password==confirmPassword){
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log("User>>",user);
          toast.success("User Created!");
          setLoading(false);
          setName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");

          // create a document
          createDoc(user);
          navigate("/dashboard");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage);
          setLoading(false);
  
          // ..
        });
      }else{
        toast.error("Password and ConfirmPassword don't Match");
        setLoading(false);

      }
      
    }else{
      toast.error("All fields are Mandatory");
      setLoading(false);

   }
  }
  function loginUsingEmail(){
    console.log("Email",email);
    console.log("Password",password);
    setLoading(true);
    if(email!="" && password!=""){
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        toast.success("User LoggedIn!");
        setLoading(false);
        console.log("User Loggedin",user);
        navigate("/dashboard");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoading(false);
        toast.error(errorMessage);
      });
    }else{
      toast.error("All Fields are Mandatory");
      setLoading(false);
    }
      
      
  }


  async function createDoc(user){
    //create a Doc
    setLoading(true);
    if(!user) return;
    const userRef=doc(db,"users",user.uid);
    const userData=await getDoc(userRef);

    if(!userData.exists()){
    try{
      await setDoc(doc(db, "users",user.uid), {
        name: user.displayName? user.displayName : name,
        email:user.email,
        photoURL: user.photoURL?user.photoURL:"",
        createdAt:new Date()
      });
      toast.success("Doc Created");
      setLoading(false);
    }
    catch(e){
      toast.error(e.message);
      setLoading(false);

    }
    }
    else{
      //toast.error("Doc Already Exists");
      setLoading(false);

    }
  }

  function googleAuth(){
    setLoading(true);
    try{
      signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log("User",user);
        createDoc(user);
        setLoading(false);
        navigate("/dashboard");
        toast.success("User Authenticated");
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        setLoading(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        toast.error(errorMessage);
        const email = error.customData.email;        // ...
      });
    }catch(e){
      toast.error(e.message);
      setLoading(false);
    }
    
  }


  return (
    <>
    {loginForm?(<div className="signup-wrapper">
      <h2 className='title'>Login on <span style={{color:"var(--theme)"}}>Budgetly.</span></h2>
      <form>
        <Input 
          type="email"
          label={"Email"} 
          state={email} 
          setState={setEmail} 
          placeholder={"johndoe@gmail.com"}
        />
        <Input 
          type="password"
          label={"Password"} 
          state={password} 
          setState={setPassword} 
          placeholder={"Example@123"}
        />
        <Button disabled={loading} text={loading?"Loading...":"Login Using Email and Password"} onClick={loginUsingEmail}/>
        <p className='p-login'>or</p>
        <Button onClick={googleAuth} text={ loading?"Loading...":"Login Using Google"} blue={true}/>
        <p className='p-login' style={{cursor:"pointer"}} onClick={()=>setLoginForm(!loginForm)}>or Don't have an Account? Click here</p>
      </form>
    </div>
  ):(
  <div className="signup-wrapper">
      <h2 className='title'>Sign Up on <span style={{color:"var(--theme)"}}>Budgetly.</span></h2>
      <form>
        <Input 
          label={"Full Name"} 
          state={name} 
          setState={setName} 
          placeholder={"John Doe"}
        />
        <Input 
          type="email"
          label={"Email"} 
          state={email} 
          setState={setEmail} 
          placeholder={"johndoe@gmail.com"}
        />
        <Input 
          type="password"
          label={"Password"} 
          state={password} 
          setState={setPassword} 
          placeholder={"Example@123"}
        />
        <Input 
          type="password"
          label={"Confirm password"} 
          state={confirmPassword} 
          setState={setConfirmPassword} 
          placeholder={"Example@123"}
        />
        <Button disabled={loading} text={loading?"Loading...":"Signup Using Email and Password"} onClick={signupWithEmail}/>
        <p className='p-login'>or</p>
        <Button onClick={googleAuth} text={loading?"Loading...":"Signup Using Google"} blue={true}/>
        <p className='p-login' style={{cursor:"pointer"}} onClick={()=>setLoginForm(!loginForm)}>or Have an Account Already? Click here</p>

      </form>
    </div>)}
    
    </>
  )
}

export default SignupSigninComponent;