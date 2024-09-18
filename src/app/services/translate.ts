export class Translate{
    static translate(title:string){
        switch (title) {
            // Notifications titles
            case "Mise en evidence":
                return "Highlighting";
            case "Pousser en haut":
                return "Push up"
            case "Top annonce":
                return "Top ad"
            case "Prime":
                return "Prime"
            case "Super notification(Mail SMS Marketing)":
                return "Super notification(Mail SMS Marketing)"

            case "Tous les mois":
                return "Every month";
            case "Janvier":
                return "January"
            case "Fevrier":
                return "February"
            case "Mars":
                return "March"
            case "Avril":
                return "April"
            case "Mai":
                return "May";
            case "Juin":
                return "June"
            case "Juillet":
                return "July"
            case "Aout":
                return "August"
            case "Septembre":
                return "September"
            case "Octobre":
                return "October"
            case "Novembre":
                return "November"
            case "Decembre":
                return "December"

            case "Depenses":
                return "Expenses"
            case "Gains":
                return "Earnings"

            //Notifications descriptions
            case "Jusqu'à 2x plus de visibilité ! Votre annonce sera mise en évidence en couleur.":
                return "Up to 2x more visibility! Your ad will be highlighted in color.";
            case "Jusqu'à 5x plus de visibilité ! Votre annonce sera diffusée chaque jour pendant une semaine.":
                return "Up to 5x more visibility! Your ad will be shown every day for a week.";
            case "Jusqu'à 10x plus de visibilité ! Votre annonce est en tête de liste !":
                return "Up to 10x more visibility! Your ad is at the top of the list!";
            case "Jusqu'à 15x plus de visibilité ! Votre annonce apparaîtra sur la page d'accueil !":
                return "Up to 15x more visibility! Your ad will appear on the home page!";
            case "Votre annonce est envoye par sms, mail et notification une fois":
                return "Your ad is sent by SMS, email and notification once";

            //Notifications features
            case "Votre annonce sera mise en avant dans la liste des résultats pendant 7 jours":
                return "Your ad will be highlighted in the results list for 7 days";
            case "Cela attirera l'attention des utilisateurs sur votre annonce":
                return "This will attract users' attention to your ad"
            case "Convient aux produits et services populaires et fréquemment répertoriés pour se demarquer":
                return "Suitable for popular and frequently listed products and services to stand out"
            case "Astuce : fonctionne bien en conjonction avec l'écran supérieur ou la galerie":
                return "Tip: works well in conjunction with the top screen or gallery"
            case "Ton annonce reçoit un fond de couleur dans la liste des résultats":
                return "Your ad receives a colored background in the list of results"

            case "Votre annonce sera repoussée une fois en haut de la liste des résultats.":
                return "Your ad will be pushed to the top of the results list.";
            case "Lorsqu'il est augmenté à plusieurs reprises, cela se produit tous les jours pendant 7 jours - idéal pour vendre plus rapidement":
                return "When increased repeatedly, this happens every day for 7 days - great for selling faster"
            case "Convient à toutes les publicités - la variante répétitive est particulièrement intéressante dans les catégories très populaires":
                return "Suitable for all advertisements - the repetitive variation is particularly interesting in very popular categories"
            case "Astuce : Avant de télécharger, vérifiez si le titre et les images sont significatifs et si le prix est approprié.":
                return "Tip: Before downloading, check whether the title and images are meaningful and whether the price is appropriate."
            case "visibilité ! Votre annonce sera diffusée chaque jour pendant une semaine.":
                return "visibility ! Your ad will be shown every day for a week."

            case "Votre annonce alternera pendant 7 jours avec les autres annonces les plus performantes en première ou deuxième position dans la liste des résultats.":
                return "Your ad will alternate for 7 days with the other best performing ads in first or second position in the results list.";
            case "Convient à presque toutes les annonces : vous ciblez les utilisateurs qui recherchent déjà des annonces similaires":
                return "Suitable for almost any ad: you target users who are already looking for similar ads"
            case "Astuce : Pour augmenter encore l'efficacité, faites attention aux titres et aux images significatifs dans l'annonce.":
                return "Tip: To further increase effectiveness, pay attention to meaningful headlines and images in the ad."
            case "Votre annonce alternera avec d'autres annonces Prime sur la page d'accueil pendant 10 jours peut être prolonger sur 20 jours et 1 mois":
                return "Your ad will alternate with other Prime ads on the home page for 10 days which can be extended for 20 days and 1 month"
            case "Convient aux produits coûteux ou inhabituels ainsi qu'aux services, à l'immobilier et aux emplois":
                return "Suitable for expensive or unusual products as well as services, real estate and jobs"

            case "Astuce : Pour augmenter encore l'efficacité, portez une attention particulière à une image significative de l'annonce.":
                return "Tip: To further increase effectiveness, pay special attention to a meaningful image in the ad.";
            case "convient aux produits très couteux ou de luxe que vous voulez vite vendre.":
                return "suitable for very expensive or luxury products that you want to sell quickly."
            case "Pour augmenter encore l'efficacité, portez une attention particulière à une image significative de l'annonce":
                return "To further increase effectiveness, pay special attention to a meaningful image in the ad"

            //Signalements
            case "Annonces Frauduleuses ou Trompeuses":
                return "Fraudulent or Deceptive Advertisements";
            case "Signaler des annonces qui semblent être des arnaques, contenant des informations fausses ou trompeuses, ou proposant des offres trop belles pour être vraies":
                return "Report ads that appear to be scams, contain false or misleading information, or offer deals that seem too good to be true"
            case "Vente de produits inexistants, fausses offres d'emploi, fausses annonces immobilières, arnaques financières.":
                return "Sale of non-existent products, false job offers, false real estate advertisements, financial scams."
            case "Produit ou Service Interdit":
                return "Prohibited Product or Service"
            case "Signaler des annonces proposant des produits ou services qui sont illégaux ou interdits par les règles de la plateforme.":
                return "Report ads offering products or services that are illegal or prohibited by the platform's rules."    
            case "Vente de drogues, d'armes, de contrefaçons, d'espèces protégées, ou d'autres biens et services illégaux.":
                return "Sale of drugs, weapons, counterfeits, protected species, or other illegal goods and services."    
            case "Usurpation d'Identité ou Faux Profil":
                return "Identity Theft or Fake Profile"    
            case "Signaler des annonces postées par des personnes se faisant passer pour quelqu'un d'autre ou utilisant de fausses informations d'identité.":
                return "Report ads posted by people pretending to be someone else or using false identity information."    
            case "Annonces postées avec des noms et photos volés, faux comptes d'entreprises.":
                return "Ads posted with stolen names and photos, fake business accounts."    
            case "Contenu Offensant ou Inapproprié":
                return "Offensive or Inappropriate Content"    
            case "Annonces contenant du langage inapproprié, des images offensantes ou tout autre contenu jugé inapproprié pour la plateforme.":
                return "Ads containing inappropriate language, offensive images, or other content deemed inappropriate for the platform."    
            case "Annonces avec des photos explicites, langage vulgaire ou offensant, propos discriminatoires.":
                return "Advertisements with explicit photos, vulgar or offensive language, discriminatory comments."    
            case "Spam et Publicité Non Sollicitée":
                return "Spam and Unsolicited Advertising"    
            case "Annonces répétitives, non pertinentes ou spam qui visent uniquement à promouvoir un produit ou service sans intention réelle de vendre un article légitime.":
                return "Repetitive, irrelevant, or spammy ads that are intended solely to promote a product or service with no real intention of selling a legitimate item."    
            case "Annonces identiques postées de manière répétée, liens vers des sites externes de manière excessive.":
                return "Identical ads posted repeatedly, links to external sites excessively."    
            case "Violation de la Propriété Intellectuelle":
                return "Intellectual Property Violation"    
            case "Signaler des annonces proposant la vente de produits qui violent les droits d'auteur, les marques déposées ou d'autres droits de propriété intellectuelle.":
                return "Report ads selling products that violate copyrights, trademarks, or other intellectual property rights."    
            case "Vente de contrefaçons de marques connues, utilisation non autorisée de logos ou d'images protégées.":
                return "Sale of counterfeits of well-known brands, unauthorized use of logos or protected images."    
            case "Fausse Annonce ou Produit Inexistant":
                return "False Ad or Non-Existing Product"    
            case "Signaler des annonces où le produit ou service décrit n'existe pas réellement ou les descriptions sont délibérément fausses.":
                return "Report listings where the product or service described does not actually exist or the descriptions are deliberately false."    
            case "Annonces pour des logements inexistants, descriptions de produits qui ne correspondent pas à la réalité.":
                return "Advertisements for non-existent accommodation, product descriptions that do not correspond to reality."    
            case "Prix Non Réalistes ou Pratiques Trompeuses":
                return "Unrealistic Prices or Misleading Practices"    
            case "Annonces avec des prix qui semblent être manipulés pour attirer des acheteurs ou des prix trop bas pour être crédibles (souvent signe d'arnaque).":
                return "Listings with prices that appear to be manipulated to attract buyers or prices that are too low to be credible (often a sign of a scam)."    
            case "Vente de produits de luxe à des prix anormalement bas, fausses promotions.":
                return "Sale of luxury products at abnormally low prices, false promotions."    
            case "Vol de Contenu ou Réutilisation Non Autorisée":
                return "Content Theft or Unauthorized Reuse"    
            case "Signaler des annonces qui utilisent des photos ou des descriptions volées d'autres annonces ou sites sans autorisation.":
                return "Report listings that use stolen photos or descriptions from other listings or sites without permission."    
            case "Utilisation de photos d'autres vendeurs, textes copiés d'autres annonces.":
                return "Use of photos from other sellers, texts copied from other advertisements."    
            case "Mauvaise Catégorie":
                return "Bad Category"    
            case "Annonces postées dans une mauvaise catégorie pour tromper les utilisateurs ou attirer une attention indue.":
                return "Ads posted in the wrong category to mislead users or attract undue attention."    
            case "Annonces de vente de voitures dans une catégorie de vêtements, annonces d'emploi dans la catégorie immobilière.":
                return "Car sales ads in a clothing category, job ads in the real estate category."    
            case "Violation des Conditions Générales de la Plateforme":
                return "Violation of the General Conditions of the Platform"    
            case "Signaler tout comportement ou annonce qui viole les règles ou conditions d'utilisation spécifiques de la plateforme.":
                return "Report any behavior or announcement that violates the platform's specific rules or terms of use."    
            case "Annonces incitant à contourner les frais de la plateforme, annonces demandant des transactions en dehors de la plateforme.":
                return "Ads encouraging people to circumvent platform fees, ads requesting transactions outside the platform." 
            case "Autre":
                return "Other"       
            case "Veuillez fournir la raison du signalement":
                return "Please provide reason for reporting" 
                
                
            case "Afghanistan":
                return "Afghanistan";
            case "Åland Islands":
                return "Îles Åland"
            case "Albania":
                return "Albanie"
            case "Algeria":
                return "Algérie"
            case "American Samoa":
                return "Samoa américaines"
            case "Andorra":
                return "Andorre";
            case "Angola":
                return "Angola"
            case "Anguilla":
                return "Anguilla"
            case "Antarctica":
                return "Antarctique"
            case "Antigua and Barbuda":
                return "Antigua-et-Barbuda"
            case "Argentina":
                return "Argentine"
            case "Armenia":
                return "Arménie"
            case "Aruba":
                return "Aruba"    
            case "Australia":
                return "Australie"
            case "Austria":
                return "Autriche"

            case "Azerbaijan":
                return "Azerbaïdjan";
            case "Bahamas":
                return "Bahamas"
            case "Bahrain":
                return "Bahreïn"
            case "Bangladesh":
                return "Bangladesh"
            case "Barbados":
                return "Barbade"
            case "Belarus":
                return "Biélorussie";
            case "Belgium":
                return "Belgique"
            case "Belize":
                return "Bélize"
            case "Benin":
                return "Bénin"
            case "Bermuda":
                return "Bermudes"
            case "Bhutan":
                return "Bhoutan"
            case "Bolivia (Plurinational State of)":
                return "Bolivie (État plurinational de)"
            case "Bonaire, Sint Eustatius and Saba":
                return "Bonaire, Saint-Eustache et Saba"    
            case "Bosnia and Herzegovina":
                return "Bosnie-Herzégovine"
            case "Botswana":
                return "Botswana"

            case "Bouvet Island":
                return "Île Bouvet";
            case "Brazil":
                return "Brésil"
            case "British Indian Ocean Territory":
                return "Territoire britannique de l'océan Indien"
            case "United States Minor Outlying Islands":
                return "Îles mineures éloignées des États-Unis"
            case "Virgin Islands (British)":
                return "Îles Vierges (britanniques)"
            case "Virgin Islands (U.S.)":
                return "Îles Vierges (États-Unis)";
            case "Brunei Darussalam":
                return "Brunéi Darussalam"
            case "Bulgaria":
                return "Bulgarie"
            case "Burkina Faso":
                return "Burkina Faso"
            case "Burundi":
                return "Burundi"
            case "Cambodia":
                return "Cambodge"
            case "Cameroon":
                return "Cameroun"
            case "Canada":
                return "Canada"    
            case "Cabo Verde":
                return "Cap-Vert"
            case "Cayman Islands":
                return "Îles Caïmans"

            case "Central African Republic":
                return "République centrafricaine";
            case "Chad":
                return "Tchad"
            case "Chile":
                return "Chili"
            case "China":
                return "Chine"
            case "Christmas Island":
                return "Île Christmas"
            case "Cocos (Keeling) Islands":
                return "Îles Cocos (Keeling)";
            case "Colombia":
                return "Colombie"
            case "Comoros":
                return "Comores"
            case "Congo":
                return "Congo"
            case "Congo (Democratic Republic of the)":
                return "Congo (République démocratique du)"
            case "Cook Islands":
                return "Îles Cook"
            case "Costa Rica":
                return "Costa Rica"
            case "Croatia":
                return "Croatie"    
            case "Cuba":
                return "Cuba"
            case "Curaçao":
                return "Curaçao"

            case "Cyprus":
                return "Chypre";
            case "Czech Republic":
                return "République tchèque"
            case "Denmark":
                return "Danemark"
            case "Djibouti":
                return "Djibouti"
            case "Dominica":
                return "Dominique"
            case "Dominican Republic":
                return "République dominicaine";
            case "Ecuador":
                return "Équateur"
            case "Egypt":
                return "Egypte"
            case "El Salvador":
                return "Salvador"
            case "Equatorial Guinea":
                return "Guinée équatoriale"
            case "Eritrea":
                return "Érythrée"
            case "Estonia":
                return "Estonie"
            case "Ethiopia":
                return "Ethiopie"    
            case "Falkland Islands (Malvinas)":
                return "Îles Falkland (Malvinas)"
            case "Faroe Islands":
                return "Îles Féroé"

            case "Fiji":
                return "Fidji";
            case "Finland":
                return "Finlande"
            case "France":
                return "France"
            case "French Guiana":
                return "Guyane française"
            case "French Polynesia":
                return "Polynésie française"
            case "French Southern Territories":
                return "Terres australes françaises";
            case "Gabon":
                return "Gabon"
            case "Gambia":
                return "Gambie"
            case "Georgia":
                return "Géorgie"
            case "Germany":
                return "Allemagne"
            case "Ghana":
                return "Ghana"
            case "Gibraltar":
                return "Gibraltar"
            case "Greece":
                return "Grèce"    
            case "Greenland":
                return "Groenland"
            case "Grenada":
                return "Grenade"

            case "Guadeloupe":
                return "Guadeloupe";
            case "Guam":
                return "Guam"
            case "Guatemala":
                return "Guatemala"
            case "Guernsey":
                return "Guernesey"
            case "Guinea":
                return "Guinée"
            case "Guinea-Bissau":
                return "Guinée-Bissau";
            case "Guyana":
                return "Guyane"
            case "Haiti":
                return "Haiti"
            case "Heard Island and McDonald Islands":
                return "Île Heard et îles McDonald"
            case "Vatican City":
                return "Cité du Vatican"
            case "Honduras":
                return "Honduras"
            case "Hungary":
                return "Hongrie"
            case "Hong Kong":
                return "Hong Kong"    
            case "Iceland":
                return "Islande"
            case "India":
                return "Inde"

            case "Indonesia":
                return "Indonésie";
            case "Ivory Coast":
                return "Côte d'Ivoire"
            case "Iran (Islamic Republic of)":
                return "Iran (République islamique d')"
            case "Iraq":
                return "Irak"
            case "Ireland":
                return "Irlande"
            case "Isle of Man":
                return "Île de Man";
            case "Israel":
                return "Israël"
            case "Italy":
                return "Italie"
            case "Jamaica":
                return "Jamaïque"
            case "Japan":
                return "Japon"
            case "Jersey":
                return "Jersey"
            case "Jordan":
                return "Jordanie"
            case "Kazakhstan":
                return "Kazakhstan"    
            case "Kenya":
                return "Kenya"
            case "Kiribati":
                return "Kiribati"

            case "Kuwait":
                return "Koweit";
            case "Kyrgyzstan":
                return "Kirghizistan"
            case "Lao People's Democratic Republic":
                return "République démocratique populaire lao"
            case "Latvia":
                return "Lettonie"
            case "Lebanon":
                return "Liban"
            case "Lesotho":
                return "Lesotho";
            case "Liberia":
                return "Libéria"
            case "Libya":
                return "Libye"
            case "Liechtenstein":
                return "Liechtenstein"
            case "Lithuania":
                return "Lituanie"
            case "Luxembourg":
                return "Luxembourg"
            case "Macao":
                return "Macao"
            case "North Macedonia":
                return "Macédoine du Nord"    
            case "Madagascar":
                return "Madagascar"
            case "Malawi":
                return "Malawi"

            case "Malaysia":
                return "Malaisie";
            case "Maldives":
                return "Maldives"
            case "Mali":
                return "Mali"
            case "Malta":
                return "Malte"
            case "Marshall Islands":
                return "Îles Marshall"
            case "Martinique":
                return "Martinique";
            case "Mauritania":
                return "Mauritanie"
            case "Mauritius":
                return "Maurice"
            case "Mayotte":
                return "Mayotte"
            case "Mexico":
                return "Mexique"
            case "Micronesia (Federated States of)":
                return "Micronésie (États fédérés de)"
            case "Moldova (Republic of)":
                return "Moldavie (République de)"
            case "Monaco":
                return "Monaco"    
            case "Mongolia":
                return "Mongolie"
            case "Montenegro":
                return "Monténégro"

            case "Montserrat":
                return "Montserrat";
            case "Morocco":
                return "Maroc"
            case "Mozambique":
                return "Mozambique"
            case "Myanmar":
                return "Birmanie"
            case "Namibia":
                return "Namibie"
            case "Nauru":
                return "Nauru";
            case "Nepal":
                return "Népal"
            case "Netherlands":
                return "Pays-Bas"
            case "New Caledonia":
                return "Nouvelle-Calédonie"
            case "New Zealand":
                return "Nouvelle-Zélande"
            case "Nicaragua":
                return "Nicaragua"
            case "Niger":
                return "Niger"
            case "Nigeria":
                return "Nigeria"    
            case "Niue":
                return "Nioué"
            case "Norfolk Island":
                return "Île Norfolk"

            case "Korea (Democratic People's Republic of)":
                return "Corée (République populaire démocratique de)";
            case "Northern Mariana Islands":
                return "Îles Mariannes du Nord"
            case "Norway":
                return "Norvège"
            case "Oman":
                return "Oman"
            case "Pakistan":
                return "Pakistan"
            case "Palau":
                return "Palaos";
            case "Palestine, State of":
                return "Palestine, État de"
            case "Panama":
                return "Panama"
            case "Papua New Guinea":
                return "Papouasie-Nouvelle-Guinée"
            case "Paraguay":
                return "Paraguay"
            case "Peru":
                return "Pérou"
            case "Philippines":
                return "Philippines"
            case "Pitcairn":
                return "Pitcairn"    
            case "Poland":
                return "Pologne"
            case "Portugal":
                return "Portugal"

            case "Puerto Rico":
                return "Porto Rico";
            case "Qatar":
                return "Qatar"
            case "Republic of Kosovo":
                return "République du Kosovo"
            case "Réunion":
                return "Réunion"
            case "Romania":
                return "Roumanie"
            case "Russian Federation":
                return "Fédération de Russie";
            case "Rwanda":
                return "Rwanda"
            case "Saint Barthélemy":
                return "Saint Barthélemy"
            case "Saint Helena, Ascension and Tristan da Cunha":
                return "Sainte-Hélène, Ascension et Tristan da Cunha"
            case "Saint Kitts and Nevis":
                return "Saint-Kitts-et-Nevis"
            case "Saint Lucia":
                return "Sainte-Lucie"
            case "Saint Martin (French part)":
                return "Saint-Martin (partie française)"
            case "Saint Pierre and Miquelon":
                return "Saint-Pierre-et-Miquelon"    
            case "Saint Vincent and the Grenadines":
                return "Saint-Vincent-et-les Grenadines"
            case "Samoa":
                return "Samoa"

            case "San Marino":
                return "Saint-Marin";
            case "Sao Tome and Principe":
                return "Sao Tomé et Principe"
            case "Saudi Arabia":
                return "Arabie Saoudite"
            case "Senegal":
                return "Sénégal"
            case "Serbia":
                return "Serbie"
            case "Seychelles":
                return "Seychelles";
            case "Sierra Leone":
                return "Sierra Leone"
            case "Singapore":
                return "Singapour"
            case "Sint Maarten (Dutch part)":
                return "Sint Maarten (partie néerlandaise)"
            case "Slovakia":
                return "Slovaquie"
            case "Slovenia":
                return "Slovénie"
            case "Solomon Islands":
                return "Îles Salomon"
            case "Somalia":
                return "Somalie"    
            case "South Africa":
                return "Afrique du Sud"
            case "South Georgia and the South Sandwich Islands":
                return "Géorgie du Sud et îles Sandwich du Sud"

            case "Korea (Republic of)":
                return "Corée (République de)";
            case "Spain":
                return "Espagne"
            case "Sri Lanka":
                return "Sri Lanka"
            case "Sudan":
                return "Soudan"
            case "South Sudan":
                return "Soudan du Sud"
            case "Suriname":
                return "Surinam";
            case "Svalbard and Jan Mayen":
                return "Svalbard et Jan Mayen"
            case "Swaziland":
                return "Eswatini"
            case "Sweden":
                return "Suède"
            case "Switzerland":
                return "Suisse"
            case "Syrian Arab Republic":
                return "République arabe syrienne"
            case "Thailand":
                return "Thaïlande"
            case "Tajikistan":
                return "Tadjikistan"    
            case "Tanzania, United Republic of":
                return "Tanzanie, République-Unie de"
            case "Thailand":
                return "Thaïlande"

            case "Timor-Leste":
                return "Timor-Leste";
            case "Togo":
                return "Togo"
            case "Tokelau":
                return "Tokélaou"
            case "Tonga":
                return "Tonga"
            case "Trinidad and Tobago":
                return "Trinité-et-Tobago"
            case "Tunisia":
                return "Tunisie";
            case "Turkey":
                return "Turquie"
            case "Turkmenistan":
                return "Turkménistan"
            case "Turks and Caicos Islands":
                return "Îles Turques et Caïques"
            case "Tuvalu":
                return "Tuvalu"
            case "Taiwan":
                return "Taïwan"
            case "Uganda":
                return "Ouganda"
            case "Ukraine":
                return "Ukraine"
            case "United Arab Emirates":
                return "Émirats arabes unis"    
            case "United Kingdom of Great Britain and Northern Ireland":
                return "Royaume-Uni de Grande-Bretagne et d'Irlande du Nord"
            case "United States of America":
                return "les états-unis d'Amérique"

            case "Uruguay":
                return "Uruguay";
            case "Uzbekistan":
                return "Ouzbékistan"
            case "Vanuatu":
                return "Vanuatu"
            case "Venezuela (Bolivarian Republic of)":
                return "Venezuela (République bolivarienne du)"
            case "Vietnam":
                return "Viêt Nam"
            case "Wallis and Futuna":
                return "Wallis et Futuna";
            case "Western Sahara":
                return "Sahara occidental"
            case "Yemen":
                return "Yémen"
            case "Zambia":
                return "Zambie"
            case "Zimbabwe":
                return "Zimbabwe"

            default:
                return "";
        }
    }
}