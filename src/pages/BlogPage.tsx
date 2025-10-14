import { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { BlogCard } from '../components/BlogCard';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Input } from '../components/ui/input';

interface BlogPageProps {
  language: 'en' | 'fi';
  onNavigate: (page: string) => void;
}

export function BlogPage({ language, onNavigate }: BlogPageProps) {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const t = {
    en: {
      pageTitle: 'Stories from Lapland',
      pageSubtitle: 'Insights, adventures, and updates from our farm',
      search: 'Search articles...',
      allCategories: 'All',
      categories: ['Tips & Guides', 'Horse Care', 'Lapland Life', 'Seasonal'],
      posts: [
        {
          title: 'Best Time to See Northern Lights in Rovaniemi',
          excerpt: 'Learn about the optimal seasons and conditions for witnessing the magical Aurora Borealis during your horse riding tour.',
          category: 'Tips & Guides',
          date: 'Oct 10, 2025',
          readTime: '5 min read',
          content: `
The Northern Lights, or Aurora Borealis, are one of nature's most spectacular phenomena. Here in Rovaniemi, we're blessed with some of the best viewing conditions in the world.

## Best Months for Aurora

The Aurora season in Lapland runs from late August to early April, but the peak months are September-March. During this time, the nights are long and dark enough to see the lights clearly.

## Why Experience Aurora from Horseback?

Our Northern Lights horse riding tours offer a unique way to experience the Aurora. The gentle movement of the horse, the silence of the snowy forest, and the dancing lights overhead create an unforgettable experience.

## What Affects Aurora Visibility?

Several factors influence your chances of seeing the Northern Lights:
- Clear, dark skies (cloud cover is the biggest obstacle)
- Solar activity (we monitor forecasts daily)
- Light pollution (we ride to remote locations)
- Time of night (typically best between 9 PM - 2 AM)

## Book Your Aurora Adventure

Ready to chase the Northern Lights with our Finnhorses? Our experienced guides know the best spots and timing to maximize your chances of witnessing this natural wonder.
          `,
        },
        {
          title: 'Meet Aarre: Our Gentle Giant',
          excerpt: 'Get to know Aarre, one of our most beloved Finnhorses, and learn about his journey to becoming a perfect tour companion.',
          category: 'Horse Care',
          date: 'Oct 5, 2025',
          readTime: '4 min read',
          content: `
Among our herd of beautiful Finnhorses, Aarre holds a special place in everyone's hearts. His name means "treasure" in Finnish, and he truly lives up to it.

## Aarre's Story

Aarre joined our farm eight years ago as a young horse with incredible potential. From the beginning, his calm temperament and gentle nature made him stand out.

## Perfect for Beginners

What makes Aarre exceptional is his patience with new riders. He seems to understand when someone is nervous and adjusts his pace accordingly. Many of our guests who were initially afraid of horses have found confidence thanks to Aarre.

## Daily Care

Like all our horses, Aarre receives exceptional care. His day includes:
- Morning grooming and health check
- Balanced diet of hay, oats, and fresh vegetables
- Regular exercise and training
- Plenty of social time with other horses
- Evening care and stable time

## Favorite Activities

Aarre particularly enjoys forest rides and loves stopping for treats along the way. His favorite season is winter when the snow is deep and the trails are quiet.
          `,
        },
        {
          title: 'Sustainable Tourism: Our Commitment',
          excerpt: 'Discover how we balance tourism with environmental responsibility and animal welfare at Länsilammen Tila.',
          category: 'Lapland Life',
          date: 'Sep 28, 2025',
          readTime: '6 min read',
          content: `
Sustainability isn't just a buzzword for us—it's the foundation of everything we do at Länsilammen Tila.

## Our Environmental Practices

We've implemented numerous measures to minimize our environmental impact:
- Solar panels provide 60% of our energy needs
- Rainwater collection for horse care
- Composting all organic waste
- Using only eco-friendly cleaning products
- Supporting local suppliers and businesses

## Animal Welfare First

Our horses work limited hours and always have rest days. We never overbook tours, ensuring each horse gets adequate rest between rides. Their wellbeing is monitored daily by our experienced team.

## Preserving the Finnhorse Breed

By operating sustainable tours, we contribute to Finnhorse conservation. A portion of every tour goes to breed preservation programs.

## Small Group Philosophy

We limit tour sizes to ensure minimal environmental impact and the best experience for both guests and horses. This approach allows us to maintain pristine trails and reduce stress on our animals.
          `,
        },
        {
          title: 'Winter Preparations: Getting Ready for Tour Season',
          excerpt: 'Behind the scenes look at how we prepare our horses and farm for the busy winter tour season.',
          category: 'Seasonal',
          date: 'Sep 20, 2025',
          readTime: '5 min read',
          content: `
As autumn transitions to winter, our farm buzzes with preparation activities for the busy Aurora season ahead.

## Horse Conditioning

Our Finnhorses are naturally adapted to Arctic conditions, but we still take steps to prepare them:
- Gradual increase in their winter coat growth
- Conditioning rides to build stamina
- Hoof care adjustments for icy terrain
- Special winter diet with extra calories

## Equipment Checks

All riding equipment undergoes thorough inspection:
- Saddles and bridles checked for wear
- Winter riding gear prepared
- Safety equipment updated
- Trail markers and emergency supplies restocked

## Trail Preparation

We survey and mark our winter trails, identifying:
- Best Aurora viewing spots
- Safe crossing points over frozen terrain
- Shelter locations for rest stops
- Emergency access points

## Team Training

Our guides refresh their skills in:
- Winter safety protocols
- Aurora forecasting
- Emergency procedures
- Customer service updates

The preparation is extensive, but it ensures every tour is safe, enjoyable, and memorable for our guests.
          `,
        },
        {
          title: 'Finnish Horse Riding Traditions',
          excerpt: 'Explore the rich history of horseback riding in Finnish culture and how we keep these traditions alive.',
          category: 'Lapland Life',
          date: 'Sep 12, 2025',
          readTime: '7 min read',
          content: `
The relationship between Finns and horses dates back centuries, and the Finnhorse has been central to our cultural identity.

## Historical Significance

Finnhorses were essential for:
- Agriculture and farm work
- Transportation in harsh winters
- Military operations
- Forest industry

## Modern Revival

While mechanization reduced working horses, passionate breeders and enthusiasts have preserved the breed. Today, Finnhorses are experiencing a renaissance in tourism and recreation.

## Our Role in Preservation

At Länsilammen Tila, we're proud to:
- Maintain purebred Finnhorses
- Educate visitors about breed heritage
- Participate in conservation programs
- Demonstrate traditional horse care methods

## Traditional Practices We Maintain

- Natural horsemanship techniques
- Traditional tack designs
- Seasonal working rhythms
- Community-based horse culture

By experiencing our tours, you're participating in living history and helping preserve this important cultural heritage.
          `,
        },
        {
          title: 'Photography Tips for Your Horse Tour',
          excerpt: 'Expert advice on capturing stunning photos during your Lapland horse riding adventure.',
          category: 'Tips & Guides',
          date: 'Sep 5, 2025',
          readTime: '4 min read',
          content: `
Want to capture amazing photos during your horse riding tour? Here are our top tips for memorable shots.

## Camera Settings for Aurora

- Use manual mode
- Wide aperture (f/2.8 or lower)
- ISO 1600-3200
- Shutter speed 5-25 seconds
- Manual focus set to infinity

## During the Day

Lapland's winter light is magical:
- Golden hour lasts for hours
- Snow reflects light beautifully
- Contrast between white snow and dark forests

## Composition Tips

- Include the horse for scale and interest
- Use the rule of thirds
- Capture candid moments
- Don't forget wide landscape shots

## Practical Considerations

- Keep batteries warm (they drain quickly in cold)
- Bring extra memory cards
- Use a neck strap for security
- Protect your gear from snow

## Our Guides Can Help

Our guides are experienced photographers and happy to:
- Help with camera settings
- Suggest best spots
- Take photos of you with the horses
- Time stops for optimal lighting

Remember, sometimes it's worth putting the camera down to fully experience the moment!
          `,
        },
      ],
    },
    fi: {
      pageTitle: 'Tarinoita Lapista',
      pageSubtitle: 'Vinkkejä, seikkailuja ja kuulumisia tilaltamme',
      search: 'Hae artikkeleita...',
      allCategories: 'Kaikki',
      categories: ['Vinkit & Oppaat', 'Hevostenhoito', 'Lapin Elämä', 'Kausiluontoinen'],
      posts: [
        {
          title: 'Paras Aika Nähdä Revontulet Rovaniemellä',
          excerpt: 'Opi optimaalisista vuodenajoista ja olosuhteista taianomaisten revontulien näkemiseen hevosratsastusretkellä.',
          category: 'Vinkit & Oppaat',
          date: '10.10.2025',
          readTime: '5 min',
          content: `
Revontulet ovat yksi luonnon upeimmista ilmiöistä. Täällä Rovaniemellä meillä on etuoikeus nauttia maailman parhaista katseluolosuhteista.

## Parhaat Kuukaudet Revontulille

Revontulien kausi Lapissa kestää elokuun lopusta huhtikuun alkuun, mutta huippukuukaudet ovat syyskuu-maaliskuu. Tänä aikana yöt ovat tarpeeksi pitkiä ja pimeitä, jotta valot näkyvät selvästi.

## Miksi Kokea Revontulet Hevosen Selästä?

Revontuliretket hevosella tarjoavat ainutlaatuisen tavan kokea revontulet. Hevosen lempeä liike, lumisen metsän hiljaisuus ja tanssivat valot taivaalla luovat unohtumattoman kokemuksen.
          `,
        },
        {
          title: 'Tapaa Aarre: Lempeä Jättiläisemme',
          excerpt: 'Tutustu Aarteeseen, yhteen rakastetuimmista suomenhevosistamme, ja opi hänen matkastaan täydelliseksi retkikumppaniksi.',
          category: 'Hevostenhoito',
          date: '5.10.2025',
          readTime: '4 min',
          content: 'Kauniiden suomenhevostemme joukossa Aarre on erityisessä asemassa kaikkien sydämissä...',
        },
        {
          title: 'Kestävä Matkailu: Sitoutumisemme',
          excerpt: 'Tutustu siihen, miten tasapainotamme matkailun ympäristövastuun ja eläinten hyvinvoinnin kanssa Länsilammen Tilalla.',
          category: 'Lapin Elämä',
          date: '28.9.2025',
          readTime: '6 min',
          content: 'Kestävyys ei ole meille vain muotisana—se on kaiken toimintamme perusta...',
        },
        {
          title: 'Talvivalmistelut: Valmistautuminen Retkikauteen',
          excerpt: 'Kulissien takainen katsaus siihen, miten valmistamme hevosemme ja tilaamme kiireiseen talviretkikauteen.',
          category: 'Kausiluontoinen',
          date: '20.9.2025',
          readTime: '5 min',
          content: 'Kun syksy vaihtuu talveksi, tilallamme kuhisee valmistelutoiminnasta tulevaa revontulikautta varten...',
        },
        {
          title: 'Suomalaiset Ratsastusperinteet',
          excerpt: 'Tutustu ratsastuksen rikkaaseen historiaan suomalaisessa kulttuurissa ja siihen, miten pidämme perinteet elossa.',
          category: 'Lapin Elämä',
          date: '12.9.2025',
          readTime: '7 min',
          content: 'Suomalaisten ja hevosten välinen suhde ulottuu vuosisatojen taakse...',
        },
        {
          title: 'Valokuvausvinkit Hevosretkellesi',
          excerpt: 'Asiantuntijan neuvoja upeiden valokuvien ottamiseen Lapin hevosratsastusseikkailullasi.',
          category: 'Vinkit & Oppaat',
          date: '5.9.2025',
          readTime: '4 min',
          content: 'Haluatko vangita upeita kuvia hevosretkeltäsi? Tässä parhaat vinkkimme unohtumattomiin otoksiin...',
        },
      ],
    },
  };

  const text = t[language];

  // Filter posts based on search and category
  const filteredPosts = text.posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (selectedPost !== null) {
    const post = text.posts[selectedPost];
    return (
      <div className="min-h-screen bg-white">
        {/* Article Hero */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Button
            variant="ghost"
            onClick={() => setSelectedPost(null)}
            className="mb-8"
          >
            ← {language === 'en' ? 'Back to Blog' : 'Takaisin Blogiin'}
          </Button>

          <div className="mb-8">
            <span className="inline-block bg-[#1eb3a6] text-white px-3 py-1 rounded-full text-sm mb-4">
              {post.category}
            </span>
            <h1 className="mb-4">{post.title}</h1>
            <div className="flex items-center space-x-4 text-gray-500 text-sm">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-video rounded-lg overflow-hidden mb-12">
            <ImageWithFallback
              src={selectedPost === 0 
                ? 'https://images.unsplash.com/photo-1644659513503-abcbf75b4521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3J0aGVybiUyMGxpZ2h0cyUyMGF1cm9yYXxlbnwxfHx8fDE3NjAzODEyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080'
                : selectedPost === 1
                ? 'https://images.unsplash.com/photo-1733100911277-53de988c0a74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm93biUyMGhvcnNlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwNDAwNTQzfDA&ixlib=rb-4.1.0&q=80&w=1080'
                : 'https://images.unsplash.com/photo-1674572272024-4b4a4f5e7bf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXBsYW5kJTIwd2ludGVyJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2MDQ3MDcxMXww&ixlib=rb-4.1.0&q=80&w=1080'}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="whitespace-pre-line text-gray-600 leading-relaxed">
              {post.content}
            </div>
          </div>

          {/* In-Content CTA */}
          <div className="my-16 bg-gradient-to-r from-[#0f1e3d] to-[#1eb3a6] rounded-lg p-8 md:p-12 text-white text-center">
            <h3 className="text-white mb-4">
              {language === 'en' 
                ? 'Ready to Experience This Yourself?'
                : 'Valmis Kokemaan Tämän Itse?'}
            </h3>
            <p className="mb-6 opacity-90">
              {language === 'en'
                ? 'Book your Northern Lights horse riding tour and create unforgettable memories in Lapland.'
                : 'Varaa revontuliretki hevosella ja luo unohtumattomia muistoja Lapissa.'}
            </p>
            <Button
              onClick={() => onNavigate('tours')}
              className="bg-white text-[#0f1e3d] hover:bg-gray-100"
            >
              {language === 'en' ? 'Book Your Tour' : 'Varaa Retkesi'}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Social Share */}
          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              {language === 'en' ? 'Share this article' : 'Jaa tämä artikkeli'}
            </p>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0f1e3d] to-[#1a2f4d] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl mb-4" style={{ fontWeight: 700 }}>
            {text.pageTitle}
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            {text.pageSubtitle}
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder={text.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-[#1eb3a6] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {text.allCategories}
              </button>
              {text.categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? 'bg-[#1eb3a6] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">
                {language === 'en' 
                  ? 'No articles found. Try adjusting your search or filters.'
                  : 'Artikkeleita ei löytynyt. Kokeile muuttaa hakua tai suodattimia.'}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogCard
                  key={index}
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.category}
                  date={post.date}
                  readTime={post.readTime}
                  image={
                    index % 3 === 0
                      ? 'https://images.unsplash.com/photo-1644659513503-abcbf75b4521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3J0aGVybiUyMGxpZ2h0cyUyMGF1cm9yYXxlbnwxfHx8fDE3NjAzODEyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080'
                      : index % 3 === 1
                      ? 'https://images.unsplash.com/photo-1733100911277-53de988c0a74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm93biUyMGhvcnNlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwNDAwNTQzfDA&ixlib=rb-4.1.0&q=80&w=1080'
                      : 'https://images.unsplash.com/photo-1674572272024-4b4a4f5e7bf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXBsYW5kJTIwd2ludGVyJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2MDQ3MDcxMXww&ixlib=rb-4.1.0&q=80&w=1080'
                  }
                  onClick={() => setSelectedPost(text.posts.indexOf(post))}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
