import { useEffect, useState } from 'react'


const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({x: 0, y: 0});

  useEffect(() => {

    const handleMove = (event) => {
      const { clientX, clientY } = event;
      console.log('handleMove', {clientX, clientY});
      setPosition({ x: clientX, y: clientY });
    }

    if (enabled) addEventListener('pointermove', handleMove);

    return () => removeEventListener('pointermove', handleMove);

  }, [enabled]);

  return (
    <>
      {enabled && <div style={{
        position: 'absolute',
        backgroundColor: '#09F',
        border: '1px solid #000',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      ></div>}
      <button onClick={({clientX, clientY}) => {
        setPosition({x: clientX, y: clientY});
        setEnabled(prev => !prev);
      }}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
  )
}


function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
