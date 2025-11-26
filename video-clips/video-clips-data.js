// Video Library and Clips Data
// This file contains all video definitions and their associated clips

// VIDEO LIBRARY
// Define all your video files here
const VIDEO_LIBRARY = [
    {
        id: 'week06',
        title: 'Week 06 - Tutorial Video',
        path: 'VIDEOS/BBDL%20FULL%20COURSE%20-%20Week06%20-%20Tutorial%20Video%20%5BvlMcjOF5DyI%5D.mkv',
        youtubeId: 'vlMcjOF5DyI',
        duration: 7200, // approximate duration in seconds (2 hours = 7200)
        notes: ''
    }
    // Add more videos here as needed:
    // {
    //     id: 'week07',
    //     title: 'Week 07 - Tutorial Video',
    //     path: 'file:///Z:/RADIO/BBDL%20FULL/BBDL%20FULL%20COURSE%20-%20Week07%20-%20Tutorial%20Video%20[YOUTUBE_ID].mkv',
    //     youtubeId: 'YOUTUBE_ID',
    //     duration: 7200,
    //     notes: ''
    // }
]

// CLIPS DATA
// Define clips for each video
// Times can be in seconds or use timestampToSeconds
const CLIPS_DATA = [
    {
        id: 'week06-clip-002',
        videoId: 'week06',
        title: 'Power Amplifiers',
        startTime: timestampToSeconds("12:25"),
        endTime: timestampToSeconds("36:55"),
        description: "This is a long clip and I'm not sure if there's much to be gained from it. Maybe there are subclips that might be useful.",
        tags: [],
    },
    {
        id: 'week06-clip-002-A',
        videoId: 'week06',
        title: 'Linear Amplifier: AM and SSB need a linear amplifier',
        startTime: timestampToSeconds("14:57"),
        endTime: timestampToSeconds("18:08"),
        description: "",
        tags: [],
    },
    {
        id: 'week06-clip-002-B',
        videoId: 'week06',
        title: 'FM and CW do not need a linear amplifier',
        startTime: timestampToSeconds("18:08"),
        endTime: timestampToSeconds("21:02"),
        description: "",
        tags: [],
    },
    {
        id: 'week06-clip-002-C',
        videoId: 'week06',
        title: 'How to recognise RF power amplifier circuit',
        startTime: timestampToSeconds("21:02"),
        endTime: timestampToSeconds("32:22"),
        description: "",
        tags: [],
    },
    {
        id: 'week06-clip-002-D',
        videoId: 'week06',
        title: 'Peak power. Effect of mode on power. Duty Cycle.',
        startTime: timestampToSeconds("32:22"),
        endTime: timestampToSeconds("36:57"),
        description: "",
        tags: [],
    },
    {
        id: 'week06-clip-003',
        videoId: 'week06',
        title: 'Speech Processing',
        startTime: timestampToSeconds("36:58"),
        endTime: timestampToSeconds("42:14"),
        description: '',
        tags: [],
    },
    {
        id: 'week06-clip-004',
        videoId: 'week06',
        title: 'Automatic Level Control (ALC)',
        startTime: timestampToSeconds("42:31"),
        endTime: timestampToSeconds("46:42"),
        description: '',
        tags: [],
    },
    {
        id: 'week06-clip-006',
        videoId: 'week06',
        title: 'Unwanted Emissions (1) to (4) Intro',
        startTime: timestampToSeconds("51:49"),
        endTime: timestampToSeconds("54:45"),
        description: 'Introduction to (1) Harmonics (2) Spurious Emissions (3) Unintended Frequencies (4) Excessive bandwidth',
        tags: [],
    },
    {
        id: 'week06-clip-007',
        videoId: 'week06',
        title: '(1) Harmonics',
        startTime: timestampToSeconds("54:45"),
        endTime: timestampToSeconds("58:24"),
        description: '',
        tags: [],
    },
    {
        id: 'week06-clip-008',
        videoId: 'week06',
        title: 'Avoid generating harmonics, low pass filter, band pass filter',
        startTime: timestampToSeconds("58:24"),
        endTime: timestampToSeconds("1:04:51"),
        description: '',
        tags: [],
    },
    {
        id: 'week06-clip-009',
        videoId: 'week06',
        title: 'Band stop filter',
        startTime: timestampToSeconds("1:04:51"),
        endTime: timestampToSeconds("1:09:16"),
        description: '',
        tags: [''],
    },
    {
        id: 'week06-clip-010',
        videoId: 'week06',
        title: '(2) Spurious Emissions: Self oscillation, Parasitic oscillation',
        startTime: timestampToSeconds("1:09:16"),
        endTime: timestampToSeconds("1:17:53"),
        description: '',
        tags: [],
    },
    {
        id: 'week06-clip-011',
        videoId: 'week06',
        title: 'Unwanted frequencies from mixer (e.g. 2f1+f2). How to use the BBDL grid to show harmonics.',
        startTime: timestampToSeconds("1:17:53"),
        endTime: timestampToSeconds("01:33:09"),
        description: 'No need to go through this if the BBDL grid is understood and practiced. May need to go another row and/or column but this will be rare.',
        tags: [],
    },
    {
        id: 'week06-clip-012',
        videoId: 'week06',
        title: 'Using a Band Pass filter to just let through wanted signals from mixer.',
        startTime: timestampToSeconds("01:33:09"),
        endTime: timestampToSeconds("01:35:10"),
        description: '',
        tags: [],
    },
    {
        id: 'week06-clip-013',
        videoId: 'week06',
        title: '(3) Unintended frequencies: PLL out of lock, phase noise',
        startTime: timestampToSeconds("01:35:10"),
        endTime: timestampToSeconds("01:39:45"),
        description: '',
        tags: [],
    },
    {
        id: 'week06-clip-014',
        videoId: 'week06',
        title: 'Overmodulation',
        startTime: timestampToSeconds("01:40:05"),
        endTime: timestampToSeconds("01:43:05"),
        description: '',
        tags: [],
    },
    {
        id: 'week06-clip-015',
        videoId: 'week06',
        title: '(4) Producing harmonics of RF signal. Amplifying excessive bandwidth',
        startTime: timestampToSeconds("01:43:07"),
        endTime: timestampToSeconds("01:45:00"),
        description: '',
        tags: [],
    },

    // Add your actual clips here!
    // To find the times:
    // 1. Play the video and note the timestamp when the segment starts
    // 2. Note when it ends
    // 3. Convert to seconds (minutes × 60 + seconds)
    // 
    // Example: A clip from 15:30 to 18:45
    // startTime: 15 * 60 + 30 = 930 seconds
    // endTime: 18 * 60 + 45 = 1125 seconds
    //
    // {
    //     id: 'week06-clip-003',
    //     videoId: 'week06',
    //     title: 'SWR Derivation',
    //     startTime: 930,
    //     endTime: 1125,
    //     description: 'Detailed derivation of Standing Wave Ratio formula',
    //     tags: ['swr', 'derivation', 'important']
    // }
]

// HELPER FUNCTIONS

/**
 * Get all clips for a specific video
 * @param {string} videoId - The video ID
 * @returns {Array} Array of clip objects
 */
function getClipsForVideo(videoId) {
    return CLIPS_DATA.filter(clip => clip.videoId === videoId)
}

/**
 * Get a specific clip by ID
 * @param {string} clipId - The clip ID
 * @returns {Object|null} The clip object or null if not found
 */
function getClipById(clipId) {
    return CLIPS_DATA.find(clip => clip.id === clipId) || null
}

/**
 * Get a video by ID
 * @param {string} videoId - The video ID
 * @returns {Object|null} The video object or null if not found
 */
function getVideoById(videoId) {
    return VIDEO_LIBRARY.find(video => video.id === videoId) || null
}

/**
 * Search clips by tag
 * @param {string} tag - The tag to search for
 * @returns {Array} Array of clips with that tag
 */
function getClipsByTag(tag) {
    return CLIPS_DATA.filter(clip =>
        clip.tags && clip.tags.includes(tag)
    )
}

/**
 * Convert timestamp string (MM:SS or HH:MM:SS) to seconds
 * @param {string} timestamp - Time in format "MM:SS" or "HH:MM:SS"
 * @returns {number} Time in seconds
 */
function timestampToSeconds(timestamp) {
    const parts = timestamp.split(':').map(Number)

    if (parts.length === 2) {
        // MM:SS format
        return parts[0] * 60 + parts[1]
    } else if (parts.length === 3) {
        // HH:MM:SS format
        return parts[0] * 3600 + parts[1] * 60 + parts[2]
    }

    return 0
}

/**
 * Convert seconds to timestamp string
 * @param {number} seconds - Time in seconds
 * @returns {string} Timestamp in format "HH:MM:SS" or "MM:SS"
 */
function secondsToTimestamp(seconds) {
    const hrs = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = Math.floor(seconds % 60)

    if (hrs > 0) {
        return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    } else {
        return `${mins}:${secs.toString().padStart(2, '0')}`
    }
}
