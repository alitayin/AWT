"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

type TokenIdCopyProps = {
  tokenId: string;
};

export function TokenIdCopy({ tokenId }: TokenIdCopyProps) {
  const [copied, setCopied] = useState(false);

  async function copyTokenId() {
    await navigator.clipboard.writeText(tokenId);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <Button
      type="button"
      variant="outline"
      onClick={copyTokenId}
      aria-label="Copy token ID"
    >
      {copied ? (
        <CheckIcon data-icon="inline-start" />
      ) : (
        <CopyIcon data-icon="inline-start" />
      )}
      {copied ? "Copied" : "Copy"}
    </Button>
  );
}
