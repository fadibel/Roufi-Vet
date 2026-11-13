/**
 * Splits a heading into words that rise into place on load (CSS only, so it
 * plays before hydration and honours prefers-reduced-motion).
 *
 * segments: [{ text, className? }] lets part of the heading take an accent colour.
 */
export default function HeroWords({ segments, baseDelay = 0, step = 70 }) {
  let index = 0;
  return segments.map((segment, segmentIndex) => (
    <span key={segmentIndex} className={segment.className}>
      {segment.text.split(" ").map((word, wordIndex, words) => {
        const delay = baseDelay + index++ * step;
        return (
          <span key={wordIndex}>
            <span className="hero-word">
              <span style={{ "--d": `${delay}ms` }}>{word}</span>
            </span>
            {wordIndex < words.length - 1 || segmentIndex < segments.length - 1 ? " " : ""}
          </span>
        );
      })}
    </span>
  ));
}
