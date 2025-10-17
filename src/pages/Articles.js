import React from 'react';

const articles = [
  {
    title: 'Mastering React Hooks',
    summary: 'A deep dive into useState and useEffect for efficient state management.',
    link: 'https://medium.com/@yourname/article1-link'
  },
  {
    title: 'CSS Grid vs. Flexbox: When to Use Which',
    summary: 'Comparing the two layout models with practical, real-world examples.',
    link: 'https://medium.com/@yourname/article2-link'
  },
  {
    title: 'Optimizing Frontend Performance',
    summary: 'Essential tips for reducing bundle size and improving load times.',
    link: 'https://medium.com/@yourname/article3-link'
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
