import { useMemo, useState } from 'react'
import { CheckCircle2, Download, Share2, FileText, Star, StarHalf, Trophy, ArrowRight, ShieldCheck, HeadphonesIcon } from 'lucide-react'

function Tag({ label }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium border border-blue-100">
      <ShieldCheck className="w-3.5 h-3.5" /> {label}
    </span>
  )
}

function RecommendedCard({ title, description, color }) {
  return (
    <div className="group rounded-xl border border-gray-200 bg-white/70 backdrop-blur hover:bg-white transition-all hover:shadow-lg p-5">
      <div className="h-10 w-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: color }}>
        <Trophy className="w-5 h-5 text-white" />
      </div>
      <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <button className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 group-hover:gap-3 transition-all">
        Explore <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  )
}

export default function Ending() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const today = useMemo(() => new Date().toLocaleDateString(), [])

  const stars = [1, 2, 3, 4, 5]

  const handleSubmitFeedback = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const comment = form.get('comment')
    alert(`Thanks for your feedback!\nRating: ${rating}/5\nComment: ${comment || '—'}`)
    setRating(0)
    e.currentTarget.reset()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50/50 to-blue-50">
      {/* Hero */}
      <div className="relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-200/40 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-6">
          <div className="flex items-center justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-50 text-green-700 px-4 py-1 text-sm border border-green-100">
              <CheckCircle2 className="w-4 h-4" />
              Completion confirmed
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mt-6 text-gray-900 tracking-tight">
            You did it! Training complete
          </h1>
          <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            Great work finishing your online training. Your knowledge in logistics, transportation, and risk management just leveled up.
          </p>

          {/* Summary Card */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Certificate of Completion</h3>
                  <p className="text-sm text-gray-600 mt-1">Issued {today}</p>
                </div>
                <div className="hidden sm:block">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 text-white flex items-center justify-center shadow-md">
                    <Trophy className="w-7 h-7" />
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <Tag label="Logistics" />
                <Tag label="Transportation" />
                <Tag label="Risk Management" />
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div className="rounded-lg bg-gray-50 p-3">
                  <p className="text-xs text-gray-500">Total Hours</p>
                  <p className="font-semibold text-gray-900">12h</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-3">
                  <p className="text-xs text-gray-500">Score</p>
                  <p className="font-semibold text-gray-900">94%</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-3">
                  <p className="text-xs text-gray-500">Badge</p>
                  <p className="font-semibold text-gray-900">Pro</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 font-medium shadow-sm">
                  <Download className="w-4 h-4" /> Download Certificate
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 px-4 py-2.5 font-medium">
                  <FileText className="w-4 h-4" /> View Transcript
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 px-4 py-2.5 font-medium">
                  <Share2 className="w-4 h-4" /> Share Badge
                </button>
              </div>
            </div>

            {/* Feedback */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">How was your experience?</h3>
              <p className="text-sm text-gray-600 mt-1">Your feedback helps us improve future courses.</p>

              <form className="mt-4" onSubmit={handleSubmitFeedback}>
                <div className="flex items-center gap-1">
                  {stars.map((s) => {
                    const active = (hover || rating) >= s
                    return (
                      <button
                        key={s}
                        type="button"
                        className="p-1"
                        onMouseEnter={() => setHover(s)}
                        onMouseLeave={() => setHover(0)}
                        onClick={() => setRating(s)}
                        aria-label={`Rate ${s}`}
                      >
                        {active ? (
                          <Star className="w-7 h-7 text-yellow-400 fill-yellow-400" />
                        ) : (
                          <Star className="w-7 h-7 text-gray-300" />
                        )}
                      </button>
                    )
                  })}
                </div>

                <textarea
                  name="comment"
                  placeholder="Tell us what worked well or what we can improve..."
                  className="mt-3 w-full rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-sm p-3 min-h-[96px]"
                />

                <div className="mt-3 flex items-center gap-3">
                  <button className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 font-medium">
                    Submit feedback
                  </button>
                  <p className="text-xs text-gray-500">Takes less than 30 seconds</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h2 className="text-2xl font-bold text-gray-900">Recommended next steps</h2>
          <a href="/" className="text-sm text-indigo-700 font-medium hover:underline">Return to home</a>
        </div>
        <p className="text-gray-600 mt-1">Keep your momentum with these curated paths.</p>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <RecommendedCard
            title="Advanced Logistics Planning"
            description="Forecasting, demand planning, and inventory optimization."
            color="#6366F1"
          />
          <RecommendedCard
            title="Transport Network Optimization"
            description="Routing, capacity planning, and last-mile strategies."
            color="#22C55E"
          />
          <RecommendedCard
            title="Operational Risk & Compliance"
            description="Risk frameworks, audits, and incident response."
            color="#F59E0B"
          />
        </div>
      </div>

      {/* Support & CTA */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold">Need help verifying your certificate or planning your next course?</h3>
            <p className="text-white/90 mt-1">Our team is available 24/7 to guide your learning journey.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <a href="#" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-indigo-700 hover:bg-gray-100 px-4 py-2.5 font-medium">
              <HeadphonesIcon className="w-4 h-4" /> Contact Support
            </a>
            <a href="#" className="inline-flex items-center justify-center gap-2 rounded-lg bg-black/20 hover:bg-black/30 text-white px-4 py-2.5 font-medium">
              Browse Catalog <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
