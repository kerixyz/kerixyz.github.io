export const metadata = {
  title: 'Research',
  description: 'My research work.',
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

interface ResearchPaperProps {
  title: string
  description: string
  link?: string
}

function ResearchPaper({ title, description, link }: ResearchPaperProps) {
  return (
    <li className="mb-4">
      <div className="flex items-start">
        {link ? (
          <a
            className="flex items-start transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href={link}
          >
            <div className="mt-1.5">
              <ArrowIcon />
            </div>
            <div className="ml-2">
              <p className="font-medium">{title}</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                {description}
              </p>
            </div>
          </a>
        ) : (
          <div className="flex items-start">
            <div className="mt-1.5">
              <ArrowIcon />
            </div>
            <div className="ml-2">
              <p className="font-medium">{title}</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                {description}
              </p>
            </div>
          </div>
        )}
      </div>
    </li>
  )
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-4 tracking-tighter">research</h1>
      <p className="mb-8">
        My research focuses on understanding and improving digital experiences through
        human-centered design and data science approaches.
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Live Streaming and Feedback</h2>
        <ul>
          <ResearchPaper
            title="Post-Stream Analysis of Live Stream Chat"
            description="Built prototypes of message-level and persona-level analytics of a streamer's chat to help them revisit missed messages and support the process of reflection for both streamers and viewers."
          />
          <ResearchPaper
            title="Developing Constructive Feedback for Live Streamers"
            description="Developed a system that solicits constructive feedback on behalf of live streamers from their community members and provides output in a dashboard."
          />
          <ResearchPaper
            title="Analytics Needs of Video Game Streamers"
            description="Conducted interview studies with streamers from Twitch and Mixer to understand the information gap in their streaming process and identify their analytics needs."
            link="https://dl.acm.org/doi/abs/10.1145/3411764.3445320"
          />
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Human-AI Interaction</h2>
        <ul>
          <ResearchPaper
            title="Human-LM Alignment"
            description="Tested popular large language models on high-stakes decision making tasks like recidivism prediction, analyzing their agreement with human predictions and existing models. Found that providing different types of information, including distractor information like photos, can significantly influence LM decisions and that current LMs are not the right tools for these types of tasks."
            link="https://arxiv.org/pdf/2410.15471"
          />
          <ResearchPaper
            title="Advancing Human-AI Complementarity"
            description="Examined how users with varying levels of expertise interact with AI recommendations in a blood vessel labeling task. Found that user base expertise, complementary AI tuning to address users' strengths and weaknesses, and users' perception of AI performance all significantly impact Human-AI team performance."
            link="https://dl.acm.org/doi/abs/10.1145/3534561"
          />
          <ResearchPaper
            title="Race Presentation on Human Judgement of Recidivism"
            description="Explored how the saliency of race information presentation influences users' recidivism judgements. Found that adding photos to race labels had a significant impact on predictions for users who identified as female, with black defendants being less likely to be predicted to recidivate compared to white defendants."
            link="https://dl.acm.org/doi/abs/10.1145/3313831.3376257"
          />
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Future of Work and Hybrid Experiences</h2>
        <ul>
          <ResearchPaper
            title="Perspectives"
            description="Designed and evaluated a novel hybrid meeting system that digitally composites everyone into a virtual room where each person has a unique but spatially consistent viewpoint. Found that this approach supports natural interactions, creates a strong sense of co-presence, and reduces cognitive load compared to commercial alternatives like Gallery, Together Mode, and Front Row."
            link="https://www.microsoft.com/en-us/research/uploads/prod/2023/10/2023-CSCW-Perspectives.pdf"
          />
        </ul>
      </div>
    </section>
  )
}
