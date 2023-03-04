import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import Player from './Player'

const App = () => {
  const [songs, setSongs] = useState([
    {
      title: 'Becha yiramala',
      artist: 'Niaz Diasamidze',
      album: 'FOLK',
      track: '1',
      year: '2019',
      img_src: './songs_images/1.jpeg',
      src: './songs/Niaz Diasamidze - Becha yiramala.mp3',
    },
    {
      title: 'Gamameria Chaghara',
      artist: 'Niaz Diasamidze',
      album: 'FOLK',
      track: '2',
      year: '2019',
      img_src: './songs_images/2.jpeg',
      src: './songs/Niaz Diasamidze - Gamameria Chaghara.mp3',
    },
    {
      title: 'Meskhuri',
      artist: 'Niaz Diasamidze',
      album: 'FOLK',
      track: '3',
      year: '2019',
      img_src: './songs_images/3.jpeg',
      src: './songs/Niaz Diasamidze - Meskhuri.mp3',
    },
    {
      title: 'Raodenta',
      artist: 'Niaz Diasamidze',
      album: 'FOLK',
      track: '4',
      year: '2019',
      img_src: './songs_images/4.jpeg',
      src: './songs/Niaz Diasamidze - Raodenta.mp3',
    },
  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1)

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0
      } else {
        return currentSongIndex + 1
      }
    })
  }, [currentSongIndex])

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  )
}

export default App
