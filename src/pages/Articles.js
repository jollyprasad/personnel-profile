import React from 'react';

const articles = [
  {
    title: 'Scaling Unlocks Model Powers',
    summary: 'How Scaling Laws Unlock Surprising Powers in Large Language Models.',
    link: 'https://medium.com/@jolly.prasad12/scaling-laws-and-emergent-properties-in-large-language-models-15662c111e00'
  },
  {
    title: 'Gemini Python Seven Lines',
    summary: 'Gemini in Python: Code Your First GenAI in Just 7 Lines.',
    link: 'https://medium.com/@jolly.prasad12/create-your-first-genai-program-in-python-using-gemini-model-with-just-7-lines-of-code-b0c7fb4e4a31'
  }
]

export default function Articles(){
  return (
    <section className="articles-page">
      <h2>Technical Articles & Insights</h2>

      <div className="articles-list">
        {articles.map((a, idx) => (
          <article key={idx} className="article-card">
            <h3>{a.title}</h3>
            <p>{a.summary}</p>
            <a href={a.link} target="_blank" rel="noopener noreferrer" className="read-link">Read on Medium →</a>
          </article>
        ))}
      </div>
    </section>
  )
}
