export const sendText = async (text) => {
  const response = await fetch('http://localhost:8080/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  })
  return response.json()
}