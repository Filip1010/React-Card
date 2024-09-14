import profilePic from './assets/profile.jpg'

function Card(){

    return(
        <div className="card">
            <img src={profilePic} alt="profile picture"></img>
            <h2 className='card-title'>Filip K</h2>
            <p className='card-text'>Student on Faculty of Computer Science and Engineering</p>
        </div>
    );

}

export default Card