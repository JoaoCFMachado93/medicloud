// config.js
const backendBaseUrl = "http://localhost:8080"; // Update this with your backend base URL

const SALUTATION_OPTIONS = ["Dr.", "Prof.", "Mr.", "Ms.", "Mx.", "Nurse"];
const GENDER_OPTIONS = ["Male", "Female", "Other"];
const AGE_INTERVAL = [
  "18-25",
  "26-30",
  "31-35",
  "36-40",
  "41- 45",
  "46-50",
  "51-55",
  "56-60",
  ">60",
];
const WORK_PLACE_SETTING = [
  "Community Hospital",
  "Private Practice",
  "Academic Hospital",
  "Medical Student",
  "Other",
];
const MEDICAL_SPECIALITY = [
  "Gastroenterologist / Endoscopist",
  "Surgeon / Endoscopist",
  "Pathologist",
  "Oncologist",
  "Hepatologist",
  "Paediatrician",
  "Radiologist",
  "Medical Student",
];

const COUNTRY_OF_ORIGIN_OPTIONS = [
  "United States of America",
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua & Deps",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina",
  "Burma",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Rep",
  "Chad",
  "Chile",
  "Republic of China",
  "Colombia",
  "Comoros",
  "Democratic Republic of the Congo",
  "Republic of the Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Danzig",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gaza Strip",
  "The Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Holy Roman Empire",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Republic of Ireland",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jonathanland",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "North Korea",
  "South Korea",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mount Athos",
  "Mozambique",
  "Namibia",
  "Nauru",
  "Nepal",
  "Newfoundland",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Ottoman Empire",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Prussia",
  "Qatar",
  "Romania",
  "Rome",
  "Russian Federation",
  "Rwanda",
  "Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome & Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad & Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe"
];


export { SALUTATION_OPTIONS, GENDER_OPTIONS, AGE_INTERVAL,WORK_PLACE_SETTING,MEDICAL_SPECIALITY, COUNTRY_OF_ORIGIN_OPTIONS, backendBaseUrl };
