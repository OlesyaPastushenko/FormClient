import './footer.css'
import greenBall from './greenBall.svg'
import group from './Group.svg'
import roseBall from './roseBall.svg'
import yellowBall from './yellowBall.svg'
export default function Form() {
    return(
        <div className='footer'>
            <img src={greenBall} className='greenBall'></img>
            <img src={group} className='group'></img>
            <img src={roseBall} className='roseBall'></img>
            <img src={yellowBall} className='yellowBallsmall'></img>
        </div>
    )
}