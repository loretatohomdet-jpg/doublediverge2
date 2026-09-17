import { ServiceItem, ApproachStep, CaseStudy, InsightArticle } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'ai',
    number: '01',
    title: 'Artificial Intelligence',
    shortDescription:
      'Translating deep algorithmic breakthroughs into production-grade systems that reason, automate, and unlock strategic leverage.',
    fullDescription:
      'We architect tailored machine learning architectures, multimodal foundation model integrations, and autonomous agent workflows designed for reliability, governance, and real operational impact.',
    deliverables: [
      'Custom LLM Orchestration & Fine-Tuning',
      'Autonomous Agent Workflows',
      'Computer Vision & Multimodal Pipelines',
      'Responsible AI Governance Frameworks',
    ],
    technologies: ['PyTorch', 'Gemini Models', 'Vector Engines', 'vLLM', 'Distributed GPU Clusters'],
    keyOutcome: '99.4% precision in multi-tier reasoning loops with enterprise data security.',
  },
  {
    id: 'digital-transformation',
    number: '02',
    title: 'Digital Transformation',
    shortDescription:
      'Modernising legacy monolithic architectures into decoupled, cloud-native engines resilient to exponential scale.',
    fullDescription:
      'True transformation goes beyond re-platforming. We realign organisational engineering velocity, dismantle technological debt, and deploy composable cloud infrastructures that accelerate product iteration.',
    deliverables: [
      'Core Architecture Modernisation',
      'Event-Driven Cloud Foundations',
      'DevOps & Continuous Delivery Pipelines',
      'API-First Enterprise Mesh Integration',
    ],
    technologies: ['Kubernetes', 'Google Cloud', 'Terraform', 'Kafka', 'GraphQL / gRPC'],
    keyOutcome: '6x faster release velocity while cutting cloud provisioning overhead by 42%.',
  },
  {
    id: 'research-innovation',
    number: '03',
    title: 'Research & Innovation',
    shortDescription:
      'De-risking frontier technology through speculative prototyping, applied laboratory experimentation, and rapid discovery.',
    fullDescription:
      'We act as your dedicated R&D skunkworks. Before making multi-million capital commitments, we stress-test hypotheses, explore edge cases, and validate breakthrough concepts with working prototypes.',
    deliverables: [
      'Proof-of-Concept Rapid Prototyping',
      'Applied R&D Feasibility Studies',
      'Emerging Tech Horizon Scanning',
      'Intellectual Property & Patent Prototyping',
    ],
    technologies: ['Spatial Computing', 'Edge Tensor Accelerators', 'Rust', 'WebAssembly', 'Zero-Knowledge Proofs'],
    keyOutcome: 'Validated 18 breakthrough patents and reduced exploratory R&D cycles from months to days.',
  },
  {
    id: 'tech-strategy',
    number: '04',
    title: 'Technology Strategy',
    shortDescription:
      'Aligning technological capability with executive market dominance, defensibility, and long-term capital efficiency.',
    fullDescription:
      'Technology without strategic alignment is friction. We partner with CTOs, boards, and founders to author definitive roadmaps, vendor-agnostic architecture blueprints, and M&A technical due diligence.',
    deliverables: [
      'Multi-Year Technology Roadmapping',
      'Architecture Defensibility Audits',
      'M&A Technical Due Diligence',
      'Engineering Organisation Topologies',
    ],
    technologies: ['Enterprise Architecture', 'TOGAF Principles', 'FinOps', 'Domain-Driven Design'],
    keyOutcome: 'Identified $14M in annual compute optimization and guided 4 successful cross-border acquisitions.',
  },
  {
    id: 'data-analytics',
    number: '05',
    title: 'Data & Analytics',
    shortDescription:
      'Converting distributed telemetry into high-fidelity intelligence, low-latency streaming pipelines, and predictive insight.',
    fullDescription:
      'We unify fragmented data silos into verified, unified knowledge graphs and stream-processing backbones that empower human decision-makers and automated algorithmic actuators in real time.',
    deliverables: [
      'Real-Time Streaming Pipelines',
      'Enterprise Knowledge Graphs & Lakes',
      'Predictive Telemetry & Anomaly Systems',
      'Data Clean Rooms & Privacy-Preserving Analytics',
    ],
    technologies: ['Apache Spark', 'BigQuery', 'Snowflake', 'dbt', 'ClickHouse', 'Trino'],
    keyOutcome: 'Processed 4.2 billion daily events with sub-50ms latency across global availability zones.',
  },
  {
    id: 'digital-products',
    number: '06',
    title: 'Digital Products',
    shortDescription:
      'Engineering mission-critical digital flagships, mission control consoles, and human-centred interactive software.',
    fullDescription:
      'We craft software that feels inevitable. By synthesizing exacting ergonomic precision, micro-interactions, and robust distributed systems, we deliver digital products that users genuinely revere.',
    deliverables: [
      'Complex Web & Desktop Platforms',
      'Industrial Control Panels & Dashboards',
      'Cross-Platform Native Applications',
      'Design Systems & Interaction Frameworks',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'WebSockets', 'Swift', 'Kotlin'],
    keyOutcome: 'Achieved 82 Net Promoter Score on enterprise SaaS deployment with 280,000 active operators.',
  },
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: '01',
    title: 'Understand',
    tagline: 'Deconstruct before designing.',
    description:
      'We immerse ourselves in your operating environment, business constraints, and technical topology. We uncover the unstated variables and systemic bottlenecks that conventional audits overlook.',
    divergentPhase: 'Diverge',
    activities: [
      'Stakeholder immersion & architectural tracing',
      'Data landscape & dependency mapping',
      'Root-cause synthesis & constraint modeling',
    ],
    deliverables: 'Discovery Diagnostics & Systemic Reality Matrix',
  },
  {
    number: '02',
    title: 'Explore',
    tagline: 'Double divergence in action.',
    description:
      'We deliberately diverge: generating radical alternative hypotheses, stress-testing novel paradigms, and exploring counter-intuitive technical paths before converging on the optimal trajectory.',
    divergentPhase: 'Diverge',
    activities: [
      'Multi-vector hypothesis exploration',
      'Speculative algorithmic prototyping',
      'Trade-off matrix: latency, cost, defensibility, and UX',
    ],
    deliverables: 'Exploratory Prototype Sandbox & Architectural Options Dossier',
  },
  {
    number: '03',
    title: 'Build',
    tagline: 'Industrial-strength precision.',
    description:
      'We engineer production-ready codebases with clean domain boundaries, rigorous static typing, comprehensive telemetry, and automated verification suites designed for extreme durability.',
    divergentPhase: 'Converge',
    activities: [
      'Zero-defect modular architecture execution',
      'Continuous integration & security auditing',
      'Ergonomic interface engineering & design system cohesion',
    ],
    deliverables: 'Production-Grade Codebase & Automated Test Harness',
  },
  {
    number: '04',
    title: 'Test',
    tagline: 'Adversarial validation in production reality.',
    description:
      'We subject systems to chaotic load profiles, adversarial edge cases, human operational reviews, and rigorous penetration tests to guarantee infallible resilience.',
    divergentPhase: 'Converge',
    activities: [
      'Chaos engineering & disaster recovery simulation',
      'Sub-millisecond latency & concurrency profiling',
      'Human-in-the-loop usability & cognitive load testing',
    ],
    deliverables: 'Verification Certification & Chaos Test Results',
  },
  {
    number: '05',
    title: 'Scale',
    tagline: 'Global rollout and continuous velocity.',
    description:
      'We execute zero-downtime cutovers, establish internal engineering capability transfer, and implement automated observability loops so your team owns and scales the technology effortlessly.',
    divergentPhase: 'Scale',
    activities: [
      'Global multi-region telemetry & alerting deployment',
      'Executive dashboard & operational runbook handover',
      'Continuous enhancement sprint cadence setup',
    ],
    deliverables: 'Scalability Playbook & Self-Sustaining Operations Framework',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'synapse-nexus',
    title: 'Autonomous Clinical Intelligence Pipeline',
    client: 'Apex Health Systems',
    industry: 'Healthcare & Precision Medicine',
    category: 'Artificial Intelligence & Data Systems',
    shortDescription:
      'Synthesising millions of unstructured clinical records into verified, real-time diagnostic guidance for acute care specialists.',
    challenge:
      'Over 40 hospital networks were bottlenecked by siloed EHR data, resulting in average diagnostic reconciliation delays of 14 hours for critical trauma admissions.',
    divergence:
      'Rather than building another static search engine, DoubleDiverge explored multimodal embedding spaces coupled with deterministic medical ontologies, balancing generative flexibility with clinical certitude.',
    solution:
      'Engineered an edge-deployed multimodal intelligence mesh that ingests clinical notes, DICOM imaging, and real-time biometric telemetry, yielding sub-second differential diagnosis alerts with cited peer-reviewed literature.',
    technologies: ['Gemini Medical Embeddings', 'Rust Core', 'FHIR Protocol', 'Vector Indexing', 'Kubernetes'],
    impact: [
      'Reduced critical triage latency by 76%',
      'Maintained 99.82% diagnostic recall audited by board-certified physicians',
      'Saved an estimated 1,200 emergency staff hours monthly',
    ],
    stats: [
      { value: '-76%', label: 'Triage Latency' },
      { value: '40+', label: 'Hospital Networks' },
      { value: '99.8%', label: 'Diagnostic Recall' },
    ],
    accentGradient: 'from-[#064BAE] via-[#765ECE] to-[#B168DF]',
  },
  {
    id: 'aether-grid',
    title: 'Next-Gen Renewable Energy Grid Orchestration',
    client: 'TerraWatt Energy Consortium',
    industry: 'Energy & Climate Infrastructure',
    category: 'Technology Strategy & Distributed Systems',
    shortDescription:
      'Decentralised predictive load balancer balancing fluctuating wind and solar generation across European transmission interties.',
    challenge:
      'Extreme weather volatility and micro-generation spikes caused repeated frequency instability, costing regional grid operators €85M annually in emergency reserve activations.',
    divergence:
      'We diverged from centralized mainframe dispatch models toward a distributed peer-to-peer predictive arbitrage network that models battery storage as dynamic virtual power plants.',
    solution:
      'Constructed a low-latency event-driven telemetry platform forecasting solar/wind output 48 hours in advance using physics-informed neural networks coupled with automated bilateral energy settlement.',
    technologies: ['Kafka', 'TimescaleDB', 'Go Microservices', 'WASM Edge Workers', 'WebSockets'],
    impact: [
      'Stabilized grid frequency deviation by 88%',
      'Optimized €42M in curtailment losses in year one',
      'Supported 1.4GW of newly integrated renewable capacity',
    ],
    stats: [
      { value: '€42M', label: 'Annual Savings' },
      { value: '1.4GW', label: 'Clean Capacity' },
      { value: '88%', label: 'Stability Gain' },
    ],
    accentGradient: 'from-[#3C54BE] via-[#765ECE] to-[#9B63D9]',
  },
  {
    id: 'meridian-exchange',
    title: 'Ultra-Low Latency Cross-Border Liquidity Engine',
    client: 'Meridian Capital Markets',
    industry: 'Financial Technology',
    category: 'Digital Products & Systems Architecture',
    shortDescription:
      'High-throughput institutional execution venue routing multi-currency asset swaps across 14 sovereign regulatory jurisdictions.',
    challenge:
      'Institutional order execution was plagued by fragmented liquidity fragmentation, slippage, and non-deterministic clearing windows spanning multiple settlement regimes.',
    divergence:
      'We tested both traditional central limit order books and automated market maker curve mechanics, ultimately pioneering a hybrid order routing mechanism that eliminates adverse selection.',
    solution:
      'Delivered a bespoke, lock-free memory-mapped matching engine and institutional operator terminal offering sub-microsecond tick processing and zero-knowledge trade verifiability.',
    technologies: ['C++20 / Rust', 'Hardware Timestamping', 'ZeroMQ', 'React / WebGL Console'],
    impact: [
      'Sub-5 microsecond internal execution latency (p99)',
      '$18B in quarterly transaction volume with zero settlement downtime',
      'Reduced average trading slippage by 34 basis points',
    ],
    stats: [
      { value: '<5µs', label: 'p99 Latency' },
      { value: '$18B+', label: 'Quarterly Volume' },
      { value: '100%', label: 'Uptime SLA' },
    ],
    accentGradient: 'from-[#064BAE] via-[#3C54BE] to-[#765ECE]',
  },
];

export const INSIGHTS: InsightArticle[] = [
  {
    id: 'divergent-architecture',
    category: 'Technology Strategy',
    title: 'The Divergent Architecture: Why Linear Engineering Fails in Non-Linear Markets',
    excerpt:
      'Most enterprise failures do not stem from poor code; they stem from premature convergence on unexamined architectural assumptions.',
    content: [
      'Traditional enterprise IT prioritizes convergence: converge on a stack, converge on a vendor, converge on a 5-year roadmap. Yet in eras characterized by rapid technological displacement—such as the recent shift toward agentic reasoning and sovereign compute—rigid convergence guarantees obsolescence.',
      'At DoubleDiverge, we advocate for architectural divergence. By designing modular decouplings and maintaining exploratory parallel paths, organisations build optionality into their core infrastructure.',
      'Optionality is not wasted motion. It is the mathematical hedge that separates technology leaders from those perpetually reacting to market disruption.',
    ],
    date: 'March 2026',
    readTime: '6 min read',
    author: {
      name: 'Dr. Evelyn Vance',
      role: 'Head of Technology Strategy',
    },
  },
  {
    id: 'generative-systems-production',
    category: 'Artificial Intelligence',
    title: 'Beyond the Wrapper: Engineering Determinism Into Non-Deterministic Foundation Models',
    excerpt:
      'Deploying AI into mission-critical infrastructure requires wrapping probabilistic outputs in verifiable semantic guardrails and formal logic gates.',
    content: [
      'The consumer fascination with conversational AI has created a dangerous misconception in enterprise boardrooms: that intelligence equates to prompt engineering.',
      'In reality, production AI systems must obey strict physical, legal, and financial constraints. When a model operates in clinical dosage planning or algorithmic trading, hallucination is unacceptable.',
      'We share our engineering framework for combining neuro-symbolic reasoning, deterministic verification harnesses, and dynamic retrieval meshes to build AI systems you can stake your enterprise reputation on.',
    ],
    date: 'February 2026',
    readTime: '8 min read',
    author: {
      name: 'Marcus Chen',
      role: 'Principal AI Architect',
    },
  },
  {
    id: 'human-systems-convergence',
    category: 'Research & Innovation',
    title: 'The Human in the Loop Fallacy: Designing for True Ergonomic Symbiosis',
    excerpt:
      'Human-in-the-loop is often an excuse for brittle automation. How modern interface engineering turns passive overseers into empowered creative co-pilots.',
    content: [
      'When automation fails, humans are typically expected to intervene in milliseconds—often with degraded situational awareness and cognitive fatigue.',
      'We examine modern flight deck design, intensive care telemetry, and high-frequency dispatch systems to demonstrate how software interfaces must present progressive context and divergent option spaces rather than abrupt alerts.',
      'Human agency is preserved not by burdening operators with verification grunt work, but by amplifying human judgment at strategic decision nodes.',
    ],
    date: 'January 2026',
    readTime: '5 min read',
    author: {
      name: 'Soraya Al-Mansoor',
      role: 'Director of Human Systems',
    },
  },
  {
    id: 'decarbonizing-compute',
    category: 'Infrastructure',
    title: 'Sovereign Compute & Energy Efficiency: The Hidden Constraint of the AI Era',
    excerpt:
      'As machine intelligence demands astronomical wattages, forward-thinking enterprises are decoupling compute reliance from grid vulnerabilities.',
    content: [
      'The era of cheap, boundless cloud compute has ended. Today, model training and real-time inference are constrained by transformer substations, water cooling permits, and sovereign data residency legislation.',
      'We explore how algorithmic distillation, quantized edge models, and carbon-aware batch scheduling enable companies to achieve superior technological throughput with a fraction of the ecological footprint.',
    ],
    date: 'December 2025',
    readTime: '7 min read',
    author: {
      name: 'Lars Lindqvist',
      role: 'VP of Infrastructure Engineering',
    },
  },
];

export const PHILOSOPHY_PILLARS = [
  {
    title: 'Technology should solve meaningful problems.',
    description:
      'We reject innovation for novelty’s sake. Every line of code, neural weight, and architectural pattern must directly advance human capability or resolve critical systemic friction.',
  },
  {
    title: 'Innovation requires curiosity and experimentation.',
    description:
      'Breakthroughs are never discovered along the beaten path. We cultivate disciplined, rigorous experimentation—testing counter-intuitive hypotheses to unlock asymmetric competitive advantages.',
  },
  {
    title: 'Complex problems require looking at them differently.',
    description:
      'When you view a problem through existing industry lenses, you replicate existing industry ceilings. We dissect challenges through first-principles thinking and multi-disciplinary divergence.',
  },
  {
    title: 'Combining technology, research, strategy & implementation.',
    description:
      'Strategy without engineering is hallucination; engineering without strategy is noise. We integrate strategic foresight, cutting-edge laboratory research, and production execution into one seamless team.',
  },
];
