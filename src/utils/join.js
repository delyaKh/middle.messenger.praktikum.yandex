export default function join(array){
    if(Array.isArray(array))
    {
        throw new Error("Incorrect type");
    }
    else{
        return array.join('');
    }
}