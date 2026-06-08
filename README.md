# Homework Helper Hub Lite / AI Study Planner

## Student Information
 
**Track:** Code Track

---

## Description

Homework Helper Hub Lite is a beginner-friendly study planning web app for students. Students can enter assignments, quizzes, exams, due dates, difficulty levels, and available study time. The app then generates a simple weekly study plan to help students organize their work and avoid last-minute stress.

This project is inspired by the school-provided Homework Helper Hub idea but simplified so it can be completed within the project deadline.

---

## Problem

Students often have many assignments, quizzes, exams, and projects across different classes. It can be difficult to know what to work on first and how much time to spend on each subject. This can lead to stress, missed deadlines, and poor time management.

---

## Solution

This app helps students organize their schoolwork by turning upcoming tasks into a weekly study schedule. Instead of planning everything manually, students enter their tasks and available study time, and the app creates a clear day-by-day study plan.

---

## Main Features

### 1. Add School Tasks

Students can add:

* Course name
* Task title
* Task type (Assignment, Quiz, Exam, or Project)
* Due date
* Difficulty level
* Estimated study hours

### 2. Save and Manage Tasks

The app saves tasks using localStorage.

Students can:

* View tasks
* Delete tasks
* Mark tasks as complete

### 3. Generate Weekly Study Plan

The app creates a study plan based on:

* Due dates
* Difficulty levels
* Estimated study hours
* Available study time

---

## How to Use the App

1. Open the live app.
2. Add a school task.
3. Enter:

   * Course
   * Task title
   * Task type
   * Due date
   * Difficulty
   * Estimated study hours
4. Add available study times.
5. Click **Generate Study Plan**.
6. Review the weekly study schedule.
7. Mark tasks complete when finished.

---

## Tech Stack

* React
* JavaScript
* CSS or Tailwind CSS
* localStorage
* GitHub
* Vercel

### Optional APIs

* OpenAI API
* Claude API
* Gemini API

These may be used for study plan generation or study tips if time allows.

---

## Technical Architecture

```text
User
  ↓
React Frontend
  ↓
Task Input Form
  ↓
Availability Input
  ↓
Study Plan Generator
  ↓
Weekly Plan Display
  ↓
localStorage
```

---

## Data Model

### Task Object

```json
{
  "id": 1,
  "course": "Math",
  "title": "Chapter 5 Exam",
  "type": "Exam",
  "dueDate": "2026-06-05",
  "difficulty": "Hard",
  "estimatedHours": 4,
  "status": "Pending"
}
```

### Availability Object

```json
{
  "Monday": "6 PM - 7 PM",
  "Tuesday": "6 PM - 7 PM",
  "Wednesday": "5 PM - 6 PM",
  "Thursday": "7 PM - 8 PM",
  "Friday": "4 PM - 5 PM"
}
```

### Study Plan Object

```json
{
  "Monday": [
    "Study Math for 30 minutes",
    "Start English essay"
  ],
  "Tuesday": [
    "Review Biology notes",
    "Practice Math problems"
  ]
}
```

---

## AI Assistance Used

ChatGPT was used for:

* Project planning
* Idea refinement
* README writing
* Breaking the project into beginner-friendly steps

Claude, ChatGPT, or another AI coding assistant may also be used for:

* Code suggestions
* Debugging help
* Improving study plan generation logic

**Estimated AI contribution:** 30–40%

AI was used as an assistant, but the final project was reviewed, edited, and assembled by the student.

---

## Known Issues / Limitations

* No Canvas integration
* No user accounts or login
* Data is stored only in the browser
* Study plans are suggestions and may not be perfect
* AI-generated plans may not be implemented in Version 1
* No assignment file uploads

---

## What's Not Included in Version 1

To keep the project realistic and beginner-friendly, the following features are intentionally excluded:

* Canvas integration
* File uploads
* Login/authentication
* Cloud database
* Calendar synchronization
* Teacher messaging
* Mobile app version
* Advanced AI tutoring
* Real-time collaboration

---

## Future Improvements

If more time were available, future versions could include:

* Assignment file uploads
* AI-generated flashcards
* Subject-specific study tips
* Calendar view
* Reminders and notifications
* Login system
* Cloud database
* Canvas integration
* Google Classroom integration
* Mobile-friendly improvements

---

## Niyyah / Purpose

The purpose of this project is to help students manage their schoolwork with less stress. Many students struggle with organizing assignments and studying before deadlines.

This app is intended to encourage better time management, reduce procrastination, and help students use their time more responsibly.
