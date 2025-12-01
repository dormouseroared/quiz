// Video Navigator - Main Logic
// Handles video playback, clip navigation, and user interface

class VideoNavigator {
  constructor() {
    // Configuration
    this.autoPlayFromURL = false // Set to true if you want clips to auto-play when opened from URL
    // DOM elements
    this.videoPlayer = document.getElementById("video-player")
    this.videoSelect = document.getElementById("video-select")
    this.clipsList = document.getElementById("clips-list")
    this.playClipBtn = document.getElementById("play-clip-btn")
    this.pauseBtn = document.getElementById("pause-btn")
    this.stopClipBtn = document.getElementById("stop-clip-btn")
    this.currentVideoName = document.getElementById("current-video-name")
    this.currentTimeDisplay = document.getElementById("current-time")
    this.durationDisplay = document.getElementById("duration")
    this.statusMessage = document.getElementById("status-message")

    // State
    this.currentClip = null
    this.isPlayingClip = false
    this.currentVideoId = null

    // Initialize
    this.setupEventListeners()
    this.populateVideoSelector()
  }

  setupEventListeners() {
    // Video events
    this.videoPlayer.addEventListener("timeupdate", () =>
      this.handleTimeUpdate(),
    )
    this.videoPlayer.addEventListener("loadedmetadata", () =>
      this.handleVideoLoaded(),
    )
    this.videoPlayer.addEventListener("ended", () => this.handleVideoEnded())

    // Video selection
    this.videoSelect.addEventListener("change", (e) =>
      this.loadVideo(e.target.value),
    )

    // Control buttons
    this.playClipBtn.addEventListener("click", () => this.playCurrentClip())
    this.pauseBtn.addEventListener("click", () => this.pauseVideo())
    this.stopClipBtn.addEventListener("click", () => this.stopClip())

    // Keyboard shortcuts
    document.addEventListener("keydown", (e) => this.handleKeyboard(e))
  }

  populateVideoSelector() {
    // Populate the video dropdown from VIDEO_LIBRARY
    this.videoSelect.innerHTML =
      '<option value="">-- Choose a video --</option>'

    VIDEO_LIBRARY.forEach((video) => {
      const option = document.createElement("option")
      option.value = video.id
      option.textContent = video.title
      this.videoSelect.appendChild(option)
    })
  }

  loadClipFromURL() {
    // Check if there's a clip parameter in the URL
    const urlParams = new URLSearchParams(window.location.search)
    const clipId = urlParams.get("clip")

    if (!clipId) return // No clip specified in URL, normal startup

    // Find the clip in the data
    const clip = getClipById(clipId)
    if (!clip) {
      this.showStatus(`Clip not found: ${clipId}`, "error")
      return
    }

    // Find the video that contains this clip
    const video = getVideoById(clip.videoId)
    if (!video) {
      this.showStatus(`Video not found for clip: ${clipId}`, "error")
      return
    }

    // Load the video (this triggers displayClipsForVideo automatically)
    this.videoSelect.value = video.id
    this.loadVideo(video.id)

    // Wait for video and clips to load, then select the clip
    // The timeout gives the video element time to initialize and the clips list to populate
    setTimeout(() => {
      this.selectClip(clip)

      // Auto-play if configured to do so
      if (this.autoPlayFromURL) {
        this.playCurrentClip()
      }
    }, 500) // Half second delay ensures everything is ready
  }

  loadVideo(videoId) {
    if (!videoId) return

    const video = VIDEO_LIBRARY.find((v) => v.id === videoId)
    if (!video) {
      this.showStatus("Video not found", "error")
      return
    }

    this.currentVideoId = videoId
    this.videoPlayer.src = video.path
    this.currentVideoName.textContent = video.title
    this.showStatus(`Loading: ${video.title}`)

    // Load clips for this video
    this.displayClipsForVideo(videoId)
  }

  displayClipsForVideo(videoId) {
    const clips = CLIPS_DATA.filter((clip) => clip.videoId === videoId)

    if (clips.length === 0) {
      this.clipsList.innerHTML =
        '<p style="color: #999;">No clips defined for this video yet</p>'
      return
    }

    this.clipsList.innerHTML = ""

    clips.forEach((clip, index) => {
      const clipElement = document.createElement("div")
      clipElement.className = "clip-item"
      clipElement.dataset.clipId = clip.id

      // show the clip id on hover
      // can we output tags after description, in a single row separated by &bull;
      clipElement.innerHTML = `
                <div class="clip-title" title=${clip.id}>${clip.title}</div>
                <div class="clip-time">
                    ${this.formatTime(clip.startTime)} → ${this.formatTime(clip.endTime)}
                    (${this.formatDuration(clip.endTime - clip.startTime)})
                </div>
                ${clip.syllabus ? `<div class="clip-syllabus">syllabus: ${clip.syllabus}</div>` : ""}
                ${clip.description ? `<div class="clip-description">${clip.description}</div>` : ""}
                ${clip.tags && clip.tags.length > 0 ? `<div class="clip-tags">${clip.tags.map((tag) => tag.toUpperCase()).join(" &bull; ")}</div>` : ""}
            `

      clipElement.addEventListener("click", () => this.selectClip(clip))

      this.clipsList.appendChild(clipElement)
    })
  }

  selectClip(clip) {
    // Highlight selected clip
    document.querySelectorAll(".clip-item").forEach((item) => {
      item.style.borderLeftColor = "#4CAF50"
      item.style.background = "#f8f8f8"
    })

    const selectedElement = document.querySelector(
      `[data-clip-id="${clip.id}"]`,
    )
    if (selectedElement) {
      selectedElement.style.borderLeftColor = "#2196F3"
      selectedElement.style.background = "#e3f2fd"
    }

    this.currentClip = clip
    this.playClipBtn.disabled = false
    this.showStatus(`Selected: ${clip.title}`)
  }

  playCurrentClip() {
    if (!this.currentClip) {
      this.showStatus("No clip selected", "error")
      return
    }

    // Jump to start time and play
    this.videoPlayer.currentTime = this.currentClip.startTime
    this.videoPlayer.play()
    this.isPlayingClip = true

    this.showStatus(`Playing: ${this.currentClip.title}`)
  }

  handleTimeUpdate() {
    // Update time display
    this.currentTimeDisplay.textContent = this.formatTime(
      this.videoPlayer.currentTime,
    )

    // Check if we need to stop at clip end
    if (this.isPlayingClip && this.currentClip) {
      if (this.videoPlayer.currentTime >= this.currentClip.endTime) {
        this.stopClip()
      }
    }
  }

  stopClip() {
    this.videoPlayer.pause()
    this.isPlayingClip = false

    if (this.currentClip) {
      // Return to start of clip
      this.videoPlayer.currentTime = this.currentClip.startTime
      this.showStatus("Clip stopped")
    }
  }

  pauseVideo() {
    this.videoPlayer.pause()
    this.isPlayingClip = false
    this.showStatus("Paused")
  }

  handleVideoLoaded() {
    this.durationDisplay.textContent = this.formatTime(
      this.videoPlayer.duration,
    )
    // set default volume (0.0 to 1.0, where 1.0 is 100%)
    this.videoPlayer.volume = 0.05
    this.showStatus("Video loaded successfully", "success")
  }

  handleVideoEnded() {
    this.isPlayingClip = false
    this.showStatus("Video ended")
  }
  handleKeyboard(e) {
    // Don't trigger shortcuts if typing in an input field
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
      return
    }

    // Space bar: play/pause
    if (e.code === "Space") {
      e.preventDefault()
      if (this.videoPlayer.paused) {
        this.playCurrentClip()
      } else {
        this.pauseVideo()
      }
    }

    // Escape: stop clip
    if (e.code === "Escape") {
      this.stopClip()
    }

    // Arrow Left/Right: seek backward/forward
    if (e.code === "ArrowLeft") {
      e.preventDefault()
      const skipAmount = e.shiftKey ? 30 : 5 // 30s with Shift, 5s without
      this.videoPlayer.currentTime = Math.max(
        0,
        this.videoPlayer.currentTime - skipAmount,
      )
      this.showStatus(`⏪ Rewind ${skipAmount}s`)
    }

    if (e.code === "ArrowRight") {
      e.preventDefault()
      const skipAmount = e.shiftKey ? 30 : 5 // 30s with Shift, 5s without
      this.videoPlayer.currentTime = Math.min(
        this.videoPlayer.duration,
        this.videoPlayer.currentTime + skipAmount,
      )
      this.showStatus(`⏩ Forward ${skipAmount}s`)
    }

    // Arrow Up: increase playback speed
    if (e.code === "ArrowUp") {
      e.preventDefault()
      // Increment by 0.1, but cap at 2.0 for practical use
      this.videoPlayer.playbackRate = Math.min(
        2.0,
        this.videoPlayer.playbackRate + 0.1,
      )
      // Round to avoid floating point weirdness (0.99999999)
      this.videoPlayer.playbackRate =
        Math.round(this.videoPlayer.playbackRate * 10) / 10
      this.showStatus(`⚡ Speed: ${this.videoPlayer.playbackRate.toFixed(1)}x`)
    }

    // Arrow Down: decrease playback speed
    if (e.code === "ArrowDown") {
      e.preventDefault()
      // Decrement by 0.1, but don't go below 0.5 for practical use
      this.videoPlayer.playbackRate = Math.max(
        0.5,
        this.videoPlayer.playbackRate - 0.1,
      )
      // Round to avoid floating point weirdness
      this.videoPlayer.playbackRate =
        Math.round(this.videoPlayer.playbackRate * 10) / 10
      this.showStatus(`🐌 Speed: ${this.videoPlayer.playbackRate.toFixed(1)}x`)
    }
  }
  // Utility functions
  formatTime(seconds) {
    if (isNaN(seconds)) return "0:00"

    const hrs = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = Math.floor(seconds % 60)

    if (hrs > 0) {
      return `${hrs}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
    } else {
      return `${mins}:${secs.toString().padStart(2, "0")}`
    }
  }

  formatDuration(seconds) {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}m ${secs}s`
  }

  showStatus(message, type = "info") {
    // this.statusMessage.textContent = message
    this.statusMessage.innerHTML = message
    this.statusMessage.style.display = "block"

    // Auto-hide after 3 seconds
    // setTimeout(() => {
    //     this.statusMessage.style.display = 'none'
    // }, 3000)
  }
}

// Initialize when page loads
let navigator
document.addEventListener("DOMContentLoaded", () => {
  navigator = new VideoNavigator()
  navigator.loadClipFromURL() // Check for clip parameter in URL
})
