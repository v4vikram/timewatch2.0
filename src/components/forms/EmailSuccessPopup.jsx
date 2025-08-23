"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function EmailSuccessPopup() {
  const [open, setOpen] = useState(true);

  // useEffect(() => {
  //   setOpen(true);
  // }, []);

  return (
    <>
      {/* Trigger button for demo (you can call setOpen(true) after email success) */}
      {/* <Button onClick={() => setOpen(true)}>Show Success Popup</Button> */}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md rounded-2xl shadow-lg p-6 text-center">
          <div className="flex flex-col items-center space-y-4">
            <CheckCircle2 className="w-16 h-16 text-green-500" />
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold text-gray-900">
                Email Sent Successfully!
              </DialogTitle>
            </DialogHeader>
            <p className="text-gray-600">
              Your message has been delivered. We’ll get back to you shortly.
            </p>
            <Button className="mt-4" onClick={() => setOpen(false)}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
