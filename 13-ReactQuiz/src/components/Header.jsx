import quiz from '../assets/quiz-logo.png'

export default function Header() {
    return (
        <header>
            <img src={quiz} alt='quizlogo'/>
            <h1>React Quiz</h1>

        </header>
    );
}