const mainStyles = {
  maxHeight: '25rem',
  height: '100vh',
  display: 'grid',
  placeItems: 'center',
};

const quoteStyles = {
  fontSize: '1.25rem',
  maxWidth: '80%',
  margin: 'auto',
};

const quotes = [
  'To forgive is to set a prisoner free and discover that the prisoner was you. - Lewis B. Smedes',
  "Happiness is not the absence of problems, it's the ability to deal with them",
  'It is time you understand that true spirituality means that you yourself become the living expression of the divine teaching you follow. - Omraam Mikhaël Aïvanhov',
  'To a disciple who was forever complaining about others, the Master said, ‘If it is peace you want, seek to change yourself, not other people. It is easier to protect your feet with slippers than to carpet the whole of the earth.’ - Anthony de Mello',
  "If the path before you is clear, you're probably on someone else's. - Joseph Campbell",
  'There are people who make no mistakes because they never wish to do anything worth doing. - Goethe',
  'Happiness is like a butterfly: the more you chase it, the more it will evade you, but if you notice the other things around you, it will gently come and sit on your shoulder. - Henry David Thoreau',
  'Time is the king of all men, he is their parent and their grave, and gives them what he will and not what they crave. - Pericles',
  "You might feel dumb asking questions, but you look dumber when you don't get it because you failed to ask.",
];
const quote = quotes[Math.floor(Math.random() * quotes.length + 1)];

const Quote = () => (
  <main style={mainStyles} className="container padding">
    <p style={quoteStyles}>{`"${quote}"`}</p>
  </main>
);

export default Quote;
