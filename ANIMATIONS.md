# Framer Motion Animations - exp-ai Project

This document outlines all the Framer Motion animations implemented throughout the project.

## 🎯 Overview

The project now features comprehensive Framer Motion animations that enhance user experience with smooth, performant transitions and micro-interactions.

## 🚀 Animations Added

### 1. **Page-Level Animations**
- **Page transitions**: Smooth fade-in animation on initial load
- **Scroll progress indicator**: Fixed top progress bar showing scroll progress
- **Smooth scrolling**: CSS and JavaScript enhanced scrolling behavior
- **Custom scrollbar**: Styled scrollbar with project branding colors

### 2. **Header Component**
- **Initial load animation**: Header slides down with staggered navigation items
- **Scroll-based backdrop**: Dynamic background change on scroll
- **Logo hover effect**: Subtle scale animation
- **Navigation items**: Individual hover animations with underline effects
- **Mobile menu**: Slide-down animation with staggered menu items
- **Button interactions**: Scale and color transitions on hover/tap

### 3. **Hero Section**
- **Entrance animation**: Staggered text and image animations
- **Text reveal**: Sequential text appearance with different delays
- **Hero image**: Scale animation with hover effect
- **Smooth timing**: Coordinated animations create flowing experience

### 4. **Text Section**
- **Fade in animations**: Title and description appear from bottom
- **Button interactions**: Scale and hover effects
- **Staggered timing**: Content appears in logical sequence

### 5. **Blue Card Section**
- **Card entrance**: Scale and fade-in animation
- **Hover effects**: Subtle scale animation on card hover
- **Text animation**: Staggered text appearance

### 6. **Mint Section**
- **Background animations**: Parallax-style background effects
- **Content reveal**: Bottom-to-top content animation
- **Button interactions**: Enhanced hover and tap animations

### 7. **Video Section**
- **Video container**: Scale animation with hover effects
- **Play button**: Interactive hover and tap animations
- **Trailer button**: Enhanced button animations

### 8. **Solution Section**
- **Grid animations**: Staggered card entrance animations
- **Card interactions**: Individual hover effects with scale and lift
- **Number animations**: Spring-based number reveals
- **Content staggering**: Text content appears in sequence

### 9. **Roadmap Section**
- **Timeline animations**: Progressive timeline line drawing
- **Timeline items**: Staggered entrance of roadmap items
- **Interactive dots**: Scale animations on timeline dots
- **Card hover effects**: Individual card interactions
- **Final milestone**: Special animation for the final timeline item
- **Background elements**: Animated background graphics

### 10. **DAO Section**
- **Section entrance**: Coordinated header and content animations
- **Foundation cards**: Left/right slide animations
- **Chart animation**: Scale and hover effects on the chart
- **Text reveals**: Staggered text animations

### 11. **Join Community Section**
- **Split layout**: Different animations for text and image
- **Image hover**: Scale effect on the waitlist image
- **Button animation**: Enhanced call-to-action button

### 12. **Meet Team Section**
- **Grid animations**: Staggered team member reveals
- **Member hover**: Individual hover effects with scale and lift
- **Partner logos**: Coordinated partner section animations
- **Contact section**: Smooth reveal of contact information

### 13. **Waitlist Section**
- **Form animations**: Input field and button interactions
- **Background**: Integrated with background image
- **Interactive elements**: Focus and hover states

### 14. **Footer**
- **Entrance animation**: Staggered column animations
- **Link interactions**: Hover effects on all links
- **Logo animation**: Interactive logo hover effect

## 🎨 Animation Patterns Used

### **Entrance Animations**
- `fadeInUp`: Most common - elements slide up while fading in
- `fadeInLeft/Right`: Directional entrance animations
- `scaleIn`: Elements grow from center point
- `staggerChildren`: Sequential animations for lists/grids

### **Interaction Animations**
- `whileHover`: Scale, translate, and color changes
- `whileTap`: Button press feedback
- `whileFocus`: Accessibility-focused interactions

### **Scroll-Triggered Animations**
- `whileInView`: Animations trigger when elements enter viewport
- `viewport={{ once: true }}`: Prevents re-animation on re-entry
- Progressive reveal as user scrolls

### **Advanced Effects**
- **Spring animations**: Natural-feeling bounces and elasticity
- **Timeline animations**: Progressive line drawing
- **Parallax effects**: Background elements move at different speeds
- **Morphing shapes**: Smooth transitions between states

## ⚡ Performance Optimizations

1. **`will-change` CSS**: Applied to frequently animated elements
2. **Hardware acceleration**: Transform-based animations use GPU
3. **Reduced motion**: Respects user's motion preferences
4. **Efficient re-renders**: Animations don't trigger unnecessary re-renders
5. **Viewport optimization**: Animations only trigger when visible

## 🎯 Key Features

- **Accessibility-first**: Respects reduced motion preferences
- **Performance-optimized**: Smooth 60fps animations
- **Mobile-responsive**: Animations work across all devices
- **Progressive enhancement**: Works without JavaScript
- **Brand-consistent**: Animations align with project's visual identity

## 🛠 Animation Timing

- **Fast interactions**: 0.2s for hover/tap feedback
- **Medium reveals**: 0.5-0.8s for content reveals
- **Slow entrances**: 1-1.5s for major section reveals
- **Stagger delays**: 0.1-0.15s between child animations

## 📱 Responsive Considerations

- Reduced animation complexity on smaller screens
- Touch-friendly interaction zones
- Performance-conscious mobile animations
- Appropriate timing for different devices

All animations are designed to enhance the user experience while maintaining excellent performance and accessibility standards.
