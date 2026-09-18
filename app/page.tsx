"use client";

import { useState } from "react";

const plans = [
  { name: "Starter", min: 10, max: 499 },
  { name: "Growth", min: 500, max: 4999 },
  { name: "Premium", min: 5000, max: 50000 },
];

export default function Home() {
  const [balance, setBalance] = useState(0);

  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl justify-between px-5 py-5">
          <div>
            <h1 className="text-xl font-bold">
              CRYPTEUR <span className="text-cyan-400">INVESTOR</span>
            </h1>
            <p className="text-xs text-gray-500">
              Smart investment dashboard
            </p>
          </div>
          <button className="rounded-full border border-white/10 px-4 py-2 text-sm">
            Sign In
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-8">
        <section className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-8">
          <p className="mb-3 text-sm text-cyan-400">WELCOME TO CRYPTEUR</p>
          <h2 className="text-4xl font-bold">
            Grow your investment.
          </h2>
          <p className="mt-4 max-w-xl text-gray-400">
            Manage your investments, track earnings and monitor your portfolio
            from one simple dashboard.
          </p>
          <button
            onClick={() => setBalance(balance + 100)}
            className="mt-6 rounded-xl bg-cyan-400 px-6 py-3 font-bold text-black"
          >
            Add Demo Funds
          </button>
        </section>

        <section className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-[#0d1117] p-6">
            <p className="text-sm text-gray-500">Available Balance</p>
            <p className="mt-2 text-3xl font-bold">
              ${balance.toFixed(2)}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0d1117] p-6">
            <p className="text-sm text-gray-500">Total Invested</p>
            <p className="mt-2 text-3xl font-bold">$0.00</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0d1117] p-6">
            <p className="text-sm text-gray-500">Projected Earnings</p>
            <p className="mt-2 text-3xl font-bold text-cyan-400">$0.00</p>
          </div>
        </section>

        <section className="mt-10">
          <h3 className="text-2xl font-bold">Investment Plans</h3>
          <p className="mt-1 text-sm text-gray-500">
            Prototype plans — returns are illustrative and not guaranteed.
          </p>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="rounded-2xl border border-white/10 bg-[#0d1117] p-6"
              >
                <h4 className="text-lg font-bold">{plan.name}</h4>

                <p className="mt-4 text-4xl font-bold text-cyan-400">
                  15%
                </p>

                <p className="text-sm text-gray-500">
                  illustrative weekly target
                </p>

                <div className="mt-5 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Minimum</span>
                    <span>${plan.min}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">Maximum</span>
                    <span>${plan.max}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">Duration</span>
                    <span>7 days</span>
                  </div>
                </div>

                <button className="mt-6 w-full rounded-xl border border-cyan-400/30 bg-cyan-400/10 py-3 font-semibold text-cyan-300">
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-white/10 bg-[#0d1117] p-6">
          <h3 className="text-xl font-bold">Recent Activity</h3>
          <div className="mt-5 rounded-xl border border-dashed border-white/10 p-8 text-center">
            <p className="text-gray-500">
              No investment activity yet.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-5">
          <p className="font-semibold text-yellow-300">
            Prototype Notice
          </p>
          <p className="mt-2 text-xs leading-6 text-gray-400">
            This is a prototype. The 15% weekly figure is illustrative and
            does not represent a guaranteed return. Real-money investment
            functionality requires appropriate legal, financial and regulatory
            review before launch.
          </p>
        </section>

        <footer className="py-10 text-center text-xs text-gray-600">
          © 2026 CRYPTEUR INVESTOR
        </footer>
      </div>
    </main>
  );
}
