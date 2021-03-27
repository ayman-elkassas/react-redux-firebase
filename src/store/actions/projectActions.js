//todo:Using middleware thunk async

export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //*make async call to database
    //*if you remember Actions in vue, do inside it RESTApi calling then,
    //* dispatch reducer to change state with new state

    const firestore = getFirestore();
    firestore.collection('projects').add({
        ...project,
        authorFirstName:'Ahmed',
        authorLastName:'Mohamed',
        authorId:12345,
        createAt:new Date()
    }).then(()=>{
        console.log("success")
        dispatch({ type: "CREATE_PROJECT", payload: project });
    }).catch((err) => {
        console.log("error")
        dispatch({ type: "CREATE_PROJECT_ERROR", payload: err });
    })
  };
};

//todo:That is normal way before thunk async middleware
// export const createProject=(project)=>{
//     return {
//         type:'CREATE_PROJECT',
//         project:project
//     }
// }
