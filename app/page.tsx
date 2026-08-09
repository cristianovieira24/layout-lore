import { CodiceExperience } from "./codice-experience";
import { MANUSCRIPT, MASTER_NOTE } from "./story-manuscript";

export default function Home() {
  return <CodiceExperience manuscript={MANUSCRIPT} masterNote={MASTER_NOTE} />;
}
