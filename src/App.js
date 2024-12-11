import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col, Button, Alert} from "react-bootstrap";
import {useState} from "react";

const berserkQuotes = [
    {
        author: "Guts",
        quote: "Even if we painstakingly piece together something lost, it doesn’t mean things will ever go back to how they were."
    },
    {
        author: "Griffith",
        quote: "A dream… It’s something you do for yourself, not for others."
    },
    {
        author: "Skull Knight",
        quote: "Do not seek death. Seek destruction."
    },
    {
        author: "Guts",
        quote: "If you’re always worried about crushing the ants beneath you, you won’t be able to walk."
    },
    {
        author: "Puck",
        quote: "You look better covered in blood and swinging your sword!"
    },
    {
        author: "Griffith",
        quote: "In this world, is the destiny of mankind controlled by some transcendental entity or law? Is it like the hand of God hovering above?"
    },
    {
        author: "Guts",
        quote: "My place really was at your side. You made me forget everything. You were the only one who could."
    },
    {
        author: "Griffith",
        quote: "He who does not punish evil commands it to be done."
    },
    {
        author: "Skull Knight",
        quote: "A tiny spark remains in the heart of man… capable of driving him to stand up, even while he is wounded or heartbroken."
    },
    {
        author: "Guts",
        quote: "The world is not beautiful, therefore it is."
    },
    {
        author: "Griffith",
        quote: "For me to call a man my friend, he must be equal to me in all respects."
    },
    {
        author: "Guts",
        quote: "You should enjoy the little detours. To the fullest. Because that's where you'll find the things more important than what you want."
    },
    {
        author: "Skull Knight",
        quote: "You will face your own darkness, not only against the external darkness but the darkness within yourself."
    },
    {
        author: "Guts",
        quote: "I’m going to find my own way. I’ll walk down my own path."
    },
    {
        author: "Griffith",
        quote: "To accomplish anything, you must be ready to throw away everything."
    }
];


function App() {

    const [show, setShow] = useState(false);
    const [quote, setQuote] = useState({});

    const getRandomNumber = (min, max) => {
        return Math.round(Math.random() * (max - min) + min);
    }

    const getRandomQuote = () => {
        setShow(true);
        setQuote(berserkQuotes[getRandomNumber(0, berserkQuotes.length)]);
    }

    return (
        <Container className={'my-5'}>
            <Row>
                <Col md={6} className={'mx-auto text-center'}>
                    <h1 className={'mb-4'}>Random quote generator</h1>
                    <Button variant={'success'}
                            size={'lg'}
                            className={'text-uppercase fw-bold px-5 mb-4'}
                            onClick={() => getRandomQuote()}>
                        Get quote</Button>

                    {(show === true) ? (
                        <Alert variant="success" onClose={() => setShow(false)} dismissible>
                            <Alert.Heading>
                                <strong>
                                    {(quote?.author) ? (
                                        quote.author
                                    ) : (
                                        ''
                                    )}
                                </strong>
                            </Alert.Heading>
                            {(quote?.quote) ? (
                                <p>{quote.quote}</p>
                            ) : (
                                ''
                            )}
                        </Alert>
                    ) : ('')
                    }

                </Col>
            </Row>
        </Container>
    );
}

export default App;
