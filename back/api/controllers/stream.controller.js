function addStream(video, stream) {
  video.srcObject = stream
  video.addEventListener('loadedmetadata', () => {
    video.play()
  })
  const videoGrid = document.getElementById('video-grid')
  videoGrid.append(video)
}

module.exports = {
  addStream
}