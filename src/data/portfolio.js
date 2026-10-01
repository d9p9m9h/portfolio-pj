/**
 * All portfolio content lives here so the components stay purely presentational.
 * Swap these placeholders with real content later.
 */

export const profile = {
    name: 'Young Flamez',
    devName: 'd9p',
    role: 'Film Maker & Editor',
    tagline: 'I craft cinematic stories that move people.',
    location: 'Yangon, Myanmar',
    email: 'young@flamez.design',
    bio: [
        'I am a film maker & editor with 6+ years of experience helping people find their visual voice. My work spans music videos, documentaries, commercials, and narrative films.',
        'I believe great film is equal parts strategy and craft — every cut, color grade, and sound design choice has a job to do.',
    ],
    stats: [
        { value: '120+', label: 'Films edited' },
        { value: '40+', label: 'Satisfied clients' },
        { value: '6+', label: 'Years experience' },
    ],
}


import heroImg from '../assets/heroSection.png'
import aboutImg from '../assets/aboutSection.png'
import contImg from '../assets/contactSection.png'

export const photo = {
    heroImg: heroImg,
    aboutImg: aboutImg,
    contImg: contImg,
}

export const projects = [
    { id: 1, title: 'Midnight Pulse — Music Video', category: 'Music Video', year: 2025, colors: ['#8b5cf6', '#ec4899'] },
    { id: 2, title: 'Voices of the River — Documentary', category: 'Documentary', year: 2025, colors: ['#06b6d4', '#3b82f6'] },
    { id: 3, title: 'Nexus — Commercial Campaign', category: 'Commercial', year: 2024, colors: ['#f59e0b', '#ef4444'] },
    { id: 4, title: 'Echoes — Short Film', category: 'Short Film', year: 2024, colors: ['#10b981', '#84cc16'] },
    { id: 5, title: 'Lumina — Brand Film', category: 'Brand Film', year: 2023, colors: ['#ec4899', '#f43f5e'] },
    { id: 6, title: 'Yangon Live — Event Coverage', category: 'Event Coverage', year: 2023, colors: ['#a78bfa', '#60a5fa'] },
]

export const skills = [
    { name: 'Adobe Premiere Pro', level: 95 },
    { name: 'DaVinci Resolve', level: 90 },
    { name: 'After Effects', level: 85 },
    { name: 'Final Cut Pro', level: 80 },
    { name: 'Avid Media Composer', level: 75 },
    { name: 'Cinema 4D', level: 70 },
]

export const services = [
    { icon: '🎬', title: 'Music Video Editing', text: 'Dynamic, rhythm-driven edits that amplify the artist\'s vision and engage audiences.' },
    { icon: '🎥', title: 'Documentary Editing', text: 'Compelling storytelling through pacing, structure, and emotional resonance.' },
    { icon: '📺', title: 'Commercial Editing', text: 'Sharp, persuasive cuts for brands — from concept to final delivery.' },
    { icon: '🎨', title: 'Color Grading', text: 'Cinematic color palettes that enhance mood, tone, and visual cohesion.' },
    { icon: '✨', title: 'Motion Graphics', text: 'Title sequences, lower thirds, and visual effects that elevate production value.' },
    { icon: '🔊', title: 'Sound Design', text: 'Immersive audio landscapes — mixing, Foley, and creative sound design.' },
]

export const socials = [
    { name: 'Vimeo', href: '#' },
    { name: 'YouTube', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'LinkedIn', href: '#' },
]

export const dev = [
    { name: 'd9p', href: '#' }
]
