export const profile = {
  name: 'Kirti Kolare',
  title: 'AI/ML Engineer',
  tagline: 'Building LLM applications, agents, and voice systems that ship — with the numbers to back it up.',
  location: 'Pune, Maharashtra, India',
  email: 'kirti.kolare.work@gmail.com',
  github: 'https://github.com/KirtiK07',
  linkedin: 'https://linkedin.com/in/kirtikolare',
  resumeNote: 'MSc Computer Science candidate (3rd semester) · AI/ML Engineering Intern @ Wrrk.ai',
}

export const now = [
  'AI/ML Engineering Intern at Wrrk.ai, building analytics, unified inbox, email, and residential-proxy modules for an all-in-one AI workspace platform (CRM + WhatsApp + voice/chat).',
  'Studying for my MSc in Computer Science at Indira University — currently in my 3rd semester.',
]

export const projects = [
  {
    name: 'Cost-Aware LLM Router',
    repoName: 'llm-cost-router',
    tag: 'Priority build',
    problem:
      'Every team running LLM apps in production overspends by routing everything to one expensive model.',
    description:
      'A routing layer that sends each query to the cheapest model capable of handling it, and intercepts near-duplicate queries with a semantic cache before they hit any model at all.',
    metrics: [
      { label: 'Cost cut vs. always-expensive', value: '~23%' },
      { label: 'Classifier accuracy', value: '100%' },
      { label: 'p50 latency (router)', value: '4.1s' },
    ],
    stack: ['FastAPI', 'Redis', 'Groq', 'Gemini', 'scikit-learn', 'Streamlit'],
    demo: 'https://xfybiaxpku9llzdj2wjrpj.streamlit.app/',
    repo: 'https://github.com/KirtiK07/llm-cost-router',
  },
  {
    name: 'Interruptible Voice Agent',
    repoName: 'voice-triage-agent',
    tag: 'Voice AI',
    problem:
      'Most voice-agent demos break down the moment a real caller tries to interrupt them mid-response.',
    description:
      'A support-ticket-triage voice agent with genuine barge-in: the caller can interrupt at any point and the agent actually stops and responds, instead of talking over them.',
    metrics: [
      { label: 'Cutoff latency (p50)', value: '77ms' },
      { label: 'Cutoff latency (p95)', value: '108ms' },
      { label: 'Recovery latency (p50)', value: '2.2s' },
    ],
    stack: ['FastAPI', 'WebSocket', 'Silero VAD', 'faster-whisper', 'Groq', 'Piper TTS'],
    demo: 'https://voice-triage-agent.vercel.app/',
    repo: 'https://github.com/KirtiK07/voice-triage-agent',
  },
  {
    name: 'QueryPal',
    repoName: 'QueryPal',
    tag: 'NL-to-SQL',
    problem:
      'Non-technical teams need answers from a database without writing SQL — and without one tenant seeing another’s data.',
    description:
      'A two-agent LLM pipeline that turns plain-English questions into validated, self-correcting SQL, with live charts and per-account schema isolation.',
    metrics: [
      { label: 'Architecture', value: 'Two-agent, self-correcting' },
      { label: 'Isolation', value: 'Per-tenant schema' },
    ],
    stack: ['Streamlit', 'LangChain', 'Groq / Llama 3.3', 'Supabase'],
    demo: 'https://6j5dr9asfjw4ooeqwlhvp5.streamlit.app/',
    repo: 'https://github.com/KirtiK07/QueryPal',
  },
  {
    name: 'CodeSense AI',
    repoName: 'CodeSense-AI',
    tag: 'ML + LLM review',
    problem:
      'Code review tools either give you a risk score with no explanation, or an AI opinion with no data behind it — rarely both.',
    description:
      'A multi-language code review platform pairing a Random Forest defect-risk classifier trained on 10,885 NASA JM1 modules with an independent Gemini-based LLM reviewer, side by side.',
    metrics: [
      { label: 'Classifier accuracy', value: '78.3%' },
      { label: 'ROC-AUC', value: '0.731' },
      { label: 'Languages reviewed', value: '5' },
    ],
    stack: ['scikit-learn', 'SMOTE', 'Gemini API', 'Streamlit'],
    demo: 'https://codesense-ai-46bajkw35e5m7xtpvwtwvj.streamlit.app/',
    repo: 'https://github.com/KirtiK07/CodeSense-AI',
  },
]

export const experience = [
  {
    role: 'AI/ML Engineering Intern',
    org: 'Wrrk.ai',
    period: 'Jul 2026 — Present',
    points: [
      'Contributing to an all-in-one AI-powered workspace platform unifying CRM, WhatsApp, and voice/chat into a single system for business communication and automation.',
      'Building and maintaining platform modules spanning analytics, unified inbox, email integration, and residential proxy infrastructure.',
    ],
  },
  {
    role: 'AI Intern',
    org: 'Enzigma Solutions LLP',
    period: 'Jan 2025 — Mar 2025',
    points: [
      'Built a semantic vector search pipeline on MongoDB, replacing keyword matching with embeddings for conceptually relevant results.',
      'Redesigned LLM prompt templates across production use cases, improving output consistency and accuracy.',
    ],
  },
  {
    role: 'Python Developer Intern',
    org: 'JhaMobi Technologies Pvt. Ltd.',
    period: 'Jun 2024 — Aug 2024',
    points: [
      'Built and deployed a full-stack book rental platform using Django and Bootstrap, owned end-to-end within an 8-week internship.',
    ],
  },
  {
    role: 'UI/UX Designer',
    org: 'Marva AI LLP',
    period: 'Jun 2023 — Aug 2023',
    points: [
      'Designed and shipped a food recommendation app end-to-end, from Figma wireframes to a responsive Bootstrap/Django front-end.',
    ],
  },
]

export const skills = {
  'Languages & Frameworks': ['Python', 'Java', 'SQL', 'JavaScript', 'C++', 'FastAPI', 'Flask', 'Django', 'Streamlit'],
  'AI/ML & NLP': ['LLM APIs (Claude, Gemini, Groq/Llama 3)', 'Prompt Engineering', 'LangChain', 'Vector Search', 'Embeddings', 'Model Evaluation'],
  'Data & Infra': ['MongoDB', 'PostgreSQL', 'Redis', 'Supabase', 'Docker', 'AWS', 'Git', 'REST APIs', 'WebSockets'],
}
