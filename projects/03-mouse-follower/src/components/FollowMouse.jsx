import { useEffect, useState } from 'react';
import { MousePointer } from './MousePointer';

export function FollowMouse() {
  const [enabled, setEnabled] = useState(false);
  const [{x, y}, setPosition] = useState({x: 0, y: 0});

  useEffect(() => {

    const handleMove = (event) =>
      setPosition({ x: event.clientX, y: event.clientY });
    

    if (enabled) addEventListener('pointermove', handleMove);

    return () => removeEventListener('pointermove', handleMove);

  }, [enabled]);

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled);

    return () => 
      document.body.classList.remove('no-cursor');
    
  }, [enabled]);

  return (
    <>
      {enabled && <MousePointer x={x} y={y} />}
      <button onClick={(event) => {
        setPosition({ x: event.clientX, y: event.clientY });
        setEnabled(prev => !prev);
      }}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
  );
}
