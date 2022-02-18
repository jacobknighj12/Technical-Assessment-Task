import react from 'react';

export default function EventPage() {
    return (
        <div>
            <div className='home-content'>
                <h1>Facebook events without Facebook.</h1>
                <form className='form'>
                    <input type='text' placeholder='My name'></input>
                    <input type='text' placeholder='My event title'></input>
                    <div></div>
                    <label>Event date </label>
                    <input type='datetime-local' ></input>
                    <div className="input-field">
                        <textarea className="input_fields materialize-textarea" id="address" type="text"></textarea>
                        <label className="active" >Address</label>
                    </div>

                    <div className="input-field">
                        <input className="input_fields" id="city" type="text" />
                        <label className="active" >City/District/Town</label>
                    </div>
                    <div className="input-field">
                        <input className="input_fields" id="postal_code" type="text" />
                        <label className="active" >Area Code</label>
                    </div>
                    <div className="input-field">
                        <input className="input_fields" id="state" type="text" />
                        <label className="active" >State</label>
                    </div>
                    <label>Event image upload</label>
                    <button>upload</button>
                    <div></div>
                    <button > <a href='/Event'>Create event</a></button>
                </form>
            </div>

            <img className='bg' src='gradient.png' alt='gradient' />

        </div>
    )
}