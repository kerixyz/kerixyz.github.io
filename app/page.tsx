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
        {`Currently, I'm a Data Science Fellow at Tech Impact, a nonprofit where I build tools and models to support state agencies and other nonprofits using machine learning, causal inference, and predictive analytics.`}
        <br/> <br/>
        {`I recently received my PhD from the University of Washington, where I studied live streaming feedback systems and human-AI interaction. I'm broadly interested in understanding how people interact with technology and using data to create more inclusive and effective digital experiences.`}
        <br/> <br/>
        {`In my free time, I have the `}
        <a
          href="https://instagram.com/kumoxyz_"
          target="_blank"
          rel="noopener noreferrer"
          className="underline transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
        >
          best cat
        </a>
        {` and I enjoy watching `}
        <a
          href="https://letterboxd.com/kerixyz/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
        >
          movies
        </a>
        {`.`}
      </p>

      <ul className="font-sm mt-2 mb-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:keri.xyz@gmail.com"
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
