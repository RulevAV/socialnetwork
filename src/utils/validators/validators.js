export const GenerationMaxSize = size =>{
    return value =>{
        if(value && value.length>size) {
            return "max length is 30 symbols ";
        }
        else {
            return undefined;
        }
    }
}



export const requiredField = value =>{
    if(value) return undefined;
    else return  "Field is required";
}



