import classes  from './MeetupItem.module.css'

function MeetupItem(props){
    return <li>
        <div className={classes.image}>
        <img src={props.image} alt ={props.title} />
        </div>
        <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
        <button> To Favorites</button>
        </div>
    </li>;
}

export default MeetupItem;