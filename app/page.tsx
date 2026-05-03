export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Creators Making $10k+/yr
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Auto-track income from{' '}
          <span className="text-[#58a6ff]">YouTube, Twitch &amp; Patreon</span>{' '}
          for taxes
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your creator accounts once. We pull your earnings automatically, categorize income, track deductible expenses, and generate 1099 summaries with quarterly tax estimates — so you never get surprised at tax time.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-xl transition-colors"
        >
          Start Tracking for $12/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No credit card surprises.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '📺', title: 'Multi-Platform Sync', desc: 'OAuth connections to YouTube, Twitch, and Patreon pull income data automatically.' },
            { icon: '🗂️', title: 'Expense Categorization', desc: 'Tag gear, software, and home-office costs. We map them to IRS Schedule C categories.' },
            { icon: '📄', title: '1099 & Tax Reports', desc: 'One-click quarterly estimates and year-end 1099 summaries ready for your accountant.' },
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$12</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'YouTube, Twitch & Patreon sync',
              'Unlimited expense tracking',
              'Quarterly tax estimates',
              '1099 summary export (PDF/CSV)',
              'Secure encrypted data storage',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-xl transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: 'Which platforms are supported?',
              a: 'We currently support YouTube (AdSense & memberships), Twitch (subscriptions, bits, ads), and Patreon. More platforms are on the roadmap.',
            },
            {
              q: 'Is my financial data secure?',
              a: 'Yes. All data is encrypted at rest and in transit. We use read-only OAuth scopes — we can never move money or change your account settings.',
            },
            {
              q: 'Do I still need an accountant?',
              a: 'Creator 1099 Tracker organizes your data and generates reports, but it is not a substitute for professional tax advice. Think of it as the organized shoebox your accountant will love.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-10">
        &copy; {new Date().getFullYear()} Creator 1099 Tracker. Not financial or tax advice.
      </footer>
    </main>
  )
}
