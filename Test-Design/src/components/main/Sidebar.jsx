import { Icon } from '@iconify/react';
import '../../styles/sidebar.css'

function Sidebar () {
    return(
        <>
            <div className="sidebar">
                <div className='wrapper'>
                    <div className='login'>
                        <div className='icon'>
                            <Icon icon="ic:baseline-login" width={32}/>
                        </div>
                    </div>
                    <div className='media'>
                        <div className='icon'>
                          <Icon icon="mdi:images-outline" width={32}/>
                        </div>
                        <div className='icon'>
                            <Icon icon="ic:round-live-tv" width={32}/>
                            <span className='dot'></span>
                        </div>
                        <div className='icon'>
                            <Icon icon="material-symbols:help-outline"  width={32}/>
                        </div>
                    </div>
                    <div className='support'>
                        <div className='icon chat'>
                            <Icon icon="ph:chat-dots" color='white' width={32} />
                        </div>
                    </div>
                </div>
               
                
            </div>
        </>
    )
}

export default Sidebar