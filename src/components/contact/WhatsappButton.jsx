"use client";

export default function WhatsAppButton() {
  const phoneNumber = "8281133639"; // 👉 replace with your number (with country code, no +)
  const message = "Hello, I would like to enquire about your services.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all animate-bounce"
    >
      {/* WhatsApp Icon (SVG) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-6 h-6"
        fill="currentColor"
      >
        <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.89.76 5.6 2.09 7.95L0 32l7.86-2.06a15.94 15.94 0 0 0 8.14 2.24c8.836 0 16-7.164 16-16S24.836.396 16 .396zm0 29.21a13.18 13.18 0 0 1-6.72-1.85l-.48-.29-4.66 1.22 1.24-4.54-.31-.47A13.13 13.13 0 0 1 2.82 16.4C2.82 9.21 8.82 3.2 16 3.2c7.18 0 13.18 6.01 13.18 13.2 0 7.19-6 13.21-13.18 13.21zm7.44-9.89c-.41-.2-2.43-1.2-2.81-1.34-.38-.14-.66-.2-.94.2-.27.41-1.07 1.34-1.31 1.62-.24.27-.48.31-.89.1-.41-.2-1.73-.64-3.29-2.05-1.22-1.09-2.04-2.44-2.28-2.85-.24-.41-.03-.63.18-.83.19-.19.41-.48.62-.72.21-.24.28-.41.41-.68.14-.27.07-.51-.03-.72-.1-.2-.94-2.27-1.29-3.11-.34-.82-.68-.71-.94-.72-.24-.01-.51-.01-.79-.01-.27 0-.72.1-1.1.51-.38.41-1.45 1.42-1.45 3.46s1.49 4.01 1.7 4.29c.2.27 2.94 4.49 7.12 6.29.99.43 1.76.69 2.36.88.99.31 1.89.27 2.6.16.79-.12 2.43-.99 2.78-1.95.34-.96.34-1.79.24-1.95-.1-.16-.38-.27-.79-.47z" />
      </svg>
    </button>
  );
}