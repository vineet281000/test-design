import loginIcon from '../../assets/login_black.svg'
import imagesIcon from '../../assets/collections_black.svg'
import videoIcon from '../../assets/live_tv_black.svg'
import helpIcon from '../../assets/help_outline_black.svg'
import chatIcon from '../../assets/textsms_black.svg'
import '../../styles/sidebar.css'

function Sidebar () {
    return(
        <>
            <div className="sidebar">
                <div className='wrapper'>
                    <div className='login'>
                        <div className='icon'>
                            <img src={loginIcon} />
                        </div>
                    </div>
                    <div className='media'>
                        <div className='icon'>
                            <img src={imagesIcon} />
                        </div>
                        <div className='icon'>
                            <img src={videoIcon} />
                            <span className='dot'></span>
                        </div>
                        <div className='icon'>
                        <img src={helpIcon} />
                        </div>
                    </div>
                    <div className='support'>
                        <div className='icon chat'>
                            <img src={chatIcon} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar