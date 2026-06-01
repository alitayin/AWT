import Image from "next/image";
import { ArrowUpRightIcon, Clock3Icon, MessageCircleIcon } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  awtTokenUrl,
  contactUrl,
  estimateExamples,
  serviceAreas,
  tokenFacts,
} from "@/lib/awt";

export default function Home() {
  return (
    <main className="min-h-dvh bg-background text-foreground">
      <header className="border-b bg-background/90">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground">
              AWT
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">Alita Work Token</p>
              <p className="truncate text-xs text-muted-foreground">
                Time presale in XEC
              </p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-10 sm:px-6 lg:px-8">
        <section className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center">
          <div className="flex flex-col gap-7">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">1 AWT = 1 hour</Badge>
              <Badge variant="outline">2.5M XEC per hour</Badge>
              <Badge variant="outline">50% of my standard rate</Badge>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-normal text-balance sm:text-7xl">
                Alita Work Token
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                Alita Work Token is a project where Alita presells working time.
                Each token represents one hour of work, priced at a fixed XEC
                rate. The current price is 50% of my standard work rate, so with
                XEC undervalued, buying my time early can be a practical and
                high-leverage choice.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={awtTokenUrl} className={buttonVariants()}>
                <ArrowUpRightIcon data-icon="inline-start" />
                Open in Cashtab
              </a>
              <a
                href="#services"
                className={buttonVariants({ variant: "outline" })}
              >
                <Clock3Icon data-icon="inline-start" />
                View services
              </a>
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-xs flex-col gap-3 lg:mx-0">
            <Image
              src="/awt-token.svg"
              alt="Alita Work Token mark"
              width={640}
              height={640}
              priority
              className="aspect-square w-full rounded-xl border bg-card"
            />
            <Card>
              <CardContent className="flex items-center gap-3 pt-4">
                <Image
                  src="/profile.png"
                  alt="Alita profile"
                  width={64}
                  height={64}
                  className="size-16 shrink-0 rounded-lg object-cover"
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">Alita</p>
                  <a
                    href={contactUrl}
                    className="truncate text-sm text-muted-foreground hover:text-foreground"
                  >
                    t.me/alitayin
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section
          aria-label="Token facts"
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {tokenFacts.map((fact) => (
            <Card key={fact.label}>
              <CardHeader>
                <CardDescription>{fact.label}</CardDescription>
                <CardTitle>{fact.value}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </section>

        <Separator />

        <section id="services" className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold tracking-normal">
              What you can buy
            </h2>
            <p className="text-sm leading-6 text-muted-foreground">
              Buying my time can unlock design, product, engineering, market,
              media, and supply chain work.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {serviceAreas.map((service) => (
              <Card key={service}>
                <CardContent className="pt-4">
                  <p className="text-sm leading-6">{service}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        <section className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold tracking-normal">
              Redemption rules
            </h2>
            <p className="text-sm leading-6 text-muted-foreground">
              Please contact Alita before spending AWT so the request, plan, and
              expected time can be agreed in advance.
            </p>
          </div>
          <Card>
            <CardContent className="flex flex-col gap-4 pt-4 text-sm leading-7 text-muted-foreground">
              <p>
                The AWT cost for a project or service is explained, estimated,
                and decided by Alita. Very small service requests start at a
                minimum of four hours, meaning 4 Alita Work Tokens.
              </p>
              <p>
                AWT consumption is capped at 50 hours per week. At that rate,
                200 AWT equals one month of Alita work time.
              </p>
              <p>
                If a request grows in scope, the work should be re-estimated
                before additional tokens are consumed.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator />

        <section className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold tracking-normal">
              Simple estimates
            </h2>
            <p className="text-sm leading-6 text-muted-foreground">
              These examples are rough references. Final AWT usage depends on
              the actual scope and delivery requirements.
            </p>
          </div>
          <div className="grid gap-3">
            {estimateExamples.map((example) => (
              <Card key={example.title}>
                <CardHeader>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex flex-col gap-1">
                      <CardTitle>{example.title}</CardTitle>
                      <CardDescription>{example.detail}</CardDescription>
                    </div>
                    <Badge>{example.value}</Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="rounded-xl border bg-card p-5 text-card-foreground sm:p-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex max-w-2xl flex-col gap-2">
              <h2 className="text-2xl font-semibold tracking-normal">
                Buy or inspect Alita Work Token
              </h2>
              <p className="text-sm leading-6 text-muted-foreground">
                Open the token in Cashtab, then contact Alita before redeeming
                work time.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={awtTokenUrl} className={buttonVariants()}>
                <ArrowUpRightIcon data-icon="inline-start" />
                Cashtab token
              </a>
              <a
                href={contactUrl}
                className={buttonVariants({ variant: "outline" })}
              >
                <MessageCircleIcon data-icon="inline-start" />
                Telegram
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
