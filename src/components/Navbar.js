import react from 'react';

export default function Navbar() {
    return (
        <div className='nav'>
            <a href='/'><img className='e' src='white_e.png' alt='nav' /></a>
            <h2 className='text'> Envited</h2>
            <h2 className='login'>Login</h2>
            {/* this login was added due to the pre-made logo not fitting and having compatibility issues with the sizing and not showing the login button */}
        </div>
    )
}