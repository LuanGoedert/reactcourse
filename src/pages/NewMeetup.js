import { useNavigate } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage(){   
const navigate = useNavigate();

    function  addMeetupHandler(meetupData){
        /* fetch é usado pra mandar um request */
        fetch('https://react-project-b2b27-default-rtdb.firebaseio.com/meetups.json', 
        {
        method: 'POST', 
        body: JSON.stringify(meetupData),
        headers :{
            'Content-Type': 'application/json'
        },
    }).then(() =>{
        navigate("/", {replace:true})
       });
    }
    
    return <section>
        <h1>Add new Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>;

}


export default NewMeetupsPage;
