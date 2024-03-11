;(function () {
  'use strict'

  const get = function (target) {
    return document.querySelector(target)
  }

  const getAll = function (target) {
    return document.querySelectorAll(target)
  }

  const keys = Array.from(getAll('.key'))

  const soundsRoot = 'assets/sounds/'
  const drumSounds = [
    { key: 81, sound: 'clap.wav' },
    { key: 87, sound: 'crash.wav' },
    { key: 69, sound: 'hihat.wav' },
    { key: 65, sound: 'kick.wav' },
    { key: 83, sound: 'openhat.wav' },
    { key: 68, sound: 'ride.wav' },
    { key: 90, sound: 'shaker.wav' },
    { key: 88, sound: 'snare.wav' },
    { key: 67, sound: 'tom.wav' },
  ]

  const getAudioElement = (index) => {
    const audio = document.createElement('audio')
    audio.dataset.key = drumSounds[index].key
    audio.src = soundsRoot + drumSounds[index].sound
    return audio
  }

  const playSound = (keycode) => {
    const $audio = get(`audio[data-key="${keycode}"]`)
    if ($audio) {
      $audio.currentTime = 0
      $audio.play()
    }
  }

  const onKeyDown = (e) => {
    playSound(e.keyCode)
  }

  const init = () => {
    window.addEventListener('keydown', onKeyDown)
    keys.forEach((key, index) => {
      const audio = getAudioElement(index)
      key.appendChild(audio)
      key.dataset.key = drumSounds[index].key
    })
  }

  init()
})()
