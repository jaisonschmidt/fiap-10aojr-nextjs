"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 print:hidden"
    >
      <Printer className="h-4 w-4" aria-hidden="true" />
      Imprimir / Salvar PDF
    </button>
  );
}
