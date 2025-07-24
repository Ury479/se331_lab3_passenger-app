import type { Passenger, Airline } from '@/types/passenger'

export const mockAirlines: Airline[] = [
  {
    "_id": "252d3bca-d9bb-476c-9a97-562d685e235c",
    "name": "Sri Lankan Airways", 
    "country": "Sri Lanka",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka",
    "head_quaters": "Katunayake, Sri Lanka",
    "website": "www.srilankaaairways.com",
    "established": "1990"
  },
  {
    "_id": "e8c4b8e1-4b6f-4a2d-8f3e-9c1a2b3d4e5f",
    "name": "Eva Air",
    "country": "Taiwan", 
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png",
    "slogan": "Sharing the World, Flying Together",
    "head_quaters": "376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan",
    "website": "www.evaair.com",
    "established": "1989"
  },
  {
    "_id": "f7d5c6e2-5c7g-5b3e-9g4f-0d2b3c4e5f6g",
    "name": "Thai Airways",
    "country": "Thailand",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Thai_Airways_Logo.svg/250px-Thai_Airways_Logo.svg.png", 
    "slogan": "Smooth as Silk",
    "head_quaters": "Bangkok, Thailand",
    "website": "www.thaiairways.com",
    "established": "1988"
  },
  {
    "_id": "a1b2c3d4-6e7f-7c4d-0h5g-1e3c4d5e6f7h",
    "name": "Singapore Airlines",
    "country": "Singapore",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Singapore_Airlines_Logo_2.svg/250px-Singapore_Airlines_Logo_2.svg.png",
    "slogan": "A Great Way to Fly", 
    "head_quaters": "Singapore",
    "website": "www.singaporeair.com",
    "established": "1972"
  }
]

export const mockPassengers: Passenger[] = [
  {
    "_id": "5ef4a412aab3841847750ce8",
    "name": "John Doe",
    "trips": 250,
    "airline": [
      {
        "_id": "e8c4b8e1-4b6f-4a2d-8f3e-9c1a2b3d4e5f",
        "name": "Eva Air",
        "country": "Taiwan",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png",
        "slogan": "Sharing the World, Flying Together",
        "head_quaters": "376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan",
        "website": "www.evaair.com",
        "established": "1989"
      }
    ],
    "__v": 0
  },
  {
    "_id": "5ef4a412aab3841847750ce9",
    "name": "Jane Smith",
    "trips": 180,
    "airline": [
      {
        "_id": "252d3bca-d9bb-476c-9a97-562d685e235c",
        "name": "Sri Lankan Airways",
        "country": "Sri Lanka", 
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
        "slogan": "From Sri Lanka",
        "head_quaters": "Katunayake, Sri Lanka",
        "website": "www.srilankaaairways.com",
        "established": "1990"
      },
      {
        "_id": "f7d5c6e2-5c7g-5b3e-9g4f-0d2b3c4e5f6g",
        "name": "Thai Airways",
        "country": "Thailand",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Thai_Airways_Logo.svg/250px-Thai_Airways_Logo.svg.png",
        "slogan": "Smooth as Silk", 
        "head_quaters": "Bangkok, Thailand",
        "website": "www.thaiairways.com",
        "established": "1988"
      }
    ],
    "__v": 0
  },
  {
    "_id": "5ef4a412aab3841847750cea",
    "name": "Michael Chen", 
    "trips": 95,
    "airline": [
      {
        "_id": "a1b2c3d4-6e7f-7c4d-0h5g-1e3c4d5e6f7h",
        "name": "Singapore Airlines",
        "country": "Singapore",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Singapore_Airlines_Logo_2.svg/250px-Singapore_Airlines_Logo_2.svg.png",
        "slogan": "A Great Way to Fly",
        "head_quaters": "Singapore", 
        "website": "www.singaporeair.com",
        "established": "1972"
      }
    ],
    "__v": 0
  },
  {
    "_id": "5ef4a412aab3841847750ceb",
    "name": "Sarah Wilson",
    "trips": 320,
    "airline": [
      {
        "_id": "e8c4b8e1-4b6f-4a2d-8f3e-9c1a2b3d4e5f",
        "name": "Eva Air",
        "country": "Taiwan",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png",
        "slogan": "Sharing the World, Flying Together",
        "head_quaters": "376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan",
        "website": "www.evaair.com",
        "established": "1989"
      },
      {
        "_id": "a1b2c3d4-6e7f-7c4d-0h5g-1e3c4d5e6f7h", 
        "name": "Singapore Airlines",
        "country": "Singapore",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Singapore_Airlines_Logo_2.svg/250px-Singapore_Airlines_Logo_2.svg.png",
        "slogan": "A Great Way to Fly",
        "head_quaters": "Singapore",
        "website": "www.singaporeair.com",
        "established": "1972"
      }
    ],
    "__v": 0
  }
]
