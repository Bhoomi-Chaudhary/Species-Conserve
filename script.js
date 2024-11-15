// Sample species data
const speciesData = {mammals: [
  { name: "Amur Leopard", status: "Critically Endangered" },
  { name: "Javan Rhino", status: "Critically Endangered" },
  { name: "Mountain Gorilla", status: "Endangered" },
  { name: "Snow Leopard", status: "Vulnerable" },
  { name: "Red Panda", status: "Endangered" },
  { name: "Asian Elephant", status: "Endangered" },
  { name: "Blue Whale", status: "Endangered" },
  { name: "Vaquita", status: "Critically Endangered" },
  { name: "Pangolin", status: "Critically Endangered" },
  { name: "Giant Panda", status: "Vulnerable" },
  { name: "African Wild Dog", status: "Endangered" },
  { name: "Polar Bear", status: "Vulnerable" },
  { name: "Saola", status: "Critically Endangered" },
  { name: "Hainan Gibbon", status: "Critically Endangered" },
  { name: "Bornean Orangutan", status: "Critically Endangered" },
  { name: "Sumatran Elephant", status: "Critically Endangered" },
  { name: "Indochinese Tiger", status: "Endangered" },
  { name: "Tasmanian Devil", status: "Endangered" },
  { name: "Sumatran Rhinoceros", status: "Critically Endangered" },
  { name: "Sri Lankan Leopard", status: "Vulnerable" },
  { name: "Fin Whale", status: "Vulnerable" },
  { name: "Amazonian Manatee", status: "Vulnerable" },
  { name: "Sea Otter", status: "Endangered" },
  { name: "Iberian Lynx", status: "Endangered" },
  { name: "Western Lowland Gorilla", status: "Critically Endangered" },
  { name: "Indian Pangolin", status: "Endangered" },
  { name: "Giant Armadillo", status: "Vulnerable" },
  { name: "Spectacled Bear", status: "Vulnerable" },
  { name: "Malayan Tiger", status: "Critically Endangered" },
  { name: "Clouded Leopard", status: "Vulnerable" },
  { name: "Ethiopian Wolf", status: "Endangered" },
  { name: "Black-Footed Ferret", status: "Endangered" },
  { name: "Markhor", status: "Endangered" },
  { name: "Dugong", status: "Vulnerable" },
  { name: "Snowshoe Hare", status: "Least Concern" },
  { name: "Greater Bamboo Lemur", status: "Critically Endangered" },
  { name: "Okapi", status: "Endangered" },
  { name: "Preble's Meadow Jumping Mouse", status: "Threatened" },
  { name: "Arabian Oryx", status: "Vulnerable" },
  { name: "Golden Lion Tamarin", status: "Endangered" },
  { name: "Jaguar", status: "Near Threatened" },
  { name: "Mandrill", status: "Vulnerable" },
  { name: "Walrus", status: "Vulnerable" },
  { name: "Pygmy Hippopotamus", status: "Endangered" },
  { name: "Red Uakari", status: "Vulnerable" },
  { name: "Chinchilla", status: "Critically Endangered" },
  { name: "Maned Wolf", status: "Near Threatened" },
  { name: "Narwhal", status: "Near Threatened" },
  { name: "Mountain Pygmy Possum", status: "Critically Endangered" },
  { name: "Sand Cat", status: "Least Concern" },
  { name: "Drill", status: "Endangered" },
  { name: "Brown Hyena", status: "Near Threatened" },
  { name: "Bush Dog", status: "Near Threatened" },
  { name: "Black Spider Monkey", status: "Endangered" },
  { name: "Tree Kangaroo", status: "Endangered" },
  { name: "Northern Bald Ibis", status: "Critically Endangered" },
  { name: "Cheetah", status: "Vulnerable" },
  { name: "Black Rhino", status: "Critically Endangered" },
  { name: "Scimitar-Horned Oryx", status: "Extinct in the Wild" },
  { name: "Addax", status: "Critically Endangered" },
  { name: "Bactrian Camel", status: "Critically Endangered" },
  { name: "Lesser One-Horned Rhino", status: "Endangered" },
  { name: "Golden-Headed Lion Tamarin", status: "Endangered" },
  { name: "Proboscis Monkey", status: "Endangered" },
  { name: "Tarsier", status: "Vulnerable" },
  { name: "Gray Whale", status: "Least Concern" },
  { name: "Pygmy Three-Toed Sloth", status: "Critically Endangered" },
  { name: "Western Gorilla", status: "Critically Endangered" },
  { name: "South Asian River Dolphin", status: "Endangered" },
  { name: "Indian Wild Ass", status: "Near Threatened" },
  { name: "Bactrian Deer", status: "Endangered" },
  { name: "White-Bearded Wildebeest", status: "Least Concern" },
  { name: "Onager", status: "Near Threatened" },
  { name: "Irrawaddy Dolphin", status: "Endangered" },
  { name: "Dusky Dolphin", status: "Least Concern" },
  { name: "Orca", status: "Data Deficient" },
  { name: "Sloth Bear", status: "Vulnerable" },
  { name: "Kermode Bear", status: "Least Concern" },
  { name: "Dhole", status: "Endangered" },
  { name: "Indian Leopard", status: "Vulnerable" },
  { name: "Bat-Eared Fox", status: "Least Concern" },
  { name: "Fennec Fox", status: "Least Concern" },
  { name: "Serval", status: "Least Concern" },
  { name: "Caracal", status: "Least Concern" },
  { name: "Black-And-White Colobus Monkey", status: "Least Concern" },
  { name: "White-Tailed Deer", status: "Least Concern" },
  { name: "North American Beaver", status: "Least Concern" },
  { name: "Eastern Grey Kangaroo", status: "Least Concern" },
  { name: "Western Grey Kangaroo", status: "Least Concern" },
  { name: "Sugar Glider", status: "Least Concern" },
],


birds: [
  { name: "California Condor", status: "Critically Endangered" },
  { name: "Kakapo", status: "Critically Endangered" },
  { name: "Spoon-Billed Sandpiper", status: "Critically Endangered" },
  { name: "Philippine Eagle", status: "Critically Endangered" },
  { name: "Bald Ibis", status: "Critically Endangered" },
  { name: "Peregrine Falcon", status: "Least Concern" },
  { name: "Atlantic Puffin", status: "Vulnerable" },
  { name: "Red-Crowned Crane", status: "Endangered" },
  { name: "Hooded Grebe", status: "Critically Endangered" },
  { name: "Yellow-Eyed Penguin", status: "Endangered" },
  { name: "Black-Browed Albatross", status: "Endangered" },
  { name: "Swift Parrot", status: "Critically Endangered" },
  { name: "Indian Vulture", status: "Critically Endangered" },
  { name: "Javan Hawk-Eagle", status: "Endangered" },
  { name: "Great Indian Bustard", status: "Critically Endangered" },
  { name: "Kagu", status: "Endangered" },
  { name: "Northern Bald Ibis", status: "Critically Endangered" },
  { name: "New Caledonian Lorikeet", status: "Critically Endangered" },
  { name: "Forest Owlet", status: "Critically Endangered" },
  { name: "Hyacinth Macaw", status: "Endangered" },
  { name: "Indian Skimmer", status: "Endangered" },
  { name: "Laysan Albatross", status: "Near Threatened" },
  { name: "Kea", status: "Endangered" },
  { name: "Masked Finfoot", status: "Endangered" },
  { name: "Pallas's Fish Eagle", status: "Endangered" },
  { name: "Green Peafowl", status: "Endangered" },
  { name: "Shoebill", status: "Vulnerable" },
  { name: "Sun Parakeet", status: "Endangered" },
  { name: "Horned Guan", status: "Critically Endangered" },
  { name: "Nicobar Pigeon", status: "Near Threatened" },
  { name: "Wallace's Standardwing", status: "Vulnerable" },
  { name: "Helmeted Hornbill", status: "Critically Endangered" },
  { name: "Bengal Florican", status: "Critically Endangered" },
  { name: "Red-Necked Amazon", status: "Endangered" },
  { name: "Black-Winged Starling", status: "Critically Endangered" },
  { name: "Yellow-Crested Cockatoo", status: "Critically Endangered" },
  { name: "Milky Stork", status: "Endangered" },
  { name: "Marvellous Spatuletail", status: "Endangered" },
  { name: "Puerto Rican Parrot", status: "Critically Endangered" },
  { name: "White-Rumped Vulture", status: "Critically Endangered" },
  { name: "Slender-Billed Vulture", status: "Critically Endangered" },
  { name: "Red-Fronted Macaw", status: "Critically Endangered" },
  { name: "Ivory-Billed Woodpecker", status: "Critically Endangered" },
  { name: "Black-Capped Petrel", status: "Endangered" },
  { name: "Abbott's Booby", status: "Endangered" },
  { name: "Gurney's Pitta", status: "Endangered" },
  { name: "Scarlet Macaw", status: "Least Concern" },
  { name: "Blue-Crowned Laughingthrush", status: "Critically Endangered" },
  { name: "Golden Pheasant", status: "Least Concern" },
  { name: "Emperor Penguin", status: "Near Threatened" },
  { name: "Adélie Penguin", status: "Least Concern" },
  { name: "Galápagos Penguin", status: "Endangered" },
  { name: "Macaroni Penguin", status: "Vulnerable" },
  { name: "Royal Penguin", status: "Near Threatened" },
  { name: "Northern Rockhopper Penguin", status: "Endangered" },
  { name: "Southern Rockhopper Penguin", status: "Vulnerable" },
  { name: "Crested Auklet", status: "Least Concern" },
  { name: "Rhinoceros Auklet", status: "Least Concern" },
  { name: "Yellow-Shouldered Blackbird", status: "Endangered" },
  { name: "Antipodes Parakeet", status: "Vulnerable" },
  { name: "Kakī (Black Stilt)", status: "Critically Endangered" },
  { name: "Ridgeway's Hawk", status: "Critically Endangered" },
  { name: "Pink Pigeon", status: "Endangered" },
  { name: "Giant Ibis", status: "Critically Endangered" },
  { name: "White-Headed Duck", status: "Endangered" },
  { name: "Bornean Peacock-Pheasant", status: "Endangered" },
  { name: "Collared Laughingthrush", status: "Critically Endangered" },
  { name: "Blue-Throated Macaw", status: "Critically Endangered" },
  { name: "Zapata Rail", status: "Critically Endangered" },
  { name: "Campbell Teal", status: "Critically Endangered" },
  { name: "Amsterdam Albatross", status: "Critically Endangered" },
  { name: "Kakerori (Rarotonga Monarch)", status: "Critically Endangered" },
  { name: "Kirtland's Warbler", status: "Endangered" },
  { name: "Wilson's Storm-Petrel", status: "Least Concern" },
  { name: "Antarctic Petrel", status: "Least Concern" },
  { name: "Snow Petrel", status: "Least Concern" },
  { name: "White-Capped Albatross", status: "Vulnerable" },
  { name: "Humboldt Penguin", status: "Vulnerable" },
  { name: "Peruvian Booby", status: "Least Concern" },
  { name: "Fairy Tern", status: "Near Threatened" },
  { name: "White Tern", status: "Least Concern" },
  { name: "Gray-Crowned Crane", status: "Vulnerable" },
  { name: "Demoiselle Crane", status: "Least Concern" },
  { name: "Wattled Crane", status: "Vulnerable" },
  { name: "Black Crowned Crane", status: "Vulnerable" },
  { name: "Whooping Crane", status: "Critically Endangered" },
],


reptiles: [
  { name: "Komodo Dragon", status: "Vulnerable" },
  { name: "Hawksbill Turtle", status: "Critically Endangered" },
  { name: "Leatherback Sea Turtle", status: "Vulnerable" },
  { name: "Gharial", status: "Critically Endangered" },
  { name: "Saltwater Crocodile", status: "Least Concern" },
  { name: "Green Sea Turtle", status: "Endangered" },
  { name: "Loggerhead Sea Turtle", status: "Vulnerable" },
  { name: "American Crocodile", status: "Vulnerable" },
  { name: "Cuban Crocodile", status: "Critically Endangered" },
  { name: "Chinese Alligator", status: "Critically Endangered" },
  { name: "Siamese Crocodile", status: "Critically Endangered" },
  { name: "Arakan Forest Turtle", status: "Critically Endangered" },
  { name: "Ploughshare Tortoise", status: "Critically Endangered" },
  { name: "Radiated Tortoise", status: "Critically Endangered" },
  { name: "Pancake Tortoise", status: "Critically Endangered" },
  { name: "Galápagos Tortoise", status: "Vulnerable" },
  { name: "Pygmy Three-Toed Skink", status: "Critically Endangered" },
  { name: "Axolotl", status: "Critically Endangered" },
  { name: "Indian Star Tortoise", status: "Vulnerable" },
  { name: "Yellow-Margined Box Turtle", status: "Critically Endangered" },
  { name: "Wood Turtle", status: "Endangered" },
  { name: "Western Swamp Tortoise", status: "Critically Endangered" },
  { name: "Flatback Sea Turtle", status: "Data Deficient" },
  { name: "Cantor's Giant Softshell Turtle", status: "Endangered" },
  { name: "Mary River Turtle", status: "Endangered" },
  { name: "Red-Crowned Roofed Turtle", status: "Critically Endangered" },
  { name: "Pig-Nosed Turtle", status: "Vulnerable" },
  { name: "Golden Coin Turtle", status: "Critically Endangered" },
  { name: "Eastern Indigo Snake", status: "Vulnerable" },
  { name: "Indian Python", status: "Vulnerable" },
  { name: "Burmese Python", status: "Vulnerable" },
  { name: "Reticulated Python", status: "Least Concern" },
  { name: "King Cobra", status: "Vulnerable" },
  { name: "Black Mamba", status: "Least Concern" },
  { name: "Green Anaconda", status: "Least Concern" },
  { name: "Boelen's Python", status: "Vulnerable" },
  { name: "Santa Catalina Island Rattlesnake", status: "Critically Endangered" },
  { name: "Round Island Boa", status: "Critically Endangered" },
  { name: "Barbados Threadsnake", status: "Critically Endangered" },
  { name: "Madagascar Ground Boa", status: "Vulnerable" },
  { name: "Burmese Star Tortoise", status: "Critically Endangered" },
  { name: "Spiny Hill Turtle", status: "Critically Endangered" },
  { name: "Sri Lankan Star Tortoise", status: "Vulnerable" },
  { name: "Geometric Tortoise", status: "Critically Endangered" },
  { name: "Elongated Tortoise", status: "Critically Endangered" },
  { name: "Southwestern Speckled Rattlesnake", status: "Vulnerable" },
  { name: "Fiji Crested Iguana", status: "Critically Endangered" },
  { name: "Grand Cayman Blue Iguana", status: "Critically Endangered" },
  { name: "Jamaican Iguana", status: "Critically Endangered" },
  { name: "Black Spiny-Tailed Iguana", status: "Endangered" },
  { name: "Yellow-Spotted River Turtle", status: "Vulnerable" },
  { name: "Tuatara", status: "Near Threatened" },
  { name: "Mexican Beaded Lizard", status: "Near Threatened" },
  { name: "Gila Monster", status: "Least Concern" },
  { name: "Tokay Gecko", status: "Least Concern" },
  { name: "Leachianus Gecko", status: "Least Concern" },
  { name: "Green Basilisk", status: "Least Concern" },
  { name: "Marine Iguana", status: "Vulnerable" },
  { name: "Chilean Rose Tarantula", status: "Least Concern" },
  { name: "Blue Poison Dart Frog", status: "Least Concern" },
  { name: "Panther Chameleon", status: "Least Concern" },
  { name: "Parson's Chameleon", status: "Vulnerable" },
  { name: "Jackson's Chameleon", status: "Least Concern" },
  { name: "Eyelash Viper", status: "Least Concern" },
  { name: "Bushmaster Snake", status: "Least Concern" },
  { name: "Cape Cobra", status: "Least Concern" },
  { name: "Eastern Coral Snake", status: "Least Concern" },
  { name: "Arizona Ridge-Nosed Rattlesnake", status: "Vulnerable" },
  { name: "Malagasy Leaf-Nosed Snake", status: "Least Concern" },
  { name: "Horned Adder", status: "Least Concern" },
  { name: "Gaboon Viper", status: "Least Concern" },
  { name: "Fer-De-Lance", status: "Least Concern" },
  { name: "Puff Adder", status: "Least Concern" },
  { name: "Bush Viper", status: "Least Concern" },
  { name: "Ethiopian Mountain Viper", status: "Critically Endangered" },
  { name: "Mangshan Pit Viper", status: "Critically Endangered" },
  { name: "Aruba Island Rattlesnake", status: "Critically Endangered" },
  { name: "Antiguan Racer", status: "Critically Endangered" },
  { name: "St. Lucia Racer", status: "Critically Endangered" },
  { name: "Cape Verde Giant Skink", status: "Extinct" },
  { name: "Montserrat Galliwasp", status: "Critically Endangered" },
  { name: "Jamaican Boa", status: "Vulnerable" },
  { name: "Cuban Boa", status: "Least Concern" },
  { name: "Emerald Tree Boa", status: "Least Concern" },
  { name: "Red-Spotted Newt", status: "Least Concern" },
  { name: "Chinese Giant Salamander", status: "Critically Endangered" },
  { name: "Japanese Giant Salamander", status: "Endangered" },
  { name: "Hellbender Salamander", status: "Near Threatened" },
],



amphibians: [
  { name: "Axolotl", status: "Critically Endangered" },
  { name: "Golden Poison Dart Frog", status: "Endangered" },
  { name: "Panamanian Golden Frog", status: "Critically Endangered" },
  { name: "Mountain Yellow-Legged Frog", status: "Critically Endangered" },
  { name: "Chinese Giant Salamander", status: "Critically Endangered" },
  { name: "Japanese Giant Salamander", status: "Near Threatened" },
  { name: "Hellbender Salamander", status: "Near Threatened" },
  { name: "Kihansi Spray Toad", status: "Extinct in the Wild" },
  { name: "Darwin's Frog", status: "Critically Endangered" },
  { name: "Purple Frog", status: "Endangered" },
  { name: "Harlequin Toad", status: "Critically Endangered" },
  { name: "Goliath Frog", status: "Endangered" },
  { name: "Mallorcan Midwife Toad", status: "Vulnerable" },
  { name: "Tomato Frog", status: "Near Threatened" },
  { name: "Andean Marsupial Frog", status: "Critically Endangered" },
  { name: "Lake Titicaca Frog", status: "Endangered" },
  { name: "Strawberry Poison Dart Frog", status: "Least Concern" },
  { name: "Blue Poison Dart Frog", status: "Least Concern" },
  { name: "Glass Frog", status: "Least Concern" },
  { name: "Tiger Salamander", status: "Least Concern" },
  { name: "Red-Eyed Tree Frog", status: "Least Concern" },
  { name: "Dyeing Poison Dart Frog", status: "Least Concern" },
  { name: "Spotted Salamander", status: "Least Concern" },
  { name: "Northern Leopard Frog", status: "Least Concern" },
  { name: "California Red-Legged Frog", status: "Threatened" },
  { name: "Yunnan Lake Newt", status: "Critically Endangered" },
  { name: "Fire Salamander", status: "Least Concern" },
  { name: "Common Coquí", status: "Least Concern" },
  { name: "Green And Black Poison Dart Frog", status: "Least Concern" },
  { name: "Ecuadorian Marsupial Frog", status: "Critically Endangered" },
  { name: "Gastric-Brooding Frog", status: "Extinct" },
  { name: "South China Torrent Frog", status: "Endangered" },
  { name: "African Clawed Frog", status: "Least Concern" },
  { name: "Common Frog", status: "Least Concern" },
  { name: "American Bullfrog", status: "Least Concern" },
  { name: "Spring Peeper", status: "Least Concern" },
  { name: "Fowler's Toad", status: "Least Concern" },
  { name: "Golden Mantella Frog", status: "Critically Endangered" },
  { name: "Madagascar Tomato Frog", status: "Least Concern" },
  { name: "Santa Fe Frog", status: "Endangered" },
  { name: "Splendid Poison Frog", status: "Extinct" },
  { name: "Dusky Gopher Frog", status: "Critically Endangered" },
  { name: "Olm", status: "Vulnerable" },
  { name: "Siberian Salamander", status: "Least Concern" },
  { name: "Alpine Salamander", status: "Least Concern" },
  { name: "Cave Salamander", status: "Least Concern" },
  { name: "Eastern Newt", status: "Least Concern" },
  { name: "Smooth Newt", status: "Least Concern" },
  { name: "Rough-Skinned Newt", status: "Least Concern" },
  { name: "Great Crested Newt", status: "Least Concern" },
  { name: "Marbled Newt", status: "Least Concern" },
  { name: "Pyrenean Brook Salamander", status: "Near Threatened" },
  { name: "Eastern Hellbender", status: "Near Threatened" },
  { name: "Western Clawed Frog", status: "Least Concern" },
  { name: "White's Tree Frog", status: "Least Concern" },
  { name: "Bornean Flat-Headed Frog", status: "Critically Endangered" },
  { name: "Lehmann's Poison Frog", status: "Critically Endangered" },
  { name: "Corroboree Frog", status: "Critically Endangered" },
  { name: "Monte Iberia Eleuth", status: "Critically Endangered" },
  { name: "Nimba Toad", status: "Critically Endangered" },
  { name: "Golden-Striped Salamander", status: "Vulnerable" },
  { name: "Vietnamese Mossy Frog", status: "Least Concern" },
  { name: "Waxy Monkey Tree Frog", status: "Least Concern" },
  { name: "Chilean Four-Eyed Frog", status: "Least Concern" },
  { name: "Granular Poison Frog", status: "Least Concern" },
  { name: "Mimic Poison Frog", status: "Least Concern" },
  { name: "Blue-Spotted Salamander", status: "Least Concern" },
  { name: "Smooth-Sided Toad", status: "Least Concern" },
  { name: "Crimson-Spotted Rainbowfish", status: "Least Concern" },
  { name: "Indian Bullfrog", status: "Least Concern" },
  { name: "Titicaca Water Frog", status: "Critically Endangered" },
  { name: "Pouched Frog", status: "Critically Endangered" },
  { name: "Torrent Frog", status: "Least Concern" },
  { name: "Foothill Yellow-Legged Frog", status: "Endangered" },
  { name: "Giant Water Bug", status: "Least Concern" },
  { name: "Common Toad", status: "Least Concern" },
  { name: "Green Tree Frog", status: "Least Concern" },
  { name: "Australian Red-Eyed Tree Frog", status: "Least Concern" },
  { name: "Brown-Spotted Frog", status: "Least Concern" },
  { name: "Mexican Salamander", status: "Critically Endangered" },
  { name: "Indian Burrowing Frog", status: "Least Concern" },
  { name: "Amazon Milk Frog", status: "Least Concern" },
  { name: "Rana Frog", status: "Least Concern" },
  { name: "Mexican Tree Frog", status: "Least Concern" },
  { name: "Red-Spotted Toad", status: "Least Concern" },
  { name: "Tawny Crazy Frog", status: "Least Concern" },
  { name: "White-Lipped Tree Frog", status: "Least Concern" },
],



fish: [
  { name: "Whale Shark", status: "Endangered" },
  { name: "Great White Shark", status: "Vulnerable" },
  { name: "Manta Ray", status: "Vulnerable" },
  { name: "Devil Ray", status: "Endangered" },
  { name: "Sawfish", status: "Critically Endangered" },
  { name: "European Eel", status: "Critically Endangered" },
  { name: "Beluga Sturgeon", status: "Critically Endangered" },
  { name: "Russian Sturgeon", status: "Critically Endangered" },
  { name: "Chinese Paddlefish", status: "Extinct" },
  { name: "Pallid Sturgeon", status: "Endangered" },
  { name: "Atlantic Bluefin Tuna", status: "Endangered" },
  { name: "Pacific Bluefin Tuna", status: "Vulnerable" },
  { name: "Smalltooth Sawfish", status: "Critically Endangered" },
  { name: "Giant Freshwater Stingray", status: "Endangered" },
  { name: "Green Sawfish", status: "Critically Endangered" },
  { name: "Chinese Bahaba", status: "Critically Endangered" },
  { name: "Napoleon Wrasse", status: "Endangered" },
  { name: "Zebra Shark", status: "Endangered" },
  { name: "Basking Shark", status: "Endangered" },
  { name: "Ocean Sunfish", status: "Vulnerable" },
  { name: "Hammerhead Shark", status: "Critically Endangered" },
  { name: "Leafy Seadragon", status: "Near Threatened" },
  { name: "Weedy Seadragon", status: "Near Threatened" },
  { name: "Humphead Wrasse", status: "Endangered" },
  { name: "Great Hammerhead", status: "Critically Endangered" },
  { name: "Shortfin Mako Shark", status: "Endangered" },
  { name: "Longfin Mako Shark", status: "Endangered" },
  { name: "Ganges River Shark", status: "Critically Endangered" },
  { name: "Speartooth Shark", status: "Critically Endangered" },
  { name: "Angelshark", status: "Critically Endangered" },
  { name: "Sand Tiger Shark", status: "Vulnerable" },
  { name: "Thresher Shark", status: "Vulnerable" },
  { name: "Porbeagle Shark", status: "Vulnerable" },
  { name: "Salmon Shark", status: "Least Concern" },
  { name: "Greenland Shark", status: "Near Threatened" },
  { name: "Australian Lungfish", status: "Endangered" },
  { name: "Coelacanth", status: "Critically Endangered" },
  { name: "Devil's Hole Pupfish", status: "Critically Endangered" },
  { name: "Titicaca Orestias", status: "Critically Endangered" },
  { name: "Lake Victoria Cichlid", status: "Critically Endangered" },
  { name: "Mekong Giant Catfish", status: "Critically Endangered" },
  { name: "Asian Arowana", status: "Endangered" },
  { name: "Sturgeon", status: "Critically Endangered" },
  { name: "Paddlefish", status: "Endangered" },
  { name: "Giant Sea Bass", status: "Critically Endangered" },
  { name: "Bonytail Chub", status: "Endangered" },
  { name: "Desert Pupfish", status: "Endangered" },
  { name: "Blind Cave Fish", status: "Least Concern" },
  { name: "Rainbow Trout", status: "Least Concern" },
  { name: "Atlantic Cod", status: "Vulnerable" },
  { name: "Atlantic Halibut", status: "Endangered" },
  { name: "Red Snapper", status: "Least Concern" },
  { name: "Yellowtail Snapper", status: "Least Concern" },
  { name: "Orange Roughy", status: "Vulnerable" },
  { name: "Blue Marlin", status: "Vulnerable" },
  { name: "Black Marlin", status: "Vulnerable" },
  { name: "Swordfish", status: "Least Concern" },
  { name: "Dogfish Shark", status: "Vulnerable" },
  { name: "Wobbegong Shark", status: "Least Concern" },
  { name: "Cookiecutter Shark", status: "Least Concern" },
  { name: "Goblin Shark", status: "Least Concern" },
  { name: "Tiger Shark", status: "Near Threatened" },
  { name: "Bull Shark", status: "Near Threatened" },
  { name: "Reef Shark", status: "Endangered" },
  { name: "Giant Grouper", status: "Vulnerable" },
  { name: "Potato Cod", status: "Least Concern" },
  { name: "Clownfish", status: "Least Concern" },
  { name: "Royal Gramma", status: "Least Concern" },
  { name: "Mandarinfish", status: "Least Concern" },
  { name: "Firefish", status: "Least Concern" },
  { name: "Cardinalfish", status: "Least Concern" },
  { name: "Bannerfish", status: "Least Concern" },
  { name: "Butterflyfish", status: "Least Concern" },
  { name: "Angelfish", status: "Least Concern" },
  { name: "Parrotfish", status: "Least Concern" },
  { name: "Boxfish", status: "Least Concern" },
  { name: "Pufferfish", status: "Vulnerable" },
  { name: "Porcupinefish", status: "Least Concern" },
  { name: "Balloonfish", status: "Least Concern" },
  { name: "Longhorn Cowfish", status: "Least Concern" },
  { name: "Humphead Parrotfish", status: "Vulnerable" },
  { name: "Moorish Idol", status: "Least Concern" },
  { name: "Tilefish", status: "Least Concern" },
  { name: "Triggerfish", status: "Least Concern" },
  { name: "Lionfish", status: "Least Concern" },
  { name: "Stonefish", status: "Least Concern" },
  { name: "Scorpionfish", status: "Least Concern" },
  { name: "Haddock", status: "Vulnerable" },
  { name: "Halibut", status: "Endangered" },
  { name: "Pacific Cod", status: "Vulnerable" },
  { name: "Alaskan Pollock", status: "Vulnerable" },
],




plants: [
  { name: "Baobab Tree", type: "Tree", status: "Endangered" },
  { name: "Rafflesia", type: "Flowering Plant", status: "Critically Endangered" },
  { name: "Titan Arum", type: "Flowering Plant", status: "Endangered" },
  { name: "Venus Flytrap", type: "Carnivorous Plant", status: "Vulnerable" },
  { name: "Welwitschia", type: "Gymnosperm", status: "Endangered" },
  { name: "Dragon Tree", type: "Tree", status: "Vulnerable" },
  { name: "Giant Sequoia", type: "Tree", status: "Endangered" },
  { name: "Coastal Redwood", type: "Tree", status: "Endangered" },
  { name: "Wollemi Pine", type: "Gymnosperm", status: "Critically Endangered" },
  { name: "Frankincense Tree", type: "Tree", status: "Vulnerable" },
  { name: "Bois Dentelle", type: "Flowering Plant", status: "Critically Endangered" },
  { name: "Monkey Puzzle Tree", type: "Tree", status: "Endangered" },
  { name: "Encephalartos Woodii", type: "Cycad", status: "Extinct in the Wild" },
  { name: "Coco de Mer", type: "Palm Tree", status: "Vulnerable" },
  { name: "Corpse Flower", type: "Flowering Plant", status: "Endangered" },
  { name: "Hoodia", type: "Succulent", status: "Vulnerable" },
  { name: "Silver Sword", type: "Flowering Plant", status: "Endangered" },
  { name: "Himalayan Yew", type: "Tree", status: "Endangered" },
  { name: "Western Underground Orchid", type: "Orchid", status: "Critically Endangered" },
  { name: "Ghost Orchid", type: "Orchid", status: "Critically Endangered" },
  { name: "Lady’s Slipper Orchid", type: "Orchid", status: "Critically Endangered" },
  { name: "Stinking Cedar", type: "Tree", status: "Critically Endangered" },
  { name: "Titan Palm", type: "Tree", status: "Endangered" },
  { name: "Quiver Tree", type: "Tree", status: "Vulnerable" },
  { name: "Honduran Rosewood", type: "Tree", status: "Endangered" },
  { name: "Balsa Tree", type: "Tree", status: "Vulnerable" },
  { name: "Black Ebony", type: "Tree", status: "Critically Endangered" },
  { name: "Red Sandalwood", type: "Tree", status: "Endangered" },
  { name: "Tamarind Tree", type: "Tree", status: "Vulnerable" },
  { name: "African Mahogany", type: "Tree", status: "Vulnerable" },
  { name: "Cork Oak", type: "Tree", status: "Vulnerable" },
  { name: "Mahogany", type: "Tree", status: "Endangered" },
  { name: "Rosewood", type: "Tree", status: "Endangered" },
  { name: "Teak", type: "Tree", status: "Vulnerable" },
  { name: "Neem", type: "Tree", status: "Least Concern" },
  { name: "Indian Sandalwood", type: "Tree", status: "Endangered" },
  { name: "Bamboo Palm", type: "Palm Tree", status: "Vulnerable" },
  { name: "Bristlecone Pine", type: "Tree", status: "Endangered" },
  { name: "Joshua Tree", type: "Tree", status: "Vulnerable" },
  { name: "Acacia Tree", type: "Tree", status: "Vulnerable" },
  { name: "Baobab Madagascar", type: "Tree", status: "Critically Endangered" },
  { name: "Eucalyptus Tree", type: "Tree", status: "Vulnerable" },
  { name: "Olive Tree", type: "Tree", status: "Least Concern" },
  { name: "Wild Yam", type: "Herbaceous Plant", status: "Endangered" },
  { name: "Blue Lupine", type: "Flowering Plant", status: "Vulnerable" },
  { name: "Bee Orchid", type: "Orchid", status: "Least Concern" },
  { name: "Palm Fox Tail", type: "Palm Tree", status: "Vulnerable" },
  { name: "White Lotus", type: "Aquatic Plant", status: "Least Concern" },
  { name: "Papyrus", type: "Aquatic Plant", status: "Vulnerable" },
  { name: "Water Hyacinth", type: "Aquatic Plant", status: "Invasive" },
  { name: "Mangrove", type: "Tree", status: "Endangered" },
  { name: "Golden Barrel Cactus", type: "Cactus", status: "Critically Endangered" },
  { name: "Saguaro Cactus", type: "Cactus", status: "Least Concern" },
  { name: "Spinifex Grass", type: "Grass", status: "Least Concern" },
  { name: "Rice Plant", type: "Grass", status: "Cultivated" },
  { name: "Wheat Plant", type: "Grass", status: "Cultivated" },
  { name: "Corn Plant", type: "Grass", status: "Cultivated" },
  { name: "Barley Plant", type: "Grass", status: "Cultivated" },
  { name: "Sorghum", type: "Grass", status: "Cultivated" },
  { name: "Quinoa", type: "Herbaceous Plant", status: "Cultivated" },
  { name: "Amaranth", type: "Herbaceous Plant", status: "Cultivated" },
  { name: "Cassava", type: "Root Plant", status: "Cultivated" },
  { name: "Sweet Potato", type: "Root Plant", status: "Cultivated" },
  { name: "Potato", type: "Root Plant", status: "Cultivated" },
  { name: "Carrot", type: "Root Plant", status: "Cultivated" },
  { name: "Beetroot", type: "Root Plant", status: "Cultivated" },
  { name: "Yam", type: "Root Plant", status: "Cultivated" },
  { name: "Jungle Flame", type: "Shrub", status: "Vulnerable" },
  { name: "Bougainvillea", type: "Shrub", status: "Least Concern" },
  { name: "Hibiscus", type: "Flowering Plant", status: "Least Concern" },
  { name: "Tulip", type: "Flowering Plant", status: "Least Concern" },
  { name: "Dandelion", type: "Flowering Plant", status: "Least Concern" },
  { name: "Sunflower", type: "Flowering Plant", status: "Least Concern" },
  { name: "Orchid Lily", type: "Flowering Plant", status: "Vulnerable" },
  { name: "Desert Rose", type: "Flowering Plant", status: "Endangered" },
  { name: "Golden Wattle", type: "Flowering Plant", status: "Least Concern" },
  { name: "Red Alder", type: "Tree", status: "Least Concern" },
  { name: "Japanese Cherry Blossom", type: "Tree", status: "Least Concern" },
  { name: "White Birch", type: "Tree", status: "Vulnerable" },
  { name: "Black Walnut", type: "Tree", status: "Vulnerable" },
  { name: "Silver Maple", type: "Tree", status: "Least Concern" },
  { name: "Ginkgo Biloba", type: "Tree", status: "Endangered" },
  { name: "Brazilwood", type: "Tree", status: "Endangered" },
],



invertebrates:[
  { name: "Giant Squid", type: "Cephalopod", status: "Least Concern" },
  { name: "Giant Clam", type: "Mollusk", status: "Vulnerable" },
  { name: "Horseshoe Crab", type: "Arthropod", status: "Vulnerable" },
  { name: "Monarch Butterfly", type: "Insect", status: "Endangered" },
  { name: "Queen Alexandra's Birdwing", type: "Butterfly", status: "Endangered" },
  { name: "Atlas Moth", type: "Moth", status: "Vulnerable" },
  { name: "Antarctic Krill", type: "Crustacean", status: "Vulnerable" },
  { name: "American Lobster", type: "Crustacean", status: "Least Concern" },
  { name: "Blue Crab", type: "Crustacean", status: "Least Concern" },
  { name: "Chambered Nautilus", type: "Cephalopod", status: "Vulnerable" },
  { name: "Goliath Beetle", type: "Insect", status: "Vulnerable" },
  { name: "Giant Isopod", type: "Crustacean", status: "Vulnerable" },
  { name: "Fire Coral", type: "Cnidarian", status: "Endangered" },
  { name: "Jellyfish", type: "Cnidarian", status: "Least Concern" },
  { name: "Portuguese Man o' War", type: "Cnidarian", status: "Least Concern" },
  { name: "Leaf Cutter Ant", type: "Insect", status: "Least Concern" },
  { name: "Honeybee", type: "Insect", status: "Endangered" },
  { name: "Asian Giant Hornet", type: "Insect", status: "Least Concern" },
  { name: "Giant Earthworm", type: "Annelid", status: "Vulnerable" },
  { name: "Cone Snail", type: "Mollusk", status: "Endangered" },
  { name: "Box Jellyfish", type: "Cnidarian", status: "Vulnerable" },
  { name: "Sea Nettle", type: "Cnidarian", status: "Least Concern" },
  { name: "Peacock Spider", type: "Arthropod", status: "Vulnerable" },
  { name: "Tarantula", type: "Arthropod", status: "Least Concern" },
  { name: "Scorpion", type: "Arthropod", status: "Least Concern" },
  { name: "Dragonfly", type: "Insect", status: "Vulnerable" },
  { name: "Diving Beetle", type: "Insect", status: "Least Concern" },
  { name: "Hermit Crab", type: "Crustacean", status: "Least Concern" },
  { name: "Sea Anemone", type: "Cnidarian", status: "Vulnerable" },
  { name: "Sea Star", type: "Echinoderm", status: "Endangered" },
  { name: "Crown-of-Thorns Starfish", type: "Echinoderm", status: "Vulnerable" },
  { name: "Sand Dollar", type: "Echinoderm", status: "Least Concern" },
  { name: "Giant African Land Snail", type: "Mollusk", status: "Invasive" },
  { name: "Vampire Squid", type: "Cephalopod", status: "Vulnerable" },
  { name: "Mantis Shrimp", type: "Crustacean", status: "Vulnerable" },
  { name: "Stone Crab", type: "Crustacean", status: "Least Concern" },
  { name: "Garden Spider", type: "Arthropod", status: "Least Concern" },
  { name: "Glass Sponge", type: "Sponge", status: "Vulnerable" },
  { name: "Giant Red Hermit Crab", type: "Crustacean", status: "Vulnerable" },
  { name: "Brittle Star", type: "Echinoderm", status: "Vulnerable" },
  { name: "Sea Cucumber", type: "Echinoderm", status: "Endangered" },
  { name: "Sea Urchin", type: "Echinoderm", status: "Vulnerable" },
  { name: "Leafy Sea Dragon", type: "Marine Invertebrate", status: "Endangered" },
  { name: "Blue-ringed Octopus", type: "Cephalopod", status: "Endangered" },
  { name: "Coconut Crab", type: "Crustacean", status: "Vulnerable" },
  { name: "Fiddler Crab", type: "Crustacean", status: "Least Concern" },
  { name: "Butterfly Squid", type: "Cephalopod", status: "Vulnerable" },
  { name: "Tiger Prawn", type: "Crustacean", status: "Least Concern" },
  { name: "Cuttlefish", type: "Cephalopod", status: "Vulnerable" },
  { name: "Giant Tiger Shrimp", type: "Crustacean", status: "Least Concern" },
  { name: "Rock Lobster", type: "Crustacean", status: "Vulnerable" },
  { name: "Pistol Shrimp", type: "Crustacean", status: "Least Concern" },
  { name: "Sponge Crab", type: "Crustacean", status: "Least Concern" },
  { name: "Christmas Tree Worm", type: "Marine Worm", status: "Vulnerable" },
  { name: "Bobtail Squid", type: "Cephalopod", status: "Vulnerable" },
  { name: "Garden Slug", type: "Mollusk", status: "Least Concern" },
  { name: "Common Mussel", type: "Mollusk", status: "Least Concern" },
  { name: "Coral Polyp", type: "Cnidarian", status: "Vulnerable" },
  { name: "Sea Sponge", type: "Sponge", status: "Vulnerable" },
  { name: "Velvet Worm", type: "Marine Worm", status: "Vulnerable" },
  { name: "Giant Water Bug", type: "Insect", status: "Endangered" },
  { name: "Glasswing Butterfly", type: "Insect", status: "Vulnerable" },
  { name: "Luna Moth", type: "Insect", status: "Least Concern" },
  { name: "Rosy Maple Moth", type: "Insect", status: "Least Concern" },
  { name: "Jewel Beetle", type: "Insect", status: "Vulnerable" },
  { name: "Giant Water Scorpion", type: "Insect", status: "Endangered" },
  { name: "Chilean Rose Tarantula", type: "Arthropod", status: "Least Concern" },
  { name: "Desert Locust", type: "Insect", status: "Least Concern" },
  { name: "Electric Blue Tarantula", type: "Arthropod", status: "Endangered" },
  { name: "Golden Orb Spider", type: "Arthropod", status: "Endangered" },
  { name: "Marine Flatworm", type: "Marine Worm", status: "Vulnerable" },
  { name: "Polychaete Worm", type: "Marine Worm", status: "Endangered" },
  { name: "Red Algae Crab", type: "Crustacean", status: "Endangered" },
  { name: "Japanese Spider Crab", type: "Crustacean", status: "Vulnerable" },
  { name: "King Crab", type: "Crustacean", status: "Least Concern" },
  { name: "Sea Slug", type: "Mollusk", status: "Vulnerable" },
  { name: "Nudibranch", type: "Mollusk", status: "Vulnerable" },
  { name: "Blue Dragon", type: "Marine Invertebrate", status: "Endangered" },
  { name: "Purple Sea Urchin", type: "Echinoderm", status: "Vulnerable" },
  { name: "Crown Jellyfish", type: "Cnidarian", status: "Vulnerable" },
  { name: "Rainbow Eucalyptus Crab", type: "Crustacean", status: "Endangered" },
  { name: "Harlequin Shrimp", type: "Crustacean", status: "Endangered" },
]}
  

// Function to display species cards
function displaySpecies(speciesList) {
  const speciesGrid = document.getElementById("speciesGrid");
  speciesGrid.innerHTML = ""; // Clear previous content

  speciesList.forEach(species => {
    const card = document.createElement("div");
    card.classList.add("species-card");
    card.innerHTML = `
      <h3>${species.name}</h3>
      <p class="status">${species.status}</p>
    `;
    speciesGrid.appendChild(card);
  });
}

// Function to filter species based on search, status, and category
function filterSpecies() {
  const searchTerm = document.getElementById("searchBar").value.toLowerCase();
  const statusFilter = document.getElementById("statusFilter").value;
  const categoryFilter = document.getElementById("categoryFilter").value;

  // Get the species data for the selected category or all species if "all" is selected
  let speciesList = categoryFilter === "all" ? 
                    [].concat(...Object.values(speciesData)) : 
                    speciesData[categoryFilter];

  const filteredSpecies = speciesList.filter(species => {
    const matchesSearch = species.name.toLowerCase().includes(searchTerm);
    const matchesStatus = !statusFilter || species.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  displaySpecies(filteredSpecies);
}

// Event listeners for search, filter, and category selection
document.getElementById("searchBar").addEventListener("input", filterSpecies);
document.getElementById("statusFilter").addEventListener("change", filterSpecies);
document.getElementById("categoryFilter").addEventListener("change", filterSpecies);

// Initial display of all species
displaySpecies([].concat(...Object.values(speciesData)));
