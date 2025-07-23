# Flow AI Career Guidance Chatbot

## 📋 Project Overview

**Flow** is a professional-grade AI-powered career guidance chatbot designed to help users discover fulfilling career paths based on their unique combination of interests, personality traits, strengths, and weaknesses. The application specializes in assisting "unicorn" professionals—individuals with broad, interdisciplinary skills who may not fit into traditional career boxes.

## 🎯 Core Features

### **Intelligent Career Guidance**
- **Personalized Recommendations**: AI-driven career path suggestions based on user profiles
- **Unicorn Specialist**: Optimized for users with diverse, interdisciplinary skill sets
- **Contextual Conversations**: Maintains conversation history for coherent guidance sessions
- **Actionable Advice**: Provides specific next steps and implementation strategies

### **Professional User Interface**
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional interface with smooth animations
- **Real-time Chat**: Instant messaging interface with typing indicators
- **Scrollable History**: Complete conversation thread with automatic scrolling

### **Technical Excellence**
- **High-Performance API**: Optimized token limits for comprehensive responses
- **Error Handling**: Robust error management and user feedback
- **Accessibility**: WCAG-compliant design with proper ARIA labels
- **Cross-Browser Compatibility**: Tested across major browsers

## 🏗️ Architecture

### **Frontend Stack**
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom animations
- **State Management**: React hooks (useState, useEffect)
- **Markdown Rendering**: ReactMarkdown for rich text display

### **Backend Stack**
- **API Routes**: Next.js API routes for server-side logic
- **AI Integration**: Anthropic Claude 3.5 Sonnet API
- **Environment Management**: Secure API key handling

### **Development Tools**
- **Linting**: ESLint with Next.js configuration
- **Package Management**: npm with lockfile
- **Build System**: Next.js built-in bundler

## 📁 Project Structure

```
ai-chatbot/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── test/
│   │   │       └── route.js          # AI API endpoint
│   │   ├── globals.css               # Global styles
│   │   ├── layout.js                 # Root layout
│   │   └── page.js                   # Main application page
│   ├── components/
│   │   ├── ChatThread.jsx            # Chat message rendering
│   │   └── Sidebar.jsx               # Navigation component
│   └── lib/
│       └── db.js                     # Database utilities
├── public/                           # Static assets
├── package.json                      # Dependencies and scripts
└── README.md                         # This file
```

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ 
- npm or yarn
- Anthropic API key

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/career-guidance-chatbot.git
   cd career-guidance-chatbot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env.local
   ```
   Add your Anthropic API key to `.env.local`:
   ```
   ANTHROPIC_API_KEY=your_api_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open application**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### **Environment Variables**
| Variable | Description | Required |
|----------|-------------|----------|
| `ANTHROPIC_API_KEY` | Anthropic Claude API key | Yes |

### **API Configuration**
- **Model**: Claude 3.5 Sonnet (2024-10-22)
- **Max Tokens**: 1500 (optimized for detailed responses)
- **System Prompt**: Customized for career guidance expertise

## 🎨 UI/UX Specifications

### **Design System**
- **Primary Colors**: Dark slate (#2D3748), Gold accent (#D69E2E)
- **Background**: Light gray (#F8FAFC)
- **Typography**: Geist font family
- **Border Radius**: 12px (rounded-xl) for cards, 16px (rounded-2xl) for containers

### **Responsive Breakpoints**
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### **Animation Specifications**
- **Fade In**: 0.7s cubic-bezier(0.23, 1, 0.32, 1)
- **Bounce**: 2.5s infinite alternate
- **Shimmer**: 2s infinite linear

## 🔒 Security Considerations

### **API Key Protection**
- Environment variables for sensitive data
- `.env.local` excluded from version control
- No client-side exposure of API keys

### **Input Validation**
- Server-side validation of user inputs
- Sanitized markdown rendering
- XSS protection through React's built-in escaping

## 📊 Performance Metrics

### **Optimization Features**
- **Code Splitting**: Automatic Next.js optimization
- **Image Optimization**: Built-in Next.js image handling
- **Font Optimization**: Geist font with automatic loading
- **Bundle Analysis**: Built-in webpack analysis tools

### **Target Performance**
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🧪 Testing Strategy

### **Manual Testing Checklist**
- [ ] Responsive design across devices
- [ ] Chat functionality and message history
- [ ] API error handling
- [ ] Accessibility compliance
- [ ] Cross-browser compatibility

### **Browser Support**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🚀 Deployment

### **Vercel (Recommended)**
1. Connect GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### **Other Platforms**
- **Netlify**: Compatible with Next.js static export
- **Railway**: Full-stack deployment support
- **AWS Amplify**: Enterprise-grade hosting

## 🤝 Contributing

### **Development Workflow**
1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### **Code Standards**
- ESLint configuration enforced
- Prettier formatting
- Conventional commit messages
- Comprehensive documentation

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Tammy Hartline** - Software Engineer
- GitHub: [@thartline35](https://github.com/thartline35)
- LinkedIn: [Tammy Hartline](https://www.linkedin.com/in/tammy-hartline-91981266/)
- Portfolio: [tammyhartline.tech](https://tammyhartline.tech)

## 🙏 Acknowledgments

- **Anthropic** for Claude AI API
- **Vercel** for Next.js framework
- **Tailwind CSS** for styling utilities
- **React Markdown** for content rendering

---

**Flow AI Career Guidance Chatbot** - Helping unicorn professionals find their perfect career path. 🦄✨
