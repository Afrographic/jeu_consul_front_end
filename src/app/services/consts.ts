export class Consts {
  static HOST: string = 'https://yoba-backend.onrender.com';
  static stream_url: string =
    'https://yoba-backend.onrender.com/api/stream_file_secure/token/token/file_id/';
  static affiliate_host: string =
    'https://yoba-front.onrender.com/#/choose_plan_create';
  static video_element: any;
  static video_2:any;
  static front_host = 'https://yoba-front.onrender.com/#';

  // static HOST: string = "http://localhost:3000";
  // static stream_url: string = "http://localhost:3000/api/stream_file_secure/token/token/file_id/";
  // static affiliate_host:string= "http://localhost:4200/#/choose_plan_create"
  // static video_element: any;
  // static front_host = "http://localhost:4200/#";

  static TOTAL_ANNONCES = 0;
  static TOTAL_PARTICULIER = 5; 
  static TOTAL_PROFESSIONNEL = 15;
  static TOTAL_COMMERCIAL = 30;
  static TOTAL_ENTREPRISE = 1000;
  static is_mobile = true;

  static is_top_admin:boolean = false;
  static is_super_admin:boolean = false;

  // Payment APIKEY
  static apikey = '953553910665331f6439221.01405994';
  static site_id = '5872622';
  static price_plan: any;

  static user_affiliate: string = '';

  static lat: number = 0;
  static long: number = 0;

  static months: Month_item[] = [
    {
      id: 0,
      name: 'Tous les mois',
    },
    {
      id: 1,
      name: 'Janvier',
    },
    {
      id: 2,
      name: 'Fevrier',
    },
    {
      id: 3,
      name: 'Mars',
    },
    {
      id: 4,
      name: 'Avril',
    },
    {
      id: 5,
      name: 'Mai',
    },
    {
      id: 6,
      name: 'Juin',
    },
    {
      id: 7,
      name: 'Juillet',
    },
    {
      id: 8,
      name: 'Aout',
    },
    {
      id: 9,
      name: 'Septembre',
    },
    {
      id: 10,
      name: 'Octobre',
    },
    {
      id: 11,
      name: 'Novembre',
    },
    {
      id: 12,
      name: 'Decembre',
    },
  ];


  static type_signals:Type_Signal[]=[
    {
      type:"Annonces Frauduleuses ou Trompeuses",
      desc:"Signaler des annonces qui semblent être des arnaques, contenant des informations fausses ou trompeuses, ou proposant des offres trop belles pour être vraies",
      exemples:"Vente de produits inexistants, fausses offres d'emploi, fausses annonces immobilières, arnaques financières."
    },
    {
      type:"Produit ou Service Interdit",
      desc:"Signaler des annonces proposant des produits ou services qui sont illégaux ou interdits par les règles de la plateforme.",
      exemples:"Vente de drogues, d'armes, de contrefaçons, d'espèces protégées, ou d'autres biens et services illégaux."
    },
    {
      type:"Usurpation d'Identité ou Faux Profil",
      desc:"Signaler des annonces postées par des personnes se faisant passer pour quelqu'un d'autre ou utilisant de fausses informations d'identité.",
      exemples:"Annonces postées avec des noms et photos volés, faux comptes d'entreprises."
    },
    {
      type:"Contenu Offensant ou Inapproprié",
      desc:"Annonces contenant du langage inapproprié, des images offensantes ou tout autre contenu jugé inapproprié pour la plateforme.",
      exemples:"Annonces avec des photos explicites, langage vulgaire ou offensant, propos discriminatoires."
    },
    {
      type:"Spam et Publicité Non Sollicitée",
      desc:"Annonces répétitives, non pertinentes ou spam qui visent uniquement à promouvoir un produit ou service sans intention réelle de vendre un article légitime.",
      exemples:"Annonces identiques postées de manière répétée, liens vers des sites externes de manière excessive."
    },
    {
      type:"Violation de la Propriété Intellectuelle",
      desc:"Signaler des annonces proposant la vente de produits qui violent les droits d'auteur, les marques déposées ou d'autres droits de propriété intellectuelle.",
      exemples:"Vente de contrefaçons de marques connues, utilisation non autorisée de logos ou d'images protégées."
    },
    {
      type:"Fausse Annonce ou Produit Inexistant",
      desc:"Signaler des annonces où le produit ou service décrit n'existe pas réellement ou les descriptions sont délibérément fausses.",
      exemples:"Annonces pour des logements inexistants, descriptions de produits qui ne correspondent pas à la réalité."
    },
    {
      type:"Prix Non Réalistes ou Pratiques Trompeuses",
      desc:"Annonces avec des prix qui semblent être manipulés pour attirer des acheteurs ou des prix trop bas pour être crédibles (souvent signe d'arnaque).",
      exemples:"Vente de produits de luxe à des prix anormalement bas, fausses promotions."
    },
    {
      type:"Vol de Contenu ou Réutilisation Non Autorisée",
      desc:"Signaler des annonces qui utilisent des photos ou des descriptions volées d'autres annonces ou sites sans autorisation.",
      exemples:"Utilisation de photos d'autres vendeurs, textes copiés d'autres annonces."
    },
    {
      type:"Mauvaise Catégorie",
      desc:"Annonces postées dans une mauvaise catégorie pour tromper les utilisateurs ou attirer une attention indue.",
      exemples:"Annonces de vente de voitures dans une catégorie de vêtements, annonces d'emploi dans la catégorie immobilière."
    },
    {
      type:"Violation des Conditions Générales de la Plateforme",
      desc:"Signaler tout comportement ou annonce qui viole les règles ou conditions d'utilisation spécifiques de la plateforme.",
      exemples:"Annonces incitant à contourner les frais de la plateforme, annonces demandant des transactions en dehors de la plateforme."
    },
    {
      type:"Autre",
      desc:"Veuillez fournir la raison du signalement",
      exemples:""
    },
  ]

}

export interface Month_item {
  id: number;
  name: string;
}

export interface Type_Signal{
  type:string;
  desc:string;
  exemples:string;
}
