
const adminform=document.querySelector('#adminform')
const time =document.querySelector('#time')
const slot =document.querySelector('#slot');

adminform.addEventListener('submit',postuser);
async function postuser()
{
    const details={
        time:time.value,
        slot:slot.value

    }
    try{

        const user = await axios.post("/admin",details);
        console.log(user.data);
        fetchdata();

    }
    catch(e)
    {
        console.log(e)
    }
}

/*async function fetchdata()
{
    try{

        const fetched = await axios.get('/print');
        console.log("data fetched:", fetched.data);
        showdetails(fetched.data);

    } catch(e)
    {
        console.log(e)
    }

}

async function showdetails(dataToprint)
{
    try{

        dataToprint.forEach(item=>{
            const tr= document.createElement('TR');
            const td= document.createElement("TD")
            const tdtext=document.createTextNode(item.name + "     "+ item.city + "     "+ item.email)
            td.appendChild(tdtext);
            tr.appendChild(td)
    
            const delbtntd= document.createElement('TD')
            const delbtn= document.createElement('button');
            const delbtntext = document.createTextNode('DELETE');
            delbtn.appendChild(delbtntext)
            delbtntd.appendChild(delbtn)
            tr.appendChild(delbtntd);
            delbtn.addEventListener('click',()=>{delfunction(item.id)})
    
            const edtbtntd= document.createElement('TD')
            const edtbtn= document.createElement('button');
            edtbtntd.appendChild(edtbtn)
            const edtbtntext = document.createTextNode('EDIT');
            edtbtn.appendChild(edtbtntext)
          //  edtbtn.style.float="right"
            tr.appendChild(edtbtntd);
           edtbtn.addEventListener('click',()=>{searchid(item.id)})
         //  edtbtn.setAttribute('href','<https://www.google.com>')
           
            table.appendChild(tr);
    
          })
    
    }
    catch(e){
        console.log(e)
    }
      
}

async function delfunction(id)
{
    try{
          
        const deldata= await axios.delete(`/delete/${id}`);
        window.location.href='/'
        
    }
    catch(e){
        console.log(e)
    }

}

async function edtfunction(edtid)
{

    try{
    

      //  const editdata= await axios.put(`/edit/${edtid}`)

    }
    catch(e){
        console.log(e)
    }

}

async function searchid(id)
{
    try{
        
        const findid= await axios.get(`/searchid/${id}`);
        const x=findid.data;
        window.location.href="update.html";

       document.querySelector('#ename').value=x[0].name;


    }
    catch(e){
        console.log(e)
    }
} 

async function showdetails(dataToprint)
{                                                                     
   
  dataToprint.forEach(item =>{
    const li = document.createElement('li')
    const text=document.createTextNode(item.name)
    li.appendChild(text)
    userlist.appendChild(li);

  })
  
}*/