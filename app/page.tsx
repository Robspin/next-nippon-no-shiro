import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

const castles = [
    {
      "name": "Himeji Castle (姫路城)",
      "slug": "himeji",
      "location": "Himeji, Hyogo Prefecture",
      "notableFact": `Japan's largest and most visited castle, known as "White Heron Castle"`,
      "historicalFact": "One of Japan's first UNESCO World Heritage Sites (1993)",
      "googleLink": "https://goo.gl/maps/1GPSkHwKsS8MG4rT7"
    },
    {
      "name": "Matsumoto Castle (松本城)",
      "slug": "matsumoto",
      "location": "Matsumoto, Nagano Prefecture",
      "notableFact": "One of Japan's oldest wooden castles and original keeps",
      "historicalFact": 'Known as "Crow Castle" due to its black exterior',
      "googleLink": "https://goo.gl/maps/BRJA5PCsE7ypakqw6"
    },
    {
      "name": "Osaka Castle (大阪城)",
      "slug": "osaka",
      "location": "Osaka, Osaka Prefecture",
      "notableFact": "One of Japan's most famous landmarks",
      "historicalFact": "Built by Toyotomi Hideyoshi, one of Japan's great unifiers",
      "googleLink": "https://goo.gl/maps/qz8rnZX4K2Yg56Pg7"
    },
    {
      "name": "Nijō Castle (二条城)",
      "slug": "nijo",
      "location": "Kyoto, Kyoto Prefecture",
      "notableFact": "UNESCO World Heritage site, famous for its ornate architecture",
      "historicalFact": "Former residence of the Tokugawa shoguns",
      "googleLink": "https://goo.gl/maps/L7SzBrKxmz8U7Ssu5"
    },
    {
      "name": "Kumamoto Castle (熊本城)",
      "slug": "kumamoto",
      "location": "Kumamoto, Kumamoto Prefecture",
      "notableFact": "One of Japan's three premier castles",
      "historicalFact": "Known for its impressive stone walls and 49 turrets",
      "googleLink": "https://goo.gl/maps/JR9rZdvmxEuPg4Vp7"
    },
    {
      "name": "Hirosaki Castle (弘前城)",
      "slug": "hirosaki",
      "location": "Hirosaki, Aomori Prefecture",
      "notableFact": "Famous for cherry blossoms in spring",
      "historicalFact": "Only castle in the Tohoku region with its original keep",
      "googleLink": "https://goo.gl/maps/2vwbSkNsrY8RVKWU6"
    },
    {
      "name": "Kanazawa Castle (金沢城)",
      "slug": "kanazawa",
      "location": "Kanazawa, Ishikawa Prefecture",
      "notableFact": "Known for its distinctive white walls and lead-tile roof",
      "historicalFact": "Connected to the famous Kenroku-en Garden",
      "googleLink": "https://goo.gl/maps/LX5bdG8LyCXwrGzbA"
    },
    {
      "name": "Matsuyama Castle (松山城)",
      "slug": "matsuyama",
      "location": "Matsuyama, Ehime Prefecture",
      "notableFact": "One of Japan's few original castles built on a hill",
      "historicalFact": "Has one of the most complex gate systems of any Japanese castle",
      "googleLink": "https://goo.gl/maps/LzFP5PDvQDGPGnxS6"
    },
    {
      "name": "Inuyama Castle (犬山城)",
      "slug": "inuyama",
      "location": "Inuyama, Aichi Prefecture",
      "notableFact": "One of only 12 original Japanese castle keeps",
      "historicalFact": "Oldest castle donjon in Japan (built in 1537)",
      "googleLink": "https://goo.gl/maps/Myb4ddmbRHPFMgPa6"
    },
    {
      "name": "Hikone Castle (彦根城)",
      "slug": "hikone",
      "location": "Hikone, Shiga Prefecture",
      "notableFact": "National Treasure of Japan",
      "historicalFact": "One of only four castles designated as a National Treasure",
      "googleLink": "https://goo.gl/maps/m3rn9WTLa62GQKWK6"
    }
]

export default function Page() {
  return (
      <div className="min-h-screen">
        <header className="py-12 px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">日本の城</h1>
          <p className="text-xl text-gray-600 mb-8">Famous Castles of Japan</p>
          <p className="max-w-2xl mx-auto text-gray-500">
            Explore the majestic fortresses that have stood the test of time, embodying Japan's rich history and architectural brilliance.
          </p>
        </header>
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {castles.map((castle, index) => (
                <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardContent className="p-0">
                    <img src={`/castles/${castle.slug}/1.jpg`} alt={castle.name} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h2 className="text-xl font-semibold text-gray-800">{castle.name}</h2>
                        <p className="text-gray-500 mb-2">{castle.location}</p>
                        <ul className="list-disc text-gray-600 ml-4">
                            <li>{castle.notableFact}</li>
                            <li>{castle.historicalFact}</li>
                        </ul>
                    </div>
                  </CardContent>
                </Card>
            ))}
          </div>
        </main>
        <footer className="text-center py-8 text-gray-500">
          <p>© 2024 日本の城 | Made by <a className="underline" href="https://github.com/Robspin">Robspin</a></p>
        </footer>
      </div>
  )
}