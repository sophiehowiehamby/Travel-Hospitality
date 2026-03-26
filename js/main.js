// ============================================================
// TRAVEL DATA
// ============================================================

const flightsData = [
  {
    id: 1,
    airline: 'American Airlines',
    airlineCode: 'AA',
    airlineIcon: 'fa-plane',
    from: 'JFK', fromCity: 'New York',
    to: 'LAX', toCity: 'Los Angeles',
    departure: '06:00 AM', arrival: '09:30 AM',
    duration: '5h 30m',
    stops: 0, stopsLabel: 'Nonstop',
    price: 289,
    class: 'Economy',
    aircraft: 'Boeing 737'
  },
  {
    id: 2,
    airline: 'Delta Air Lines',
    airlineCode: 'DL',
    airlineIcon: 'fa-plane',
    from: 'JFK', fromCity: 'New York',
    to: 'MIA', toCity: 'Miami',
    departure: '08:45 AM', arrival: '11:55 AM',
    duration: '3h 10m',
    stops: 0, stopsLabel: 'Nonstop',
    price: 199,
    class: 'Economy',
    aircraft: 'Airbus A320'
  },
  {
    id: 3,
    airline: 'United Airlines',
    airlineCode: 'UA',
    airlineIcon: 'fa-plane',
    from: 'ORD', fromCity: 'Chicago',
    to: 'SFO', toCity: 'San Francisco',
    departure: '10:20 AM', arrival: '01:40 PM',
    duration: '4h 20m',
    stops: 0, stopsLabel: 'Nonstop',
    price: 349,
    class: 'Business',
    aircraft: 'Boeing 787'
  },
  {
    id: 4,
    airline: 'Southwest Airlines',
    airlineCode: 'WN',
    airlineIcon: 'fa-plane',
    from: 'DAL', fromCity: 'Dallas',
    to: 'DEN', toCity: 'Denver',
    departure: '12:15 PM', arrival: '01:45 PM',
    duration: '2h 30m',
    stops: 0, stopsLabel: 'Nonstop',
    price: 159,
    class: 'Economy',
    aircraft: 'Boeing 737 MAX'
  },
  {
    id: 5,
    airline: 'JetBlue Airways',
    airlineCode: 'B6',
    airlineIcon: 'fa-plane',
    from: 'BOS', fromCity: 'Boston',
    to: 'MCO', toCity: 'Orlando',
    departure: '02:30 PM', arrival: '05:45 PM',
    duration: '3h 15m',
    stops: 0, stopsLabel: 'Nonstop',
    price: 179,
    class: 'Economy',
    aircraft: 'Airbus A321'
  },
  {
    id: 6,
    airline: 'American Airlines',
    airlineCode: 'AA',
    airlineIcon: 'fa-plane',
    from: 'LAX', fromCity: 'Los Angeles',
    to: 'SEA', toCity: 'Seattle',
    departure: '07:00 AM', arrival: '09:15 AM',
    duration: '2h 15m',
    stops: 1, stopsLabel: '1 Stop',
    price: 229,
    class: 'Economy',
    aircraft: 'Airbus A319'
  },
  {
    id: 7,
    airline: 'Delta Air Lines',
    airlineCode: 'DL',
    airlineIcon: 'fa-plane',
    from: 'ATL', fromCity: 'Atlanta',
    to: 'LGA', toCity: 'New York',
    departure: '05:30 AM', arrival: '08:10 AM',
    duration: '2h 40m',
    stops: 0, stopsLabel: 'Nonstop',
    price: 219,
    class: 'Economy',
    aircraft: 'Boeing 757'
  },
  {
    id: 8,
    airline: 'United Airlines',
    airlineCode: 'UA',
    airlineIcon: 'fa-plane',
    from: 'DEN', fromCity: 'Denver',
    to: 'HNL', toCity: 'Honolulu',
    departure: '09:55 AM', arrival: '01:20 PM',
    duration: '7h 25m',
    stops: 1, stopsLabel: '1 Stop',
    price: 489,
    class: 'Economy',
    aircraft: 'Boeing 777'
  }
];

const hotelsData = [
  {
    id: 1,
    name: 'The Grand Pacific Hotel',
    stars: 5,
    location: 'Downtown Los Angeles, CA',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80',
    amenities: ['WiFi', 'Pool', 'Gym', 'Spa', 'Restaurant'],
    pricePerNight: 349,
    rating: 4.8,
    reviews: 1247,
    description: 'Luxurious hotel in the heart of downtown with stunning city views.'
  },
  {
    id: 2,
    name: 'Ocean Breeze Resort',
    stars: 4,
    location: 'Miami Beach, FL',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&q=80',
    amenities: ['WiFi', 'Pool', 'Restaurant', 'Parking'],
    pricePerNight: 229,
    rating: 4.6,
    reviews: 876,
    description: 'Stunning beachfront resort with breathtaking ocean views.'
  },
  {
    id: 3,
    name: 'The Urban Boutique',
    stars: 4,
    location: 'Midtown Manhattan, NY',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80',
    amenities: ['WiFi', 'Gym', 'Restaurant', 'Bar'],
    pricePerNight: 289,
    rating: 4.5,
    reviews: 2103,
    description: 'Chic boutique hotel steps from Times Square and Central Park.'
  },
  {
    id: 4,
    name: 'Skyline Tower Hotel',
    stars: 5,
    location: 'Chicago Loop, IL',
    image: 'https://images.unsplash.com/photo-1529290130-4ca3753253ae?w=400&q=80',
    amenities: ['WiFi', 'Pool', 'Gym', 'Spa', 'Restaurant', 'Parking'],
    pricePerNight: 399,
    rating: 4.9,
    reviews: 634,
    description: 'Premium tower hotel with panoramic views of the Chicago skyline.'
  },
  {
    id: 5,
    name: 'Golden Gate Inn',
    stars: 3,
    location: 'Fishermans Wharf, San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&q=80',
    amenities: ['WiFi', 'Parking', 'Restaurant'],
    pricePerNight: 149,
    rating: 4.2,
    reviews: 448,
    description: 'Comfortable and affordable inn close to the famous Fishermans Wharf.'
  },
  {
    id: 6,
    name: 'Desert Oasis Spa & Resort',
    stars: 5,
    location: 'Scottsdale, AZ',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400&q=80',
    amenities: ['WiFi', 'Pool', 'Gym', 'Spa', 'Restaurant', 'Parking'],
    pricePerNight: 459,
    rating: 4.9,
    reviews: 987,
    description: 'World-class desert resort featuring award-winning spa treatments.'
  },
  {
    id: 7,
    name: 'Harbor View Hotel',
    stars: 4,
    location: 'Seattle Waterfront, WA',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80',
    amenities: ['WiFi', 'Restaurant', 'Gym', 'Bar'],
    pricePerNight: 199,
    rating: 4.4,
    reviews: 721,
    description: 'Beautiful waterfront hotel with stunning views of Elliott Bay.'
  },
  {
    id: 8,
    name: 'Music City Grand',
    stars: 4,
    location: 'Downtown Nashville, TN',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&q=80',
    amenities: ['WiFi', 'Pool', 'Gym', 'Restaurant', 'Bar'],
    pricePerNight: 179,
    rating: 4.6,
    reviews: 1089,
    description: 'Vibrant hotel in the heart of Music City, steps from Broadway.'
  }
];

const carsData = [
  {
    id: 1,
    name: 'Toyota Camry',
    type: 'Midsize',
    company: 'Enterprise',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=400&q=80',
    seats: 5,
    transmission: 'Automatic',
    luggage: 3,
    pricePerDay: 65,
    mpg: 32,
    features: ['Air Conditioning', 'Bluetooth', 'Backup Camera']
  },
  {
    id: 2,
    name: 'Ford Mustang',
    type: 'Luxury',
    company: 'Hertz',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&q=80',
    seats: 4,
    transmission: 'Automatic',
    luggage: 2,
    pricePerDay: 95,
    mpg: 24,
    features: ['Air Conditioning', 'Bluetooth', 'Apple CarPlay']
  },
  {
    id: 3,
    name: 'Chevrolet Spark',
    type: 'Economy',
    company: 'Avis',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&q=80',
    seats: 4,
    transmission: 'Automatic',
    luggage: 1,
    pricePerDay: 39,
    mpg: 38,
    features: ['Air Conditioning', 'USB Charging']
  },
  {
    id: 4,
    name: 'Honda CR-V',
    type: 'SUV',
    company: 'National',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&q=80',
    seats: 5,
    transmission: 'Automatic',
    luggage: 4,
    pricePerDay: 79,
    mpg: 30,
    features: ['Air Conditioning', 'Bluetooth', 'All-Wheel Drive', 'Backup Camera']
  },
  {
    id: 5,
    name: 'Volkswagen Jetta',
    type: 'Compact',
    company: 'Budget',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&q=80',
    seats: 5,
    transmission: 'Manual',
    luggage: 2,
    pricePerDay: 52,
    mpg: 34,
    features: ['Air Conditioning', 'Bluetooth', 'Lane Assist']
  },
  {
    id: 6,
    name: 'Chevrolet Suburban',
    type: 'Van',
    company: 'Enterprise',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&q=80',
    seats: 8,
    transmission: 'Automatic',
    luggage: 6,
    pricePerDay: 119,
    mpg: 20,
    features: ['Air Conditioning', 'Bluetooth', 'Third Row Seating', 'Backup Camera']
  },
  {
    id: 7,
    name: 'BMW 5 Series',
    type: 'Luxury',
    company: 'Hertz',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&q=80',
    seats: 5,
    transmission: 'Automatic',
    luggage: 3,
    pricePerDay: 149,
    mpg: 28,
    features: ['Air Conditioning', 'Apple CarPlay', 'Heated Seats', 'Backup Camera']
  },
  {
    id: 8,
    name: 'Toyota Highlander',
    type: 'SUV',
    company: 'Avis',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80',
    seats: 7,
    transmission: 'Automatic',
    luggage: 5,
    pricePerDay: 89,
    mpg: 27,
    features: ['Air Conditioning', 'Bluetooth', 'Third Row Seating', 'All-Wheel Drive']
  }
];

// ============================================================
// UTILITY FUNCTIONS
// ============================================================

function getQueryParams() {
  return new URLSearchParams(window.location.search);
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function formatCurrency(amount) {
  return '$' + parseFloat(amount).toFixed(2);
}

// ============================================================
// DATE DEFAULTS
// ============================================================

function initDateDefaults() {
  const today = new Date();
  const returnDay = new Date();
  returnDay.setDate(today.getDate() + 7);

  const pad = n => String(n).padStart(2, '0');
  const todayStr = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;
  const returnStr = `${returnDay.getFullYear()}-${pad(returnDay.getMonth() + 1)}-${pad(returnDay.getDate())}`;

  document.querySelectorAll('input[type="date"]').forEach(input => {
    input.min = todayStr;
    if (!input.value) {
      if (input.id === 'returnDate' || input.id === 'checkoutDate' || input.id === 'carReturnDate') {
        input.value = returnStr;
      } else if (input.id === 'departDate' || input.id === 'checkinDate' || input.id === 'pickupDate') {
        input.value = todayStr;
      }
    }
  });
}

// ============================================================
// TAB SWITCHING
// ============================================================

function initTabSwitching() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const searchForms = document.querySelectorAll('.search-form');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      searchForms.forEach(f => {
        f.classList.remove('active');
        f.style.display = 'none';
      });

      btn.classList.add('active');
      const targetTab = btn.getAttribute('data-tab');
      const targetForm = document.querySelector(`.search-form[data-tab="${targetTab}"]`);
      if (targetForm) {
        targetForm.classList.add('active');
        targetForm.style.display = 'block';
      }
    });
  });

  // Ensure active form is visible
  const activeForm = document.querySelector('.search-form.active');
  if (activeForm) activeForm.style.display = 'block';
}

// ============================================================
// MOBILE NAV
// ============================================================

function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const icon = toggle.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    }
  });

  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      const icon = toggle.querySelector('i');
      if (icon) {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
      }
    });
  });
}

// ============================================================
// POPULATE SEARCH FORMS FROM URL
// ============================================================

function populateSearchForms() {
  const params = getQueryParams();
  const fieldMap = {
    from: 'fromCity',
    to: 'toCity',
    depart: 'departDate',
    return: 'returnDate',
    passengers: 'passengers',
    class: 'flightClass',
    city: 'hotelCity',
    checkin: 'checkinDate',
    checkout: 'checkoutDate',
    guests: 'guests',
    pickup: 'pickupLocation',
    pickupDate: 'pickupDate',
    returnDate: 'carReturnDate',
    type: 'carType'
  };

  params.forEach((value, key) => {
    const elId = fieldMap[key];
    if (elId) {
      const el = document.getElementById(elId);
      if (el) el.value = value;
    }
  });
}

// ============================================================
// SEARCH HANDLERS
// ============================================================

function handleFlightSearch(e) {
  e.preventDefault();
  const from = document.getElementById('fromCity')?.value || '';
  const to = document.getElementById('toCity')?.value || '';
  const depart = document.getElementById('departDate')?.value || '';
  const ret = document.getElementById('returnDate')?.value || '';
  const passengers = document.getElementById('passengers')?.value || '1 Passenger';
  const cls = document.getElementById('flightClass')?.value || 'Economy';
  window.location.href = `flights.html?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&depart=${depart}&return=${ret}&passengers=${encodeURIComponent(passengers)}&class=${encodeURIComponent(cls)}`;
}

function handleHotelSearch(e) {
  e.preventDefault();
  const city = document.getElementById('hotelCity')?.value || '';
  const checkin = document.getElementById('checkinDate')?.value || '';
  const checkout = document.getElementById('checkoutDate')?.value || '';
  const guests = document.getElementById('guests')?.value || '1 Guest';
  window.location.href = `hotels.html?city=${encodeURIComponent(city)}&checkin=${checkin}&checkout=${checkout}&guests=${encodeURIComponent(guests)}`;
}

function handleCarSearch(e) {
  e.preventDefault();
  const pickup = document.getElementById('pickupLocation')?.value || '';
  const pickupDate = document.getElementById('pickupDate')?.value || '';
  const returnDate = document.getElementById('carReturnDate')?.value || '';
  const type = document.getElementById('carType')?.value || 'Any Type';
  window.location.href = `cars.html?pickup=${encodeURIComponent(pickup)}&pickupDate=${pickupDate}&returnDate=${returnDate}&type=${encodeURIComponent(type)}`;
}

// ============================================================
// RENDER FUNCTIONS
// ============================================================

function getStopsBadge(stops) {
  if (stops === 0) return '<span class="badge badge-nonstop">Nonstop</span>';
  if (stops === 1) return '<span class="badge badge-stop">1 Stop</span>';
  return `<span class="badge badge-stops">${stops} Stops</span>`;
}

function getStarsHTML(n) {
  let html = '<span class="stars">';
  for (let i = 0; i < 5; i++) {
    html += `<i class="${i < n ? 'fas' : 'far'} fa-star"></i>`;
  }
  html += '</span>';
  return html;
}

function renderFlights(flights) {
  const container = document.getElementById('flights-container');
  if (!container) return;

  const countEl = document.querySelector('.results-count-text');
  if (countEl) countEl.textContent = `${flights.length} results found`;

  const sortLabel = document.querySelector('.sort-results-count');
  if (sortLabel) sortLabel.textContent = `${flights.length} results found`;

  if (flights.length === 0) {
    container.innerHTML = `<div class="no-results"><i class="fas fa-plane-slash"></i><p>No flights found matching your filters.</p></div>`;
    return;
  }

  container.innerHTML = flights.map(f => `
    <div class="result-card">
      <div class="flight-airline">
        <div class="airline-logo"><i class="fas ${f.airlineIcon}"></i></div>
        <div class="airline-name">${f.airline}</div>
      </div>
      <div class="flight-route">
        <div class="route-times">
          <div>
            <div class="time">${f.departure}</div>
            <div class="time-city">${f.from} · ${f.fromCity}</div>
          </div>
          <div class="route-line">
            <div class="route-bar"></div>
            <div class="route-duration">${f.duration}</div>
          </div>
          <div>
            <div class="time">${f.arrival}</div>
            <div class="time-city">${f.to} · ${f.toCity}</div>
          </div>
        </div>
        <div class="flight-meta">
          ${getStopsBadge(f.stops)}
          <span class="badge" style="background:var(--color-light-gray);color:var(--color-text-secondary);">${f.class}</span>
          <span class="badge" style="background:var(--color-light-gray);color:var(--color-text-secondary);">${f.aircraft}</span>
        </div>
      </div>
      <div class="flight-price">
        <div class="price">$${f.price}</div>
        <div class="price-label">per person</div>
        <a href="checkout-flight.html?flightId=${f.id}&airline=${encodeURIComponent(f.airline)}&from=${f.from}&to=${f.to}&price=${f.price}&departure=${encodeURIComponent(f.departure)}&arrival=${encodeURIComponent(f.arrival)}&class=${encodeURIComponent(f.class)}" class="btn-select">Select <i class="fas fa-arrow-right"></i></a>
      </div>
    </div>
  `).join('');
}

function renderHotels(hotels) {
  const container = document.getElementById('hotels-container');
  if (!container) return;

  if (hotels.length === 0) {
    container.innerHTML = `<div class="no-results"><i class="fas fa-hotel"></i><p>No hotels found matching your filters.</p></div>`;
    return;
  }

  container.innerHTML = hotels.map(h => `
    <div class="hotel-card">
      <img class="hotel-image" src="${h.image}" alt="${h.name}" onerror="this.style.background='#f0f0f0'">
      <div class="hotel-content">
        <div>
          <div class="hotel-header">
            <div>
              <div class="hotel-name">${h.name}</div>
              ${getStarsHTML(h.stars)}
            </div>
          </div>
          <div class="hotel-location"><i class="fas fa-map-marker-alt"></i> ${h.location}</div>
          <div class="hotel-amenities">
            ${h.amenities.map(a => `<span class="tag"><i class="fas fa-check" style="color:#6B46C1;font-size:0.7rem;"></i> ${a}</span>`).join('')}
          </div>
        </div>
        <div class="hotel-footer">
          <div class="hotel-rating">
            <div class="rating-score">${h.rating}</div>
            <div class="rating-text">${getRatingLabel(h.rating)}<br><span style="font-size:0.75rem;color:var(--color-text-secondary);">${h.reviews.toLocaleString()} reviews</span></div>
          </div>
          <div class="hotel-price-block">
            <div class="hotel-price">$${h.pricePerNight}</div>
            <div class="hotel-price-label">per night</div>
            <a href="checkout-hotel.html?hotelId=${h.id}&name=${encodeURIComponent(h.name)}&price=${h.pricePerNight}&stars=${h.stars}&location=${encodeURIComponent(h.location)}" class="btn-select">Book Now <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function getRatingLabel(rating) {
  if (rating >= 4.8) return 'Exceptional';
  if (rating >= 4.5) return 'Excellent';
  if (rating >= 4.0) return 'Very Good';
  if (rating >= 3.5) return 'Good';
  return 'Fair';
}

function renderCars(cars) {
  const container = document.getElementById('cars-container');
  if (!container) return;

  if (cars.length === 0) {
    container.innerHTML = `<div class="no-results"><i class="fas fa-car"></i><p>No cars found matching your filters.</p></div>`;
    return;
  }

  container.innerHTML = cars.map(c => `
    <div class="car-card">
      <img class="car-image" src="${c.image}" alt="${c.name}" onerror="this.style.background='#f0f0f0'">
      <div class="car-content">
        <div>
          <div class="car-name">${c.name}</div>
          <span class="car-type-badge">${c.type}</span>
          <div class="car-specs">
            <div class="car-spec"><i class="fas fa-users"></i> ${c.seats} seats</div>
            <div class="car-spec"><i class="fas fa-cog"></i> ${c.transmission}</div>
            <div class="car-spec"><i class="fas fa-suitcase"></i> ${c.luggage} bags</div>
            <div class="car-spec"><i class="fas fa-gas-pump"></i> ${c.mpg} mpg</div>
          </div>
          <div class="car-features">
            ${c.features.map(f => `<span class="tag">${f}</span>`).join('')}
          </div>
        </div>
        <div class="car-footer">
          <div class="car-company"><i class="fas fa-building" style="color:#6B46C1;"></i> ${c.company}</div>
          <div class="car-price-block">
            <div class="car-price">$${c.pricePerDay}</div>
            <div class="car-price-label">per day</div>
            <a href="checkout-car.html?carId=${c.id}&name=${encodeURIComponent(c.name)}&price=${c.pricePerDay}&type=${encodeURIComponent(c.type)}&company=${encodeURIComponent(c.company)}" class="btn-select">Rent Now <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// ============================================================
// FILTER FUNCTIONS
// ============================================================

function initFlightFilters() {
  const priceRange = document.getElementById('priceRangeFlight');
  const priceVal = document.getElementById('priceRangeFlightVal');
  const stopBoxes = document.querySelectorAll('.filter-section:nth-child(2) input[type="checkbox"]');
  const airlineBoxes = document.querySelectorAll('.filter-section:nth-child(3) input[type="checkbox"]');
  const timeBoxes = document.querySelectorAll('.filter-section:nth-child(4) input[type="checkbox"]');

  function applyFilters() {
    const maxPrice = priceRange ? parseInt(priceRange.value) : 9999;
    if (priceVal) priceVal.textContent = '$' + maxPrice;

    const selectedStops = [];
    stopBoxes.forEach(cb => { if (cb.checked) selectedStops.push(parseInt(cb.value)); });

    const selectedAirlines = [];
    airlineBoxes.forEach(cb => { if (cb.checked) selectedAirlines.push(cb.value); });

    const selectedTimes = [];
    timeBoxes.forEach(cb => { if (cb.checked) selectedTimes.push(cb.value); });

    let filtered = flightsData.filter(f => {
      if (f.price > maxPrice) return false;
      const stopMatch = selectedStops.length === 0 || selectedStops.some(s => {
        if (s === 2) return f.stops >= 2;
        return f.stops === s;
      });
      if (!stopMatch) return false;
      const airlineMatch = selectedAirlines.length === 0 || selectedAirlines.some(a => f.airline.includes(a));
      if (!airlineMatch) return false;
      const timeMatch = selectedTimes.length === 0 || selectedTimes.some(t => {
        const hour = parseInt(f.departure.split(':')[0]);
        const ampm = f.departure.includes('PM') ? 'pm' : 'am';
        const h24 = ampm === 'pm' && hour !== 12 ? hour + 12 : (ampm === 'am' && hour === 12 ? 0 : hour);
        if (t === 'morning') return h24 >= 6 && h24 < 12;
        if (t === 'afternoon') return h24 >= 12 && h24 < 18;
        if (t === 'evening') return h24 >= 18;
        return true;
      });
      return timeMatch;
    });

    renderFlights(filtered);
    updateSortCount(filtered.length);
  }

  if (priceRange) {
    priceRange.addEventListener('input', applyFilters);
  }
  stopBoxes.forEach(cb => cb.addEventListener('change', applyFilters));
  airlineBoxes.forEach(cb => cb.addEventListener('change', applyFilters));
  timeBoxes.forEach(cb => cb.addEventListener('change', applyFilters));
}

function initHotelFilters() {
  const priceRange = document.getElementById('priceRangeHotel');
  const priceVal = document.getElementById('priceRangeHotelVal');
  const starBoxes = document.querySelectorAll('.star-filter');
  const amenityBoxes = document.querySelectorAll('.amenity-filter');

  function applyFilters() {
    const maxPrice = priceRange ? parseInt(priceRange.value) : 9999;
    if (priceVal) priceVal.textContent = '$' + maxPrice;

    const selectedStars = [];
    starBoxes.forEach(cb => { if (cb.checked) selectedStars.push(parseInt(cb.value)); });

    const selectedAmenities = [];
    amenityBoxes.forEach(cb => { if (cb.checked) selectedAmenities.push(cb.value); });

    let filtered = hotelsData.filter(h => {
      if (h.pricePerNight > maxPrice) return false;
      if (selectedStars.length > 0 && !selectedStars.includes(h.stars)) return false;
      if (selectedAmenities.length > 0) {
        const hasAll = selectedAmenities.every(a => h.amenities.includes(a));
        if (!hasAll) return false;
      }
      return true;
    });

    renderHotels(filtered);
    updateSortCount(filtered.length);
  }

  if (priceRange) priceRange.addEventListener('input', applyFilters);
  starBoxes.forEach(cb => cb.addEventListener('change', applyFilters));
  amenityBoxes.forEach(cb => cb.addEventListener('change', applyFilters));
}

function initCarFilters() {
  const priceRange = document.getElementById('priceRangeCar');
  const priceVal = document.getElementById('priceRangeCarVal');
  const typeBoxes = document.querySelectorAll('.car-type-filter');
  const transBoxes = document.querySelectorAll('.transmission-filter');
  const companyBoxes = document.querySelectorAll('.company-filter');

  function applyFilters() {
    const maxPrice = priceRange ? parseInt(priceRange.value) : 9999;
    if (priceVal) priceVal.textContent = '$' + maxPrice;

    const selectedTypes = [];
    typeBoxes.forEach(cb => { if (cb.checked) selectedTypes.push(cb.value); });

    const selectedTrans = [];
    transBoxes.forEach(cb => { if (cb.checked) selectedTrans.push(cb.value); });

    const selectedCompanies = [];
    companyBoxes.forEach(cb => { if (cb.checked) selectedCompanies.push(cb.value); });

    let filtered = carsData.filter(c => {
      if (c.pricePerDay > maxPrice) return false;
      if (selectedTypes.length > 0 && !selectedTypes.includes(c.type)) return false;
      if (selectedTrans.length > 0 && !selectedTrans.includes(c.transmission)) return false;
      if (selectedCompanies.length > 0 && !selectedCompanies.includes(c.company)) return false;
      return true;
    });

    renderCars(filtered);
    updateSortCount(filtered.length);
  }

  if (priceRange) priceRange.addEventListener('input', applyFilters);
  typeBoxes.forEach(cb => cb.addEventListener('change', applyFilters));
  transBoxes.forEach(cb => cb.addEventListener('change', applyFilters));
  companyBoxes.forEach(cb => cb.addEventListener('change', applyFilters));
}

// ============================================================
// SORT BAR
// ============================================================

function updateSortCount(count) {
  const el = document.querySelector('.sort-results-count');
  if (el) el.textContent = `${count} results found`;
}

function initSortBar() {
  const sortBtns = document.querySelectorAll('.sort-btn');
  sortBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sortBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const sortBy = btn.getAttribute('data-sort');
      const page = window.location.pathname.split('/').pop();

      if (page === 'flights.html') {
        let sorted = [...flightsData];
        if (sortBy === 'price') sorted.sort((a, b) => a.price - b.price);
        else if (sortBy === 'duration') sorted.sort((a, b) => a.duration.localeCompare(b.duration));
        else if (sortBy === 'departure') sorted.sort((a, b) => a.departure.localeCompare(b.departure));
        renderFlights(sorted);
      } else if (page === 'hotels.html') {
        let sorted = [...hotelsData];
        if (sortBy === 'price') sorted.sort((a, b) => a.pricePerNight - b.pricePerNight);
        else if (sortBy === 'rating') sorted.sort((a, b) => b.rating - a.rating);
        else if (sortBy === 'stars') sorted.sort((a, b) => b.stars - a.stars);
        renderHotels(sorted);
      } else if (page === 'cars.html') {
        let sorted = [...carsData];
        if (sortBy === 'price') sorted.sort((a, b) => a.pricePerDay - b.pricePerDay);
        else if (sortBy === 'type') sorted.sort((a, b) => a.type.localeCompare(b.type));
        renderCars(sorted);
      }
    });
  });
}

// ============================================================
// SEARCH SUMMARY BAR
// ============================================================

function updateSearchSummary() {
  const params = getQueryParams();
  const summary = document.getElementById('searchSummary');
  if (!summary) return;

  const page = window.location.pathname.split('/').pop();
  let html = '';

  if (page === 'flights.html') {
    const from = params.get('from') || 'New York (JFK)';
    const to = params.get('to') || 'Los Angeles (LAX)';
    const depart = formatDate(params.get('depart'));
    const ret = formatDate(params.get('return'));
    const passengers = params.get('passengers') || '1 Passenger';
    const cls = params.get('class') || 'Economy';

    html = `
      <span><i class="fas fa-plane"></i> ${from} → ${to}</span>
      <span><i class="fas fa-calendar"></i> ${depart}${ret ? ' – ' + ret : ''}</span>
      <span><i class="fas fa-user"></i> ${passengers} · ${cls}</span>
      <a href="index.html" class="btn-modify">Modify Search</a>
    `;
  } else if (page === 'hotels.html') {
    const city = params.get('city') || 'Los Angeles';
    const checkin = formatDate(params.get('checkin'));
    const checkout = formatDate(params.get('checkout'));
    const guests = params.get('guests') || '1 Guest';

    html = `
      <span><i class="fas fa-hotel"></i> ${city}</span>
      <span><i class="fas fa-calendar"></i> ${checkin}${checkout ? ' – ' + checkout : ''}</span>
      <span><i class="fas fa-user"></i> ${guests}</span>
      <a href="index.html" class="btn-modify">Modify Search</a>
    `;
  } else if (page === 'cars.html') {
    const pickup = params.get('pickup') || 'Los Angeles (LAX)';
    const pickupDate = formatDate(params.get('pickupDate'));
    const returnDate = formatDate(params.get('returnDate'));
    const type = params.get('type') || 'Any Type';

    html = `
      <span><i class="fas fa-car"></i> ${pickup}</span>
      <span><i class="fas fa-calendar"></i> ${pickupDate}${returnDate ? ' – ' + returnDate : ''}</span>
      <span><i class="fas fa-car-side"></i> ${type}</span>
      <a href="index.html" class="btn-modify">Modify Search</a>
    `;
  }

  summary.innerHTML = html;
}

// ============================================================
// PRICE RANGE DISPLAY
// ============================================================

function initPriceRange() {
  const ranges = document.querySelectorAll('.price-range');
  ranges.forEach(range => {
    const valId = range.id + 'Val';
    const valEl = document.getElementById(valId);
    if (valEl) {
      valEl.textContent = '$' + range.value;
      range.addEventListener('input', () => {
        valEl.textContent = '$' + range.value;
      });
    }
  });
}

// ============================================================
// CHECKOUT
// ============================================================

function initCheckout() {
  let currentStep = 1;
  const totalSteps = 3;

  function showStep(step) {
    document.querySelectorAll('.checkout-step').forEach(s => {
      s.style.display = 'none';
    });
    const activeStep = document.querySelector(`.checkout-step[data-step="${step}"]`);
    if (activeStep) activeStep.style.display = 'block';

    // Update step indicators
    document.querySelectorAll('.step').forEach(s => {
      const sNum = parseInt(s.getAttribute('data-step'));
      s.classList.remove('active', 'completed', 'inactive');
      if (sNum < step) s.classList.add('completed');
      else if (sNum === step) s.classList.add('active');
      else s.classList.add('inactive');
    });

    // Update connectors
    document.querySelectorAll('.step-connector').forEach((conn, idx) => {
      if (idx + 1 < step) conn.classList.add('completed');
      else conn.classList.remove('completed');
    });

    currentStep = step;
  }

  // Next buttons
  document.querySelectorAll('.step-btn-next').forEach(btn => {
    btn.addEventListener('click', () => {
      const step = parseInt(btn.getAttribute('data-step'));
      if (validateStep(step)) {
        if (step < totalSteps) showStep(step + 1);
      }
    });
  });

  // Back buttons
  document.querySelectorAll('.step-btn-back').forEach(btn => {
    btn.addEventListener('click', () => {
      const step = parseInt(btn.getAttribute('data-step'));
      if (step > 1) showStep(step - 1);
    });
  });

  // Initialize first step
  showStep(1);

  // Populate order summary from URL params
  populateCheckoutSummary();
}

function populateCheckoutSummary() {
  const params = getQueryParams();
  const page = window.location.pathname.split('/').pop();

  // Dynamically update visible summary details if elements exist
  const summaryName = document.getElementById('summaryName');
  const summaryPrice = document.getElementById('summaryPrice');

  if (page === 'checkout-flight.html') {
    const airline = params.get('airline') || 'American Airlines';
    const from = params.get('from') || 'JFK';
    const to = params.get('to') || 'LAX';
    const price = parseFloat(params.get('price') || 289);
    const cls = params.get('class') || 'Economy';

    // Update review step details
    const routeEl = document.querySelector('.review-route');
    if (routeEl) routeEl.textContent = `${from} → ${to}`;
    const airlineEl = document.querySelector('.review-airline');
    if (airlineEl) airlineEl.textContent = airline;
    const classEl = document.querySelector('.review-class');
    if (classEl) classEl.textContent = cls;
    const baseFareEls = document.querySelectorAll('.review-base-fare');
    baseFareEls.forEach(el => el.textContent = formatCurrency(price));
    const taxEls = document.querySelectorAll('.review-tax');
    const tax = (price * 0.19).toFixed(2);
    taxEls.forEach(el => el.textContent = formatCurrency(tax));
    const totalEls = document.querySelectorAll('.review-total');
    totalEls.forEach(el => el.textContent = formatCurrency(price + parseFloat(tax)));
  }
}

function validateStep(stepNum) {
  const stepEl = document.querySelector(`.checkout-step[data-step="${stepNum}"]`);
  if (!stepEl) return true;

  let valid = true;
  const requiredInputs = stepEl.querySelectorAll('input[required], select[required], textarea[required]');

  requiredInputs.forEach(input => {
    input.classList.remove('error');
    if (!input.value.trim()) {
      input.classList.add('error');
      valid = false;
    }
  });

  // Check terms checkbox on step 3
  if (stepNum === 3) {
    const termsCheck = stepEl.querySelector('#termsCheck');
    if (termsCheck && !termsCheck.checked) {
      termsCheck.parentElement.style.color = '#EF4444';
      valid = false;
      setTimeout(() => {
        if (termsCheck.parentElement) termsCheck.parentElement.style.color = '';
      }, 2000);
    }
  }

  if (!valid) {
    const firstError = stepEl.querySelector('.error');
    if (firstError) firstError.focus();
  }

  return valid;
}

// ============================================================
// CONFIRMATION PAGE
// ============================================================

function initConfirmation() {
  const refEl = document.getElementById('bookingRef');
  if (refEl) {
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const year = new Date().getFullYear();
    refEl.textContent = `TE-${year}-${randomNum}`;
  }

  // Populate details from URL if available
  const params = getQueryParams();
  if (params.get('flightId') || params.get('airline')) {
    const from = params.get('from') || 'JFK';
    const to = params.get('to') || 'LAX';
    const routeEl = document.querySelector('.confirm-route');
    if (routeEl) routeEl.textContent = `${from} → ${to}`;
  }
}

// ============================================================
// CONTACT FORM
// ============================================================

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
      btn.style.background = 'linear-gradient(135deg, #48BB78 0%, #38A169 100%)';
      btn.disabled = true;
      setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        btn.style.background = '';
        btn.disabled = false;
        form.reset();
      }, 3000);
    }
  });
}

// ============================================================
// SET ACTIVE NAV LINK
// ============================================================

function setActiveNavLink() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ============================================================
// CARD NUMBER FORMATTING
// ============================================================

function initCardFormatting() {
  const cardInput = document.querySelector('input[placeholder="1234 5678 9012 3456"]');
  if (cardInput) {
    cardInput.addEventListener('input', e => {
      let val = e.target.value.replace(/\D/g, '').substring(0, 16);
      e.target.value = val.replace(/(.{4})/g, '$1 ').trim();
    });
  }
  const expiryInput = document.querySelector('input[placeholder="MM/YY"]');
  if (expiryInput) {
    expiryInput.addEventListener('input', e => {
      let val = e.target.value.replace(/\D/g, '').substring(0, 4);
      if (val.length >= 2) val = val.substring(0, 2) + '/' + val.substring(2);
      e.target.value = val;
    });
  }
}

// ============================================================
// PAGE INITIALIZER
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initDateDefaults();
  setActiveNavLink();

  const page = window.location.pathname.split('/').pop() || 'index.html';

  if (page === 'index.html' || page === '') {
    initTabSwitching();
    populateSearchForms();

    const flightsForm = document.getElementById('flightsSearchForm');
    if (flightsForm) flightsForm.addEventListener('submit', handleFlightSearch);

    const hotelsForm = document.getElementById('hotelsSearchForm');
    if (hotelsForm) hotelsForm.addEventListener('submit', handleHotelSearch);

    const carsForm = document.getElementById('carsSearchForm');
    if (carsForm) carsForm.addEventListener('submit', handleCarSearch);
  }

  if (page === 'flights.html') {
    updateSearchSummary();
    renderFlights(flightsData);
    initFlightFilters();
    initSortBar();
    initPriceRange();
    updateSortCount(flightsData.length);
  }

  if (page === 'hotels.html') {
    updateSearchSummary();
    renderHotels(hotelsData);
    initHotelFilters();
    initSortBar();
    initPriceRange();
    updateSortCount(hotelsData.length);
  }

  if (page === 'cars.html') {
    updateSearchSummary();
    renderCars(carsData);
    initCarFilters();
    initSortBar();
    initPriceRange();
    updateSortCount(carsData.length);
  }

  if (page.includes('checkout')) {
    initCheckout();
    initPriceRange();
    initCardFormatting();
  }

  if (page === 'confirmation.html') {
    initConfirmation();
  }

  if (page === 'contact.html') {
    initContactForm();
  }
});
