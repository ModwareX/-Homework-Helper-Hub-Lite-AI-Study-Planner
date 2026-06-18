# Homework Helper Hub Lite / AI Study Planner

## Student Information
 
**Track:** Code Track

---

## Description

Homework Helper Hub Lite is a beginner-friendly study planning web app for students. Students can enter assignments, quizzes, exams, due dates, difficulty levels, and available study time. The app then generates a simple weekly study plan to help students organize their work and avoid last-minute stress.

This project is inspired by the school-provided Homework Helper Hub idea but simplified so it can be completed within the project deadline.

---

## Problem

Students often juggle multiple assignments, quizzes, exams, and projects across different classes. Without a clear study schedule, it's difficult to know what to prioritize and how much time to spend on each task. This leads to:

- Missed deadlines
- Last-minute cramming
- Stress and poor time management
- Uneven effort distribution across subjects

---

## Solution

BA Homework Helper turns task management into a weekly study schedule. Instead of planning manually, students enter their assignments and available study times, and the app uses AI to create a day-by-day study plan optimized by due date, difficulty level, and estimated study time.

---

## Features

### 1. **Add School Tasks**
Students can add tasks with the following details:
- Course name
- Task title
- Task type: Assignment, Quiz, Exam, or PBL
- Due date
- Difficulty level: Super Easy, Easy, Medium, Hard, Super Hard
- Estimated hours to complete

### 2. **Track Your Availability**
Input available study time for each day of the week (e.g., "6 PM - 8 PM"). The app uses this to create realistic study schedules.

### 3. **View & Manage Tasks**
- See all added tasks at a glance
- View task details (course, type, difficulty, due date, status)
- Mark tasks as complete
- Delete tasks as needed

### 4. **Generate AI-Powered Study Plans**
Click "Generate AI Study Plan" to create a customized weekly schedule based on:
- Task due dates
- Difficulty levels
- Estimated study hours
- Your available study time

---

## How to Use

1. **Open the app** at https://homework-helper-hub-lite.vercel.app/
2. **Add tasks** by filling in course, title, type, due date, difficulty, and estimated hours
3. **Input your availability** for each day of the week (e.g., "6 PM - 8 PM")
4. **Generate your study plan** by clicking the "Generate AI Study Plan" button
5. **Review your weekly schedule** and start studying
6. **Mark tasks complete** as you finish them
7. **Delete completed tasks** when no longer needed

All data is saved automatically in your browser's localStorage.


---

## Tech Stack

- **Frontend:** React
- **Styling:** CSS / Tailwind CSS
- **State Management:** React Hooks (useState, useEffect)
- **Storage:** localStorage (browser-based persistence)
- **AI:** Claude API (for study plan generation)
- **Hosting:** Vercel
- **Version Control:** GitHub

---

## Data Model

### Task Object
```json
{
  "id": 1719234567890,
  "course": "Math",
  "title": "Chapter 5 Exam",
  "type": "Exam",
  "dueDate": "2026-06-15",
  "difficulty": "Hard",
  "estimatedHours": "4",
  "status": "Pending"
}
```

### Availability Object
```json
{
  "Monday": "6 PM - 8 PM",
  "Tuesday": "6 PM - 8 PM",
  "Wednesday": "5 PM - 7 PM",
  "Thursday": "7 PM - 8 PM",
  "Friday": "4 PM - 6 PM",
  "Saturday": "",
  "Sunday": ""
}
```

### Generated Study Plan
```
Monday:
- Review Math Chapter 5 (1 hour)
- Practice exam problems (1 hour)

Tuesday:
- Continue Chapter 5 review (1 hour)
- Full-length practice test (1 hour)
...
```

---

## Installation & Development

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Local Setup
```bash
# Clone the repository
git clone https://github.com/ModwareX/-Homework-Helper-Hub-Lite-AI-Study-Planner.git
cd Homework-Helper-Hub-Lite-AI-Study-Planner

# Install dependencies
npm install

# Create a .env.local file for API keys (if needed)
# VITE_CLAUDE_API_KEY=your_key_here

# Run the development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Build for Production
```bash
npm run build
```

---

## AI Integration

This project uses **Claude API** to generate intelligent study plans. The AI considers:
- Task priority based on due dates
- Difficulty levels
- Total estimated study time
- Your available study windows
- Balanced subject distribution

**AI Contribution:** ~40% (code generation, debugging, study plan logic)

### Tools Used for Development
- **ChatGPT:** Project planning, code suggestions, README refinement, debugging
- **Claude:** Study plan generation, AI logic optimization

All AI-generated code was reviewed, edited, and tested by the student before final submission.

---

## Known Issues & Limitations

- **Date/Time Validation:** Requires dates and times in valid format. Invalid inputs may cause issues with plan generation.
- **Browser Storage Only:** Data is stored only in the browser (localStorage). Clearing browser data will delete all tasks and plans.
- **No Cloud Sync:** Changes made in one browser/device won't sync to another.
- **No User Accounts:** No login system or multi-device support.
- **Study Plans Are Suggestions:** Generated plans are recommendations and may not work perfectly for all students.
- **No File Uploads:** Cannot upload assignment documents or files.
- **No Canvas Integration:** Does not connect to Canvas or other learning platforms.

---

## Future Improvements

With additional time and resources, the following features could be added:

### UI/Design
- Improve button sizes and styling
- Better color scheme and visual hierarchy
- More intuitive difficulty selector

### Features
- Time tracking in minutes (not just hours)
- Assignment file uploads
- AI-generated flashcards
- Subject-specific study tips
- Calendar view of assignments
- Reminder and notification system
- Export study plan as PDF

### Backend & Integration
- User authentication and accounts
- Cloud database (Firebase, MongoDB)
- Canvas/Google Classroom integration
- Multi-device sync
- Mobile app version
- Real-time collaboration

---

## Niyyah (Purpose)

This app was created with the intention of helping students manage their schoolwork with less stress. Many students struggle with organizing assignments and studying before deadlines. 

BA Homework Helper aims to:
- Encourage better time management
- Reduce procrastination
- Help students use their time more responsibly
- Support academic success through smart planning

---

## License

This project is open source and available for educational purposes.




















# BA Homework Helper

A beginner-friendly study planning web app that helps students organize assignments, quizzes, exams, and projects. Students can enter their tasks and available study time, and the app generates a simple weekly study plan to help avoid last-minute stress and improve time management.

**Live App:** https://homework-helper-hub-lite.vercel.app/  

---

## Problem

Students often juggle multiple assignments, quizzes, exams, and projects across different classes. Without a clear study schedule, it's difficult to know what to prioritize and how much time to spend on each task. This leads to:

- Missed deadlines
- Last-minute cramming
- Stress and poor time management
- Uneven effort distribution across subjects

---

## Solution

BA Homework Helper turns task management into a weekly study schedule. Instead of planning manually, students enter their assignments and available study times, and the app uses AI to create a day-by-day study plan optimized by due date, difficulty level, and estimated study time.

---

## Features

### 1. **Add School Tasks**
Students can add tasks with the following details:
- Course name
- Task title
- Task type: Assignment, Quiz, Exam, or PBL
- Due date
- Difficulty level: Super Easy, Easy, Medium, Hard, Super Hard
- Estimated hours to complete

### 2. **Track Your Availability**
Input available study time for each day of the week (e.g., "6 PM - 8 PM"). The app uses this to create realistic study schedules.

### 3. **View & Manage Tasks**
- See all added tasks at a glance
- View task details (course, type, difficulty, due date, status)
- Mark tasks as complete
- Delete tasks as needed

### 4. **Generate AI-Powered Study Plans**
Click "Generate AI Study Plan" to create a customized weekly schedule based on:
- Task due dates
- Difficulty levels
- Estimated study hours
- Your available study time

---

## How to Use

1. **Open the app** at https://homework-helper-hub-lite.vercel.app/
2. **Add tasks** by filling in course, title, type, due date, difficulty, and estimated hours
3. **Input your availability** for each day of the week (e.g., "6 PM - 8 PM")
4. **Generate your study plan** by clicking the "Generate AI Study Plan" button
5. **Review your weekly schedule** and start studying
6. **Mark tasks complete** as you finish them
7. **Delete completed tasks** when no longer needed

All data is saved automatically in your browser's localStorage.

---

## Tech Stack

- **Frontend:** React
- **Styling:** CSS / Tailwind CSS
- **State Management:** React Hooks (useState, useEffect)
- **Storage:** localStorage (browser-based persistence)
- **AI:** Claude API (for study plan generation)
- **Hosting:** Vercel
- **Version Control:** GitHub

---

## Data Model

### Task Object
```json
{
  "id": 1719234567890,
  "course": "Math",
  "title": "Chapter 5 Exam",
  "type": "Exam",
  "dueDate": "2026-06-15",
  "difficulty": "Hard",
  "estimatedHours": "4",
  "status": "Pending"
}
```

### Availability Object
```json
{
  "Monday": "6 PM - 8 PM",
  "Tuesday": "6 PM - 8 PM",
  "Wednesday": "5 PM - 7 PM",
  "Thursday": "7 PM - 8 PM",
  "Friday": "4 PM - 6 PM",
  "Saturday": "",
  "Sunday": ""
}
```

### Generated Study Plan
```
Monday:
- Review Math Chapter 5 (1 hour)
- Practice exam problems (1 hour)

Tuesday:
- Continue Chapter 5 review (1 hour)
- Full-length practice test (1 hour)
...
```

---

## Installation & Development

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Local Setup
```bash
# Clone the repository
git clone https://github.com/ModwareX/-Homework-Helper-Hub-Lite-AI-Study-Planner.git
cd Homework-Helper-Hub-Lite-AI-Study-Planner

# Install dependencies
npm install

# Create a .env.local file for API keys (if needed)
# VITE_CLAUDE_API_KEY=your_key_here

# Run the development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Build for Production
```bash
npm run build
```

---

## AI Integration

This project uses **Claude API** to generate intelligent study plans. The AI considers:
- Task priority based on due dates
- Difficulty levels
- Total estimated study time
- Your available study windows
- Balanced subject distribution

**AI Contribution:** ~40% (code generation, debugging, study plan logic)

### Tools Used for Development
- **ChatGPT:** Project planning, code suggestions, README refinement, debugging
- **Claude:** Study plan generation, AI logic optimization

All AI-generated code was reviewed, edited, and tested by the student before final submission.

---

## Known Issues & Limitations

- **Date/Time Validation:** Requires dates and times in valid format. Invalid inputs may cause issues with plan generation.
- **Browser Storage Only:** Data is stored only in the browser (localStorage). Clearing browser data will delete all tasks and plans.
- **No Cloud Sync:** Changes made in one browser/device won't sync to another.
- **No User Accounts:** No login system or multi-device support.
- **Study Plans Are Suggestions:** Generated plans are recommendations and may not work perfectly for all students.
- **No File Uploads:** Cannot upload assignment documents or files.
- **No Canvas Integration:** Does not connect to Canvas or other learning platforms.

---

## Future Improvements

With additional time and resources, the following features could be added:

### UI/Design
- Improve button sizes and styling
- Better color scheme and visual hierarchy
- More intuitive difficulty selector

### Features
- Time tracking in minutes (not just hours)
- Assignment file uploads
- AI-generated flashcards
- Subject-specific study tips
- Calendar view of assignments
- Reminder and notification system
- Export study plan as PDF

### Backend & Integration
- User authentication and accounts
- Cloud database (Firebase, MongoDB)
- Canvas/Google Classroom integration
- Multi-device sync
- Mobile app version
- Real-time collaboration

---

## Project Architecture

```
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
Claude API
  ↓
Weekly Plan Display
  ↓
localStorage
```



