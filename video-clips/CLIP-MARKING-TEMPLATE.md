# Clip Marking Template

Use this template while watching videos to capture clip information, then convert to the format needed for video-clips-data.js

## Video: [Video Title/Week Number]
YouTube ID: [from filename]
Date watched: [date]

---

## Clip 1
**Title:** [Short descriptive title]
**Start time:** [MM:SS or H:MM:SS]
**End time:** [MM:SS or H:MM:SS]
**Description:** [What's covered in this segment]
**Tags:** [topic1, topic2, category]
**Notes:** [Any additional notes]

**Converted times:**
- Start: _____ seconds (calculation: ___ × 60 + ___ = ___)
- End: _____ seconds (calculation: ___ × 60 + ___ = ___)

---

## Clip 2
**Title:** 
**Start time:** 
**End time:** 
**Description:** 
**Tags:** 
**Notes:** 

**Converted times:**
- Start: _____ seconds
- End: _____ seconds

---

## Clip 3
**Title:** 
**Start time:** 
**End time:** 
**Description:** 
**Tags:** 
**Notes:** 

**Converted times:**
- Start: _____ seconds
- End: _____ seconds

---

## Example - Filled Out

### Clip 1
**Title:** SWR Formula Derivation
**Start time:** 15:30
**End time:** 18:45
**Description:** Complete derivation of Standing Wave Ratio formula from reflection coefficient, showing all algebra steps
**Tags:** swr, derivation, reflection-coefficient, important, exam
**Notes:** Pay attention to the step where he squares both terms - that's where I got confused before

**Converted times:**
- Start: 930 seconds (calculation: 15 × 60 + 30 = 930)
- End: 1125 seconds (calculation: 18 × 60 + 45 = 1125)

**Ready to add to video-clips-data.js:**
```javascript
{
    id: 'week06-clip-003',
    videoId: 'week06',
    title: 'SWR Formula Derivation',
    startTime: 930,
    endTime: 1125,
    description: 'Complete derivation of Standing Wave Ratio formula from reflection coefficient, showing all algebra steps',
    tags: ['swr', 'derivation', 'reflection-coefficient', 'important', 'exam']
}
```

---

## Time Conversion Reference

Quick reference for converting time to seconds:

```
Minutes → Seconds: multiply by 60
Hours → Seconds: multiply by 3600

Examples:
0:30  = 30 seconds
1:00  = 60 seconds
1:30  = 90 seconds (1 × 60 + 30)
5:00  = 300 seconds (5 × 60)
15:30 = 930 seconds (15 × 60 + 30)
1:00:00 = 3600 seconds (1 × 3600)
1:15:30 = 4530 seconds (1 × 3600 + 15 × 60 + 30)
```

## Tips for Marking Clips

1. **Start a few seconds early** - Better to have a little lead-in than to miss the beginning
2. **End a few seconds late** - Capture the complete thought
3. **Good titles are descriptive** - "SWR Derivation" not just "SWR" or "Math Bit"
4. **Tags help future you** - Think about how you'll search for this later
5. **Keep clips focused** - One concept per clip works better than long segments
6. **Mark as you go** - Easier than trying to remember later

## Suggested Tag Categories

**By topic:**
- oscillators, amplifiers, filters, swr, impedance, smith-chart, etc.

**By type:**
- derivation, example, calculation, explanation, practical, theory

**By importance:**
- important, exam, review-later, difficult, quick-reference

**By content type:**
- diagram, circuit-analysis, measurement, troubleshooting

## Workflow

1. **First watch through:** Watch video normally, make quick notes
2. **Second pass:** Go back, find exact timestamps, fill out this template
3. **Convert:** Do all time conversions at once
4. **Copy to data file:** Add all clips to video-clips-data.js
5. **Test:** Load in navigator and verify each clip plays correctly

## Quick Clipboard Format

For quick note-taking while watching:

```
[15:30-18:45] SWR derivation - from reflection coef
[23:00-28:30] Colpitts oscillator example - component values
[1:15:00-1:18:45] Common mistakes in Smith chart - real student examples
```

Then expand later with full details and time conversions.
