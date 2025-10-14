import { Check, X, Clock, Users, MapPin, Thermometer, Camera, Heart } from 'lucide-react';
import { BookingWidget } from '../components/BookingWidget';
import { TourCard } from '../components/TourCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Card } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

interface TourPageProps {
  language: 'en' | 'fi';
  onNavigate: (page: string) => void;
}

export function TourPage({ language, onNavigate }: TourPageProps) {
  const t = {
    en: {
      tourName: 'Northern Lights Horse Ride',
      tourSubtitle: 'Experience the Aurora Borealis from horseback',
      overview: 'Overview',
      inclusions: 'Inclusions',
      requirements: 'Requirements',
      guide: 'Your Guide',
      relatedTours: 'Related Tours',
      overviewText: 'Embark on a magical journey through the Arctic wilderness under the dancing Northern Lights. This 3-4 hour tour combines the ancient tradition of horseback riding with one of nature\'s most spectacular phenomena. Our gentle Finnhorses will carry you through snow-covered forests and frozen landscapes while you search for the Aurora Borealis. This intimate experience is limited to small groups to ensure personal attention and the best chance of witnessing this natural wonder.',
      whatToExpect: 'What to Expect',
      expectations: [
        'Meet our friendly Finnhorses and receive riding instructions',
        'Ride through pristine winter landscapes in search of Aurora',
        'Warm up with hot beverages and traditional Finnish snacks',
        'Learn about Finnhorses and Finnish culture from your guide',
        'Photo opportunities with the horses and Northern Lights',
      ],
      included: [
        'Experienced English/Finnish speaking guide',
        'All riding equipment and safety gear',
        'Warm outdoor clothing if needed',
        'Hot drinks and traditional snacks',
        'Hotel pickup and drop-off (Rovaniemi area)',
        'Small group experience (max 6 people)',
      ],
      notIncluded: [
        'Personal photography equipment',
        'Gratuities (optional)',
      ],
      requiredItems: [
        'Warm winter clothing (jacket, pants, gloves)',
        'Winter boots with good grip',
        'Warm hat or beanie',
        'Camera for Aurora photos (optional)',
      ],
      importantInfo: 'Important Information',
      info: [
        'Minimum age: 12 years',
        'Maximum weight: 100kg (220lbs)',
        'Basic riding experience recommended but not required',
        'Aurora sightings are not guaranteed (weather dependent)',
        'Tour may be rescheduled due to extreme weather',
        'Free cancellation up to 24 hours before tour',
      ],
      guideName: 'Mika Virtanen',
      guideRole: 'Head Guide & Horse Trainer',
      guideBio: 'Mika has been working with Finnhorses for over 15 years and is passionate about sharing Lapland\'s natural beauty. He speaks Finnish, English, and German.',
      relatedToursData: [
        {
          title: 'Forest Adventure Tour',
          description: 'Explore the pristine Lapland forests and frozen lakes.',
          duration: '2 hours',
          groupSize: 'Max 8 people',
          price: '95',
        },
        {
          title: 'Full Day Winter Safari',
          description: 'Complete Arctic experience with lunch by campfire.',
          duration: '6-7 hours',
          groupSize: 'Max 6 people',
          price: '210',
        },
      ],
    },
    fi: {
      tourName: 'Revontuliretki Hevosella',
      tourSubtitle: 'Koe revontulet hevosen selästä',
      overview: 'Yleiskatsaus',
      inclusions: 'Hintaan Sisältyy',
      requirements: 'Vaatimukset',
      guide: 'Oppaasi',
      relatedTours: 'Liittyvät Retket',
      overviewText: 'Lähde taianomaiseelle matkalle arktiseen erämaahan tanssivien revontulien alla. Tämä 3-4 tunnin retki yhdistää muinaisen ratsastusperinteen yhteen luonnon upeimmista ilmiöistä. Lempeät suomenhevosemme kantavat sinut lumen peittämien metsien ja jäätyneiden maisemien halki etsiessäsi revontulia. Tämä intiimi kokemus on rajoitettu pieniin ryhmiin henkilökohtaisen huomion varmistamiseksi ja parhaan mahdollisuuden saamiseksi todistaa tätä luonnonilmiötä.',
      whatToExpect: 'Mitä Odottaa',
      expectations: [
        'Tapaa ystävälliset suomenhevosemme ja saa ratsastusohjeet',
        'Ratsasta koskemattomien talvimaisemien halki etsien revontulia',
        'Lämmittele kuumilla juomilla ja perinteisillä suomalaisilla herkuilla',
        'Opi suomenhevosista ja suomalaisesta kulttuurista oppaaltasi',
        'Valokuvausmahdollisuuksia hevosten ja revontulien kanssa',
      ],
      included: [
        'Kokenut suomen-/englanninkielinen opas',
        'Kaikki ratsastusvälineet ja turvavarusteet',
        'Lämpimät ulkovaatteet tarvittaessa',
        'Kuumat juomat ja perinteiset välipalat',
        'Hotellikuljetus (Rovaniemen alue)',
        'Pienryhmäkokemus (max 6 henkilöä)',
      ],
      notIncluded: [
        'Henkilökohtaiset valokuvausvälineet',
        'Juomarahat (vapaaehtoinen)',
      ],
      requiredItems: [
        'Lämpimät talvivaatteet (takki, housut, käsineet)',
        'Talvisaappaat hyvällä pitävyydellä',
        'Lämmin pipo tai myssy',
        'Kamera revontulivalokuvia varten (vapaaehtoinen)',
      ],
      importantInfo: 'Tärkeää Tietoa',
      info: [
        'Vähimmäisikä: 12 vuotta',
        'Enimmäispaino: 100kg',
        'Perustason ratsastuskokemus suositeltavaa mutta ei pakollista',
        'Revontulia ei taata (säästä riippuvainen)',
        'Retki voidaan siirtää äärimmäisen sään vuoksi',
        'Ilmainen peruutus 24 tuntia ennen retkeä',
      ],
      guideName: 'Mika Virtanen',
      guideRole: 'Pääopas & Hevoskouluttaja',
      guideBio: 'Mika on työskennellyt suomenhevosten kanssa yli 15 vuotta ja on intohimoinen jakamaan Lapin luonnon kauneutta. Hän puhuu suomea, englantia ja saksaa.',
      relatedToursData: [
        {
          title: 'Metsäseikkailu',
          description: 'Tutustu Lapin koskemattomiin metsiin ja jäätyneisiin järviin.',
          duration: '2 tuntia',
          groupSize: 'Max 8 henkilöä',
          price: '95',
        },
        {
          title: 'Koko Päivän Talvisafari',
          description: 'Täydellinen arktinen kokemus sisältäen nuotiolounaan.',
          duration: '6-7 tuntia',
          groupSize: 'Max 6 henkilöä',
          price: '210',
        },
      ],
    },
  };

  const text = t[language];

  const tourImages = [
    'https://images.unsplash.com/photo-1644659513503-abcbf75b4521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3J0aGVybiUyMGxpZ2h0cyUyMGF1cm9yYXxlbnwxfHx8fDE3NjAzODEyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1513257267253-252b75acfd04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5uaG9yc2UlMjBzbm93JTIwbGFwbGFuZHxlbnwxfHx8fDE3NjA0NzA3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1677755293968-5d897487ff4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3JzZSUyMHJpZGluZyUyMHdpbnRlcnxlbnwxfHx8fDE3NjA0NzA3MTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <ImageWithFallback
          src={tourImages[0]}
          alt={text.tourName}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />

        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 text-white">
            <h1 className="text-3xl md:text-5xl mb-3" style={{ fontWeight: 700 }}>
              {text.tourName}
            </h1>
            <p className="text-lg md:text-xl opacity-90">{text.tourSubtitle}</p>

            <div className="flex flex-wrap gap-6 mt-6 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-[#1eb3a6]" />
                <span>3-4 {language === 'en' ? 'hours' : 'tuntia'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-[#1eb3a6]" />
                <span>{language === 'en' ? 'Max 6 people' : 'Max 6 henkilöä'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-[#1eb3a6]" />
                <span>Rovaniemi, Lapland</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Tour Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <div className="grid grid-cols-3 gap-4">
                {tourImages.map((image, index) => (
                  <div key={index} className="aspect-video rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src={image}
                      alt={`Tour image ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>

              {/* Overview */}
              <div>
                <h2 className="mb-4">{text.overview}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{text.overviewText}</p>

                <h3 className="mb-4">{text.whatToExpect}</h3>
                <ul className="space-y-3">
                  {text.expectations.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Heart className="w-5 h-5 text-[#1eb3a6] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inclusions/Requirements Tabs */}
              <Tabs defaultValue="inclusions" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="inclusions">{text.inclusions}</TabsTrigger>
                  <TabsTrigger value="requirements">{text.requirements}</TabsTrigger>
                </TabsList>

                <TabsContent value="inclusions" className="space-y-6 mt-6">
                  <div>
                    <h4 className="mb-4">{language === 'en' ? 'Included' : 'Sisältyy'}</h4>
                    <ul className="space-y-2">
                      {text.included.map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-[#1eb3a6] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-4">{language === 'en' ? 'Not Included' : 'Ei Sisälly'}</h4>
                    <ul className="space-y-2">
                      {text.notIncluded.map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="requirements" className="space-y-6 mt-6">
                  <div>
                    <h4 className="mb-4">{language === 'en' ? 'What to Bring' : 'Mitä Ottaa Mukaan'}</h4>
                    <ul className="space-y-2">
                      {text.requiredItems.map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-[#1eb3a6] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-4">{text.importantInfo}</h4>
                    <ul className="space-y-2">
                      {text.info.map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1eb3a6] flex-shrink-0 mt-2" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Guide Section */}
              <Card className="p-6">
                <h3 className="mb-4">{text.guide}</h3>
                <div className="flex items-start space-x-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1753161023962-665967602405?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwMzY5OTA2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt={text.guideName}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-[#0f1e3d]">{text.guideName}</h4>
                    <p className="text-[#1eb3a6] text-sm mb-2">{text.guideRole}</p>
                    <p className="text-gray-600 text-sm">{text.guideBio}</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column - Booking Widget (Desktop) */}
            <div className="lg:col-span-1">
              <div className="hidden lg:block">
                <BookingWidget
                  tourName={text.tourName}
                  price="145"
                  language={language}
                />
              </div>
            </div>
          </div>

          {/* Mobile Booking Widget */}
          <div className="lg:hidden mt-8">
            <BookingWidget
              tourName={text.tourName}
              price="145"
              language={language}
            />
          </div>
        </div>
      </section>

      {/* Related Tours */}
      <section className="py-16 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8">{text.relatedTours}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {text.relatedToursData.map((tour, index) => (
              <TourCard
                key={index}
                title={tour.title}
                description={tour.description}
                duration={tour.duration}
                groupSize={tour.groupSize}
                price={tour.price}
                image={
                  index === 0
                    ? 'https://images.unsplash.com/photo-1628530818983-1fd2bf10e671?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3JzZSUyMHdpbnRlciUyMGZvcmVzdHxlbnwxfHx8fDE3NjA0NzA3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080'
                    : 'https://images.unsplash.com/photo-1674572272024-4b4a4f5e7bf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXBsYW5kJTIwd2ludGVyJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2MDQ3MDcxMXww&ixlib=rb-4.1.0&q=80&w=1080'
                }
                onBookNow={() => {}}
                onViewDetails={() => {}}
                language={language}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
