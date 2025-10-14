import { Calendar, Users, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface BookingWidgetProps {
  tourName: string;
  price: string;
  language: 'en' | 'fi';
}

export function BookingWidget({ tourName, price, language }: BookingWidgetProps) {
  const t = {
    en: {
      bookYourTour: 'Book Your Tour',
      selectDate: 'Select Date',
      selectTime: 'Select Time',
      numberOfGuests: 'Number of Guests',
      totalPrice: 'Total Price',
      proceedToBooking: 'Proceed to Booking',
      perPerson: 'per person',
    },
    fi: {
      bookYourTour: 'Varaa Retkesi',
      selectDate: 'Valitse Päivä',
      selectTime: 'Valitse Aika',
      numberOfGuests: 'Vieraiden Määrä',
      totalPrice: 'Kokonaishinta',
      proceedToBooking: 'Jatka Varaukseen',
      perPerson: 'per henkilö',
    },
  };

  const text = t[language];

  return (
    <Card className="p-6 sticky top-24">
      <h3 className="mb-6">{text.bookYourTour}</h3>

      <div className="space-y-4 mb-6">
        {/* Date Selector */}
        <div>
          <label className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
            <Calendar className="w-4 h-4" />
            <span>{text.selectDate}</span>
          </label>
          <input
            type="date"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1eb3a6]"
          />
        </div>

        {/* Time Selector */}
        <div>
          <label className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
            <Clock className="w-4 h-4" />
            <span>{text.selectTime}</span>
          </label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1eb3a6]">
            <option>09:00</option>
            <option>11:00</option>
            <option>14:00</option>
            <option>16:00</option>
          </select>
        </div>

        {/* Guest Count */}
        <div>
          <label className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
            <Users className="w-4 h-4" />
            <span>{text.numberOfGuests}</span>
          </label>
          <input
            type="number"
            min="1"
            max="8"
            defaultValue="2"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1eb3a6]"
          />
        </div>
      </div>

      {/* Price Display */}
      <div className="border-t border-gray-200 pt-4 mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">€{price} × 2 {text.perPerson}</span>
          <span className="text-gray-900">€{parseInt(price) * 2}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>{text.totalPrice}</span>
          <span className="text-[#0f1e3d]" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
            €{parseInt(price) * 2}
          </span>
        </div>
      </div>

      {/* Book Button */}
      <Button className="w-full bg-[#1eb3a6] hover:bg-[#18998e] text-white py-6">
        {text.proceedToBooking}
      </Button>

      <p className="text-xs text-gray-500 text-center mt-4">
        {language === 'en' 
          ? 'Free cancellation up to 24 hours before the tour'
          : 'Ilmainen peruutus 24 tuntia ennen retkeä'}
      </p>
    </Card>
  );
}
