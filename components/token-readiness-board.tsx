"use client";

import { useMemo, useState } from "react";
import { CheckCircle2Icon, GitCommitHorizontalIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  type ReadinessItem,
  type ReadinessLaneId,
  readinessLanes,
  verificationChecklist,
} from "@/lib/project-contract";

interface TokenReadinessBoardProps {
  items: ReadinessItem[];
}

export function TokenReadinessBoard({ items }: TokenReadinessBoardProps) {
  const [selectedLane, setSelectedLane] = useState<ReadinessLaneId>("harness");
  const [showChecklist, setShowChecklist] = useState(false);

  const lane = readinessLanes.find((entry) => entry.id === selectedLane);
  const visibleItems = useMemo(
    () => items.filter((item) => item.lane === selectedLane),
    [items, selectedLane],
  );

  return (
    <section aria-labelledby="readiness-board-title" className="grid gap-4">
      <Card>
        <CardHeader className="gap-3">
          <div>
            <CardTitle id="readiness-board-title">
              Initialization control board
            </CardTitle>
            <CardDescription>
              Switch lanes to inspect the architecture, harness, verification,
              and shipping contracts that are already wired into the repo.
            </CardDescription>
          </div>
          <CardAction>
            <Badge variant="secondary">{visibleItems.length} item(s)</Badge>
          </CardAction>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <ToggleGroup
            value={[selectedLane]}
            onValueChange={(value) => {
              const nextLane = value.at(-1);

              if (nextLane) {
                setSelectedLane(nextLane as ReadinessLaneId);
              }
            }}
            variant="outline"
            className="w-full flex-wrap justify-start"
            aria-label="Readiness lanes"
          >
            {readinessLanes.map((entry) => (
              <ToggleGroupItem key={entry.id} value={entry.id}>
                {entry.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>

          <div className="rounded-lg border bg-muted/35 p-4">
            <h2 className="text-base font-medium">{lane?.label}</h2>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              {lane?.description}
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {visibleItems.map((item) => (
              <Card key={item.id} size="sm">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.detail}</CardDescription>
                  <CardAction>
                    <Badge
                      variant={
                        item.status === "planned" ? "outline" : "secondary"
                      }
                    >
                      {item.status}
                    </Badge>
                  </CardAction>
                </CardHeader>
              </Card>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3 text-sm text-muted-foreground">
            <CheckCircle2Icon data-icon="inline-start" />
            <span>
              Minimum local proof is <code>pnpm verify</code>; UI flow changes
              should also run <code>pnpm verify:full</code>.
            </span>
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={() => setShowChecklist((current) => !current)}
            aria-expanded={showChecklist}
          >
            <GitCommitHorizontalIcon data-icon="inline-start" />
            {showChecklist ? "Hide checklist" : "Show checklist"}
          </Button>
        </CardFooter>
      </Card>

      {showChecklist ? (
        <Card data-testid="verification-checklist">
          <CardHeader>
            <CardTitle>Verification checklist</CardTitle>
            <CardDescription>
              These commands are the shared contract for local work and CI.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="grid gap-3">
              {verificationChecklist.map((command, index) => (
                <li key={command} className="flex items-center gap-3">
                  <Badge variant="outline">{index + 1}</Badge>
                  <code>{command}</code>
                </li>
              ))}
            </ol>
          </CardContent>
          <Separator />
          <CardFooter>
            <p className="text-sm text-muted-foreground">
              Commit after each meaningful update so the repo always has a
              usable rollback point.
            </p>
          </CardFooter>
        </Card>
      ) : null}
    </section>
  );
}
