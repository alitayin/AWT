import { TokenReadinessBoard } from "@/components/token-readiness-board";
import {
  defaultReadinessItems,
  readinessMetrics,
} from "@/lib/project-contract";

export default function Home() {
  const metrics = readinessMetrics(defaultReadinessItems);

  return (
    <main className="min-h-dvh bg-background text-foreground">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.55fr)] lg:items-end">
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md border bg-card px-2.5 py-1 text-xs font-medium text-muted-foreground">
                Next.js + shadcn + Tailwind CSS + pnpm
              </span>
              <span className="rounded-md border bg-card px-2.5 py-1 text-xs font-medium text-muted-foreground">
                TypeScript strict
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-normal text-balance sm:text-5xl">
                AlitaToken starts with a strict delivery harness.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                The repository is initialized around architecture docs, local
                agent rules, unit tests, browser tests, and git checkpoints so
                future updates have a clear contract.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 lg:grid-cols-1">
            <Metric label="Tracked areas" value={metrics.total} />
            <Metric label="Ready" value={metrics.ready} />
            <Metric label="Guarded" value={metrics.guarded} />
          </div>
        </div>

        <TokenReadinessBoard items={defaultReadinessItems} />
      </section>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg border bg-card p-3 text-card-foreground">
      <p className="text-xs font-medium text-muted-foreground">{label}</p>
      <p className="mt-1 text-2xl font-semibold">{value}</p>
    </div>
  );
}
