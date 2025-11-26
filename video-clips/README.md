# Radio Course Video Clip Navigator

A JavaScript-based tool for navigating and playing specific clips from your radio course lecture videos without breaking up the files.

## 📁 File Structure

```
video-clip-navigator.html    - Main HTML interface
video-navigator.js           - Core navigation logic
video-clips-data.js          - Video library and clips definitions
README.md                    - This file
```

## 🚀 Quick Start

### Step 1: Set Up File Access

**Important:** Browsers have security restrictions on accessing local files. You have several options:

#### Option A: Local Web Server (RECOMMENDED)

The most reliable way to access your NAS videos is through a local web server.

**Using Python (if installed):**
```bash
# Open command prompt in the folder containing these files
python -m http.server 8000
```

Then open: `http://localhost:8000/video-clip-navigator.html`

**Using Node.js (if installed):**
```bash
npm install -g http-server
http-server -p 8000
```

Then open: `http://localhost:8000/video-clip-navigator.html`

#### Option B: Browser File Access

Some browsers allow local file access with special settings:

**Firefox:**
1. Type `about:config` in the address bar
2. Search for `privacy.file_unique_origin`
3. Set it to `false`
4. Open the HTML file directly

**Chrome:**
- Launch with flag: `chrome.exe --allow-file-access-from-files`
- Or use a local server (recommended)

#### Option C: Use UNC Paths (Windows Only)

If your browser supports it, you can use UNC paths in the video library:
```javascript
path: 'file://as-304t-fc68/media/RADIO/BBDL%20FULL/video-name.mkv'
```

### Step 2: Configure Your Video Library

Edit `video-clips-data.js`:

1. **Update the VIDEO_LIBRARY array** with your videos:

```javascript
const VIDEO_LIBRARY = [
    {
        id: 'week06',
        title: 'Week 06 - Tutorial Video',
        path: 'file:///Z:/RADIO/BBDL%20FULL/BBDL%20FULL%20COURSE%20-%20Week06%20-%20Tutorial%20Video%20%5BvlMcjOF5DyI%5D.mkv',
        youtubeId: 'vlMcjOF5DyI',
        duration: 7200,
        notes: ''
    },
    // Add more videos...
];
```

**Path Formatting Notes:**
- Use `file:///` (three slashes) for local paths
- Spaces become `%20`
- Forward slashes `/` work on all systems
- Z: drive maps to `file:///Z:/`

2. **Add your clips** to the CLIPS_DATA array

### Step 3: Create Your Clips

For each segment you want to mark:

1. Play the video and note the start time (e.g., 15:30)
2. Note the end time (e.g., 18:45)
3. Convert to seconds:
   - Start: 15 × 60 + 30 = 930 seconds
   - End: 18 × 60 + 45 = 1125 seconds

4. Add to `CLIPS_DATA`:

```javascript
{
    id: 'week06-clip-003',
    videoId: 'week06',
    title: 'SWR Derivation',
    startTime: 930,
    endTime: 1125,
    description: 'Detailed derivation of Standing Wave Ratio formula',
    tags: ['swr', 'derivation', 'important']
}
```

## 🎮 Using the Navigator

### Interface Elements

- **Video Selector:** Dropdown to choose which video to work with
- **Video Player:** HTML5 player with standard controls
- **Clips List:** All clips for the current video (right panel)
- **Control Buttons:**
  - ▶️ Play Clip: Jump to clip start and play
  - ⏸️ Pause: Pause playback
  - ⏹️ Stop Clip: Stop and return to clip start

### Workflow

1. Select a video from the dropdown
2. Click a clip in the right panel to select it
3. Click "Play Clip" to jump to that segment
4. The video will automatically stop at the clip's end time
5. Click "Stop Clip" to return to the beginning of the clip

### Keyboard Shortcuts

- **Space:** Play/Pause
- **Escape:** Stop clip and return to start

## 📝 Adding New Videos and Clips

### Adding a Video

1. Open `video-clips-data.js`
2. Add a new object to `VIDEO_LIBRARY`:

```javascript
{
    id: 'week07',  // Unique identifier
    title: 'Week 07 - Tutorial Video',  // Display name
    path: 'file:///Z:/RADIO/BBDL%20FULL/BBDL%20FULL%20COURSE%20-%20Week07%20-%20Tutorial%20Video%20[YOUTUBE_ID].mkv',
    youtubeId: 'YOUTUBE_ID',  // From your filename
    duration: 7200,  // Approximate seconds
    notes: 'Any notes about this video'
}
```

### Adding Clips

For each video, create clip entries:

```javascript
{
    id: 'week07-clip-001',        // Unique: videoId + sequential number
    videoId: 'week07',             // Must match video's id
    title: 'Clear description',    // What this clip covers
    startTime: 300,                // Seconds from start
    endTime: 480,                  // Seconds from start
    description: 'Detailed notes', // Optional
    tags: ['topic', 'category']    // Optional, for searching later
}
```

## 🔧 Troubleshooting

### Video Won't Play

1. **Check the path:** Make sure the file path is correct
2. **Check file format:** Browser must support .mkv (most modern browsers do)
3. **Try different path format:**
   - `file:///Z:/path/to/video.mkv`
   - `file://as-304t-fc68/media/path/to/video.mkv`
4. **Check browser console:** Press F12 to see error messages

### Can't Access NAS Files

1. **Ensure NAS is mounted:** Can you access `Z:\RADIO\BBDL FULL` in File Explorer?
2. **Try UNC path:** Use `\\as-304t-fc68\media\RADIO\BBDL FULL` format
3. **Use local web server:** This is the most reliable method

### Clip Doesn't Stop at Right Time

- Times must be in seconds
- Check your calculation: (minutes × 60) + seconds
- Ensure endTime > startTime

## 💡 Tips and Best Practices

### Naming Conventions

- **Video IDs:** Use consistent naming like `week01`, `week02`, etc.
- **Clip IDs:** Use `videoId-clip-NNN` format for easy sorting
- **Titles:** Be descriptive - you'll thank yourself later!

### Time Finding Strategy

1. Play the video normally and pause at key moments
2. Note the timestamps in a text file first
3. Convert all times to seconds in one go
4. Add all clips for a video together

### Using Tags

Tags help you find related content across videos:

```javascript
tags: ['swr', 'calculation']     // Can search for all SWR clips later
tags: ['colpitts', 'oscillator'] // All oscillator examples
tags: ['important', 'exam']      // Critical exam material
```

### Workflow Tip

1. Watch a video once through, noting interesting segments
2. Go back and mark precise start/end times
3. Add all clips to the data file in one editing session
4. Test each clip to ensure times are correct

## 🔮 Future Enhancements

Ideas for expanding this tool:

- Export clip list as PDF study guide
- Search functionality by title/description/tags
- Playback speed control for clips
- Bookmarks within clips
- Integration with your existing quiz tools
- Statistics on which clips you've reviewed

## 📂 File Paths Reference

Your video locations:
```
Windows mapped drive: Z:\RADIO\BBDL FULL
UNC path: \\as-304t-fc68\media\RADIO\BBDL FULL

Example video: BBDL FULL COURSE - Week06 - Tutorial Video [vlMcjOF5DyI].mkv
```

URL encoding for file paths:
- Space → `%20`
- `[` → `%5B`
- `]` → `%5D`

Example encoded path:
```
BBDL%20FULL%20COURSE%20-%20Week06%20-%20Tutorial%20Video%20%5BvlMcjOF5DyI%5D.mkv
```

## 📧 Questions?

This is a simple, self-contained system using just HTML5, CSS, and vanilla JavaScript. All the code is in these three files - no frameworks, no dependencies, just standard web technologies you can modify as needed.

Happy studying! 📻
