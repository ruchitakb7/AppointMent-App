const bookingform= document.querySelector('#bookingform');
const name=document.querySelector('#name');
const email=document.querySelector('#email');
bookingform.addEventListener('submit',slot)


async function slot()
{
    console.log(item.id);
    const user={
        name:name.value,
        email:email.value
    }
   try{
   

    const userslot= await axios.post('/slot',user);
    if(userslot.status===201){
        window.location.href="dashboard.html"
    }
   
   }
   catch(e){console.log(e)}
   
}


