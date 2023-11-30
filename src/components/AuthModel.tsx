"use client";
import { Dialog, DialogContent } from "@radix-ui/react-dialog";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AuthModel = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog defaultOpen>
      <DialogContent>
        <Input />
      </DialogContent>
    </Dialog>
  );
};

export default AuthModel;
