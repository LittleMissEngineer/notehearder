import React from 'react'
import {StyleSheet , css} from 'aphrodite'

import quill from './quill.svg'
import newIcon from './new.png'
import newHover from './new-hover.png'

const Sidebar = () => {
  return (
      <nav className = {css(styles.sidebar)}>
      <div
        className={(styles.logo)}
      >
        <img
          src={quill}
          alt="Noteherder"
          className={css(styles.logoImg)}
        />
      </div>


      <a href="/notes"
      className = {css(styles.newNote)}
      >
        <img
          src={newHover}
          alt="New note"
          className={css(styles.newNoteImg)}
        />
        <img
          src={newIcon}
          alt="New note"
          className={css(styles.newNoteImg , styles.newNoteHover)}
        />
      </a>

      <div className={css(styles.signOut)}
      > <button className={css(styles.button)} >
          <i className= {`fa fa-sign-out ${css(styles.buttonIcon)}`}
          ></i>
        </button>
      </div>
      </nav>
  )
    }


const styles = StyleSheet.create ({
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
  newNote: {
    position: 'relative',
    backgroundColor: 'ffffff',
    border: '#8A2BE2',
    marginTop: '2rem',
    width: '4rem',
    },
    
    newNoteImg: {
    position: 'absolute',
    border: '#8A2BE2',
    width: '100%',
    transition: 'opacity 0.25s ease-in-out',
    },

    newNoteImgHover: {
        ':hover' : {
            opacity: 0,
        },
    },
  signOut: {
backgroundColor: '#f3f3f3',
position: 'absolute',
  top: '400px',
  left: '0px',
},

buttonIcon:{
fontSize: '1.5rem',
},

button:{
    color: '#008bf8',
    background: 'transparent',
    outline: 'none',


},
})


export default Sidebar