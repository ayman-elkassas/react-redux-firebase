export const signIn=(Credentials)=>{

    return(dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase()

        console.log(Credentials)
        firebase.auth().signInWithEmailAndPassword(
            Credentials.email,
            Credentials.password,
        ).then(()=>{
            dispatch({type:'LOGIN_SUCCESS'})
        }).catch((error) => {
            console.log(error.message)
            dispatch({type:'LOGIN_ERROR',payload:error})
        })
    }
}

export const signOut=()=>{
    return (dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase()
        firebase.auth().signOut().then(()=>{
            dispatch({type:'SIGNOUT_SUCCESS'})
        })
    }
}

export const signUp=(newUser)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        // console.log("test")
        const firebase=getFirebase()
        const firestore=getFirestore()

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp)=>{
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName:newUser.firstName,
                lastName:newUser.lastName,
                initials:newUser.firstName[0]+newUser.lastName[0]
            }).then(()=>{
                dispatch({type:'SIGNUP_SUCCESS'})
            }).catch((err) => {
                dispatch({type:'SIGNUP_ERROR',err})
            })
        })
    }
}