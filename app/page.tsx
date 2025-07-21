import { BlogPosts } from 'app/components/posts'
import { ListFormat } from 'typescript'

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

function TriangleIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 2L10 10H2L6 2Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  )
}

function LeftPointingTriangleIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 6L2 10L2 2L10 6Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  )
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        keri mallari
      </h1>
      <p className="mb-2">
        {`I’m a research and data scientist with expertise in analyzing digital media and live-streaming user behavior. My work spans across designing experiments, conducting statistical analysis, analyzing, training and optimizing models, and developing data-driven solutions to improve user experiences while creating inclusive online spaces. Additionally, I’m a trained software engineer with experience in building and launching web applications using React, Next.js, Express, Node.js, and PostgreSQL.`}
      </p>

      <ul className="font-sm mt-2 mb-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:kmallari@uw.edu"
          >
            <TriangleIcon />
            <p className="ml-2 h-7">email </p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://keri.xyz/Mallari_CV.pdf"
          >
            <TriangleIcon />
            <p className="ml-2 h-7">cv</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://scholar.google.com/citations?user=iO6gHzMAAAAJ&hl=en&oi=ao"
          >
            <TriangleIcon />
            <p className="ml-2 h-7">publications</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/kerixyz/"
          >
            <TriangleIcon />
            <p className="ml-2 h-7">linkedin</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.github.com/kerixyz"
          >
            <TriangleIcon />
            <p className="ml-2 h-7">github</p>
          </a>
        </li>
      </ul>

      <h2 className="mb-4 text-2xl font-semibold tracking-tighter">
        research
      </h2>
      <ul>
        <li><b>Live Streamers and Feedback</b></li>
          <ul>
            <li>
                <a
                  className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                  rel="noopener noreferrer"
                  target="_blank"
                  href=""
                >
                  <ArrowIcon />
                  <p className="ml-2 h-7">Post-Stream Analysis of Live Stream Chat (Under Review)</p>
                </a>
              </li>
            <li></li>
            <li>
                <a
                  className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                  rel="noopener noreferrer"
                  target="_blank"
                  href=""
                >
                  <ArrowIcon />
                  <p className="ml-2 h-7">Developing Constructive Feedback for Live Streamers (Under Review)</p>
                </a>
              </li>
            <li>
                <a
                  className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://dl.acm.org/doi/abs/10.1145/3411764.3445320"
                >
                  <ArrowIcon />
                  <p className="ml-2 h-7">Analytics Needs of Video Game Streamers</p>
                </a>
              </li>
          </ul>
          <br/>

        <li><b>Human-AI Interaction</b></li>
          <ul>
            <li>
              <a
                className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://arxiv.org/pdf/2410.15471"
              >
                <ArrowIcon />
                <p className="ml-2 h-7">Human-LM Alignment</p>
              </a>
            </li>
            <li>
              <a
                className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://dl.acm.org/doi/abs/10.1145/3534561"
              >
                <ArrowIcon />
                <p className="ml-2 h-7">Advancing Human-AI Complementarity</p>
              </a>
            </li>

            <li>
              <a
                className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://dl.acm.org/doi/abs/10.1145/3313831.3376257"
              >
                <ArrowIcon />
                <p className="ml-2 h-7">Examining how Race Presentation Impacts Human Judgement of Recidivism</p>
              </a>
            </li>
          </ul>
        <br/>

        {/* <li><b>Future of Work and Hybrid Experiences</b></li>
          <ul>
            <li>
              <a
                className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.youtube.com/watch?v=Zl5M5e1fxIA"
              >
                <ArrowIcon />
                <p className="ml-2 h-7">Hybrid Meeting Prototype</p>
              </a>
            </li>
            <li>
              <a
                className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.microsoft.com/en-us/research/uploads/prod/2023/10/2023-CSCW-Perspectives.pdf"
              >
                <ArrowIcon />
                <p className="ml-2 h-7">Perspectives Paper</p>
              </a>
            </li>
          </ul> 
        <br/> */}
      </ul>


      <h2 className="mt-4 mb-2 text-2xl font-semibold tracking-tighter">
        check out my friends' research
      </h2>
      <ul>
        <li>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.andrewneang.com/"
            >
                <LeftPointingTriangleIcon />
                <p className="ml-2 h-7">Andrew Neang</p>
            </a>
        </li>
        <li>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.sprwilliams.com/"
            >
                <LeftPointingTriangleIcon />
                <p className="ml-2 h-7">Spencer Williams</p>
            </a>
        </li>
        <li>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.neillytan.com/"
            >
                <LeftPointingTriangleIcon />
                <p className="ml-2 h-7">Neilly Tan</p>
            </a>
        </li>
        <li>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href="https://bogeumchoi.com/"
            >
                <LeftPointingTriangleIcon />
                <p className="ml-2 h-7">Bogeum Choi</p>
            </a>
        </li>
        <li>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href="https://willsutherland.com/"
            >
                <LeftPointingTriangleIcon />
                <p className="ml-2 h-7">Will Sutherland</p>
            </a>
        </li>
      </ul>


      {/* <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        teaching
      </h1>
      <ul>
        <li><b>INFO 490/491</b>: Info Undergraduate Capstone</li>
          <ul>
            <li>TA: Winter 2022, 2023, 2024; Spring 2022, 2023, 2024</li>
          </ul>
          <br/>

        <li><b>HCDE 451</b>: UX Prototyping</li>
          <ul>
            <li>TA: Fall 2020, 2023</li>
          </ul>
          <br/>

        <li><b>HCDE 538</b>: Physical Prototyping</li>
          <ul>
            <li>TA: Winter 2021, Fall 2021</li>
          </ul>
          <br/>
        
        <li><b>HCDE 539</b>: Designing for Behavior Change</li>
          <ul>
            <li>TA: Spring 2021</li>
          </ul>
          <br/>
      </ul> */}
    </section>

  )
}
