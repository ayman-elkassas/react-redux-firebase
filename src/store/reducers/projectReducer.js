const initState={
    projects:[
        
    ]
}

const projectReducer=(state=initState,action)=>{
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('create project',action.payload)
            return 
        case 'CREATE_PROJECT_ERROR':
            console.log('create project',action.payload)
            return state
        default:
            return state
    }
}

export default projectReducer