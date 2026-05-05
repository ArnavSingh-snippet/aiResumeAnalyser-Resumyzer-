# AI Resume Analyzer - Resumyzer

An intelligent resume analysis tool that uses AI to evaluate and score resumes against job descriptions, providing detailed feedback and ATS compatibility checks.

## Features

- 📄 **PDF Resume Upload** - Upload resumes in PDF format
- 🤖 **AI-Powered Analysis** - Analyze resumes using advanced AI models
- 📊 **Score & Feedback** - Get detailed scoring and improvement suggestions
- ✅ **ATS Compatibility** - Check if your resume passes ATS (Applicant Tracking System) filters
- 📈 **Visual Analytics** - Beautiful score gauges and progress indicators
- 🔐 **Secure** - User authentication with Puter.io integration
- 🎨 **Responsive Design** - Works seamlessly on desktop and mobile
- ⚡️ Hot Module Replacement (HMR)
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling

## Tech Stack

- **Frontend**: React Router, TypeScript, TailwindCSS, Vite
- **Backend**: Puter.js (Cloud OS platform for backend services)
- **Containerization**: Docker
- **PDF Processing**: PDF.js for resume parsing

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- Puter.js account (for backend services)

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t ai-resume-analyzer .
docker run -p 5173:5173 ai-resume-analyzer
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

## Project Structure

```
app/
  ├── components/        # Reusable UI components
  ├── routes/           # Page routes (home, auth, upload, resume, wipe)
  └── lib/              # Utility functions, PDF processing, Puter.js integration
constants/             # App constants
types/                 # TypeScript type definitions
public/                # Static assets
```

## Key Components

- **FileUploader** - Handle resume PDF uploads
- **ScoreGauge/ScoreCircle** - Visualize resume scores
- **ATS** - ATS compatibility analyzer
- **ResumeCard** - Display resume analysis results
- **Summary** - Show analysis summary and recommendations
- **Accordion** - Expandable sections for detailed feedback

## Features in Detail

### Resume Analysis
Upload your resume to get:
- Overall compatibility score
- Section-wise analysis
- Keyword matching
- Content suggestions

### ATS Checker
Verify your resume will:
- Parse correctly in ATS systems
- Include proper formatting
- Contain relevant keywords
- Meet tracking system requirements

### Puter.js Integration
The app uses Puter.js for:
- User authentication
- Cloud storage for resumes
- Secure file handling

## Environment Variables

Create a `.env` file in the root directory:

```
VITE_PUTER_API_KEY=your_puter_api_key_here
```

## Contributing

Contributions are welcome! Feel free to submit issues and enhancement requests.

## License

[Add your license here]

## Support

For issues and questions, please open an issue on GitHub.

---

Built with ❤️ using React Router and Puter.js.
