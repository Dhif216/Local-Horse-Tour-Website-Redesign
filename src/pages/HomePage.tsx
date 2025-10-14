import { ArrowRight, Shield, Heart, Award, Leaf } from 'lucide-react';
import { Button } from '../components/ui/button';
import { TourCard } from '../components/TourCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { TrustBadge } from '../components/TrustBadge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface HomePageProps {
  language: 'en' | 'fi';
  onNavigate: (page: string) => void;
}

export function HomePage({ language, onNavigate }: HomePageProps) {
  const t = {
    en: {
      heroTitle: 'Authentic Finnhorse Adventures',
      heroSubtitle: 'in the Heart of Lapland',
      heroDescription: 'Experience the magic of Rovaniemi with our majestic Finnhorses. Ride through snowy forests, witness the Northern Lights, and connect with Finland\'s national treasure.',
      bookNow: 'Book Your Adventure',
      learnMore: 'Learn More',
      trustBadges: {
        certified: 'Sustainable Certified',
        finnhorse: 'National Treasure Finnhorses',
        experience: '15+ Years Experience',
        rated: 'Top Rated Tours',
      },
      ourStory: 'Our Story',
      storyTitle: 'A Family Tradition in Lapland',
      storyText: 'For generations, our family has been working with Finnhorses in the pristine wilderness of Rovaniemi. We combine authentic Finnish traditions with sustainable tourism to create unforgettable experiences. Our horses are not just companions—they are ambassadors of Finnish culture and the Arctic way of life.',
      featuredTours: 'Featured Tours',
      tours: [
        {
          title: 'Northern Lights Horse Ride',
          description: 'Experience the magic of Aurora Borealis from horseback in the quiet Arctic wilderness.',
          duration: '3-4 hours',
          groupSize: 'Max 6 people',
          price: '145',
        },
        {
          title: 'Forest Adventure Tour',
          description: 'Explore the pristine Lapland forests and frozen lakes with our gentle Finnhorses.',
          duration: '2 hours',
          groupSize: 'Max 8 people',
          price: '95',
        },
        {
          title: 'Full Day Winter Safari',
          description: 'A complete Arctic experience including lunch by campfire and stunning winter landscapes.',
          duration: '6-7 hours',
          groupSize: 'Max 6 people',
          price: '210',
        },
      ],
      testimonials: 'What Our Guests Say',
      testimonialsData: [
        {
          name: 'Sarah Johnson',
          location: 'London, UK',
          rating: 5,
          comment: 'An absolutely magical experience! The horses were so gentle and the Northern Lights tour was breathtaking. Highly recommended!',
        },
        {
          name: 'Marcus Schmidt',
          location: 'Berlin, Germany',
          rating: 5,
          comment: 'The guides were knowledgeable and passionate. The Finnhorses are beautiful. Best tour experience in Lapland!',
        },
        {
          name: 'Emma Virtanen',
          location: 'Helsinki, Finland',
          rating: 5,
          comment: 'Aitoa suomalaista kulttuuria parhaimmillaan! Upea kokemus koko perheelle.',
        },
      ],
    },
    fi: {
      heroTitle: 'Aitoja Suomen hevosseikkailuja',
      heroSubtitle: 'Lapin Sydämessä',
      heroDescription: 'Koe Rovaniemen taika majesteettisten suomenhevosten kanssa. Ratsasta lumisten metsien halki, näe revontulet ja ota yhteys Suomen kansallisaarteeseen.',
      bookNow: 'Varaa Seikkailusi',
      learnMore: 'Lue Lisää',
      trustBadges: {
        certified: 'Kestävän Matkailun Sertifikaatti',
        finnhorse: 'Kansallisaarre Suomenhevoset',
        experience: 'Yli 15 Vuoden Kokemus',
        rated: 'Parhaiten Arvosteltu',
      },
      ourStory: 'Meidän Tarina',
      storyTitle: 'Sukupolvien Perinne Lapissa',
      storyText: 'Sukupolvien ajan perheemme on työskennellyt suomenhevosten kanssa Rovaniemen koskemattomassa erämaassa. Yhdistämme aidon suomalaisen perinteen kestävään matkailuun luodaksemme unohtumattomia kokemuksia. Hevosemme eivät ole vain kumppaneita—he ovat suomalaisen kulttuurin ja arktisen elämäntavan lähettiläitä.',
      featuredTours: 'Suositut Retket',
      tours: [
        {
          title: 'Revontuliretki Hevosella',
          description: 'Koe revontulien taika hevosen selässä hiljaisessa arktisessa erämaassa.',
          duration: '3-4 tuntia',
          groupSize: 'Max 6 henkilöä',
          price: '145',
        },
        {
          title: 'Metsäseikkailu',
          description: 'Tutustu Lapin koskemattomiin metsiin ja jäätyneisiin järviin lempeäiden suomenhevostemme kanssa.',
          duration: '2 tuntia',
          groupSize: 'Max 8 henkilöä',
          price: '95',
        },
        {
          title: 'Koko Päivän Talvisafari',
          description: 'Täydellinen arktinen kokemus sisältäen nuotiolounaan ja upeat talvimaisemat.',
          duration: '6-7 tuntia',
          groupSize: 'Max 6 henkilöä',
          price: '210',
        },
      ],
      testimonials: 'Mitä Vieraamme Sanovat',
      testimonialsData: [
        {
          name: 'Sarah Johnson',
          location: 'Lontoo, UK',
          rating: 5,
          comment: 'Aivan maaginen kokemus! Hevoset olivat niin lempeitä ja revontuliretki oli henkeäsalpaava. Suosittelen lämpimästi!',
        },
        {
          name: 'Marcus Schmidt',
          location: 'Berliini, Saksa',
          rating: 5,
          comment: 'Oppaat olivat asiantuntevia ja intohimoisia. Suomenhevoset ovat kauniita. Paras retkikokemus Lapissa!',
        },
        {
          name: 'Emma Virtanen',
          location: 'Helsinki, Suomi',
          rating: 5,
          comment: 'Aitoa suomalaista kulttuuria parhaimmillaan! Upea kokemus koko perheelle.',
        },
      ],
    },
  };

  const text = t[language];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1513257267253-252b75acfd04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5uaG9yc2UlMjBzbm93JTIwbGFwbGFuZHxlbnwxfHx8fDE3NjA0NzA3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Finnhorse in Lapland"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-4" style={{ fontWeight: 700, lineHeight: 1.2 }}>
            {text.heroTitle}
            <br />
            <span className="text-[#1eb3a6]">{text.heroSubtitle}</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {text.heroDescription}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => onNavigate('tours')}
              className="bg-[#1eb3a6] hover:bg-[#18998e] text-white px-8 py-6 text-lg"
            >
              {text.bookNow}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => onNavigate('about')}
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-[#0f1e3d] px-8 py-6 text-lg"
            >
              {text.learnMore}
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-3 justify-center">
            <TrustBadge icon="shield" text={text.trustBadges.certified} />
            <TrustBadge icon="heart" text={text.trustBadges.finnhorse} />
            <TrustBadge icon="award" text={text.trustBadges.experience} />
            <TrustBadge icon="sparkles" text={text.trustBadges.rated} />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-[#1eb3a6] mb-2 tracking-wide uppercase text-sm">
                {text.ourStory}
              </p>
              <h2 className="mb-6">{text.storyTitle}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{text.storyText}</p>
              <Button
                onClick={() => onNavigate('about')}
                variant="outline"
                className="border-[#0f1e3d] text-[#0f1e3d] hover:bg-[#0f1e3d] hover:text-white"
              >
                {text.learnMore}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1694885138169-bb8acc2aa8d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3JzZSUyMHN0YWJsZSUyMGZhcm18ZW58MXx8fHwxNzYwNDcwNzEzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Our Farm"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section className="py-16 md:py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">{text.featuredTours}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'en'
                ? 'Choose from our carefully curated experiences designed to showcase the best of Lapland and our beloved Finnhorses.'
                : 'Valitse huolellisesti valituista kokemuksistamme, jotka on suunniteltu esittelemään Lapin ja rakastettujen suomenhevostemme parhaita puolia.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {text.tours.map((tour, index) => (
              <TourCard
                key={index}
                title={tour.title}
                description={tour.description}
                duration={tour.duration}
                groupSize={tour.groupSize}
                price={tour.price}
                image={
                  index === 0
                    ? 'https://images.unsplash.com/photo-1644659513503-abcbf75b4521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3J0aGVybiUyMGxpZ2h0cyUyMGF1cm9yYXxlbnwxfHx8fDE3NjAzODEyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080'
                    : index === 1
                    ? 'https://images.unsplash.com/photo-1628530818983-1fd2bf10e671?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3JzZSUyMHdpbnRlciUyMGZvcmVzdHxlbnwxfHx8fDE3NjA0NzA3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080'
                    : 'https://images.unsplash.com/photo-1674572272024-4b4a4f5e7bf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXBsYW5kJTIwd2ludGVyJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2MDQ3MDcxMXww&ixlib=rb-4.1.0&q=80&w=1080'
                }
                onBookNow={() => onNavigate('tours')}
                onViewDetails={() => onNavigate('tours')}
                language={language}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">{text.testimonials}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {text.testimonialsData.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
                image="https://images.unsplash.com/photo-1753161023962-665967602405?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwMzY5OTA2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1677755293968-5d897487ff4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3JzZSUyMHJpZGluZyUyMHdpbnRlcnxlbnwxfHx8fDE3NjA0NzA3MTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Winter Riding"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0f1e3d]/80" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl mb-6">
            {language === 'en' 
              ? 'Ready for Your Arctic Adventure?'
              : 'Valmis Arktiseen Seikkailuun?'}
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            {language === 'en'
              ? 'Book your unforgettable Finnhorse experience today and create memories that will last a lifetime.'
              : 'Varaa unohtumaton suomenhevoskokemus tänään ja luo muistoja, jotka kestävät koko elämän.'}
          </p>
          <Button
            onClick={() => onNavigate('tours')}
            className="bg-[#1eb3a6] hover:bg-[#18998e] text-white px-8 py-6 text-lg"
          >
            {text.bookNow}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
