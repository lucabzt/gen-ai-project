import { useState } from 'react'
import { sendText } from './api/api'

function App() {
  const [text, setText] = useState('')

  const handleSend = async () => {
    await sendText(text)
  }

  return (
    <div className="flex justify-center items-center h-screen flex-col gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2"
      />
      <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Send
      </button>
    </div>
  )
}

export default App
