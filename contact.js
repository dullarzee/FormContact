const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const message = document.querySelector('#message');
const messageError = document.querySelector('#messageError');
const Email = document.querySelector('#email');
const radio1 = document.querySelector('#radio1');
const radio2 = document.querySelector('#radio2');
const submit = document.querySelector('button')
const first = document.querySelector('#firstNameError');
const last = document.querySelector('#lastNameError');
const radioError = document.querySelector('#radioError');
const checkBox = document.querySelector('#checkBox');
const consentError = document.querySelector('#consentError');
const emailError = document.querySelector('#errorEmail');

const submitValidation = ()=>{
    if(firstName.value === '')
    {
        console.log(`this is the value: ${firstName.value}.`);
        first.textContent = 'This field is required';
        first.style.color = 'red';
        first.scrollIntoView({behavior:'smooth', block:'center'});
        return;
    }
    if(lastName.value === '')
    {
        last.textContent = 'This field is required';
        last.style.color = 'red';
        last.scrollIntoView({behavior:'smooth', block:'center'});
        return;
    }
    const myEmail = Email.value;
    
    
    if(!(myEmail.endsWith('.com')) && !(myEmail.includes('@')))
    {
        emailError.innerHTML = 'Please enter a valid email address';
        emailError.style.color = 'red';
        emailError.scrollIntoView({behavior:'smooth', block:'center'});
        return;
    }

    
    //checking if a radio button was clicked
    if(!(radio1.checked) && !(radio2.checked))
    {
        radioError.textContent = 'Please select a query type';
        radioError.style.color = 'red';
        radioError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
    }
    /*else
    {
        radioError.textContent = '';
    }*/
   if(message.value === '')
   {
        messageError.textContent = 'This field is required';
        messageError.style.color = 'red';
        messageError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;

   }


    if(!checkBox.checked)
    {
        consentError.textContent = 'To submit this form, please consent to being contacted';
        consentError.style.color = 'red';
        return;
    }
    else
    {
        consentError.textContent = '';
    }

    document.querySelector('.successDiv').style.display = 'block';
    setTimeout(() => {
        document.querySelector('.successDiv').style.display = 'none';
      }, 4000);

      console.log('reached the end');

    
}



function checkRadio2(e)
{
    radio2.parentNode.style.border = '2px solid hsl(169, 82%, 27%)';
    radio1.parentNode.style.borderColor = '';
    radio1.checked = !e.target.checked;
    radioError.textContent = '';
}
function checkRadio(e)
{
    radio1.parentNode.style.border = '2px solid hsl(169, 82%, 27%)';
    radio2.parentNode.style.borderColor = '';
    radio2.checked = !e.target.checked;
    radioError.textContent = '';
}
const parseEmail = (e)=>{
    const myEmail = e.target.value;
    
    const emailError = e.target.parentNode.querySelector('span');
    if(myEmail.endsWith('.com') && myEmail.includes('@'))
    {
        emailError.innerHTML = '';
        

    }
    else
    {
        emailError.innerHTML = 'Please enter a valid email address';
        emailError.style.color = 'red';
        return -1;
    }
}
function parseName(e)
{
    const spanError = e.target.parentNode.querySelector('span');
    if(e.target.value === "")
    {
        
        if(spanError.id === 'firstNameError' || 'lastNameError' || 'messageError')
        {
            spanError.textContent = 'This field is required';
            spanError.style.color = 'red';
            e.target.style.outline = '1px solid red';
            return -1;
        }
    }
    else
    {
        spanError.textContent = '';
        e.target.style.outline = '';
    }
}
firstName.addEventListener('keyup', parseName);
lastName.addEventListener('keyup', parseName);
message.addEventListener('keyup', parseName);
Email.addEventListener('keyup',parseEmail);

radio1.addEventListener('click', checkRadio);
radio2.addEventListener('click', checkRadio2);
submit.addEventListener('click', submitValidation);