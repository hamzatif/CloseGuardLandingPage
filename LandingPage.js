import React from "react";

// Extract static data so it isn't recreated on each render
const STEPS = [
  { step: "1", text: "Upload your home closing documents" },
  { step: "2", text: "Get your forensic score and red flags" },
  { step: "3", text: "Receive tailored homebuyer guidance" },
];

// Compute once at module scope to avoid doing it in render (helps SSR hydration stability)
const YEAR = new Date().getFullYear();

function StepCard({ step, text }) {
  return (
    <div className="bg-white shadow-md p-6 rounded-xl border border-[#E5E7EB]">
      <div className="text-[#0B74B5] text-2xl font-bold mb-4">{step}</div>
      <p className="text-lg text-[#4B5563]">{text}</p>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="bg-[#F8FAFC] text-[#111827] font-sans">
      {/* Hero Section */}
      <section className="bg-[#153E75] text-white py-20 px-6 text-center" id="start">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Protect Your Texas Home Closing from Hidden Fees and Mortgage Traps
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          CloseGuard analyzes your closing disclosure and mortgage documents to detect fraud, predatory lending, and hidden real estate fees — and, most importantly, it saves you money.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap mb-6">
          <a
            href="#how-it-works"
            className="bg-[#0B74B5] hover:bg-[#1E4E8C] text-white font-semibold px-6 py-3 rounded-lg inline-block"
            aria-label="Start by learning how CloseGuard works"
          >
            Scan Your Closing Docs
          </a>
        <a
            href="#how-it-works"
            className="bg-white text-[#153E75] hover:bg-[#E5E7EB] font-semibold px-6 py-3 rounded-lg inline-block"
            aria-label="Learn how CloseGuard works"
          >
            Learn How It Works
          </a>
        </div>
        {/* Price Anchor */}
        <p className="text-xl font-semibold text-[#9AD1FF]">
          Invest $100 today and save up to $1,500–$3,000+ at closing!
        </p>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Why CloseGuard for Homebuyers?</h2>
        <p className="text-lg text-[#4B5563] max-w-3xl mx-auto">
          Buying your first home is stressful. Hidden mortgage costs, confusing real estate terms, and predatory lending practices can leave you vulnerable. CloseGuard protects Texas homebuyers with AI-powered forensic document analysis and simple, plain-English guidance.
        </p>
      </section>

      {/* How It Works */}
      <section className="bg-[#F8FAFC] py-16 px-6" id="how-it-works" aria-labelledby="how-it-works-title">
        <h2 id="how-it-works-title" className="text-3xl font-bold text-center mb-12">How CloseGuard Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {STEPS.map(({ step, text }) => (
            <StepCard key={step} step={step} text={text} />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 bg-white" aria-labelledby="features-title">
        <h2 id="features-title" className="text-3xl font-bold text-center mb-12">Key Mortgage Protection Features</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-[#F8FAFC] p-6 rounded-xl border border-[#E5E7EB] shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Forensic Score Dashboard</h3>
            <p className="text-[#4B5563]">A 0-100 mortgage risk score with clear HIGH / MODERATE / LOW badges, total red flags, critical issues, and your protection level at a glance.</p>
          </div>
          <div className="bg-[#F8FAFC] p-6 rounded-xl border border-[#E5E7EB] shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Context-Aware Analysis</h3>
            <p className="text-[#4B5563]">Compares promises from your lender or realtor to what is written in your closing documents to catch broken promises, cost shifting, and deceptive mortgage terms specific to Texas closings.</p>
          </div>
          <div className="bg-[#F8FAFC] p-6 rounded-xl border border-[#E5E7EB] shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Interactive Verification</h3>
            <p className="text-[#4B5563]">Quick Yes / No / Unsure checks validate each mortgage flag. A "No" confirms an issue and unlocks plain-English guidance on next steps.</p>
          </div>
          <div className="bg-[#F8FAFC] p-6 rounded-xl border border-[#E5E7EB] shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Texas Closing Cost Breakdown</h3>
            <p className="text-[#4B5563]">Line by line review of who should pay what closing costs, with alerts for unexpected buyer-paid items and comparisons to typical Texas real estate ranges.</p>
          </div>
          <div className="bg-[#F8FAFC] p-6 rounded-xl border border-[#E5E7EB] shadow-sm md:col-span-2">
            <h3 className="text-xl font-semibold mb-2">Simple Homebuyer Explanations</h3>
            <p className="text-[#4B5563]">Every mortgage red flag comes with: <strong>What it means</strong>, <strong>Why it matters</strong>, and <strong>What to do</strong> so you can act with confidence.</p>
          </div>
        </div>
      </section>

      {/* Consolidated Savings / Violations */}
      <section className="py-16 px-6 bg-white" aria-labelledby="savings-title">
        <h2 id="savings-title" className="text-3xl font-bold text-center mb-3">Most Common Rules Violated in Texas</h2>
        <p className="text-center text-[#4B5563] max-w-3xl mx-auto mb-10">
          First-time Texas homebuyers often overpay <strong>$1,500–$3,000</strong> in closing costs due to errors and cost shifting. CloseGuard finds these mortgage issues fast so you can keep that money in your pocket.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-[#F8FAFC] p-6 rounded-xl border border-[#E5E7EB] shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Texas Simultaneous Title Insurance</h3>
            <p className="text-[#4B5563] mb-3">When owner's and lender's title policies are issued together, the lender's policy should cost <strong>$100</strong>, not the full premium.</p>
            <div className="mt-3 rounded-lg border-l-4 border-[#0B74B5] bg-white p-4">
              <div className="text-xs uppercase tracking-wide font-semibold text-[#0B74B5] mb-2">Example</div>
              <ul className="text-[#4B5563] text-sm space-y-1">
                <li>Owner's Title Insurance: $2,432</li>
                <li>Lender's Title Insurance charged: $2,178</li>
                <li>Should be: $100</li>
              </ul>
            </div>
            <div className="mt-3 font-semibold text-[#0B74B5]">Estimated Savings: $2,078</div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F8FAFC] p-6 rounded-xl border border-[#E5E7EB] shadow-sm">
            <h3 className="text-xl font-semibold mb-2">POC (Paid Outside Closing) Double-Charging</h3>
            <p className="text-[#4B5563] mb-3">Fees you already paid (like appraisal or credit report) sometimes appear again on the final closing disclosure.</p>
            <div className="mt-3 rounded-lg border-l-4 border-[#0B74B5] bg-white p-4">
              <div className="text-xs uppercase tracking-wide font-semibold text-[#0B74B5] mb-2">Example</div>
              <ul className="text-[#4B5563] text-sm space-y-1">
                <li>Appraisal Fee (POC): $550 — already paid</li>
                <li>Credit Report (POC): $45 — already paid</li>
                <li>Both appear again in closing costs</li>
              </ul>
            </div>
            <div className="mt-3 font-semibold text-[#0B74B5]">Estimated Savings: $595</div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F8FAFC] p-6 rounded-xl border border-[#E5E7EB] shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Owner's Title Policy Charged to Buyer</h3>
            <p className="text-[#4B5563] mb-3">In Texas, sellers typically pay for the owner's title policy under standard TREC contracts. This often gets flipped in error.</p>
            <div className="mt-3 rounded-lg border-l-4 border-[#0B74B5] bg-white p-4">
              <div className="text-xs uppercase tracking-wide font-semibold text-[#0B74B5] mb-2">Example</div>
              <ul className="text-[#4B5563] text-sm space-y-1">
                <li>Owner's Title Policy charged to buyer: $2,174</li>
                <li>TREC Contract says seller pays (Paragraph 6(A)(1))</li>
              </ul>
            </div>
            <div className="mt-3 font-semibold text-[#0B74B5]">Estimated Savings: $2,174</div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#F8FAFC] p-6 rounded-xl border border-[#E5E7EB] shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Title Company Double-Dipping</h3>
            <p className="text-[#4B5563] mb-3">Texas title insurance premiums already include closing/settlement services, yet extra fees sometimes get added to your mortgage closing statement.</p>
            <div className="mt-3 rounded-lg border-l-4 border-[#0B74B5] bg-white p-4">
              <div className="text-xs uppercase tracking-wide font-semibold text-[#0B74B5] mb-2">Example</div>
              <ul className="text-[#4B5563] text-sm space-y-1">
                <li>Title Insurance Premium: $2,432 (includes services)</li>
                <li>Extra "Settlement Fee": $395</li>
                <li>Extra "Title Doc Prep": $150</li>
              </ul>
            </div>
            <div className="mt-3 font-semibold text-[#0B74B5]">Estimated Savings: $545</div>
          </div>
        </div>
        <p className="text-center text-xs text-[#4B5563] mt-8">Savings are examples and may vary by transaction. CloseGuard highlights closing cost issues so you can request corrections before signing.</p>
      </section>

      {/* Bottom Line Section */}
      <section className="py-16 px-6 bg-[#F8FAFC] text-center">
        <h2 className="text-3xl font-bold mb-6">The Bottom Line for Texas Homebuyers</h2>
        <p className="text-lg max-w-3xl mx-auto text-[#4B5563]">
          The average Texas homebuyer overpays <strong>$1,500–$3,000</strong> at closing due to errors and hidden mortgage fees. Our AI closing disclosure auditor has found violations in <strong>73%</strong> of closing documents reviewed, with the largest single error saving a buyer <strong>$4,232</strong>.
        </p>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-white text-center" aria-labelledby="testimonials-title">
        <h2 id="testimonials-title" className="text-3xl font-bold mb-12">What Texas Homebuyers Say</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <blockquote className="bg-white p-6 rounded-xl shadow-md border border-[#E5E7EB]">
            "CloseGuard gave me peace of mind during closing — it caught mortgage fees I did not even know existed!" — Sarah M.
          </blockquote>
          <blockquote className="bg-white p-6 rounded-xl shadow-md border border-[#E5E7EB]">
            "The explanations were so clear, I finally understood what I was signing." — John D.
          </blockquote>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-white" aria-labelledby="faq-title">
        <h2 id="faq-title" className="text-3xl font-bold text-center mb-12">Frequently Asked Questions about Mortgage Closings</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-[#F8FAFC] p-6 rounded-xl border border-[#E5E7EB] shadow-sm">
            <h3 className="text-xl font-semibold mb-2">What documents do you support?</h3>
            <p className="text-[#4B5563]">Closing Disclosure, Loan Estimate, Note, Deed of Trust, addenda, and most title/escrow fee sheets common in Texas real estate transactions.</p>
          </div>
          <div className="bg-[#F8FAFC] p-6 rounded-xl border border-[#E5E7EB] shadow-sm">
            <h3 className="text-xl font-semibold mb-2">How do you keep my information safe?</h3>
            <p className="text-[#4B5563]">Your documents stay private and under your control. We keep them safe, never share them, and you can delete them whenever you want.</p>
          </div>
          <div className="bg-[#F8FAFC] p-6 rounded-xl border border-[#E5E7EB] shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Do you replace a real estate lawyer?</h3>
            <p className="text-[#4B5563]">No. CloseGuard flags mortgage risks and provides plain-English guidance so you can ask informed questions of your lender, realtor, or attorney.</p>
          </div>
          <div className="bg-[#F8FAFC] p-6 rounded-xl border border-[#E5E7EB] shadow-sm">
            <h3 className="text-xl font-semibold mb-2">How accurate is the Forensic Score?</h3>
            <p className="text-[#4B5563]">The Forensic Score is built to catch the mortgage issues that matter most — from hidden fees to unfair lending terms. It gives you a clear, easy-to-understand rating so you know when to move forward with confidence and when to ask more questions.</p>
          </div>
          <div className="bg-[#F8FAFC] p-6 rounded-xl border border-[#E5E7EB] shadow-sm">
            <h3 className="text-xl font-semibold mb-2">How long does it take?</h3>
            <p className="text-[#4B5563]">Most closing disclosure scans finish in under 60 seconds after you upload your documents.</p>
          </div>
          <div className="bg-[#F8FAFC] p-6 rounded-xl border border-[#E5E7EB] shadow-sm">
            <h3 className="text-xl font-semibold mb-2">What does it cost?</h3>
            <p className="text-[#4B5563]">Start with a free closing risk scan. Optional premium reviews and expert consultations are available.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#153E75] text-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Protect Your Home Closing Today</h2>
        <p className="text-lg mb-8">Do not sign your mortgage without knowing what is hidden in the fine print.</p>
        <a
          href="#start"
          className="bg-[#0B74B5] hover:bg-[#1E4E8C] text-white font-semibold px-6 py-3 rounded-lg inline-block"
          aria-label="Start your free closing risk scan"
        >
          Get Your Free Risk Scan
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D1321] text-[#E5EAF0] py-10 px-6 text-center">
        <p>© {YEAR} CloseGuard. All rights reserved.</p>
        <div className="space-x-4 mt-4">
          <a href="#" className="text-[#9AD1FF] hover:underline">Privacy Policy</a>
          <a href="#" className="text-[#9AD1FF] hover:underline">Contact</a>
        </div>
      </footer>
    </div>
  );
}
