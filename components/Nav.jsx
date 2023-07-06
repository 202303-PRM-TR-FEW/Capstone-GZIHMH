import React from 'react'

const Nav = () => {
     return (
    <nav>
      <ul className={styles.navbar}>
        <li>
          <div className={styles.link}>
            <img src="/assets/icons/icon.png" className={styles.customIcon} alt="Custom Icon" />
          </div>
        </li>
        <li>
          <Link href="/" passHref>
            <div className={styles.link}>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-2" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2F8DFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                <path d="M10 12h4v4h-4z" />
              </svg>
              <span className="text">Home</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/search" passHref>
            <div className={styles.link}>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2F8DFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
              <span className="text">Search</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/courses" passHref>
            <div className={styles.link}>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-play" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2F8DFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M7 4v16l13 -8z" />
              </svg>
              <span className="text">Courses</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/saved" passHref>
            <div className={styles.link}>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bookmark" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2F8DFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
              </svg>
              <span className="text">Saved</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/profile" passHref>
            <div className={styles.link}>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2F8DFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
              </svg>
              <span className="text">Profile</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
