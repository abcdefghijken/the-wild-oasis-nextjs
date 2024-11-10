"use client";
import { useFormStatus } from "react-dom";

export default function SubmitButton({ children, pendingLabel }) {
  // need to be in client component or is a CC (if inside server component, make a new component and use client)
  const { pending } = useFormStatus(); // need to be in a component inside a form so take out button and make own component

  return (
    <button
      className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending}
    >
      {pending ? pendingLabel : children}
    </button>
  );
}
