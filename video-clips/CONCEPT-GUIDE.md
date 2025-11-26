# Video Clip Navigator - How It Works

## The Core Concept

Think of this system like a **bookmark system for videos**, but instead of just marking a spot, you're defining **segments** with both a start and end point.

```
Your 2-hour video:
[===================================================================]
0:00                                                            2:00:00

With clips defined:
[===================================================================]
  ^------^              ^--------^         ^-----^
  Clip 1                Clip 2             Clip 3
  (5:30-8:15)          (23:00-28:30)      (1:15:00-1:18:45)
```

## The Three Key Components

### 1. The Data Layer (video-clips-data.js)

This is your **knowledge base** - where you define what videos you have and what clips exist.

```
VIDEO_LIBRARY                      CLIPS_DATA
┌──────────────────┐              ┌─────────────────────┐
│ Video: Week 06   │◄─────────────┤ Clip: SWR Formula   │
│ Path: Z:\...     │              │ VideoId: week06     │
│ Duration: 2hr    │              │ Start: 15:30 (930s) │
└──────────────────┘              │ End: 18:45 (1125s)  │
                                  └─────────────────────┘
```

Each clip **points to** its parent video using the `videoId` field.

### 2. The Logic Layer (video-navigator.js)

This is the **brain** - it manages:
- Loading videos
- Jumping to clip start times
- Watching the clock during playback
- Automatically stopping at clip end times

**Key mechanism:**
```
Every video frame, the system checks:
"Is current time >= clip end time?"
    ↓
  YES → Stop playback and return to clip start
    ↓
   NO → Keep playing
```

### 3. The Interface Layer (video-clip-navigator.html)

This is what you **see and interact with**:

```
┌─────────────────────────────────────────────────────────┐
│  Select Video: [Week 06 ▼]                              │
│                                                          │
│  ┌────────────────────────────┐  ┌──────────────────┐  │
│  │                            │  │  📑 Clips        │  │
│  │     [  Video Player  ]     │  │                  │  │
│  │                            │  │  • Clip 1        │  │
│  │     ▶️ ═══════════ 0:15:30  │  │  • Clip 2 ← ✓   │  │
│  │                            │  │  • Clip 3        │  │
│  └────────────────────────────┘  └──────────────────┘  │
│                                                          │
│  [▶️ Play Clip] [⏸️ Pause] [⏹️ Stop]                     │
└─────────────────────────────────────────────────────────┘
```

## The Workflow (How You'll Use It)

### Phase 1: Initial Setup
```
1. Watch video normally
   ↓
2. Note interesting segments: "15:30 to 18:45 - great SWR explanation"
   ↓
3. Convert to seconds:
   15:30 = (15 × 60) + 30 = 930 seconds
   18:45 = (18 × 60) + 45 = 1125 seconds
   ↓
4. Add to CLIPS_DATA array in video-clips-data.js
```

### Phase 2: Daily Revision
```
1. Open the HTML file
   ↓
2. Select video from dropdown
   ↓
3. Click clip in right panel
   ↓
4. Click "Play Clip"
   ↓
5. Video jumps to 15:30, plays, automatically stops at 18:45
   ↓
6. Move to next clip
```

## Understanding the Time System

The HTML5 video element uses **seconds** as its native unit:

```
Human time          Seconds
─────────────────────────────
0:00                0
1:00                60
1:30                90
15:00               900
15:30               930
1:00:00             3600
2:00:00             7200
```

**Why seconds?** The video player's `currentTime` property is in seconds, so we store everything in seconds for direct compatibility.

The display functions convert seconds back to human-readable format:

```javascript
formatTime(930) → "15:30"
formatTime(3725) → "1:02:05"
```

## The Non-Destructive Principle

**Traditional approach (destructive):**
```
Big video file → Cut into pieces → Multiple small files
[2hr video.mkv] → [clip1.mkv][clip2.mkv][clip3.mkv]
```
❌ Changes original files
❌ Takes up more space
❌ Harder to maintain

**This approach (non-destructive):**
```
Original file stays untouched:
[2hr video.mkv]  ← Never modified
     ↓
JavaScript just remembers:
"Play from 930s to 1125s"
     ↓
Video player does the rest
```
✅ Original file unchanged
✅ No extra storage needed  
✅ Easy to update clip times
✅ Can define overlapping clips

## The File Path Challenge

Browsers have security rules about accessing your local files. Think of it like this:

```
Website on internet → Can't access your hard drive (security!)
                                ↓
HTML file opened locally → Restricted access (security!)
                                ↓
Local web server → Serves files safely ✅
```

**Solution:** Run a simple local web server (Python, Node.js) that serves your HTML file. The server acts as a bridge between the browser and your video files.

```
Browser ←→ Local Server ←→ Your NAS Videos
        (http://localhost:8000)
```

## How Clips Are Linked to Videos

Each clip has a `videoId` that matches a video's `id`:

```javascript
VIDEO_LIBRARY:
{
    id: 'week06',  ← This is the key
    title: 'Week 06 - Tutorial',
    ...
}

CLIPS_DATA:
{
    id: 'week06-clip-001',
    videoId: 'week06',  ← This links to the video above
    ...
}
```

When you select a video, the system finds all clips where `clip.videoId === video.id`.

## Building Your Clip Library

**Start small:**
```
Week 1: Just mark 2-3 most important segments
Week 2: Add more as you review
Week 3: Tag them for searchability (future feature!)
```

**Good clip characteristics:**
- Self-contained (complete thought/derivation)
- 2-5 minutes typically (not too long)
- Clear title ("SWR Derivation" not "Important Bit")
- Descriptive tags for later searching

## The Beauty of This System

1. **Separation of Concerns:**
   - Data (clips) separate from logic (player) separate from display (HTML)
   - Change data without touching code
   - Change styling without touching data

2. **No Dependencies:**
   - Just HTML, CSS, and vanilla JavaScript
   - No frameworks to learn or maintain
   - Works offline
   - Fast and lightweight

3. **Your Control:**
   - Every line of code is visible and editable
   - Want a new feature? Just add it!
   - No black boxes

## Next Steps

Once you've tested this basic version:
1. Add your real clips from Week 06
2. Add more videos
3. Consider enhancements (search, export, playback speed)
4. Integrate with your other study tools

The foundation is solid - now you can build on it! 🚀
