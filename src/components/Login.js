import React, { useState, useRef } from 'react';
import Header from './Header';
import BgScreen from '../assets/images/home-bg.jpg'
import { Validate } from './../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/constants';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [isErrorMsg, setIsErrorMsg] = useState(null);
    const [isShowPassword, setIsShowPassword] = useState(false);

    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const handleValidateForm = ()=> {
        const message = Validate( email.current.value, password.current.value);
        setIsErrorMsg(message);
        //console.log(message);

        if(message) return;
        
        if(!isSignInForm){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, 
                    photoURL: USER_AVATAR,
                  }).then(() => {
                    const {uid, displayName, email, photoURL} = auth.currentUser;
                    dispatch(addUser({uid: uid, displayName: displayName, email: email, photoURL: photoURL}));
                    console.log(user);
                  }).catch((error) => {
                    setIsErrorMsg(error.message);
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                //console.log(errorCode + errorMessage);
                setIsErrorMsg(errorCode + errorMessage);
            });
        }else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const {uid, displayName, email, photoURL} = user;
                dispatch(addUser({uid: uid, displayName: displayName, email: email, photoURL: photoURL}));
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setIsErrorMsg(errorCode + errorMessage);
            });
        }
    };

    const handleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    }

    
    return(
        <div className="relative">
            <Header/>
            <div>
                <img src={BgScreen} alt="bg Screen" className="object-cover h-screen w-full" />
                <div className="bg-header-gradient absolute top-0 bottom-0 left-0 right-0 "></div>
            </div>
            <form className=" w-10/12 md:w-[500px] p-5 sm:py-8 sm:px-12 mx-auto rounded-md bg-black bg-opacity-70 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-white text-3xl font-bold mb-5 mt-4">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                {!isSignInForm && <input type="text" name="name"
                ref={name}
                placeholder="Name"
                className="bg-slate-900 bg-opacity-60 w-full p-4 mb-4 rounded-md text-white placeholder:text-slate-400 border border-gray-500" 
                />}
                <input type="text" name="email" placeholder="Email or mobile number"
                ref={email}
                className="bg-slate-900 bg-opacity-60 w-full p-4 mb-4 rounded-md text-white placeholder:text-slate-400 border border-gray-500" 
                />
                <div className="relative">
                    <input
                    type={!isShowPassword ? 'password' : 'text'}
                    name="password" placeholder="Password"
                    ref={password}
                    className="bg-slate-900 bg-opacity-60 w-full p-4 mb-4 rounded-md text-white placeholder:text-slate-400 border border-gray-500 pr-12" 
                    />
                    <span className="text-white absolute right-4 top-2 cursor-pointer rounded-full w-10 h-10 flex justify-center items-center hover:bg-black hover:bg-opacity-70 p-2" onClick={handleShowPassword}>
                        {!isShowPassword ? <VisibilityOutlinedIcon className="text-white !w-5 !h-5" /> : <VisibilityOffOutlinedIcon className="text-white !w-5 !h-5" />}
                        
                    </span>
                </div>
                <p className="text-red-500 font-medium mb-4">{isErrorMsg}</p>
                <button type="button" className="bg-red-700 px-5 py-3 rounded-md text-white font-semibold w-full" onClick={handleValidateForm}>
                    {isSignInForm ? 'Sign In' : 'Sign Up'}
                </button>
                <p className="text-slate-400 my-5 cursor-pointer" onClick={handleSignInForm}>
                    {
                        isSignInForm ? <>New to Netflix? <span className="font-bold text-white">Sign up now.</span></> : 
                        <>Already a member? <span className="font-bold text-white">Sign In now.</span></>
                        
                    }
                    
                </p>
            </form>
        </div>
    );
};

export default Login;