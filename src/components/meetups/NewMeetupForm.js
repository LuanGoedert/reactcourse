import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(){
    function submitHandler(event){
        event.preventDefault();

        
    }

    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Meetup title</label>
                <input type="text" required id='title'></input>
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Meetup Image</label>
                <input type="url" required id='image'></input>
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Address</label>
                <input type="text" required id='address'></input>
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Description</label>
                <textarea id='description' required rows='5'></textarea>
                    <div className={classes.actions}>
                        <button >Add Meetup</button>
                    </div>
            </div>
        </form>
    </Card>
}

export default NewMeetupForm;