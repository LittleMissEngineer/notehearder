import React from 'react'

import quill from './quill.svg'
import newIcon from './new.png'
import newHover from './new-hover.png'

const Sidebar = () => {
  return (
    <div
      className="Sidebar"
      style={styles.sidebar}
    >
      <div
        className="logo"
        style={styles.logo}
      >
        <img
          src={quill}
          alt="Noteherder"
          style={styles.logoImg}
        />
      </div>


      <a href="/notes">
        <img
          src={newHover}
          alt="New note"
          style={styles.newNote}
        />
        <img
          src={newIcon}
          alt="New note"
          style={styles.noteImg}
        />
      </a>

      <div className="SignOut"
       style={styles.signOut}
      > <button>
          <i className="fa fa-sign-out"
          style={styles.signOutButton}
          ></i>
        </button>
      </div>
    </div>
  )
}

const styles = {
  sidebar: {
    width: '6rem',
    backgroundColor: '#f3f3f3',
    padding: '0.5rem 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    fontFamily: '"Fauna One"',
    color: '#666',
    fontSize: '3rem',
  },
  logoImg: {
    width: '3rem',
    paddingLeft: '0.4rem',
  },
  signOut: {
backgroundColor: '#f3f3f3',
position: 'relative',
  top: '400px',
  left: '0px',
},

signOutButton:{
color: '#008bf8',
fontSize: '1.5rem',
},

newNotes: {
backgroundColor: 'ffffff',
border: '#8A2BE2',
},

noteImg: {
border: '#8A2BE2',

}

}

export default Sidebar