/* eslint-disable react/no-unescaped-entities */
import Text from "../components/Text"

const Hero: React.FC = () => {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <Text
          variant="h1"
          className="text-4xl sm:text-5xl font-extrabold tracking-tight"
        >
          Tomás Nasjleti
        </Text>
        <Text
          variant="p"
          className="text-xl sm:text-2xl font-medium text-neutral-500 block"
        >
          Web Developer
        </Text>
      </header>

      <section className="space-y-6 text-neutral-600 text-base sm:text-lg leading-relaxed">
        <Text variant="p" className="block">
          I am a highly motivated programmer from Argentina based in Malmö,
          Sweden, currently working as a full-stack developer at{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.knowit.se/"
            className="font-medium text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900 transition-colors"
          >
            Knowit
          </a>
          . I have a strong passion for engineering seamless user experiences and constantly enjoy mastering new tools and technologies.
        </Text>

        <Text variant="p" className="block">
          My daily stack revolves around{" "}
          <strong className="font-medium text-neutral-900">React</strong>,{" "}
          <strong className="font-medium text-neutral-900">Next.js</strong>, and{" "}
          <strong className="font-medium text-neutral-900">TypeScript</strong>. For backend and APIs, I normally use{" "}
          <strong className="font-medium text-neutral-900">Node.js</strong>,{" "}
          <strong className="font-medium text-neutral-900">Express</strong>,{" "}
          <strong className="font-medium text-neutral-900">PostgreSQL</strong>, and{" "}
          <strong className="font-medium text-neutral-900">MongoDB</strong>. I also enjoy extending web capabilities to other platforms, building mobile and desktop apps with{" "}
          <strong className="font-medium text-neutral-900">React Native</strong>,{" "}
          <strong className="font-medium text-neutral-900">Expo</strong>,{" "}
          <strong className="font-medium text-neutral-900">Electron</strong>, and{" "}
          <strong className="font-medium text-neutral-900">Tauri</strong>.
        </Text>

        <Text variant="p" className="block">
          I love staying ahead of the newest AI technologies and implementing solutions using them, particularly through tools like <strong className="font-medium text-neutral-900">open-code</strong> and <strong className="font-medium text-neutral-900">spec-driven development</strong>. I have hands-on experience building agentic AI workflows with both local and cloud models, alongside solid cloud experience deploying and managing applications on <strong className="font-medium text-neutral-900">Azure</strong>.
        </Text>
      </section>

      <div className="pt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm sm:text-base font-medium">
        <a
          href="https://github.com/TomAndril"
          target="_blank"
          rel="noreferrer"
          className="text-neutral-500 hover:text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/tominasweb/"
          target="_blank"
          rel="noreferrer"
          className="text-neutral-500 hover:text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="mailto:acatomas@gmail.com"
          className="text-neutral-500 hover:text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900 transition-colors"
        >
          Email
        </a>
      </div>
    </div>
  )
}

export default Hero
