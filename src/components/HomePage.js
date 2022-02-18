import react from 'react';

export default function HomePage() {
    return (

        <div>
            <div className='home-content'>
                <h1>Facebook events without Facebook.</h1>
                <div><p>Easily host and share events with your friends across any social media.</p></div>
            </div>
            <a href='/Create'><img className='button' src='create-event-button.png'></img></a>
            <img className='right' src='Product_right.png' alt='product' />
            <img className='left' src='Product_left.png' alt='product' />
            <img className='middle' src='Product_middle.png' alt='product' />
            <img className='icons' src='icons.png'></img>
            <img className='bg' src='gradient.png' alt='gradient' />

        </div>
    )
}