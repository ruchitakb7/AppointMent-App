const table= document.querySelector('#table')
const table2= document.querySelector('#table2')
const div3=document.querySelector('#div3');

const bookingform= document.querySelector('#bookingform');
const name=document.querySelector('#name');
const email=document.querySelector('#email');
bookingform.addEventListener('submit',slot)




window.addEventListener('DOMContentLoaded',fetchdata)

async function fetchdata()
{
    try{

        const fetched = await axios.get('/details');
        console.log("data fetched:", fetched.data);
        showdetails(fetched.data);
       getslots()

    } catch(e)
    {
        console.log(e)
    }

}

async function showdetails(dataToprint)
{
  
    try{

        dataToprint.forEach(item =>{
            const tr= document.createElement('TR');
            const td= document.createElement("TD")
            const tdtext=document.createTextNode("AT"+"  "+ item.time + "     "+ item.slot+"  "+ "slot Available")
            td.appendChild(tdtext);
            tr.appendChild(td)
    
            const delbtntd= document.createElement('TD')
            const delbtn= document.createElement('button');
            const delbtntext = document.createTextNode('Book Slot');
            delbtn.appendChild(delbtntext)
            delbtntd.appendChild(delbtn)
            tr.appendChild(delbtntd);
            delbtn.addEventListener('click',()=>{book(item)})

            table.appendChild(tr);
          })
    
    }
    catch(e){
        console.log(e)
    }
      
}

async function book(item)
{

    try{
        if(item.slot>0){
             
            const update={
                time:item.time,
                slot:item.slot-1
        
            }
            const updatedata= await axios.put(`/update/${item.id}`,update);

            div3.style.display = 'block'; 
         
            
            }
            else{
                alert("Not available");
            
            }

    }
    catch(e){
        console.log(e)
    }  
}

async function getslots(){
    try{
        const getslots = await axios.get('/getslotsdata');
        console.log(getslots.data)
        slotdisplay(getslots.data)
    }
    catch(e){console.log(e)}
}

async function slot()
{
    console.log(item.id);
    const user={
        name:name.value,
        email:email.value
    }
   try{
    const userslot= await axios.post('/slot',user);
    console.log(userslot.data)
    
    }  
   catch(e){console.log(e)}  
}


async function slotdisplay(dataToprint)
{
    try{

        dataToprint.forEach(item =>{
           const tr= document.createElement('TR');
            const td= document.createElement("TD")
            const tdtext=document.createTextNode("Name-"+"  "+item.name+"  "+
            "Email-"+item.email+"   "+
            "Time-"+item.time)
            td.appendChild(tdtext);
            tr.appendChild(td)
    
            const delbtntd= document.createElement('TD')
            const delbtn= document.createElement('button');
            const delbtntext = document.createTextNode('cancel');
            delbtn.appendChild(delbtntext)
            delbtntd.appendChild(delbtn)
            tr.appendChild(delbtntd);
            delbtn.addEventListener('click',()=>{cancel(item)})

            table2.appendChild(tr);

          })
    
    }
    catch(e){
        console.log(e)
    }
}

