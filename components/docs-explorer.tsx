'use client';

import { useMemo, useState } from 'react';
import type { Guide } from '@/lib/docs';

const filters = ['all', 'suite', 'content', 'search', 'version'] as const;

export function DocsExplorer({ guides }: Readonly<{ guides: readonly Guide[] }>) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<(typeof filters)[number]>('all');
  const visible = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase();
    return guides.filter(
      (guide) =>
        (filter === 'all' || guide.product === filter) &&
        (!needle ||
          `${guide.title} ${guide.summary} ${guide.steps.join(' ')}`
            .toLocaleLowerCase()
            .includes(needle)),
    );
  }, [filter, guides, query]);
  return (
    <section className="docs-explorer shell" aria-labelledby="guides-heading">
      <div className="docs-tools">
        <div>
          <p className="kicker">Task-oriented guides</p>
          <h2 id="guides-heading">Find the next useful step.</h2>
        </div>
        <label className="search-field">
          <span>Search documentation</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try “restore” or “MCP”"
          />
        </label>
      </div>
      <div className="filter-row" aria-label="Filter guides by product">
        {filters.map((item) => (
          <button
            type="button"
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
            key={item}
          >
            {item === 'all' ? 'All guides' : item}
          </button>
        ))}
      </div>
      <p className="result-count" role="status">
        {visible.length} {visible.length === 1 ? 'guide' : 'guides'}
      </p>
      <div className="guide-list">
        {visible.map((guide) => (
          <article className="guide" id={guide.id} key={guide.id}>
            <div className="guide-title">
              <span className="channel">{guide.product}</span>
              <h3>{guide.title}</h3>
              <p>{guide.summary}</p>
            </div>
            <div>
              <ol>
                {guide.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              {guide.command && (
                <pre>
                  <code>{guide.command}</code>
                </pre>
              )}
              {guide.note && (
                <p className="callout">
                  <strong>Boundary:</strong> {guide.note}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
      {visible.length === 0 && (
        <p className="empty-state">No guide matches. Clear the search or choose another product.</p>
      )}
    </section>
  );
}
