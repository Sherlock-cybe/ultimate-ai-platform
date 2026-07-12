import { useState } from 'react';
import { MessageSquare, Cpu, Terminal, Layers, Send, Play, FolderOpen } from 'lucide-react';

export default function App() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Welcome to UltimateAI Dashboard. Subsystems initialized. How can I help you compile today?' }
  ]);
  const [input, setInput] = useState('');
  const [vscodiumStatus] = useState('Connected');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', content: input }]);
    setInput('');
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between p-4">
        <div>
          <div className="flex items-center gap-3 mb-8 px-2">
            <Cpu className="w-8 h-8 text-cyan-400 animate-pulse" />
            <span className="text-xl font-bold tracking-wider text-cyan-400">ULTIMATE AI</span>
          </div>
          <nav className="space-y-2">
            <button className="flex items-center gap-3 w-full bg-slate-800 text-white px-3 py-2 rounded-lg text-sm font-medium">
              <MessageSquare className="w-4 h-4 text-cyan-400" /> AI Agent Chat
            </button>
            <button className="flex items-center gap-3 w-full text-slate-400 hover:bg-slate-800 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-all">
              <Layers className="w-4 h-4" /> Long-term Memory
            </button>
            <button className="flex items-center gap-3 w-full text-slate-400 hover:bg-slate-800 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-all">
              <FolderOpen className="w-4 h-4" /> RAG Knowledge Base
            </button>
          </nav>
        </div>
        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
          <div className="text-xs text-slate-500 mb-1">System Owner:</div>
          <div className="text-sm font-semibold text-emerald-400">@iyeanur6-cyber</div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-slate-950">
        {/* Top Header */}
        <div className="h-16 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-900/50">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
            <span className="text-sm font-medium">Reactive Core Live</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-xs bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700 flex items-center gap-2">
              <span className="text-slate-400">VSCodium Link:</span>
              <span className="text-emerald-400 font-mono font-bold">{vscodiumStatus}</span>
            </div>
          </div>
        </div>

        {/* Messages Space */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-2xl px-4 py-3 rounded-xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-cyan-600 text-white rounded-br-none' : 'bg-slate-900 border border-slate-800 rounded-bl-none'}`}>
                {msg.content}
                {msg.content.includes('compile') && (
                  <div className="mt-3 pt-3 border-t border-slate-800 flex gap-2">
                    <button className="flex items-center gap-1.5 text-xs bg-emerald-600 hover:bg-emerald-500 text-white px-2.5 py-1 rounded font-medium transition-all">
                      <Play className="w-3 h-3" /> Run Code in VSCodium
                    </button>
                    <button className="flex items-center gap-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-2.5 py-1 rounded font-medium border border-slate-700 transition-all">
                      <Terminal className="w-3 h-3" /> Copy Clean Log
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/30">
          <div className="max-w-4xl mx-auto flex gap-2">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask UltimateAI..." className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100" />
            <button onClick={handleSend} className="bg-cyan-600 text-white p-3 rounded-xl"><Send className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
