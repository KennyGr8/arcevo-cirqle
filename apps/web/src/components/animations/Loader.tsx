"use client";

export default function Loader({ onComplete }: { onComplete?: () => void }) {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="animate-spin h-12 w-12 rounded-full border-4 border-t-primary border-gray-300"></div>
    </div>
  );
}
