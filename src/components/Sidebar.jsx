'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PenLine, Menu } from 'lucide-react'

export default function Sidebar({
  fetchedChats,
  currentChatId,
  setCurrentChatId,
  initializeNewChat,
  open = true,
  setOpen = () => {},
}) {
  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 z-20 bg-black/30 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} md:hidden`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed md:static z-30 top-0 left-0 h-full w-80 max-w-full bg-white border-r border-[#E2E8F0] shadow-xl transition-transform duration-300 flex flex-col ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:w-80 md:min-w-[20rem]`}
        style={{ minHeight: '100vh' }}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E2E8F0] bg-white">
          <h2 className="text-xl font-bold text-[#2D3748] tracking-tight">Chats</h2>
          <button
            onClick={initializeNewChat}
            className="rounded-full bg-[#2D3748] text-white p-2 shadow hover:bg-[#4A5568] transition"
            aria-label="New chat"
          >
            <PenLine className="w-5 h-5" strokeWidth={2} />
          </button>

        </div>
        <div className="flex-1 overflow-y-auto px-4 py-4 bg-white">
          <div className="space-y-2">
            {fetchedChats?.map((chat) => (
              <Link
                key={chat.id}
                href={`/?chatId=${chat.id}`}
                onClick={() => {
                  setCurrentChatId(chat.id)
                  setOpen(false)
                }}
                className={`block rounded-lg px-4 py-3 font-medium transition border border-transparent shadow-sm hover:bg-[#F8FAFC] hover:border-[#D69E2E] ${
                  currentChatId === chat.id
                    ? 'bg-[#2D3748] border-[#2D3748] text-white' : 'text-[#1A202C]'
                }`}
              >
                {chat.title || 'Chat'}
              </Link>
            ))}
            {fetchedChats?.length === 0 && (
              <p className="text-[#4A5568] text-sm text-center mt-8">No chats yet</p>
            )}
          </div>
        </div>
        <div className="px-6 py-4 border-t border-[#E2E8F0] bg-white">
          <div className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-[#D69E2E] animate-pulse"></span>
            <span className="text-[#2D3748] font-semibold">Flow Assistant</span>
          </div>
          <div className="text-[#4A5568] text-xs mt-1">Here to help, 24/7</div>
        </div>
      </aside>
    </>
  )
}