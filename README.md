# Candidate Search Application

## Overview

Candidate Search is a React + TypeScript application that allows users to browse GitHub users as potential candidates, accept or reject them, and save accepted candidates for later review. The app uses the GitHub API and persists saved candidates using localStorage.

---

## Features

- **Candidate Browsing:** View one GitHub user at a time with details including name, username, location, avatar, email, profile URL, and company.
- **Accept/Reject:** Use "+" to save a candidate or "-" to skip.
- **Saved Candidates:** View a list of all accepted candidates.
- **Persistence:** Saved candidates are stored in localStorage and persist across reloads.
- **User Feedback:** Displays messages when no more candidates are available or no candidates have been saved.

---

## Getting Started

### Prerequisites

- Node.js and npm installed
- A GitHub Personal Access Token (fine-grained, default permissions)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name/Develop
