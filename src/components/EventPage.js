import react, { useState } from 'react';

export default function EventPage() {
    const [edit, setEdit] = useState(false)

    function handleClick() {
        setEdit(!edit)
    }
    return (
        <div>
            <img className='cover' src='cover.png'></img>
            <div >
                <h2 contentEditable={edit} className='event'>&#127802; Anica's 22nd </h2><h2 className='event'>Birthday</h2>
                <div><p contentEditable={edit} className='event'>Hosted by Anica</p></div>
            </div>
            <div>
                <img className='going' src='going.png'></img>
                <img className='maybe' src='maybe.png'></img>
                <img className='not-going' src='not-going.png'></img>
            </div>
            <div>
                <img className='invite' src='invite.png'></img>
                <img className='settings' src='settings.png'></img>
            </div>
            <div>
                <img className='calendar' src='calendar.png'></img>
                <h4 contentEditable={edit} className='event-content'>Sat 16 Oct 2022 6:00PM</h4>
                <h4 contentEditable={edit} className='event-content'>to Sat 16 Oct 2022 11:00PM</h4>
                <p className='event-content'>Add to calendar</p>
            </div>
            <div>
                <img className='pin' src='pin.png'></img>
                <h4 contentEditable={edit} className='event-content'>84 Davey Street</h4>
                <p className='event-content'>Open in maps</p>
            </div>
            <img className='details' src='details.png'></img>
            <img className='posts' src='posts.png'></img>
            <button onClick={handleClick}>edit content</button>
        </div>
    )
}