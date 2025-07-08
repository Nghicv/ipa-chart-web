import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IPA Chart - International Phonetic Alphabet',
  description: 'Complete guide to the International Phonetic Alphabet with interactive chart and explanations.',
}

export default function Home() {
  const consonants = [
    // Plosives
    { symbol: 'p', name: 'Voiceless bilabial plosive', example: 'pat' },
    { symbol: 'b', name: 'Voiced bilabial plosive', example: 'bat' },
    { symbol: 't', name: 'Voiceless alveolar plosive', example: 'top' },
    { symbol: 'd', name: 'Voiced alveolar plosive', example: 'dog' },
    { symbol: 'k', name: 'Voiceless velar plosive', example: 'cat' },
    { symbol: 'g', name: 'Voiced velar plosive', example: 'go' },
    { symbol: 'ʔ', name: 'Glottal stop', example: 'uh-oh' },
    
    // Nasals
    { symbol: 'm', name: 'Bilabial nasal', example: 'man' },
    { symbol: 'n', name: 'Alveolar nasal', example: 'no' },
    { symbol: 'ŋ', name: 'Velar nasal', example: 'sing' },
    
    // Fricatives
    { symbol: 'f', name: 'Voiceless labiodental fricative', example: 'fan' },
    { symbol: 'v', name: 'Voiced labiodental fricative', example: 'van' },
    { symbol: 'θ', name: 'Voiceless dental fricative', example: 'think' },
    { symbol: 'ð', name: 'Voiced dental fricative', example: 'this' },
    { symbol: 's', name: 'Voiceless alveolar fricative', example: 'sun' },
    { symbol: 'z', name: 'Voiced alveolar fricative', example: 'zoo' },
    { symbol: 'ʃ', name: 'Voiceless postalveolar fricative', example: 'ship' },
    { symbol: 'ʒ', name: 'Voiced postalveolar fricative', example: 'measure' },
    { symbol: 'h', name: 'Voiceless glottal fricative', example: 'hat' },
    
    // Approximants
    { symbol: 'l', name: 'Alveolar lateral approximant', example: 'love' },
    { symbol: 'r', name: 'Alveolar approximant', example: 'run' },
    { symbol: 'j', name: 'Palatal approximant', example: 'yes' },
    { symbol: 'w', name: 'Labio-velar approximant', example: 'win' },
    
    // Affricates
    { symbol: 'tʃ', name: 'Voiceless postalveolar affricate', example: 'church' },
    { symbol: 'dʒ', name: 'Voiced postalveolar affricate', example: 'judge' },
  ]

  const vowels = [
    // Close vowels
    { symbol: 'i', name: 'Close front unrounded vowel', example: 'see' },
    { symbol: 'ɪ', name: 'Near-close front unrounded vowel', example: 'sit' },
    { symbol: 'u', name: 'Close back rounded vowel', example: 'boot' },
    { symbol: 'ʊ', name: 'Near-close back rounded vowel', example: 'put' },
    
    // Mid vowels
    { symbol: 'e', name: 'Close-mid front unrounded vowel', example: 'bed' },
    { symbol: 'ə', name: 'Mid central vowel (schwa)', example: 'about' },
    { symbol: 'ɜ', name: 'Open-mid central unrounded vowel', example: 'bird' },
    { symbol: 'o', name: 'Close-mid back rounded vowel', example: 'go' },
    { symbol: 'ɔ', name: 'Open-mid back rounded vowel', example: 'law' },
    
    // Open vowels
    { symbol: 'æ', name: 'Near-open front unrounded vowel', example: 'cat' },
    { symbol: 'ɑ', name: 'Open back unrounded vowel', example: 'father' },
    { symbol: 'ʌ', name: 'Open-mid back unrounded vowel', example: 'cup' },
  ]

  const diphthongs = [
    { symbol: 'aɪ', name: 'Diphthong', example: 'my' },
    { symbol: 'aʊ', name: 'Diphthong', example: 'now' },
    { symbol: 'eɪ', name: 'Diphthong', example: 'day' },
    { symbol: 'oʊ', name: 'Diphthong', example: 'go' },
    { symbol: 'ɔɪ', name: 'Diphthong', example: 'boy' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            International Phonetic Alphabet
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The IPA is a standardized representation of speech sounds in written form. 
            It provides a consistent way to transcribe the sounds of any language.
          </p>
        </header>

        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">What is the IPA?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                The International Phonetic Alphabet (IPA) is an alphabetic system of phonetic notation 
                based primarily on the Latin script. It was devised by the International Phonetic Association 
                in the late 19th century as a standardized representation of speech sounds in written form.
              </p>
              <p className="text-gray-700 mb-4">
                The IPA is used by lexicographers, foreign language students and teachers, linguists, 
                speech-language pathologists, singers, actors, constructed language creators, and translators.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Features:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Universal system for all languages
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  One symbol per sound principle
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Precise pronunciation guidance
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Scientific accuracy in phonetics
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Consonants Chart */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Consonants</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {consonants.map((consonant, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-blue-50 transition-colors">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{consonant.symbol}</div>
                  <div className="text-sm text-gray-600 mb-2">{consonant.name}</div>
                  <div className="text-sm text-gray-800 italic">/{consonant.example}/</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vowels Chart */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Vowels</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {vowels.map((vowel, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-red-50 transition-colors">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">{vowel.symbol}</div>
                  <div className="text-sm text-gray-600 mb-2">{vowel.name}</div>
                  <div className="text-sm text-gray-800 italic">/{vowel.example}/</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Diphthongs */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Diphthongs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {diphthongs.map((diphthong, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-green-50 transition-colors">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">{diphthong.symbol}</div>
                  <div className="text-sm text-gray-600 mb-2">{diphthong.name}</div>
                  <div className="text-sm text-gray-800 italic">/{diphthong.example}/</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Usage Tips */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">How to Use the IPA</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">For Language Learning:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">1.</span>
                  Learn the sounds first, then the symbols
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">2.</span>
                  Practice with familiar words
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">3.</span>
                  Use IPA in dictionaries for pronunciation
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">4.</span>
                  Focus on sounds not in your native language
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Common Mistakes to Avoid:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">×</span>
                  Confusing similar symbols (e.g., ɪ vs i)
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">×</span>
                  Ignoring diacritical marks
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">×</span>
                  Assuming one symbol per letter
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">×</span>
                  Not practicing actual pronunciation
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-600">
          <p>Learn more about phonetics and the International Phonetic Alphabet</p>
          <p className="mt-2">© 2024 IPA Chart Guide</p>
        </footer>
      </div>
    </div>
  )
}
