import React, { useRef, useState, useCallback, useMemo, forwardRef } from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import { ExternalLink, Star, BookOpen } from 'lucide-react';
import BookCover from '../ui/BookCover';
import PageLayout from '../PageLayout';
import ScrollReveal from '../ScrollReveal';

type Related = { label: string; href: string };

/** 3D book cover that tilts toward the cursor; root accepts DialogTrigger props */
const BookShelfItem = forwardRef<
  HTMLDivElement,
  {
    book: (typeof booksData)[0];
    renderStars: (rating: number) => React.ReactNode;
  } & React.HTMLAttributes<HTMLDivElement>
>(function BookShelfItem({ book, renderStars, ...rest }, ref) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const rotateY = Math.max(-12, Math.min(12, x * 24));
      const rotateX = Math.max(-12, Math.min(12, -y * 24));
      setTransform({ rotateX, rotateY });
    },
    []
  );

  const handleMouseLeave = useCallback(() => setTransform({ rotateX: 0, rotateY: 0 }), []);

  const setRefs = useCallback(
    (node: HTMLDivElement | null) => {
      (cardRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
      if (typeof ref === 'function') ref(node);
      else if (ref) ref.current = node;
    },
    [ref]
  );

  return (
    <div
      ref={setRefs}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative cursor-pointer flex flex-col items-center"
      style={{ perspective: '1000px' }}
      {...rest}
    >
      <div
        className="w-full flex flex-col items-center transition-transform duration-150 ease-out will-change-transform"
        style={{
          transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
        }}
      >
        <div
          className="rounded-lg overflow-hidden shadow-xl border border-white/10 w-[140px] sm:w-[160px] aspect-[3/4] flex-shrink-0"
          aria-hidden
        >
          <BookCover
            title={book.title}
            author={book.author}
            isbn={book.isbn}
            className="w-full h-full object-cover block"
          />
        </div>
        <div className="mt-3 text-center w-[140px] sm:w-[160px]">
          <p className="text-sm font-semibold text-white truncate" title={book.title}>
            {book.title}
          </p>
          <p className="text-xs text-gray-400 truncate" title={book.author}>
            {book.author}
          </p>
          <div className="flex justify-center gap-0.5 mt-1">{renderStars(book.rating)}</div>
        </div>
      </div>
    </div>
  );
});

// Shared books data (moved out so BookShelfItem can reference type)
const booksData = [
  {
    id: 'deep-learning-with-keras',
    title: 'Deep Learning with Keras',
    author: 'Antonio Gulli, Sujit Pal',
    year: '2017',
    isbn: '9781787128422',
    cover: '/api/placeholder/300/450',
    rating: 4,
    tags: ['AI/ML', 'Keras', 'Neural Nets'],
    category: 'AI/ML',
    summary: 'Hands-on guide to building and training deep neural networks using Keras abstractions.',
    insights: [
      'Model layers as composable building blocks → faster iteration',
      'Early-stopping and regularization to prevent overfitting',
      'Data pipelines matter as much as the model definition',
      'Transfer learning is a strong baseline for small datasets',
    ],
    whyItMatters: 'Grounded my ML comfort: confident with NN basics and rapid prototyping.',
    buyUrl: 'https://www.amazon.com/s?k=Deep+Learning+with+Keras',
    readingTime: '10 hours',
    related: [{ label: 'Pirate Intelligent Agent (DQN)', href: 'https://github.com/Eskinder185/Pirate-Intelligent-Agent' }] as Related[],
  },
  {
    id: 'applied-rl-python',
    title: 'Applied Reinforcement Learning with Python',
    author: 'Taweh Beysolow II',
    year: '2019',
    isbn: '9781484253489',
    cover: '/api/placeholder/300/450',
    rating: 4,
    tags: ['Reinforcement Learning', 'Python'],
    category: 'AI/ML',
    summary: 'Practical reinforcement learning—Q-learning, policy gradients, and evaluation—implemented in Python.',
    insights: [
      'Exploration vs. exploitation: epsilon schedules matter',
      'Reward shaping can make or break learning progress',
      'Replay buffers stabilize training in off-policy methods',
      'Evaluate with seed control and rolling averages',
    ],
    whyItMatters: 'Enabled my DQN project setup and tuning loop with confidence.',
    buyUrl: 'https://www.amazon.com/s?k=Applied+Reinforcement+Learning+with+Python',
    readingTime: '8 hours',
    related: [{ label: 'Pirate Intelligent Agent (DQN)', href: 'https://github.com/Eskinder185/Pirate-Intelligent-Agent' }] as Related[],
  },
  {
    id: 'clean-architecture',
    title: 'Clean Architecture',
    author: 'Robert C. Martin',
    year: '2017',
    isbn: '9780134494166',
    cover: '/api/placeholder/300/450',
    rating: 5,
    tags: ['Architecture', 'SOLID', 'Best Practices'],
    category: 'Software Engineering',
    summary: 'How to separate business logic from frameworks, UIs, and databases using clean boundaries.',
    insights: [
      'Dependency inversion → testable, swappable components',
      'Use-case / service layer keeps domain logic framework-free',
      'Entities and boundaries outlive tools and libraries',
      'Treat frameworks as plugins at the edges',
    ],
    whyItMatters: 'Shaped my Secure Task Manager design (controllers/services/repos).',
    buyUrl: 'https://www.amazon.com/s?k=Clean+Architecture',
    readingTime: '8 hours',
    related: [{ label: 'Secure Task Manager (Java)', href: 'https://github.com/Eskinder185/secure-task-manager-java' }] as Related[],
  },
  {
    id: 'rich-dad-poor-dad',
    title: 'Rich Dad Poor Dad',
    author: 'Robert T. Kiyosaki',
    year: '1997',
    isbn: '9781612680194',
    cover: '/api/placeholder/300/450',
    rating: 4,
    tags: ['Personal Finance', 'Mindset'],
    category: 'Personal Development',
    summary: 'Mindset-oriented finance book on assets, liabilities, and financial literacy.',
    insights: [
      'Think in terms of assets that generate cash flow',
      'Skills build opportunities; jobs are not the ceiling',
      'Track spending and invest consistently',
      'Long-term thinking compounds results',
    ],
    whyItMatters: 'Motivates deliberate career/project choices and investing in skills.',
    buyUrl: 'https://www.amazon.com/s?k=Rich+Dad+Poor+Dad',
    readingTime: '6 hours',
    related: [] as Related[],
  },
  {
    id: 'how-to-win-friends',
    title: 'How to Win Friends and Influence People',
    author: 'Dale Carnegie',
    year: '1936',
    isbn: '9781451621716',
    cover: '/api/placeholder/300/450',
    rating: 5,
    tags: ['Communication', 'Leadership'],
    category: 'Communication',
    summary: 'Timeless techniques for building rapport, resolving conflict, and leading with empathy.',
    insights: [
      'Genuine appreciation opens doors',
      'Ask questions; let others talk about themselves',
      'Frame feedback around shared goals',
      'Admit mistakes quickly to build trust',
    ],
    whyItMatters: 'Improves pair programming, code reviews, and stakeholder comms.',
    buyUrl: 'https://www.amazon.com/s?k=How+to+Win+Friends+and+Influence+People',
    readingTime: '7 hours',
    related: [] as Related[],
  },
  {
    id: 'atomic-habits',
    title: 'Atomic Habits',
    author: 'James Clear',
    year: '2018',
    isbn: '9780735211292',
    cover: '/api/placeholder/300/450',
    rating: 5,
    tags: ['Habits', 'Productivity'],
    category: 'Personal Development',
    summary: 'Small, consistent behavior changes compound into meaningful life and career progress.',
    insights: [
      'Make habits obvious, attractive, easy, and satisfying',
      'Environment design beats willpower',
      'Identity-based habits stick longer',
      'Track tiny wins; 1% gains add up',
    ],
    whyItMatters: 'I use habit stacking to keep daily coding/learning cadence.',
    buyUrl: 'https://www.amazon.com/s?k=Atomic+Habits',
    readingTime: '6 hours',
    related: [{ label: 'TaskTracker (TypeScript)', href: 'https://github.com/Eskinder185/tasktracker' }] as Related[],
  },
  {
    id: 'the-art-of-communicating',
    title: 'The Art of Communicating',
    author: 'Thich Nhat Hanh',
    year: '2013',
    isbn: '9780062224668',
    cover: '/api/placeholder/300/450',
    rating: 4,
    tags: ['Mindfulness', 'Communication'],
    category: 'Communication',
    summary: 'Mindful listening and speaking to reduce conflict and increase understanding.',
    insights: [
      'Listen to understand, not to reply',
      'Slow down; clarity improves outcomes',
      'Compassionate tone diffuses tension',
      'Silence can be a powerful tool',
    ],
    whyItMatters: 'Useful during incident calls and code review discussions.',
    buyUrl: 'https://www.amazon.com/s?k=The+Art+of+Communicating',
    readingTime: '4 hours',
    related: [] as Related[],
  },
  {
    id: 'you-are-not-so-smart',
    title: 'You Are Not So Smart',
    author: 'David McRaney',
    year: '2011',
    isbn: '9781592407361',
    cover: '/api/placeholder/300/450',
    rating: 4,
    tags: ['Psychology', 'Cognitive Bias'],
    category: 'Psychology',
    summary: 'Entertaining tour of cognitive biases that trip up our decision-making.',
    insights: [
      'Confirmation bias skews debugging and analysis',
      'Beware hindsight and survivorship bias in postmortems',
      'Write hypotheses; test, don\'t assume',
      'Diverse feedback surfaces blind spots',
    ],
    whyItMatters: 'Improves how I design experiments and review incidents.',
    buyUrl: 'https://www.amazon.com/s?k=You+Are+Not+So+Smart',
    readingTime: '5 hours',
    related: [] as Related[],
  },
  {
    id: 'crucial-conversations',
    title: 'Crucial Conversations',
    author: 'Patterson, Grenny, McMillan, Switzler',
    year: '2002',
    isbn: '9780071771320',
    cover: '/api/placeholder/300/450',
    rating: 4,
    tags: ['Conflict', 'Leadership'],
    category: 'Communication',
    summary: 'Tools for high-stakes conversations where opinions vary and emotions run strong.',
    insights: [
      'Start with heart (shared purpose)',
      'Make it safe; watch for silence/violence',
      'STATE your path: facts → story → ask → talk tentatively → encourage testing',
      'Move to action with clear owners and timelines',
    ],
    whyItMatters: 'Helps drive alignment during architecture and priority debates.',
    buyUrl: 'https://www.amazon.com/s?k=Crucial+Conversations',
    readingTime: '6 hours',
    related: [] as Related[],
  },
  {
    id: 'emotional-intelligence',
    title: 'Emotional Intelligence',
    author: 'Daniel Goleman',
    year: '1995',
    isbn: '9780553383713',
    cover: '/api/placeholder/300/450',
    rating: 4,
    tags: ['EQ', 'Self-awareness'],
    category: 'Psychology',
    summary: 'Why emotional regulation, empathy, and social skills predict success beyond IQ.',
    insights: [
      'Self-regulation prevents reactive decisions',
      'Empathy strengthens teams and trust',
      'Motivation sustains long-term goals',
      'Social skills turn ideas into outcomes',
    ],
    whyItMatters: 'Better collaboration and leadership under pressure.',
    buyUrl: 'https://www.amazon.com/s?k=Emotional+Intelligence+Daniel+Goleman',
    readingTime: '7 hours',
    related: [] as Related[],
  },
];

const BooksPage: React.FC = () => {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(booksData.map((b) => b.category)))],
    []
  );
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredBooks = activeCategory === 'All'
    ? booksData
    : booksData.filter((book) => book.category === activeCategory);

  const handleExternalLink = (url: string) => window.open(url, '_blank');

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-500'}`}
      />
    ));

  return (
    <PageLayout maxWidth="wide">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bookshelf
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Minimalist shelf. Click a book to open summary and key takeaways in a Liquid Glass sheet.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="flex flex-wrap gap-3 mb-10">
          <BookOpen className="w-5 h-5 text-gray-400 self-center" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-violet-500 to-cyan-500 text-white shadow-lg'
                  : 'bg-white/5 border border-white/20 text-gray-300 hover:bg-white/10 hover:border-violet-500/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Bookshelf: 3D tilt covers */}
      <ScrollReveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 py-8">
          {filteredBooks.map((book) => (
            <Dialog key={book.id}>
              <DialogTrigger asChild>
                <BookShelfItem book={book} renderStars={renderStars} />
              </DialogTrigger>
              <DialogContent
                className="glass-panel max-w-lg p-0 gap-0 overflow-hidden border border-white/10 shadow-2xl bg-[var(--background)]/95 backdrop-blur-xl"
                aria-describedby={undefined}
              >
                <div className="p-6 space-y-6">
                  <div className="flex gap-4">
                    <div className="w-24 h-36 flex-shrink-0 rounded-lg overflow-hidden border border-white/10 shadow-lg">
                      <BookCover
                        title={book.title}
                        author={book.author}
                        isbn={book.isbn}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl font-bold text-white mb-1">{book.title}</h2>
                      <p className="text-sm text-gray-400">by {book.author}</p>
                      <p className="text-xs text-gray-500 mt-1">{book.year}</p>
                      <div className="flex items-center gap-2 mt-2">
                        {renderStars(book.rating)}
                        <span className="text-xs text-gray-400">{book.readingTime}</span>
                      </div>
                      <Badge className="mt-2 bg-violet-500/20 border-violet-500/50 text-violet-200 text-xs">
                        {book.category}
                      </Badge>
                    </div>
                  </div>

                  <section>
                    <h3 className="text-sm font-semibold text-violet-300 uppercase tracking-wider mb-2">Summary</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{book.summary}</p>
                  </section>

                  <section>
                    <h3 className="text-sm font-semibold text-cyan-300 uppercase tracking-wider mb-2">Key takeaways</h3>
                    <ul className="space-y-2">
                      {book.insights.map((insight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <span className="text-cyan-400 mt-0.5">•</span>
                          {insight}
                        </li>
                      ))}
                    </ul>
                  </section>

                  {book.related.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {book.related.map((r, i) => (
                        <Button
                          key={i}
                          variant="outline"
                          size="sm"
                          onClick={() => handleExternalLink(r.href)}
                          className="border-white/20 hover:border-violet-500/50 text-gray-300 text-xs"
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          {r.label}
                        </Button>
                      ))}
                    </div>
                  )}

                  <Button
                    onClick={() => handleExternalLink(book.buyUrl)}
                    className="w-full bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Find on Amazon
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </ScrollReveal>

      {filteredBooks.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400">No books in this category.</p>
        </div>
      )}

      <ScrollReveal>
        <div className="mt-16 p-6 rounded-2xl glass-panel border border-white/10">
          <h2 className="text-lg font-bold mb-4 text-center">Reading stats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div>
              <div className="text-2xl font-bold text-violet-300">{booksData.length}</div>
              <div className="text-gray-400">Books</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-300">{categories.length - 1}</div>
              <div className="text-gray-400">Categories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-300">
                {booksData.reduce((acc, b) => acc + parseFloat(String(b.readingTime).replace(/[^\d.]/g, '')) || 0, 0)}h
              </div>
              <div className="text-gray-400">Reading time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-amber-300">
                {(booksData.reduce((a, b) => a + b.rating, 0) / booksData.length).toFixed(1)}
              </div>
              <div className="text-gray-400">Avg rating</div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </PageLayout>
  );
};

export default BooksPage;
