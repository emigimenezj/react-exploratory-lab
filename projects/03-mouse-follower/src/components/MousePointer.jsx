export function MousePointer({x, y}) {
  return (
    <div style={{
      position: 'absolute',
      backgroundColor: '#f36b02',
      border: '1px solid #000',
      borderRadius: '50%',
      opacity: 0.8,
      pointerEvents: 'none',
      left: -15,
      top: -15,
      width: 30,
      height: 30,
      transform: `translate(${x}px, ${y}px)`
    }}
    >
    </div>
  );
}