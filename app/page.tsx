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

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        keri mallari
      </h1>
      <p className="mb-4">
        {`Hello, I'm Keri. I'm a PhD Candidate at the University of Washington's Human Centered Design and Engineering Department. I'm a Human-Computer Interaction (HCI) Researcher studying online feedback exchange in live stream communities.`}
      </p>

      <p className="mb-4">
        {'My work focuses on designing experiments, conducting statistical analysis, optimizing models, and developing data-driven solutions to improve user experiences while creating inclusive online spaces.'}
      </p>

      <br/>


      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        projects
      </h1>
      <ul>
        <li><b>Live Streamers and Feedback</b></li>
          <ul>
          <li>
                <a
                  className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://streamfeed.xyz"
                >
                  <ArrowIcon />
                  <p className="ml-2 h-7">Developing Constructive Feedback for Live Streamers</p>
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

        <li><b>Future of Work and Hybrid Experiences</b></li>
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
          <br/>

        <li><b>Human-AI Interaction</b></li>
          <ul>
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
      </ul>
      <br/>

      {/* <div className="my-8">
        <BlogPosts />
      </div> */}


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
