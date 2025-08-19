type MessageDisplayProps = {
  type: string,
  message: string
}

export default function MessageDisplay({ type, message }: MessageDisplayProps) {
  const baseClasses = "p-4 rounded-lg text-center shadow-lg";
  const typeClasses = type === "error"
      ? "bg-red-100 text-red-700 border border-red-200"
      : "bg-gray-100 text-gray-600 border border-gray-200";

  return (
    <div className={`mt-8 mx-auto max-w-lg ${baseClasses} ${typeClasses}`}>
      <p className="font-medium">{message}</p>
    </div>
  );
}
