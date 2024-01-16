import Github from '../icons/Github'
import LinkedIn from '../icons/LinkedIn'

export default function Footer() {
  return (
    <div className="flex gap-8 text-center items-center mt-4 py-6">
      <p className="text-base text-pretty text-white/45">Proyecto personal</p>
      <div className="flex gap-4 items-center justify-center">
        <a
          href="https://www.linkedin.com/in/juan-jos%C3%A9-medina-guerrero-0a81b51a6/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn />
        </a>
        <a href="https://github.com/Lisbrun" target="_blank" rel="noreferrer">
          <Github />
        </a>
      </div>
    </div>
  )
}
