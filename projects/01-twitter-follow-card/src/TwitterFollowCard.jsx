import { useState } from 'react';

export function TwitterFollowCard({children, userName, initialIsFollowing}) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const imageSource = `https://unavatar.io/${userName}`;
    const imageAlt = `El avatar de ${userName}`;
    const buttonText = isFollowing ? 'Siguiendo' : 'Seguir';

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
            <img
                className='tw-followCard-avatar'
                src={imageSource}
                alt={imageAlt}
            />
            <div className='tw-followCard-info'>
                {children}
                <span className='tw-followCard-infoUserName'>@{userName}</span>
            </div>
            </header>
            <aside>
            <button
                className={`tw-followCard-button ${isFollowing ? 'is-following' : ''}`}
                onClick={() => { setIsFollowing(!isFollowing) }}
            >
                <span className='tw-followCard-text'>{buttonText}</span>
                <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
            </button>
            </aside>
        </article>
    )
}