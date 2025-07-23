
import ReactMarkdown from 'react-markdown'

const FlowAvatar = () => (
  <div className="flow-avatar">
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#2D3748" />
      <ellipse cx="24" cy="28" rx="10" ry="6" fill="#F8FAFC" />
      <circle cx="24" cy="20" r="8" fill="#F8FAFC" />
      <circle cx="21" cy="19" r="1.5" fill="#2D3748" />
      <circle cx="27" cy="19" r="1.5" fill="#2D3748" />
      <path d="M21 23c1.5 1 4.5 1 6 0" stroke="#2D3748" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
);

const Message = ({ role, content }) => (
  <div className={`message-wrapper flex gap-4 items-start mb-6 ${role === 'assistant' ? 'justify-start' : 'justify-end'}`}>
    {role === 'assistant' && <FlowAvatar />}
    <div className={`message-content-wrapper ${role === 'user' ? 'max-w-[70%] lg:max-w-[60%]' : 'max-w-[80%] lg:max-w-[70%]'}`}>
      <span className={`message-sender block mb-2 text-sm font-semibold ${role === 'user' ? 'text-[#2D3748] text-right' : 'text-[#2D3748]'}`}>{role === 'user' ? 'You' : 'Flow'}</span>
      <div
        className={`message-content px-6 py-4 rounded-2xl shadow-md border transition-all
          ${role === 'user'
            ? 'bg-[#2D3748] border-[#2D3748] text-white'
            : 'bg-white border-[#E2E8F0] text-[#1A202C]'}
        `}
      >
        <div className="markdown-content prose prose-lg prose-slate max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  </div>
)

const ChatThread = ({ messages, status }) => {
  const welcomeMessage = {
    role: 'assistant',
    content: "👋 Hello! I'm Flow, your AI career guidance assistant. I'm here to help you discover your unique career path based on your interests, strengths, and personality. What would you like to explore today?",
  }

  return (
    <div className="message-container">
      {messages.length === 0 ? (
        <Message {...welcomeMessage} />
      ) : (
        messages.map((message, index) => <Message key={index} {...message} />)
      )}

      {status === 'submitted' && (
        <div className="thinking-row flex gap-4 items-center mt-6">
          <FlowAvatar />
          <div className="typing-indicator flex gap-2">
            <span className="w-3 h-3 bg-[#2D3748] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
            <span className="w-3 h-3 bg-[#D69E2E] rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></span>
            <span className="w-3 h-3 bg-[#4A5568] rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChatThread