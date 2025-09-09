import EXAM_SECRETS_SAMPLES from "./EXAM_SECRETS_SAMPLES.js"
import EXAM_SECRETS_FULL_PAPER from "./EXAM_SECRETS_FULL_PAPER.js"
import RSGB_FULL_MOCK_1 from "./RSGB_FULL_MOCK_1.js"
import RSGB_FULL_MOCK_2 from "./RSGB_FULL_MOCK_2.js"
import RSGB_FULL_MOCK_3 from "./RSGB_FULL_MOCK_3.js"
import BBDL_FULL_QUIZZES from "./BBDL_FULL_QUIZZES.js"
import OWN_QUESTIONS from "./OWN_QUESTIONS.js"
import CLAUDE_QUIZ from "./CLAUDE_QUIZ.js"

const W99quiz = [
    ...RSGB_FULL_MOCK_1,
    ...RSGB_FULL_MOCK_2,
    ...RSGB_FULL_MOCK_3,
    ...EXAM_SECRETS_SAMPLES,
    ...EXAM_SECRETS_FULL_PAPER,
    ...BBDL_FULL_QUIZZES,
    ...OWN_QUESTIONS,
    ...CLAUDE_QUIZ
]

export default W99quiz