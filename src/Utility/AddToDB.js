const getStoredDoc=()=>{
    const storedDocSTR=localStorage.getItem("doclist");
    if(storedDocSTR)
    {
        const storedDocData=JSON.parse(storedDocSTR);
        return storedDocData;
    }
    else
    {
        return [];
    }
}
const addToStoredDB=(id)=>{
     const storedDocData=getStoredDoc();
     if(storedDocData.includes(id))
     {
        alert("already ");
     }
     else
     {
        storedDocData.push(id);
        const data=JSON.stringify(storedDocData)
        localStorage.setItem("doclist",data);
         console.log(storedDocData)
     }
}
export {addToStoredDB,getStoredDoc}