import { Metadata } from 'next'
import { SocialLinks } from "../components/SocialLinks";

export const metadata: Metadata = {
  title: 'IPA Chart - International Phonetic Alphabet',
  description: 'Complete guide to the International Phonetic Alphabet with interactive chart and explanations.',
}

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


const socialLinksList = [
  { name: "X (Twitter)", url: "https://x.com/ipachartt" },
  { name: "Youtube", url: "https://www.youtube.com/@ipachartt" },
  { name: "YourQuote", url: "https://www.yourquote.in/ipa-chart-d0e2v/quotes" },
  { name: "WalkScore", url: "https://www.walkscore.com/people/306771006032/ipachart" },
  { name: "Twitch", url: "https://www.twitch.tv/ipachart" },
  { name: "TheYeshivaWorld", url: "https://www.theyeshivaworld.com/coffeeroom/users/ipachart" },
  { name: "Symbaloo", url: "https://www.symbaloo.com/mix/ipa-chart-app" },
  { name: "SuaMusica", url: "https://www.suamusica.com.br/ipachart" },
  { name: "SpigotMC", url: "https://www.spigotmc.org/members/ipachart.2326525/" },
  { name: "Speedrun", url: "https://www.speedrun.com/users/ipachart" },
  { name: "Smitefire", url: "https://www.smitefire.com/profile/ipachart-216604?profilepage" },
  { name: "Slideserve", url: "https://www.slideserve.com/ipachart" },
  { name: "Reddit", url: "https://www.reddit.com/user/Beginning_Citron_339/" },
  { name: "Plurk", url: "https://www.plurk.com/ipachart/public" },
  { name: "Pearltrees", url: "https://www.pearltrees.com/ipachart" },
  { name: "Passes", url: "https://www.passes.com/ipachart" },
  { name: "OpenRec", url: "https://www.openrec.tv/user/ipachart/about" },
  { name: "MyMiniFactory", url: "https://www.myminifactory.com/users/ipachart" },
  { name: "Mixcloud", url: "https://www.mixcloud.com/ipachart/" },
  { name: "HalalTrip", url: "https://www.halaltrip.com/user/profile/238243/ipachart/" },
  { name: "GTA5-Mods", url: "https://www.gta5-mods.com/users/ipachart" },
  { name: "GaiaOnline", url: "https://www.gaiaonline.com/profiles/ipachart/50534265/" },
  { name: "Free-eBooks", url: "https://www.free-ebooks.net/profile/1629451/ipa-chart-app" },
  { name: "FDb.cz", url: "https://www.fdb.cz/clen/229753-ipachart.html" },
  { name: "Facer", url: "https://www.facer.io/u/ipachart" },
  { name: "DeviantArt", url: "https://www.deviantart.com/ipachart" },
  { name: "Designspiration", url: "https://www.designspiration.com/ipachartapp/saves/" },
  { name: "Dailymotion", url: "https://www.dailymotion.com/ipachart" },
  { name: "Chichi-pui", url: "https://www.chichi-pui.com/users/ipachart/" },
  { name: "BrickLink", url: "https://www.bricklink.com/aboutMe.asp?u=ipachart" },
  { name: "Blogger", url: "https://www.blogger.com/profile/00028939747026995690" },
  { name: "Behance", url: "https://www.behance.net/ipachart" },
  { name: "BeatStars", url: "https://www.beatstars.com/ipachartapp/about" },
  { name: "Bark", url: "https://www.bark.com/en/ca/company/ipa-chart-app/3OjEM1/" },
  { name: "BandLab", url: "https://www.bandlab.com/ipachart" },
  { name: "Band.us", url: "https://www.band.us/band/99117182" },
  { name: "Balatarin", url: "https://www.balatarin.com/users/ipachart" },
  { name: "Wirtube", url: "https://wirtube.de/a/ipachart/video-channels" },
  { name: "Wallhaven", url: "https://wallhaven.cc/user/ipachart" },
  { name: "Vocal.media", url: "https://vocal.media/authors/ipachart" },
  { name: "Viblo", url: "https://viblo.asia/u/ipachart/contact" },
  { name: "Velog", url: "https://velog.io/@ipachart/about" },
  { name: "Varecha.pravda.sk", url: "https://varecha.pravda.sk/profil/ipachart/o-mne/" },
  { name: "Unityroom", url: "https://unityroom.com/users/ipachart" },
  { name: "Trakteer", url: "https://trakteer.id/ipachart" },
  { name: "Tawk.to", url: "https://tawk.to/ipachartt" },
  { name: "Stocktwits", url: "https://stocktwits.com/ipachart" },
  { name: "Spiderum", url: "https://spiderum.com/nguoi-dung/ipachart" },
  { name: "Sketchfab", url: "https://sketchfab.com/ipachart" },
  { name: "Google Sites", url: "https://sites.google.com/view/ipachart/" },
  { name: "SEOSiteCheckup", url: "https://seositecheckup.com/seo-audit/ipachart.app" },
  { name: "Scrapbox", url: "https://scrapbox.io/ipachart/IPA_Chart_App" },
  { name: "Google Scholar", url: "https://scholar.google.com/citations?view_op=list_works&hl=vi&hl=vi&user=GD6NW6QAAAAJ" },
  { name: "RoutineHub", url: "https://routinehub.co/user/ipachart" },
  { name: "Roomstyler", url: "https://roomstyler.com/users/ipachart" },
  { name: "Qiita", url: "https://qiita.com/ipachart" },
  { name: "PxHere", url: "https://pxhere.com/en/photographer-me/4672900" },
  { name: "PubHTML5", url: "https://pubhtml5.com/homepage/rhpct/" },
  { name: "Pixabay", url: "https://pixabay.com/users/ipachart-51073424/" },
  { name: "PBase", url: "https://pbase.com/ipachart/image/175577703" },
  { name: "Bitchute", url: "https://old.bitchute.com/channel/eF0jBKDv3xpc/" },
  { name: "OK.ru", url: "https://ok.ru/profile/910159438297/statuses/157379020911577" },
  { name: "Odysee", url: "https://odysee.com/@ipachart:d96a413d0816e3d2a175adf1c4c43ea0b11af0c9" },
  { name: "MyAnimeList", url: "https://myanimelist.net/profile/ipachart" },
  { name: "Monocil", url: "https://monocil.jp/users/ipachart/" },
  { name: "Make A GIF", url: "https://makeagif.com/user/ipachart?ref=otNt73" },
  { name: "Linktree", url: "https://linktr.ee/ipachart" },
  { name: "Linkr.bio", url: "https://linkr.bio/ipachart/" },
  { name: "Link.space", url: "https://link.space/@ipachart" },
  { name: "Lightroom", url: "https://lightroom.adobe.com/u/ipachart" },
  { name: "LeetCode", url: "https://leetcode.com/u/ipachart/" },
  { name: "Issuu", url: "https://issuu.com/ipachart" },
  { name: "IPLogger", url: "https://iplogger.org/logger/TKKi51hSVMX6/" },
  { name: "Wordpress", url: "https://ipacharts9.wordpress.com/" },
  { name: "Postman", url: "https://ipachartapp-6288247.postman.co/me?" },
  { name: "Tumblr", url: "https://ipachart.tumblr.com/" },
  { name: "Blogspot", url: "https://ipachart.blogspot.com/2025/06/ipa-chart-app.html" },
  { name: "Docker Hub", url: "https://hub.docker.com/u/ipachart" },
  { name: "HeyLink.me", url: "https://heylink.me/ipachart/" },
  { name: "HackMD", url: "https://hackmd.io/@ipachart/Sk21yy1Hxe" },
  { name: "Google Groups", url: "https://groups.google.com/g/ipachart/c/abpz-KC2sHk" },
  { name: "Gravatar", url: "https://gravatar.com/ipachart" },
  { name: "GitLab", url: "https://gitlab.com/ipachart" },
  { name: "M5Stack Forum", url: "https://forum.m5stack.com/user/ipachart" },
  { name: "Index.hu Forum", url: "https://forum.index.hu/User/UserDescription?u=2110517" },
  { name: "FlipHTML5", url: "https://fliphtml5.com/homepage/ubbup/ipachart/" },
  { name: "Flipboard", url: "https://flipboard.com/profile" },
  { name: "iSLCollective", url: "https://en.islcollective.com/portfolio/12605411" },
  { name: "Spotify", url: "https://creators.spotify.com/pod/show/ipa-chart-app/episodes/IPA-Chart-App-e34riqf" },
  { name: "Coub", url: "https://coub.com/ipachart" },
  { name: "HubSpot Community", url: "https://community.hubspot.com/t5/user/viewprofilepage/user-id/959955" },
  { name: "Booklog.jp", url: "https://booklog.jp/users/ipachart/profile" },
  { name: "Beacons.ai", url: "https://beacons.ai/ipachart" },
  { name: "Roll20", url: "https://app.roll20.net/users/16475771/ipachart" },
  { name: "AnyFlip", url: "https://anyflip.com/homepage/guedn" },
  { name: "Ameblo", url: "https://ameblo.jp/ipachart/" },
  { name: "AllMyLinks", url: "https://allmylinks.com/ipachartapp" },
  { name: "About.me", url: "https://about.me/ipachart" },
  { name: "500px", url: "https://500px.com/p/ipachartapp?view=photos" },
  { name: "3D Warehouse", url: "https://3dwarehouse.sketchup.com/by/ipachart" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 font-sans antialiased">
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
              International Phonetic Alphabet
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The IPA is a standardized representation of speech sounds in written form. 
              It provides a consistent way to transcribe the sounds of any language.
            </p>
          </header>

          {/* Introduction */}
          <section className="bg-white dark:bg-gray-800/50 rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">What is the IPA?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The International Phonetic Alphabet (IPA) is an alphabetic system of phonetic notation 
                  based primarily on the Latin script. It was devised by the International Phonetic Association 
                  in the late 19th century as a standardized representation of speech sounds in written form.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The IPA is used by lexicographers, foreign language students and teachers, linguists, 
                  speech-language pathologists, singers, actors, constructed language creators, and translators.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Key Features:</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    Universal system for all languages
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    One symbol per sound principle
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    Precise pronunciation guidance
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    Scientific accuracy in phonetics
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Consonants Chart */}
          <section className="bg-white dark:bg-gray-800/50 rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6 text-center">Consonants</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {consonants.map((consonant, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{consonant.symbol}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">{consonant.name}</div>
                    <div className="text-sm text-gray-800 dark:text-gray-200 italic">/{consonant.example}/</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Vowels Chart */}
          <section className="bg-white dark:bg-gray-800/50 rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6 text-center">Vowels</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {vowels.map((vowel, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">{vowel.symbol}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">{vowel.name}</div>
                    <div className="text-sm text-gray-800 dark:text-gray-200 italic">/{vowel.example}/</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Diphthongs */}
          <section className="bg-white dark:bg-gray-800/50 rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6 text-center">Diphthongs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {diphthongs.map((diphthong, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{diphthong.symbol}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">{diphthong.name}</div>
                    <div className="text-sm text-gray-800 dark:text-gray-200 italic">/{diphthong.example}/</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Usage Tips */}
          <section className="bg-white dark:bg-gray-800/50 rounded-lg shadow-lg p-8 mt-12">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">How to Use the IPA</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">For Language Learning:</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">1.</span>
                    Learn the sounds first, then the symbols
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">2.</span>
                    Practice with familiar words
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">3.</span>
                    Use IPA in dictionaries for pronunciation
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">4.</span>
                    Focus on sounds not in your native language
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Common Mistakes to Avoid:</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-red-600 dark:text-red-400 mr-2">×</span>
                    Confusing similar symbols (e.g., ɪ vs i)
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 dark:text-red-400 mr-2">×</span>
                    Ignoring diacritical marks
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 dark:text-red-400 mr-2">×</span>
                    Assuming one symbol per letter
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 dark:text-red-400 mr-2">×</span>
                    Not practicing actual pronunciation
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Social Links Section */}
          <SocialLinks links={socialLinksList} />
        </div>
      </main>

      <footer className="w-full bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>
            Official Website:{" "}
            <a
              href="https://www.ipachart.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 hover:underline dark:text-blue-500"
            >
              www.ipachart.app
            </a>
          </p>
          <p className="mt-2 text-xs">
            &copy; {new Date().getFullYear()} IPA Chart. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
