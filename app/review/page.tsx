"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PolicyReviewForm from "@/components/PolicyReviewForm";

export default function ReviewPage() {
  const router = useRouter();
  const [isFormOpen, setIsFormOpen] = useState(true);

  const handleFormClose = (open: boolean) => {
    if (!open) {
      setIsFormOpen(false);
      // Navigate back to home when form is explicitly closed
      setTimeout(() => {
        router.push('/');
      }, 200);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <PolicyReviewForm 
        open={isFormOpen} 
        onOpenChange={handleFormClose}
      />
    </div>
  );
}

