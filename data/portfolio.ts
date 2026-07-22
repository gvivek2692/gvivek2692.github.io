/**
 * ============================================================================
 *  PORTFOLIO CONTENT  ‑  your words live here.
 * ============================================================================
 *
 *  Edit the values below. The types guide you: your editor will autocomplete
 *  fields and flag anything missing. To add an experience, copy an existing
 *  object in the `experience` array and change the values. To remove a whole
 *  section, set its toggle to false in config/site.config.ts instead of
 *  deleting content here.
 */

export interface About {
  /** Two or three short paragraphs. Plain sentences read best. */
  paragraphs: string[];
  /** A few quick facts shown beside the text. Keep them scannable. */
  highlights: { label: string; value: string }[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  /** e.g. "Berlin, Germany" or "Remote". */
  location: string;
  /** e.g. "Jul 2021" */
  start: string;
  /** "Present" for current roles. */
  end: string;
  /** Optional context line, e.g. "via Toptal". */
  via?: string;
  /** Bullet points. Lead with impact where you can. */
  points: string[];
  tech: string[];
}

export interface Project {
  name: string;
  /** Short description, one or two sentences. */
  description: string;
  href: string;
  tech: string[];
  /** Optional tag shown on the card, e.g. "Live" or "Open Source". */
  tag?: string;
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  /** Optional path to a school crest/logo in /public. */
  logo?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface PortfolioData {
  about: About;
  skills: SkillGroup[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
}

export const portfolio: PortfolioData = {
  about: {
    paragraphs: [
      'I bring over a decade of experience applying machine learning and generative AI across diverse domains and complex problems. I have built end-to-end agentic workflows and RAG pipelines, and I am comfortable translating business goals into data products and architecting the whole pipeline from concept to production.',
      'I have led teams and shipped ML systems from idea to production across fintech, eCommerce, and consulting, in both startup and enterprise environments.',
    ],
    highlights: [],
  },

  skills: [
    {
      title: 'Languages',
      items: ['Python', 'SQL', 'PySpark', 'JavaScript', 'TypeScript'],
    },
    {
      title: 'AI Agents & Orchestration',
      items: [
        'LangGraph',
        'LangChain',
        'CrewAI',
        'OpenAI Agents SDK',
        'MCP tool integration',
        'Function calling',
        'Structured outputs',
        'Multi-step reasoning',
      ],
    },
    {
      title: 'RAG, Embeddings & Vector DBs',
      items: [
        'End-to-end RAG',
        'Hybrid search',
        're-ranking',
        'Pinecone',
        'Weaviate',
        'ChromaDB',
        'FAISS',
        'Elasticsearch',
      ],
    },
    {
      title: 'Evaluation & Observability',
      items: [
        'Agent evals',
        'Regression harnesses',
        'LLM-as-judge',
        'Rubric scoring',
        'Guardrails',
        'Hallucination control',
        'Cost / latency dashboards',
      ],
    },
    {
      title: 'Model Training & Fine-tuning',
      items: ['SFT', 'LoRA', 'RLHF (PPO, GRPO)', 'PyTorch', 'TensorFlow', 'Hugging Face Transformers', 'vLLM', 'DeepSpeed'],
    },
    {
      title: 'Classical ML',
      items: ['XGBoost', 'LightGBM', 'CatBoost', 'scikit-learn', 'SHAP', 'NER', 'Recommendation & ranking'],
    },
    {
      title: 'Backend & Distributed Systems',
      items: ['REST APIs', 'Microservices', 'Spark / PySpark', 'Kafka', 'Hadoop', 'Hive', 'BigQuery', 'Large-scale ETL'],
    },
    {
      title: 'MLOps & Cloud',
      items: ['MLflow', 'Kubeflow', 'Docker', 'Kubernetes', 'AWS (SageMaker)', 'GCP (Vertex)', 'Azure', 'Drift detection'],
    },
  ],

  experience: [
    {
      role: 'MTS-1 Machine Learning Engineer',
      company: 'PayPal',
      location: 'Bangalore, India',
      start: 'Dec 2024',
      end: 'Present',
      points: [
        'Led architecture and 0-to-1 delivery of the KYC Ops Assistant, a production agentic AI service (LangGraph, CrewAI) on a fintech compliance surface, defining the orchestration layer for models, tools, memory, and decision-making. Doubled KYC conversions in 3 months.',
        'Designed the RAG pipeline (chunking, embeddings, vector retrieval, hybrid search, re-ranking, citation enforcement) and integrated multiple MCP tools, exposing internal services as guarded, schema-validated agent tools.',
        'Building an internal LLM evaluation and observability platform used across DS and ML teams: agent evals, regression harnesses, LLM-as-judge, guardrails, and offline plus online evaluation tied to quality, latency, hallucination, and cost.',
        'Fine-tuning LLMs as digital agents (Venmo) using SFT and RLHF (PPO, GRPO) on multi-GPU clusters, owning training, evaluation, monitoring, and production rollout.',
      ],
      tech: ['LangGraph', 'CrewAI', 'RAG', 'MCP', 'SFT', 'RLHF', 'PyTorch', 'LLM-as-judge'],
    },
    {
      role: 'Lead Data Scientist',
      company: 'Cars24',
      location: 'Bangalore, India',
      start: 'Nov 2021',
      end: 'Dec 2024',
      points: [
        'Managed a team of 5 data scientists: hired, set roadmap and priorities, ran code and model reviews, and mentored on system tradeoffs and production reliability.',
        'Owned the Dynamic Pricing Engine end to end (CatBoost), delivering a 4% gross-margin lift at scale with SHAP explainability and A/B testing as source of truth, designed around latency, cost, and conversion-velocity tradeoffs.',
        'Built and rolled out reusable team-level backend platforms for feature engineering, experimentation, deployment, and monitoring, adopted across product squads and reducing time-to-production.',
      ],
      tech: ['CatBoost', 'SHAP', 'A/B testing', 'PySpark', 'BigQuery', 'MLOps'],
    },
    {
      role: 'Senior Associate, Data Science',
      company: 'Bain & Company',
      location: 'Bangalore, India',
      start: 'Mar 2020',
      end: 'Oct 2021',
      points: [
        'Embedded technical advisor for Fortune-500 retail and telecom leadership: scoped workstreams and translated model behavior into executive decisions.',
        'Built demand-forecasting and price-optimization models (LightGBM, Hyperopt) that cut promotion spend by 5%.',
        "Built NLP pipelines (topic modeling, sentiment) for a telecom client's churn strategy.",
      ],
      tech: ['LightGBM', 'Hyperopt', 'NLP', 'Topic modeling', 'Python'],
    },
    {
      role: 'Lead Data Scientist',
      company: 'IndMoney',
      location: 'Gurgaon, India',
      start: 'Aug 2018',
      end: 'Feb 2020',
      via: '10th employee',
      points: [
        'Built and shipped the Mutual Fund Recommendation & Ranking Engine (XGBoost plus similarity ranking), a production fintech personalisation surface serving end users daily.',
        'Designed an AI-driven SMS transaction-parsing system (NER plus supervised text classification) for large-scale data enrichment and classification, with a labeling pipeline that continuously improved precision and recall on edge cases.',
        'Established the data-science function from scratch as the 10th employee, owning the end-to-end lifecycle.',
      ],
      tech: ['XGBoost', 'NER', 'Text classification', 'Recommendation', 'Python'],
    },
    {
      role: 'Data Scientist',
      company: 'Cogneau Systems',
      location: 'Gurgaon, India',
      start: 'Oct 2017',
      end: 'Jul 2018',
      points: [
        'Optimized a distribution-center network for a Malaysian logistics customer using DBSCAN, cutting operations cost by 30%.',
      ],
      tech: ['DBSCAN', 'Clustering', 'Python', 'Optimization'],
    },
    {
      role: 'Data Scientist',
      company: 'Simpli5d Technologies',
      location: 'Gurgaon, India',
      start: 'Nov 2016',
      end: 'Sep 2017',
      points: [
        'Built a real-time bot-detection classifier (Random Forest on Spark / PySpark) processing 10M+ user sessions per day across 120+ publishers.',
        'Designed the Spark feature pipeline and distributed-data infra for high-throughput, low-latency event processing.',
      ],
      tech: ['Random Forest', 'Spark', 'PySpark', 'Real-time', 'Feature engineering'],
    },
    {
      role: 'Trainee Decision Scientist',
      company: 'Mu Sigma',
      location: 'Bangalore, India',
      start: 'Aug 2014',
      end: 'Feb 2015',
      points: [
        'Analyzed search-advertising KPIs across Asia Pacific for Bing Ads.',
      ],
      tech: ['Analytics', 'SQL', 'Search advertising'],
    },
  ],

  projects: [
    {
      name: 'KYC Ops Assistant',
      description:
        'A production agentic AI service on a fintech compliance surface at PayPal. Orchestrates models, tools, memory, and decision-making with LangGraph and CrewAI over a RAG pipeline and MCP-integrated tools. Doubled KYC conversions in 3 months.',
      href: 'https://www.paypal.com',
      tech: ['LangGraph', 'CrewAI', 'RAG', 'MCP', 'Python'],
      tag: 'PayPal',
    },
    {
      name: 'LLM Evaluation & Observability Platform',
      description:
        'An internal platform used across DS and ML teams at PayPal: agent evals, regression harnesses, simulated trajectories, LLM-as-judge, rubric scoring, and guardrails, tied to quality, latency, hallucination, and cost, informing fallback and reliability decisions.',
      href: 'https://www.paypal.com',
      tech: ['LLM-as-judge', 'Guardrails', 'Observability', 'Python'],
      tag: 'PayPal',
    },
    {
      name: 'LLM Fine-tuning for Venmo',
      description:
        'Fine-tuned LLMs as digital agents using SFT and RLHF (PPO, GRPO) on multi-GPU clusters, owning training, evaluation, monitoring, and production rollout.',
      href: 'https://venmo.com',
      tech: ['SFT', 'RLHF', 'PPO', 'GRPO', 'DeepSpeed'],
      tag: 'PayPal',
    },
    {
      name: 'Dynamic Pricing Engine',
      description:
        'An end-to-end pricing engine at Cars24 built on CatBoost, delivering a 4% gross-margin lift at scale with SHAP explainability and A/B testing as source of truth, designed around latency, cost, and conversion-velocity tradeoffs.',
      href: 'https://www.cars24.com',
      tech: ['CatBoost', 'SHAP', 'A/B testing', 'Python'],
      tag: 'Cars24',
    },
    {
      name: 'Mutual Fund Recommendation Engine',
      description:
        'A production fintech personalisation surface at IndMoney (XGBoost plus similarity ranking) serving end users daily, built alongside the company data-science function from scratch as the 10th employee.',
      href: 'https://www.indmoney.com',
      tech: ['XGBoost', 'Ranking', 'Personalisation', 'Python'],
      tag: 'IndMoney',
    },
    {
      name: 'Real-Time Bot-Detection Classifier',
      description:
        'A Random Forest classifier on Spark / PySpark processing 10M+ user sessions per day across 120+ publishers, with a distributed feature pipeline built for high-throughput, low-latency event processing.',
      href: 'https://talent.toptal.com/resume/developers/vivek-gupta2',
      tech: ['Random Forest', 'Spark', 'PySpark', 'Real-time'],
      tag: 'Simpli5d',
    },
  ],

  education: [
    {
      degree: 'B.Tech., Bio Science',
      school: 'Indian Institute of Technology (IIT) Kanpur',
      location: 'Kanpur, India',
      period: '2010 - 2014',
      logo: '/logos/iitk.png',
    },
  ],

  certifications: [
    { name: 'Claude Certified Architect - Foundations', issuer: 'Anthropic', year: '2026' },
    { name: 'Long-Term Agentic Memory With LangGraph', issuer: 'DeepLearning.AI', year: '2026' },
    { name: 'Generative AI: Working with Large Language Models', issuer: 'LinkedIn Learning', year: '2023' },
    {
      name: 'Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization',
      issuer: 'Coursera',
      year: '2018',
    },
    { name: 'Structuring Machine Learning Projects', issuer: 'Coursera', year: '2018' },
  ],
};
