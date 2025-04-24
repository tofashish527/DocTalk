import { toast } from "react-toastify";

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
// const addToStoredDB=(id)=>{
//      const storedDocData=getStoredDoc();
//      if(storedDocData.includes(id))
//      {
//         toast.warning("already added");
//      }
//      else
//      {
//         storedDocData.push(id);
//         const data=JSON.stringify(storedDocData)
//         localStorage.setItem("doclist",data);
//          console.log(storedDocData)
//      }
// }

const addToStoredDB = (id, name) => {
    const storedDocData = getStoredDoc();
    if (storedDocData.includes(id)) {
      toast.warning("Appointment already scheduled for today!");
      return false;
    } else {
      storedDocData.push(id);
      const data = JSON.stringify(storedDocData);
      localStorage.setItem("doclist", data);
      toast.success(`Appointment Scheduled for ${name} Successfully`);
      console.log(storedDocData);
      return true;
    }
  };
  

  const removeFromStoredDB = (id) => {
    const storedDocData = getStoredDoc(); // ["1", "2", "3"]
   //const updatedData = storedDocData.filter(storedId => storedId !== String(id));
    //localStorage.setItem("doclist", JSON.stringify(updatedData));

    const updatedStoredDoc = storedDocData.filter(storedId => parseInt(storedId) !== id);
    localStorage.setItem("doclist", JSON.stringify(updatedStoredDoc));
  
  
    //console.log("Before removal:", storedDocData);
    //console.log("After removal:", updatedData);
  };
  export { addToStoredDB, getStoredDoc, removeFromStoredDB };
  