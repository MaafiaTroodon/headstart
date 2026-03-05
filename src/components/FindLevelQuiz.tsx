'use client';

import { useState } from 'react';

const questions = [
  'How often do you play tennis?',
  'Can you rally 10+ balls consistently?',
  'Do you play matches regularly?',
  'Can you serve with placement?',
  'Can you keep score in a full match?',
  'Are you currently competing in events?'
];

export function FindLevelQuiz() {
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(0));
  const [submitted, setSubmitted] = useState(false);

  const score = answers.reduce((a, b) => a + b, 0);
  const suggestion = score <= 4 ? 'Le Petit / Red Ball' : score <= 8 ? 'Orange / Green Ball' : 'Regulation Ball / Performance';

  return (
    <section className="card p-5">
      <h2 className="font-display text-2xl">Find my level</h2>
      <div className="mt-4 space-y-4">
        {questions.map((q, i) => (
          <div key={q}>
            <p className="text-sm font-medium">{i + 1}. {q}</p>
            <div className="mt-2 flex gap-2">
              {[0, 1, 2].map((v) => (
                <button
                  key={v}
                  type="button"
                  className={`rounded-full px-3 py-1 text-sm ${answers[i] === v ? 'bg-teal-700 text-white' : 'bg-slate-100'}`}
                  onClick={() => setAnswers((prev) => prev.map((x, idx) => (idx === i ? v : x)))}
                >
                  {v === 0 ? 'Beginner' : v === 1 ? 'Developing' : 'Competitive'}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button type="button" className="btn-primary mt-4" onClick={() => setSubmitted(true)}>
        Get Suggestion
      </button>
      {submitted ? <p className="mt-3 text-sm">Suggested track: <strong>{suggestion}</strong></p> : null}
    </section>
  );
}
