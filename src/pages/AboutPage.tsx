import { Leaf, Heart, Award, Users } from 'lucide-react';
import { TeamMemberCard } from '../components/TeamMemberCard';
import { HorseCard } from '../components/HorseCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Card } from '../components/ui/card';

interface AboutPageProps {
  language: 'en' | 'fi';
}

export function AboutPage({ language }: AboutPageProps) {
  const t = {
    en: {
      pageTitle: 'About Länsilammen Tila',
      pageSubtitle: 'A family tradition of authentic Finnhorse experiences',
      ourStory: 'Our Story',
      storyTitle: 'Generations of Tradition in Lapland',
      storyText1: 'Founded in 1998, Länsilammen Tila has been a family-run farm dedicated to preserving the heritage of the Finnhorse while sharing the magic of Lapland with visitors from around the world. Located just outside Rovaniemi, our farm sits in the heart of pristine Arctic wilderness, where the Northern Lights dance overhead and ancient forests whisper their secrets.',
      storyText2: 'Our family\'s connection to horses spans generations. What started as a small stable has grown into a premier destination for authentic Arctic horse experiences. We believe in sustainable tourism that respects both our animals and the environment, ensuring that future generations can enjoy the same natural beauty we cherish today.',
      ourValues: 'Our Values',
      values: [
        {
          icon: 'heart',
          title: 'Animal Welfare',
          description: 'Our Finnhorses are family. Their health, happiness, and wellbeing always come first.',
        },
        {
          icon: 'leaf',
          title: 'Sustainability',
          description: 'We practice responsible tourism and sustainable farming to protect Arctic nature.',
        },
        {
          icon: 'award',
          title: 'Authenticity',
          description: 'Every experience reflects genuine Finnish traditions and our love for these horses.',
        },
        {
          icon: 'users',
          title: 'Community',
          description: 'We support local culture and contribute to the preservation of Finnhorse heritage.',
        },
      ],
      meetTheTeam: 'Meet Our Team',
      team: [
        {
          name: 'Anni Korhonen',
          role: 'Farm Owner & Founder',
          bio: 'Anni founded the farm in 1998 and has dedicated her life to Finnhorse conservation and sustainable tourism.',
        },
        {
          name: 'Mika Virtanen',
          role: 'Head Guide & Trainer',
          bio: 'With 15+ years of experience, Mika leads our tours and trains both horses and new guides.',
        },
        {
          name: 'Sofia Laine',
          role: 'Tour Coordinator',
          bio: 'Sofia ensures every guest has a memorable experience and manages our booking operations.',
        },
      ],
      meetTheHorses: 'Meet Our Finnhorses',
      horsesIntro: 'Our herd consists of beautiful Finnhorses, Finland\'s national horse breed. Each horse has their own unique personality and story.',
      horses: [
        {
          name: 'Aarre',
          age: '8 years',
          personality: 'Gentle giant with a calm temperament. Perfect for beginners and loves carrots!',
        },
        {
          name: 'Lumikki',
          age: '6 years',
          personality: 'Elegant and graceful mare who enjoys long rides through the forest.',
        },
        {
          name: 'Ukko',
          age: '10 years',
          personality: 'Experienced and reliable stallion. A favorite among our regular guests.',
        },
        {
          name: 'Revontuli',
          age: '5 years',
          personality: 'Spirited and playful, named after the Northern Lights she loves to chase.',
        },
        {
          name: 'Taiga',
          age: '9 years',
          personality: 'Strong and steady. Loves winter rides and has a special connection with children.',
        },
        {
          name: 'Kulta',
          age: '7 years',
          personality: 'Sweet and affectionate. Known for her beautiful golden coat and gentle nature.',
        },
      ],
      sustainability: 'Our Commitment to Sustainability',
      sustainabilityText: 'We are proud holders of the Sustainable Tourism certification. Our practices include renewable energy use, waste minimization, local sourcing, and active participation in Finnhorse conservation programs. Every tour is designed to have minimal environmental impact while providing maximum cultural and educational value.',
      finnhorseHeritage: 'The Finnhorse Heritage',
      heritageText: 'The Finnhorse is Finland\'s only native horse breed and our national horse. These versatile, hardy horses have been companions to Finns for centuries, adapted perfectly to Arctic conditions. By choosing our tours, you\'re supporting the preservation of this precious heritage.',
    },
    fi: {
      pageTitle: 'Tietoa Länsilammen Tilasta',
      pageSubtitle: 'Sukupolvien perinne aidoissa suomenhevoskokemuksissa',
      ourStory: 'Meidän Tarina',
      storyTitle: 'Sukupolvien Perinne Lapissa',
      storyText1: 'Vuonna 1998 perustettu Länsilammen Tila on ollut perheyrittäjäinen tila, joka on omistautunut suomenhevosen perinnön säilyttämiseen samalla kun se jakaa Lapin taikaa vierailijoille ympäri maailmaa. Rovaniemen ulkopuolella sijaitseva tilaamme on koskemattoman arktisen erämaan sydämessä, missä revontulet tanssivat taivaalla ja muinaiset metsät kuiskivat salaisuuksiaan.',
      storyText2: 'Perheemme yhteys hevosiin ulottuu sukupolvien taakse. Pienestä tallista kasvanut toimintamme on nyt johtava kohde aidoille arktisille hevoskokemuksille. Uskomme kestävään matkailuun, joka kunnioittaa sekä eläimiämme että ympäristöä, varmistaen että tulevat sukupolvet voivat nauttia samasta luonnon kauneudesta, josta me pidämme kiinni.',
      ourValues: 'Arvomme',
      values: [
        {
          icon: 'heart',
          title: 'Eläinten Hyvinvointi',
          description: 'Suomenhevosemme ovat perhettä. Heidän terveytensä, onnellisuutensa ja hyvinvointinsa ovat aina etusijalla.',
        },
        {
          icon: 'leaf',
          title: 'Kestävyys',
          description: 'Harjoitamme vastuullista matkailua ja kestävää maataloutta arktisen luonnon suojelemiseksi.',
        },
        {
          icon: 'award',
          title: 'Aitous',
          description: 'Jokainen kokemus heijastaa aitoja suomalaisia perinteitä ja rakkauttamme näitä hevosia kohtaan.',
        },
        {
          icon: 'users',
          title: 'Yhteisö',
          description: 'Tuemme paikallista kulttuuria ja osallistumme suomenhevosen perinnön säilyttämiseen.',
        },
      ],
      meetTheTeam: 'Tapaa Tiimimme',
      team: [
        {
          name: 'Anni Korhonen',
          role: 'Tilan Omistaja & Perustaja',
          bio: 'Anni perusti tilan vuonna 1998 ja on omistanut elämänsä suomenhevosten suojeluun ja kestävään matkailuun.',
        },
        {
          name: 'Mika Virtanen',
          role: 'Pääopas & Kouluttaja',
          bio: 'Yli 15 vuoden kokemuksella Mika johtaa retkeämme ja kouluttaa sekä hevosia että uusia oppaita.',
        },
        {
          name: 'Sofia Laine',
          role: 'Retki Koordinaattori',
          bio: 'Sofia varmistaa, että jokainen vieras saa unohtumattoman kokemuksen ja hallinnoi varauksiamme.',
        },
      ],
      meetTheHorses: 'Tapaa Suomenhevosemme',
      horsesIntro: 'Laumamme koostuu kauniista suomenhevosista, Suomen kansallisesta hevosrodusta. Jokaisella hevosella on oma ainutlaatuinen persoonallisuus ja tarina.',
      horses: [
        {
          name: 'Aarre',
          age: '8 vuotta',
          personality: 'Lempeä jättiläinen rauhallisella luonteella. Täydellinen aloittelijoille ja rakastaa porkkanoita!',
        },
        {
          name: 'Lumikki',
          age: '6 vuotta',
          personality: 'Elegantti ja sulokas tamma, joka nauttii pitkistä ratsastusretkistä metsässä.',
        },
        {
          name: 'Ukko',
          age: '10 vuotta',
          personality: 'Kokenut ja luotettava ori. Vakiovieraidemme suosikki.',
        },
        {
          name: 'Revontuli',
          age: '5 vuotta',
          personality: 'Eloisa ja leikkisä, nimetty revontulien mukaan, joita hän rakastaa jahtaamaan.',
        },
        {
          name: 'Taiga',
          age: '9 vuotta',
          personality: 'Vahva ja tasainen. Rakastaa talviratsastusta ja hänellä on erityinen yhteys lapsiin.',
        },
        {
          name: 'Kulta',
          age: '7 vuotta',
          personality: 'Suloinen ja rakastava. Tunnettu kauniista kullanvärisestä turkistaan ja lempeästä luonteestaan.',
        },
      ],
      sustainability: 'Sitoutumisemme Kestävyyteen',
      sustainabilityText: 'Olemme ylpeitä kestävän matkailun sertifikaatin haltijoita. Käytäntömme sisältävät uusiutuvan energian käytön, jätteiden minimoimisen, paikallisen hankinnan ja aktiivisen osallistumisen suomenhevosten suojeluohjelmiin. Jokainen retki on suunniteltu niin, että ympäristövaikutus on minimaalinen ja kulttuurillinen ja koulutuksellinen arvo maksimaalinen.',
      finnhorseHeritage: 'Suomenhevosen Perintö',
      heritageText: 'Suomenhevonen on Suomen ainoa alkuperäinen hevosrotu ja kansallishevosemme. Nämä monipuoliset, sitkeät hevoset ovat olleet suomalaisten kumppaneita vuosisatojen ajan, täydellisesti sopeutuneet arktisiin olosuhteisiin. Valitsemalla retkemme tuet tämän arvokkaan perinnön säilyttämistä.',
    },
  };

  const text = t[language];

  const iconMap = {
    heart: Heart,
    leaf: Leaf,
    award: Award,
    users: Users,
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1694885138169-bb8acc2aa8d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3JzZSUyMHN0YWJsZSUyMGZhcm18ZW58MXx8fHwxNzYwNDcwNzEzfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Our Farm"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl mb-4" style={{ fontWeight: 700 }}>
            {text.pageTitle}
          </h1>
          <p className="text-lg md:text-xl opacity-90">{text.pageSubtitle}</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#1eb3a6] mb-2 tracking-wide uppercase text-sm">
              {text.ourStory}
            </p>
            <h2 className="mb-6">{text.storyTitle}</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>{text.storyText1}</p>
              <p>{text.storyText2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">{text.ourValues}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {text.values.map((value, index) => {
              const Icon = iconMap[value.icon as keyof typeof iconMap];
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-[#1eb3a6]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#1eb3a6]" />
                  </div>
                  <h3 className="mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">{text.meetTheTeam}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {text.team.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image="https://images.unsplash.com/photo-1753161023962-665967602405?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwMzY5OTA2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Horses Section */}
      <section className="py-16 md:py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">{text.meetTheHorses}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{text.horsesIntro}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {text.horses.map((horse, index) => (
              <HorseCard
                key={index}
                name={horse.name}
                age={horse.age}
                personality={horse.personality}
                image="https://images.unsplash.com/photo-1593179449458-e0d43d512551?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=682"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">{text.sustainability}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{text.sustainabilityText}</p>

              <div className="bg-[#1eb3a6]/10 rounded-lg p-6">
                <h3 className="mb-4">{text.finnhorseHeritage}</h3>
                <p className="text-gray-600 leading-relaxed">{text.heritageText}</p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1513257267253-252b75acfd04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5uaG9yc2UlMjBzbm93JTIwbGFwbGFuZHxlbnwxfHx8fDE3NjA0NzA3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Finnhorse in nature"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
