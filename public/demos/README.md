# Demo Videos

This folder should contain three demo videos for the DemoRail component:

## Required Files:
- `johnnycloud.mp4` - JohnnyCloud GuardDuty alert demo (8-12 seconds)
- `trivia.mp4` - Trivia Clash instant feedback demo (8-12 seconds)  
- `streak.mp4` - Streak Tracker badge unlock demo (8-12 seconds)

## Video Specifications:
- **Duration**: 8-12 seconds each
- **Format**: MP4
- **Resolution**: 720p (1280x720) or similar
- **Frame Rate**: 24fps
- **Audio**: None (muted)
- **File Size**: ≤1-2 MB each
- **Codec**: H.264 with faststart flag

## FFmpeg Encoding Command:
```bash
# Example for johnnycloud.mp4
ffmpeg -i input.mov -vf "scale=1280:-2,fps=24" -an -c:v libx264 -crf 28 -movflags +faststart public/demos/johnnycloud.mp4
```

## Content Guidelines:
- **JohnnyCloud**: Show GuardDuty alert appearing in dashboard
- **Trivia Clash**: Show instant answer feedback mechanism
- **Streak Tracker**: Show automatic badge unlock animation

## Notes:
- Videos will autoplay silently (muted + playsInline)
- Only metadata is preloaded for performance
- Videos loop continuously
- Ensure content is engaging and demonstrates key features


