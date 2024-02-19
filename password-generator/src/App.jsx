import { useCallback, useEffect, useState, useRef } from 'react'


function App() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

  const ref = useRef(null)

  const copyPassword = useCallback(() => {
    window.navigator.clipboard.writeText(password)
    ref.current.select()

  }, [password])




  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefchklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "#@$%^&*()"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      setPassword(pass)
    }
  }, [length, numberAllowed, charAllowed])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed])


  return (
    <>
      <div className='py-3 w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex overflow-hidden rounded-lg mb-4 shadow'>
          <input
            type="text"
            readOnly
            value={password}
            ref={ref}
            className='w-full py-1 px-3 outline-none'
            placeholder='password'
          />
          <button onClick={copyPassword} className='outline-none bg-blue-500 text-white py-0.5 px-3 shrink-0'>copy</button>
        </div>
        <div className='text-sm flex gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input type="range"
              min="8"
              max='50'
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className='cursor-pointer'

            />
            <label>Length : {length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox"
              className='cursor-pointer'
              onClick={() => setNumberAllowed(prev => !prev)}
            />
            <label>Number</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox"
              className='cursor-pointer'
              onClick={() => setCharAllowed(prev => !prev)}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
