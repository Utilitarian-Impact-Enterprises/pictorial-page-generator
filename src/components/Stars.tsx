
const Stars = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            width: Math.random() * 2 + 1 + "px",
            height: Math.random() * 2 + 1 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            animationDelay: Math.random() * 3 + "s",
          }}
        />
      ))}
    </div>
  );
};

export default Stars;
