import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "@next/font/google";
// import styles from "@/styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved , faEnvelope ,faPhone,faemail, faHome} from "@fortawesome/free-solid-svg-icons";


//const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>N - DATASAVE  </title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
      </Head>
      
        {/* Page Wrapper */}
        <div id="page-wrapper">
          {/* Banner */}
          <section id="banner" data-aos="fade-down" data-aos-duration="1200">
            <div className="inner">
              <div className="logo">
              <FontAwesomeIcon icon={faShieldHalved}  className="icon"/>
              </div>
              <h2>N - DATASAVE</h2>
              <p>
                Ne laissez plus vos problèmes informatiques vous gâcher la vie,
                <br /> confiez-les à notre équipe de professionnels et retrouvez
                votre ordinateur en bon état en un rien de temps !
              </p>
            </div>
            <div className="inner">
              <p className="contac">
                Tel : 0689904790 <br />
                Horaires d&apos;ouverture : 7j/7 de 9h-23h
              </p>
            </div>
          </section>
          {/* Wrapper */}
          <section id="wrapper">
            {/* One */}
            <section id="one" className="wrapper spotlight style1">
              <div className="inner">
                <a href="#" className="image">
                  <img data-aos="zoom-in" data-aos-duration="1000"
                    src="images/réparation d&apos;un ordinateur.jpg"
                    alt="Réparation et dépannage Informatique"
                  />
                </a>
                <div className="content">
                  <h2 className="major">
                    Réparation et dépannage Informatique
                  </h2>
                  <br />
                  Notre entreprise de réparation et dépannage informatique vous
                  propose des services de qualité pour résoudre tous vos soucis
                  informatiques. Que ce soit pour votre ordinateur de bureau ou
                  votre ordinateur portable (MacBook air &amp; Pro, iMac...),
                  nous avons le savoir-faire et les compétences pour régler tous
                  les problèmes.
                  <p />
                  {/* <a href="#" class="special">Learn more</a> */}
                </div>
              </div>
            </section>
            {/* Two */}
            <section id="two" className="wrapper alt spotlight style2">
              <div className="inner">
                <a href="#" className="image">
                  <img data-aos="zoom-in" data-aos-duration="1000"
                    src="images/prix économiques.jpg"
                    alt="Tarifs imbattables"
                  />
                </a>
                <div className="content">
                  <h2 className="major">Tarifs imbattables</h2>
                  <br />
                  Nous travaillons avec diligence pour garantir un service
                  rapide et efficace. Nous utilisons les dernières technologies
                  pour diagnostiquer les problèmes et les résoudre en un rien de
                  temps.
                  <br /> De plus, nous proposons des tarifs imbattables pour que
                  vous puissiez réparer votre ordinateur.
                  <p />
                  {/* <a href="#" class="special">Learn more</a> */}
                </div>
              </div>
            </section>
            {/* Three */}
            <section id="three" className="wrapper spotlight style3">
              <div className="inner">
                <a href="#" className="image">
                  <img data-aos="zoom-in" data-aos-duration="1000"
                    src="images/assistance à distance.jpg"
                    alt="Assistance à distance"
                  />
                </a>
                <div className="content">
                  <h2 className="major">Assistance à distance</h2>
                  <br />
                  En plus de nos services de réparation sur place, nous offrons
                  également une assistance à distance pour les problèmes
                  informatiques les plus courants. Grâce à notre service
                  d&apos;assistance à distance, vous pouvez obtenir une aide rapide
                  et efficace sans même avoir à quitter votre domicile. Nous
                  résolvons les problèmes informatiques directement sur votre
                  ordinateur, en temps réel.
                  <p />
                  {/* <a href="#" class="special">Learn more</a> */}
                </div>
              </div>
            </section>
            {/* four */}
            <section id="two" className="wrapper alt spotlight style2">
              <div className="inner">
                <a href="#" className="image">
                  <img data-aos="zoom-in" data-aos-duration="1000"
                    src="images/disque dur ouvert.jpg"
                    alt="Récupération des Données"
                  />
                </a>
                <div className="content">
                  <h2 className="major">Récupération des Données</h2>
                  <p>
                    Nous offrons également un service de récupération de données
                    fiable et efficace. Nous comprenons à quel point vos données
                    peuvent être précieuses et nous mettons tout en œuvre pour
                    vous aider à les récupérer. Nous déployons les dernières
                    technologies pour tenter de récupérer vos données perdues,
                    qu&apos;il s&apos;agisse de photos, de documents, de musique ou de
                    tout autre type de fichiers. Nous travaillons sur tous les
                    types de supports de stockage, tels que les disques durs,
                    les clés USB, les cartes mémoire, etc.
                  </p>
                  {/* <a href="#" class="special">Learn more</a> */}
                </div>
              </div>
            </section>
            {/* five */}
            <section id="three" className="wrapper spotlight style3">
              <div className="inner">
                <a href="#" className="image">
                  <img data-aos="zoom-in" data-aos-duration="1000"
                    src="images/achat et vente par internet.jpg"
                    alt="achat et vente de matériels informatique"
                  />
                </a>
                <div className="content">
                  <h2 className="major">
                    achat et vente de matériels informatique
                  </h2>
                  <p>
                    Nous offrons également des options d&apos;achat et de vente de
                    matériel informatique de haute qualité. Nous proposons une
                    large gamme d&apos;ordinateurs, de périphériques de stockage
                    (SSD-HDD), de composants et d&apos;autres produits informatiques
                    pour répondre à tous vos besoins au meilleur prix.
                  </p>
                  {/* <a href="#" class="special">Learn more</a> */}
                </div>
              </div>
            </section>
            {/* six */}
            <section id="two" className="wrapper alt spotlight style2">
              <div className="inner">
                <a href="#" className="image">
                  <img data-aos="zoom-in" data-aos-duration="1000"
                    src="images/création de sites web.jpg"
                    alt="création de sites web"
                  />
                </a>
                <div className="content">
                  <h2 className="major">création de sites web</h2>
                  <p>
                    Nous comprenons à quel point il est important d&apos;avoir un
                    site web professionnel et fonctionnel pour votre entreprise
                    ou votre organisation.Nous travaillerons avec vous pour
                    comprendre vos objectifs et créer un site web qui vous
                    reflète. Nous vous proposons des designs uniques, des
                    fonctionnalités personnalisées et une expérience utilisateur
                    optimale pour vous aider à atteindre vos objectifs en ligne
                    avec une assistance personnalisée et un classement optimale
                    sur les moteurs de recherche.
                  </p>
                  {/* <a href="#" class="special">Learn more</a> */}
                </div>
              </div>
            </section>
            {/* seven */}
            <section id="three" className="wrapper spotlight style3">
              <div className="inner">
                <a href="#" className="image">
                  <img data-aos="zoom-in" data-aos-duration="1000"
                    src="images/installation de logiciels.jpg"
                    alt="Installation de logiciels spécifiques"
                  />
                </a>
                <div className="content">
                  <h2 className="major">
                    Installation de logiciels spécifiques
                  </h2>
                  <p>
                    Nous savons à quel point il peut être difficile de trouver
                    le bon logiciel pour répondre à vos besoins, et nous sommes
                    là pour vous aider. Nous installons une large gamme de
                    logiciels, notamment des systèmes d&apos;exploitation, des suites
                    de productivité, des logiciels de gestion de la sécurité et
                    de nombreux autres. Nous pouvons également vous aider à
                    trouver le bon logiciel pour répondre à vos besoins
                    professionnels ou personnels.
                  </p>
                  {/* <a href="#" class="special">Learn more</a> */}
                </div>
              </div>
            </section>
            {/* eight */}
            <section id="two" className="wrapper alt spotlight style2">
              <div className="inner">
                <a href="#" className="image">
                  <img data-aos="zoom-in" data-aos-duration="1000"
                    src="images/ordinateur rapide.jpg"
                    alt="Amélioration des performances du PC"
                  />
                </a>
                <div className="content">
                  <h2 className="major">Amélioration des performances du PC</h2>
                  <p>
                    Votre ordinateur fonctionne lentement ou a des problèmes de
                    performance, nous sommes là pour vous aider. Nous
                    diagnostiqueons les problèmes de performance de votre
                    ordinateur et les résoudre rapidement et efficacement. Nous
                    pouvons optimiser les paramètres de votre système, effectuer
                    des mises à jour logicielles importantes, et nettoyer les
                    fichiers inutiles pour améliorer les performances de votre
                    ordinateur. Nous pouvons également vous aider à installer de
                    nouveaux composants pour améliorer les performances de votre
                    ordinateur, tels que des mémoires vives supplémentaires, des
                    disques durs plus rapides, et des cartes graphiques plus
                    performantes.
                  </p>
                  {/* <a href="#" class="special">Learn more</a> */}
                </div>
              </div>
            </section>
            {/* nine */}
            <section id="three" className="wrapper spotlight style3">
              <div className="inner">
                <a href="#" className="image">
                  <img data-aos="zoom-in" data-aos-duration="1000"
                    src="images/remplacement de pièces pour ordinateur.jpg"
                    alt="Remplacement et changement de pièces"
                  />
                </a>
                <div className="content">
                  <h2 className="major">
                    Remplacement et changement de pièces
                  </h2>
                  <p>
                    Nous remplaçons rapidement et efficacement les composants
                    défectueux de votre ordinateur, tels que des disques durs,
                    écrans, des mémoires vives, des cartes graphiques, des
                    alimentations, et bien plus encore. Nous utilisons
                    uniquement des pièces de qualité supérieure pour les
                    remplacements, pour vous assurer une performance optimale et
                    une longue durée de vie pour votre ordinateur. Nous testons
                    soigneusement chaque composant avant de le remplacer pour
                    garantir son fonctionnement optimal.
                  </p>
                  {/* <a href="#" class="special">Learn more</a> */}
                </div>
              </div>
            </section>
          </section>
          {/* Footer */}
          <section id="footer">
            <div className="inner">
              <h2 className="major">Contactez Nous</h2>
              <p>
                N&apos;hésitez pas à nous contacter pour toute demnde de réparation
                ou de dépannage. Nous sommes à votre disposition pour répondre à
                toutes vos questions et vous fournir le meilleur service
                possible.
              </p>
              <ul className="contact">
                <li className="icon solid fa-home">
                  <FontAwesomeIcon icon={faHome} className="lowicone"/>
                  <b>
                    55 Boulevard des Etats-Unis
                    <br />
                    LYON, 69008
                  </b>
                </li>
                <li className="icon solid fa-phone">
                <FontAwesomeIcon icon={faPhone} className="lowicone"/>
                  <b>0689904790</b>
                </li>
                <li className="icon solid fa-envelope">
                <FontAwesomeIcon icon={faEnvelope} className="lowicone"/>
                  <a href="#">
                    <b>nabil.zerbane@yahoo.com</b>
                  </a>
                </li>
                {/* <li class="icon brands fa-twitter"><a href="#">twitter.com/untitled-tld</a></li>
								<li class="icon brands fa-facebook-f"><a href="#">facebook.com/untitled-tld</a></li>
								<li class="icon brands fa-instagram"><a href="#">instagram.com/untitled-tld</a></li> */}
              </ul>
              <ul className="copyright">
                <li />
              </ul>
            </div>
          </section>
        </div>
    </>
  );
}
