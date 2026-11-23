# Rudra Teja Goud – Portfolio

React 18 + TypeScript + Vite, Framer Motion, Lucide React. Plain CSS (one stylesheet per component).

## Run
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # type-check + production build -> dist/
    npm run preview    # serve the production build

## Where to edit content (src/data)
| File | What it controls |
|---|---|
| profile.ts | Name, hero tagline, About text, contact links, hero photo, resume path |
| experience.ts | **Current job / work experience.** Empty = section hidden. Add an entry and it appears (plus navbar link and About sentence) |
| skills.ts | Skill groups + marquee words |
| projects.ts | Projects. Add `repo` / `live` URLs to show Code / Live buttons |
| education.ts, certifications.ts | Education rows, certificate links |

Resume file: `public/Rudra_Teja_Goud_CV.pdf` (replace the file, keep the name).
Your photo: put it in `src/assets/images/`, import it in `data/profile.ts`, set `photo`.

## Structure
    src/
      assets/images, icons
      components/  Navbar, Footer, Button, FadeIn, Magnet, AnimatedText, FitText, SectionHeading, ProjectCard  (each: .tsx + .css)
      sections/    Hero, Marquee, About, Experience, Skills, Projects, Education, Certifications, Contact  (each: .tsx + .css)
      pages/       HomePage.tsx (composes the sections)
      data/        profile, experience, skills, projects, education, certifications
      hooks/       useMediaQuery
      styles/      variables.css, global.css
      types/       index.ts
