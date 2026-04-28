"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

function CallbackContent() {
  const params = useSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const type = params.get("type");
    const error = params.get("error");
    const errorDescription = params.get("error_description");

    if (error) {
      setStatus("error");
      setMessage(errorDescription || error || "Something went wrong");
      return;
    }

    switch (type) {
      case "recovery":
        setStatus("success");
        setMessage("Your password has been reset. You can now sign in with your new password.");
        break;
      case "email_change":
      case "email":
        setStatus("success");
        setMessage("Your email has been updated. Please sign in with your new email address.");
        break;
      case "signup":
      case "signup_confirmation":
        setStatus("success");
        setMessage("Your email has been confirmed. Welcome to Bouul!");
        break;
      default:
        setStatus("success");
        setMessage("Action completed. You can return to the app.");
    }

    // Attempt deep link into the Flutter app via custom scheme
    const deepLink = `appp://auth/callback?${params.toString()}`;
    window.location.href = deepLink;

    // If deep link doesn't fire within 2s, stay on this page
    const timer = setTimeout(() => {
      // Deep link likely failed, user stays on web page
    }, 2000);

    return () => clearTimeout(timer);
  }, [params]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full text-center">
        {status === "loading" && (
          <>
            <div className="mx-auto w-10 h-10 border-4 border-zinc-200 border-t-emerald-500 rounded-full animate-spin" />
            <h1 className="mt-6 text-xl font-semibold text-zinc-900">Hang tight…</h1>
            <p className="mt-2 text-zinc-500 text-sm">Completing your request.</p>
          </>
        )}

        {status === "success" && (
          <>
            <div className="mx-auto w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center">
              <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="mt-6 text-xl font-semibold text-zinc-900">Done!</h1>
            <p className="mt-2 text-zinc-500 text-sm">{message}</p>
            <p className="mt-4 text-zinc-400 text-xs">
              Opening the Bouul app… If nothing happens,{" "}
              <a href="https://bouul.com/download" className="text-emerald-600 underline">
                download the app
              </a>
              .
            </p>
          </>
        )}

        {status === "error" && (
          <>
            <div className="mx-auto w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h1 className="mt-6 text-xl font-semibold text-zinc-900">Something went wrong</h1>
            <p className="mt-2 text-zinc-500 text-sm">{message}</p>
            <a
              href="https://bouul.com/support"
              className="mt-4 inline-block text-emerald-600 underline text-sm"
            >
              Contact support
            </a>
          </>
        )}
      </div>
    </main>
  );
}

export default function AuthCallbackPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen flex items-center justify-center bg-white">
          <div className="text-center">
            <div className="mx-auto w-10 h-10 border-4 border-zinc-200 border-t-emerald-500 rounded-full animate-spin" />
            <p className="mt-4 text-zinc-500 text-sm">Loading…</p>
          </div>
        </main>
      }
    >
      <CallbackContent />
    </Suspense>
  );
}
